/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00CFFF",
          "primary-soft": "#4DE0FF",
          accent: "#FF4D6D",
          "accent-soft": "#FF829A",
          secondary: "#9B51E0",
          "secondary-soft": "#B985F1",
        },
        surface: {
          base: "#0B0D17",
          elevated: "#12192B",
          glass: "rgba(255, 255, 255, 0.08)",
          "glass-strong": "rgba(255, 255, 255, 0.16)",
          "muted-light": "#F5F7FA",
          "muted-dark": "#101728",
        },
        neutral: {
          50: "#F5F7FA",
          100: "#E8ECF5",
          200: "#CBD2E3",
          300: "#AEB7CF",
          400: "#8E9ABB",
          500: "#6F7EA5",
          600: "#55618B",
          700: "#394267",
          800: "#232A47",
          900: "#161B30",
        },
        text: {
          light: "#1A202C",
          dark: "#E5E5E5",
          "dark-muted": "#A0AEC0",
        },
        success: "#34D399",
        warning: "#FACC15",
        info: "#38BDF8",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        "soft-xl": "0 25px 80px -35px rgba(0, 207, 255, 0.35)",
        "card-light":
          "0 18px 45px -20px rgba(11, 13, 23, 0.24), 0 6px 18px -8px rgba(155, 81, 224, 0.22)",
        "card-dark":
          "0 20px 50px -25px rgba(15, 23, 42, 0.55), 0 12px 30px -18px rgba(0, 207, 255, 0.32)",
        glow: "0 0 40px rgba(0, 207, 255, 0.35)",
        "glow-accent": "0 0 42px rgba(255, 77, 109, 0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      spacing: {
        18: "4.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        "emphasized-in": "cubic-bezier(0.4, 0, 0.2, 1)",
        "emphasized-out": "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(circle at 18% 12%, rgba(77, 224, 255, 0.28), transparent 60%), radial-gradient(circle at 82% 5%, rgba(155, 81, 224, 0.25), transparent 58%), radial-gradient(circle at 52% 88%, rgba(255, 77, 109, 0.22), transparent 60%)",
        "hero-dark":
          "radial-gradient(circle at 12% -6%, rgba(77, 224, 255, 0.32), transparent 55%), radial-gradient(circle at 88% 8%, rgba(155, 81, 224, 0.28), transparent 58%), radial-gradient(circle at 50% 100%, rgba(255, 77, 109, 0.24), transparent 62%)",
        "glass-outline":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(0, 207, 255, 0.35), rgba(155, 81, 224, 0.35))",
        "particle-field":
          "radial-gradient(circle, rgba(0, 207, 255, 0.18) 0%, rgba(0, 207, 255, 0) 55%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6, boxShadow: "0 0 0 rgba(0, 174, 239, 0)" },
          "50%": {
            opacity: 1,
            boxShadow: "0 0 28px rgba(0, 174, 239, 0.35)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out both",
        shimmer: "shimmer 2.2s linear infinite",
        "scroll-x": "scroll-x var(--auto-scroll-duration, 30s) linear infinite",
        "pulse-glow": "pulseGlow 3.6s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
