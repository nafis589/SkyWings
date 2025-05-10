/**
 * Animation variants for Framer Motion
 * Reusable animation configurations for consistent animations across components
 */

// Fade in animation (basic)
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade in animation with staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Slide up animation
export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Scale animation
export const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Rotate and scale animation
export const rotateIn = {
  hidden: { rotate: -10, scale: 0.9, opacity: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Bounce animation
export const bounce = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

// Pulse animation
export const pulse = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity
    }
  }
};

// Staggered item animation
export const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Card hover animation
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Text reveal animation
export const textReveal = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};