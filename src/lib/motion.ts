// Check for reduced motion preference
const getReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimized animation variants for performance
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: getReducedMotion() ? 0 : 20 },
  visible: { opacity: 1, y: 0 }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: getReducedMotion() ? 1 : 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Viewport animation settings for better mobile performance
export const viewportSettings = {
  once: true,
  margin: "-50px",
  amount: 0.3
};

// Transition settings
export const fastTransition = { duration: getReducedMotion() ? 0.01 : 0.4 };
export const normalTransition = { duration: getReducedMotion() ? 0.01 : 0.6 };
export const slowTransition = { duration: getReducedMotion() ? 0.01 : 0.8 };
