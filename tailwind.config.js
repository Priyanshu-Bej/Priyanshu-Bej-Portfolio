/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          "primary-soft": "#DBEAFE",
          secondary: "#14B8A6",
          "secondary-soft": "#CCFBF1",
          accent: "#F97316",
          "accent-soft": "#FFEDD5",
        },
        canvas: {
          light: "#F8F8F4",
          dark: "#080A0D",
        },
        surface: {
          base: "#F8F8F4",
          elevated: "#FFFFFF",
          muted: "#EFEFE8",
          dark: "#111418",
          "dark-elevated": "#171B20",
          "dark-muted": "#20252B",
        },
        ink: {
          strong: "#111111",
          base: "#262626",
          muted: "#666A73",
          faint: "#9A9A91",
          inverse: "#F6F5F0",
        },
        line: {
          light: "#E2E2DC",
          dark: "#2A2F36",
        },
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        subtle: "0 18px 45px -36px rgba(17, 17, 17, 0.38)",
        lift: "0 24px 70px -45px rgba(17, 17, 17, 0.45)",
        "dark-subtle": "0 22px 70px -42px rgba(0, 0, 0, 0.85)",
      },
      borderRadius: {
        card: "0.5rem",
      },
      spacing: {
        18: "4.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.5rem",
          lg: "2.5rem",
        },
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
