import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-1.5">
      <motion.div
        className="h-full origin-left rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary-soft to-brand-accent shadow-glow"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
