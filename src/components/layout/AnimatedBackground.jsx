import { memo, useMemo } from "react";
import { motion } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";

const orbConfigs = [
  {
    size: 520,
    style: { top: "6%", left: "12%" },
    colors: ["rgba(0, 207, 255, 0.45)", "rgba(147, 51, 234, 0.18)"],
    duration: 28,
    delay: 0,
    translate: { x: [0, 40, -30, 15, 0], y: [0, -35, 15, -20, 0] },
  },
  {
    size: 420,
    style: { top: "68%", left: "8%" },
    colors: ["rgba(59, 130, 246, 0.32)", "rgba(236, 72, 153, 0.18)"],
    duration: 32,
    delay: 3,
    translate: { x: [0, -25, 18, -32, 0], y: [0, 20, -28, 12, 0] },
  },
  {
    size: 480,
    style: { top: "24%", right: "6%" },
    colors: ["rgba(236, 72, 153, 0.32)", "rgba(14, 165, 233, 0.24)"],
    duration: 30,
    delay: 1.2,
    translate: { x: [0, -28, 22, -16, 0], y: [0, 18, -26, 14, 0] },
  },
  {
    size: 360,
    style: { bottom: "4%", right: "18%" },
    colors: ["rgba(99, 102, 241, 0.38)", "rgba(255, 77, 109, 0.22)"],
    duration: 36,
    delay: 2.4,
    translate: { x: [0, 24, -22, 18, 0], y: [0, -24, 30, -14, 0] },
  },
];

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  const baseGradient = useMemo(
    () =>
      isDark
        ? "radial-gradient(circle at 10% 20%, rgba(0, 207, 255, 0.16), transparent 45%), radial-gradient(circle at 90% 18%, rgba(147, 51, 234, 0.14), transparent 48%), radial-gradient(circle at 50% 100%, rgba(255, 77, 109, 0.14), transparent 60%)"
        : "radial-gradient(circle at 12% 18%, rgba(0, 174, 239, 0.28), transparent 58%), radial-gradient(circle at 86% 12%, rgba(147, 51, 234, 0.12), transparent 52%), radial-gradient(circle at 50% 96%, rgba(255, 77, 109, 0.12), transparent 65%)",
    [isDark]
  );

  const overlayGradient = useMemo(
    () =>
      isDark
        ? "radial-gradient(circle at center, rgba(148, 163, 184, 0.12) 0%, rgba(15, 23, 42, 0.35) 38%, rgba(2, 6, 23, 1) 100%)"
        : "radial-gradient(circle at center, rgba(226, 232, 240, 0.22) 0%, rgba(255, 255, 255, 0.6) 40%, rgba(250, 250, 255, 1) 100%)",
    [isDark]
  );

  const gridColor = isDark ? "rgba(148,163,184,0.08)" : "rgba(148,163,184,0.12)";

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: baseGradient }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "140px 140px",
          backgroundImage: `radial-gradient(${gridColor} 1px, transparent 1px)`,
          opacity: isDark ? 0.42 : 0.65,
        }}
      />

      {orbConfigs.map(({ size, style, colors, duration, delay, translate }) => (
        <motion.span
          key={`${style.top ?? style.bottom}-${style.left ?? style.right}`}
          className="absolute rounded-full blur-[120px]"
          style={{
            width: size,
            height: size,
            ...style,
            background: `radial-gradient(circle at top, ${colors[0]}, transparent 65%), radial-gradient(circle at bottom, ${colors[1]}, transparent 60%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0.7], x: translate.x, y: translate.y }}
          transition={{
            duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        style={{ background: overlayGradient }}
        initial={{ opacity: isDark ? 0.35 : 0.45 }}
        animate={{
          opacity: isDark ? [0.35, 0.45, 0.4] : [0.45, 0.55, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="absolute inset-0 opacity-[0.12]" style={{ mixBlendMode: "screen" }}>
        <div className="absolute left-[12%] top-[28%] h-1.5 w-28 rounded-full bg-white/70 blur-xl" />
        <div className="absolute right-[18%] top-[14%] h-1.5 w-24 rounded-full bg-white/40 blur-xl" />
        <div className="absolute left-[32%] bottom-[18%] h-1.5 w-24 rounded-full bg-white/60 blur-xl" />
      </div>
    </div>
  );
};

export default memo(AnimatedBackground);
