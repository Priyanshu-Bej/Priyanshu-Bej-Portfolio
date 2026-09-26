const getLinkLabel = (href, fallback = "Open project") => {
  const normalized = href.toLowerCase();
  if (normalized.includes("play.google.com")) return "Play Store";
  if (normalized.includes("apps.apple.com")) return "App Store";
  if (normalized.includes("github.com")) return "GitHub";
  return fallback;
};

export const getProjectLinks = ({ links = {}, storeLinks = [] }) => {
  const candidates = storeLinks.length
    ? storeLinks
    : [
        { href: links.live, label: "Open project" },
        { href: links.repo, label: "View source" },
      ];
  const seen = new Set();
  return candidates.filter(({ href }) => {
    if (!href || seen.has(href)) return false;
    seen.add(href);
    return true;
  }).map(({ href, label }) => ({ href, label: getLinkLabel(href, label) }));
};
