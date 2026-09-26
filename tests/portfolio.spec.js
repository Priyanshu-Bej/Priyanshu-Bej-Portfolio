import { test, expect } from "@playwright/test";

// The contact endpoint is always intercepted: tests must never send real mail.
test.beforeEach(async ({ page }) => {
  await page.route("https://api.emailjs.com/**", (route) => route.abort());
  await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
  await page.route("https://fonts.gstatic.com/**", (route) => route.abort());
});

const scrollTo = (locator) => locator.evaluate((element) => {
  element.scrollIntoView({ behavior: "instant", block: "center" });
});
const expectAligned = (locator, top = 0) => expect.poll(async () => {
  const box = await locator.boundingBox();
  return Math.abs(box.y - top);
}).toBeLessThan(3);

for (const route of ["/", "/about", "/projects", "/skills", "/contact", "/privacy-policy", "/terms-and-conditions"]) {
  test(`loads ${route} without runtime errors`, async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(route);
    await expect(page.locator("main h1, main h2").first()).toBeVisible();
    await expect(page.locator("footer")).toBeAttached();
    expect(errors).toEqual([]);
  });
}

test("cross-page, repeated and history section navigation", async ({ page }) => {
  await page.goto("/privacy-policy");
  const profile = page.getByRole("navigation", { name: "Primary navigation" }).getByRole("button", { name: "Profile", exact: true });
  await profile.click();
  await expect(page).toHaveURL(/\/#about$/);
  await expectAligned(page.locator("#about"));
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await profile.click();
  await expectAligned(page.locator("#about"));
  await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("button", { name: "Education Log" }).click();
  await expectAligned(page.locator("#education"), 96);
  await page.goBack();
  await expectAligned(page.locator("#about"));
});

test("direct hash links work after lazy loading", async ({ page }) => {
  await page.goto("/#projects");
  await expectAligned(page.locator("#projects"));
  await page.goto("/#missing");
  await expect(page.locator("#hero")).toBeVisible();
});

test("mobile menu navigates and leaves headings below the header", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/contact");
  await page.getByRole("button", { name: "Toggle navigation menu" }).click();
  await page.locator("header").getByRole("button", { name: "Profile", exact: true }).click();
  await expect.poll(() => page.locator("#about").evaluate((section) => {
    const top = section.getBoundingClientRect().top;
    const headerBottom = document.querySelector("header nav").getBoundingClientRect().bottom;
    return top >= headerBottom && top <= headerBottom + 96;
  })).toBe(true);
  await expect(page.getByRole("button", { name: "Toggle navigation menu" })).toHaveAttribute("aria-expanded", "false");
});

test("small screens reveal every project, experience and certificate", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  for (const [selector, count] of [
    ["#projects article", 6],
    ["#experience article", 4],
    ["#certifications button.premium-card", 6],
  ]) {
    const cards = page.locator(selector);
    await expect(cards).toHaveCount(count);
    for (const card of await cards.all()) {
      await scrollTo(card);
      await expect(card).toHaveCSS("opacity", "1");
    }
  }
  const moreProjects = page.getByRole("button", { name: "View all projects" });
  await moreProjects.click();
  await expect(page.locator("#projects article")).toHaveCount(12);
  await scrollTo(page.locator("#projects article").last());
  await expect(page.locator("#projects article").last()).toHaveCSS("opacity", "1");
  await page.getByRole("button", { name: "Show fewer projects" }).click();
  await expect(page.locator("#projects article")).toHaveCount(6);
  await page.getByRole("button", { name: "View all credentials" }).click();
  await expect(page.locator("#certifications button.premium-card")).toHaveCount(10);
  await scrollTo(page.locator("#certifications button.premium-card").last());
  await expect(page.locator("#certifications button.premium-card").last()).toHaveCSS("opacity", "1");
  await page.getByRole("button", { name: "Show fewer", exact: true }).click();
  await expect(page.locator("#certifications button.premium-card")).toHaveCount(6);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

for (const size of [{ width: 1440, height: 900 }, { width: 375, height: 667 }]) {
  test(`project dialog stays accessible at ${size.width}px`, async ({ page }) => {
    await page.setViewportSize(size);
    await page.goto("/projects");
    const trigger = page.getByRole("button", { name: "Read case study" }).first();
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "E Sentry Systems" });
    const close = dialog.getByRole("button", { name: "Close project details" });
    await expect(close).toBeFocused();
    expect(await page.locator("#root").evaluate((root) => root.inert)).toBe(true);
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
    await page.keyboard.press("Shift+Tab");
    await expect(dialog.getByRole("link").last()).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(close).toBeFocused();
    // A real click checks that navigation does not cover the close control.
    await close.click();
    await expect(dialog).toHaveCount(0);
    await expect(trigger).toBeFocused();
    expect(await page.locator("#root").evaluate((root) => root.inert)).toBe(false);
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
    await trigger.click();
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
  });
}

