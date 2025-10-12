export const smoothScrollTo = (hash) => {
  if (!hash) return;
  const id = hash.replace("#", "");
  const element = document.getElementById(id);
  if (!element) return;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
};
