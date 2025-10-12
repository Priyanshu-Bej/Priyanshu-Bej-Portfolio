import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
      whileTap={{ scale: 0.92 }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/60 text-neutral-600 shadow-card-light transition duration-300 ease-emphasized-in hover:text-brand-primary dark:border-white/10 dark:bg-surface-elevated/80 dark:text-neutral-200"
    >
      {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
    </motion.button>
  );
};

export default ThemeToggle;
