import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";

const defaultOffset = ["start end", "end start"];

const useParallax = (from, to, offset = defaultOffset) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [from, to],
  );

  return { ref, y };
};

export default useParallax;
