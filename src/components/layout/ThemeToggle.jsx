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
      whileTap={{ scale: 0.94 }}
      className="icon-button"
    >
      {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
    </motion.button>
  );
};

export default ThemeToggle;
