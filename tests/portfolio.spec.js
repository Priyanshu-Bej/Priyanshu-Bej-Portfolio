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

for (const route of ["/", "/projects"]) {
  for (const size of [{ width: 1440, height: 900 }, { width: 1024, height: 768 }]) {
    test(`case studies scroll clear of the heading on ${route} at ${size.width}px`, async ({ page }) => {
      await page.setViewportSize(size);
      await page.goto(route);
      const projects = page.locator("#projects");
      const intro = projects.locator(":scope > div > div").first();
      await expect(projects.locator("article")).toHaveCount(6);

      for (const card of await projects.locator("article").all()) {
        // Read the top of each card at a normal viewport position. Visibility
        // alone does not catch an opaque sticky heading covering the content.
        await card.evaluate((element) => {
          window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 24, behavior: "instant" });
        });
        await expect(card).toHaveCSS("opacity", "1");
        await expect.poll(() => intro.evaluate((element) => element.getBoundingClientRect().bottom)).toBeLessThanOrEqual(25);
        const title = card.getByRole("heading");
        await expect(title).toBeInViewport();
        await expect.poll(() => title.evaluate((element) => {
          const box = element.getBoundingClientRect();
          return element.contains(document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2));
        })).toBe(true);
        await card.getByRole("button", { name: "Read case study" }).click({ trial: true });
      }
    });
  }
}

for (const size of [
  { width: 1440, height: 900 },
  { width: 1024, height: 600 },
  { width: 375, height: 667 },
  { width: 320, height: 568 },
]) {
  test(`every section remains readable while scrolling at ${size.width}px`, async ({ page }) => {
    await page.setViewportSize(size);
    await page.goto("/");
    await expect(page.locator("#contact-title")).toBeAttached();
    const headings = page.locator("main section h1, main section h2, #experience article h3, #education article h3, #skills article h3");
    for (const heading of await headings.all()) {
      await scrollTo(heading);
      await expect(heading).toBeInViewport();
      await expect.poll(() => heading.evaluate((element) => {
        const box = element.getBoundingClientRect();
        let opacity = 1;
        for (let parent = element; parent; parent = parent.parentElement) {
          opacity *= Number(getComputedStyle(parent).opacity);
        }
        return opacity > 0.99 && element.contains(document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2));
      })).toBe(true);
    }
    await page.getByRole("button", { name: "Send brief" }).click({ trial: true });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

for (const route of ["/", "/about"]) {
  for (const size of [{ width: 1440, height: 900 }, { width: 1024, height: 600 }]) {
    test(`certificates scroll clear of their heading on ${route} at ${size.width}px`, async ({ page }) => {
      await page.setViewportSize(size);
      await page.goto(route);
      const certificates = page.locator("#certifications");
      await certificates.getByRole("button", { name: "View all credentials" }).click();
      const cards = certificates.locator("button.premium-card");
      await expect(cards).toHaveCount(10);
      for (const card of await cards.all()) {
        await card.evaluate((element) => {
          window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 24, behavior: "instant" });
        });
        await expect(card).toHaveCSS("opacity", "1");
        // Test the preview near the top, where the old pinned intro covered it.
        await expect.poll(() => card.evaluate((element) => {
          const box = element.getBoundingClientRect();
          return element.contains(document.elementFromPoint(box.x + box.width / 2, box.y + 48));
        })).toBe(true);
        await card.click();
        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();
        await dialog.getByRole("button", { name: "Close certification details" }).click();
        await expect(dialog).toHaveCount(0);
      }
      await certificates.getByRole("button", { name: "Show fewer", exact: true }).click();
      await expect(cards).toHaveCount(6);
    });
  }
}

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