test("certificate dialog traps and restores keyboard focus", async ({ page }) => {
  await page.goto("/about");
  const trigger = page.locator("#certifications button.premium-card").first();
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Claude Platform 101" });
  const close = dialog.getByRole("button", { name: "Close certification details" });
  await expect(close).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("sticky section header tracks the document viewport", async ({ page }) => {
  await page.goto("/");
  const projects = page.locator("#projects");
  await projects.evaluate((element) => {
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY + 650, behavior: "instant" });
  });
  await expectAligned(page.locator("#projects > div > div").first());
});

test("system theme follows changes until the user chooses a preference", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(await page.evaluate(() => localStorage.getItem("pb-theme"))).toBeNull();
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Activate light mode" }).first().click();
  expect(await page.evaluate(() => localStorage.getItem("pb-theme"))).toBe("light");
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("blocked storage does not crash rendering or theme toggling", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() { throw new DOMException("Storage blocked", "SecurityError"); },
    });
  });
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await expect(page.locator("#contact")).toBeAttached();
  await page.getByRole("button", { name: "Activate dark mode" }).first().click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(errors).toEqual([]);
});

test("contact validates input, sends once, and handles success and failure", async ({ page }) => {
  const payloads = [];
  let fail = false;
  await page.route("https://api.emailjs.com/**", async (route) => {
    payloads.push(route.request().postDataJSON());
    await route.fulfill({ status: fail ? 500 : 200, contentType: "text/plain", body: fail ? "Test failure" : "OK" });
  });
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send brief" }).click();
  await expect(page.getByText("Please enter your name.")).toBeVisible();
  expect(payloads).toHaveLength(0);
  await page.getByLabel("Name", { exact: true }).fill("Review Test");
  await page.getByLabel("Email", { exact: true }).fill("invalid");
  await page.getByLabel("What are we building?").fill("A test brief");
  await page.getByRole("button", { name: "Send brief" }).click();
  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
  expect(payloads).toHaveLength(0);
  await page.getByLabel("Email", { exact: true }).fill("review@example.com");
  await page.getByRole("button", { name: "Send brief" }).click();
  await expect(page.locator("#contact-status")).toContainText("Message sent");
  expect(payloads).toHaveLength(1);
  expect(payloads[0].template_params).toEqual({ from_name: "Review Test", from_email: "review@example.com", message: "A test brief" });
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("");
  fail = true;
  await page.getByLabel("Name", { exact: true }).fill("Retry Test");
  await page.getByLabel("Email", { exact: true }).fill("review@example.com");
  await page.getByLabel("What are we building?").fill("Keep this draft");
  await page.getByRole("button", { name: "Send brief" }).click();
  await expect(page.locator("#contact-status")).toContainText("could not send");
  await expect(page.getByLabel("What are we building?")).toHaveValue("Keep this draft");
  await expect(page.getByRole("button", { name: "Send brief" })).toBeEnabled();
});

test("all artwork loads and project links are unique", async ({ page }) => {
  await page.goto("/projects");
  await page.getByRole("button", { name: "View all projects" }).click();
  for (const image of await page.locator("#projects article img").all()) {
    await scrollTo(image);
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
  const abc = page.locator("#projects article").filter({ has: page.getByRole("heading", { name: "ABC Learning", exact: true }) });
  await abc.getByRole("button", { name: "Read case study" }).click();
  await expect(page.getByRole("dialog").getByRole("link", { name: "GitHub" })).toHaveCount(1);
});
