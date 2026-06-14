import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent">
      <motion.div
        className="h-full origin-left bg-brand-primary dark:bg-brand-secondary"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
