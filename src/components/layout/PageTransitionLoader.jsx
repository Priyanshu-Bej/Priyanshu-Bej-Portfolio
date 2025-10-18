import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageTransitionLoader = ({ minimumDuration = 450 }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timeout = setTimeout(() => setIsActive(false), minimumDuration);

    return () => clearTimeout(timeout);
  }, [location.key, minimumDuration]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[75] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-slate-900/50 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          />
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/10 shadow-glow backdrop-blur-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: [0.9, 1.05, 1],
              opacity: 1,
              rotate: [0, 6, -6, 0],
            }}
            exit={{ scale: 0.82, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              rotate: {
                duration: 1.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <motion.span
              className="block h-9 w-9 rounded-[1.35rem] bg-gradient-to-tr from-brand-primary via-brand-secondary-soft to-brand-accent blur-[1px]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionLoader;
