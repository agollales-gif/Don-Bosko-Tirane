import { LazyMotion, domMax, m, Easing } from 'framer-motion';

// Optimized motion features to reduce bundle size
const motionFeatures = domMax;

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

// Stagger animation for lists
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Optimized motion wrapper component
export const OptimizedMotion: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LazyMotion features={motionFeatures}>
    {children}
  </LazyMotion>
);

// Export optimized motion components
export { m as motion };

// Reusable animation hooks with proper TypeScript types
export const useScrollAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { 
    delay, 
    duration: 0.6, 
    ease: "easeOut" as Easing 
  }
});

export const useStaggeredAnimation = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { 
    delay: index * 0.1, 
    duration: 0.6, 
    ease: "easeOut" as Easing 
  }
});
