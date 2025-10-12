import { useMemo } from "react";
import { motion } from "framer-motion";

const generateParticleConfig = (count) =>
  Array.from({ length: count }).map((_, index) => ({
    key: `particle-${index}`,
    size: Math.floor(Math.random() * 45) + 25,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 12 + 8,
  }));

const FloatingParticles = ({ count = 14, className = "" }) => {
  const particles = useMemo(() => generateParticleConfig(count), [count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map(({ key, size, top, left, delay, duration }) => (
        <motion.span
          key={key}
          className="absolute rounded-full bg-brand-primary/10 blur-[45px] dark:bg-brand-primary/20"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{
            opacity: [0, 0.65, 0],
            scale: [0.9, 1.1, 0.95],
            y: [40, -20, 40],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration,
            delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
