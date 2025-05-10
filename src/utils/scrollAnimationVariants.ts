import { Variants } from 'framer-motion';

// Parallax scroll animation
export const parallaxScroll: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20
    }
  }
};

// Reveal animation with scale
export const revealScale: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15
    }
  }
};

// Fade up with blur
export const fadeUpBlur: Variants = {
  hidden: { 
    y: 30, 
    opacity: 0,
    filter: 'blur(10px)'
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Staggered reveal for lists or grids
export const staggeredReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Container for staggered children
export const staggeredContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// 3D rotation reveal
export const rotate3D: Variants = {
  hidden: { 
    rotateX: 45,
    opacity: 0,
    scale: 0.9
  },
  visible: {
    rotateX: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Smooth background parallax
export const backgroundParallax: Variants = {
  hidden: { scale: 1.2, opacity: 0.8 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut'
    }
  }
};

// Text reveal with character stagger
export const textCharacterReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.03
    }
  }
};