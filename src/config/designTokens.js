export const designTokens = {
  colors: {
    background: {
      light: "#F8FAFC",
      dark: "#0F172A",
      elevatedLight: "rgba(255, 255, 255, 0.65)",
      elevatedDark: "rgba(21, 35, 71, 0.75)",
      glass: "rgba(255, 255, 255, 0.08)",
    },
    text: {
      primaryLight: "#0F172A",
      primaryDark: "#E2E8F0",
      secondaryLight: "#475569",
      secondaryDark: "#94A3B8",
      mutedLight: "#94A3B8",
      mutedDark: "#64748B",
    },
    brand: {
      primary: "#00AEEF",
      primarySoft: "#38C6FF",
      coral: "#FF6B6B",
      coralSoft: "#FF8F8F",
      purple: "#9333EA",
      purpleSoft: "#A855F7",
      highlight: "#5EEAD4",
    },
    support: {
      success: "#34D399",
      warning: "#FACC15",
      danger: "#FB7185",
    },
    border: {
      light: "rgba(148, 163, 184, 0.25)",
      dark: "rgba(255, 255, 255, 0.22)",
    },
    shadow: {
      light: "rgba(15, 23, 42, 0.12)",
      dark: "rgba(15, 23, 42, 0.55)",
    },
  },
  typography: {
    fonts: {
      display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
      mono: ["'JetBrains Mono'", "monospace"],
    },
    sizes: {
      display: "clamp(2.75rem, 5vw, 4.5rem)",
      headline: "clamp(1.8rem, 3vw, 2.75rem)",
      title: "clamp(1.35rem, 2.6vw, 1.85rem)",
      body: "1rem",
      small: "0.875rem",
      micro: "0.75rem",
    },
    lineHeight: {
      relaxed: 1.75,
      snug: 1.2,
      tight: 1.1,
    },
  },
  spacing: {
    sectionY: {
      mobile: "5rem",
      desktop: "7rem",
    },
    gridGap: {
      tight: "1rem",
      relaxed: "1.75rem",
    },
    container: {
      maxWidth: "1120px",
      narrow: "760px",
    },
  },
  radii: {
    soft: "18px",
    medium: "24px",
    large: "32px",
    pill: "9999px",
  },
  shadows: {
    floatingLight:
      "0 25px 60px -30px rgba(15, 23, 42, 0.25), 0 15px 30px -20px rgba(14, 116, 144, 0.25)",
    floatingDark:
      "0 25px 50px -32px rgba(148, 163, 184, 0.45), 0 18px 35px -20px rgba(15, 23, 42, 0.5)",
    inset:
      "inset 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 4px rgba(15, 23, 42, 0.18)",
  },
  transitions: {
    emphasized: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    subtle: "cubic-bezier(0.33, 1, 0.68, 1)",
    quick: "cubic-bezier(0.3, 0.9, 0.4, 1.4)",
  },
};

export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
