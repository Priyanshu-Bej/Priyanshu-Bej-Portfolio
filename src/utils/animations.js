export const fadeInUp = (delay = 0, distance = 24) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const fadeIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
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
