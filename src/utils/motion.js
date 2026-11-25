export const spring = { type: "spring", stiffness: 350, damping: 25 };
export const softSpring = { type: "spring", stiffness: 180, damping: 26 };
export const elastic = { type: "spring", stiffness: 520, damping: 16 };

export const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: spring },
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: elastic },
};

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});