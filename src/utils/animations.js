export const fadeInUp = (delay = 0, distance = 24) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const staggered = (staggerChildren = 0.12, delayChildren = 0.15) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
