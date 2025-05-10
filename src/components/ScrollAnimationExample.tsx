import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  parallaxScroll,
  revealScale,
  fadeUpBlur,
  staggeredContainer,
  staggeredReveal,
  rotate3D,
  backgroundParallax,
} from '../utils/scrollAnimationVariants';

const ScrollAnimationExample: React.FC = () => {
  const [parallaxRef, parallaxControls] = useScrollAnimation();
  const [revealRef, revealControls] = useScrollAnimation({ triggerOnce: true });
  const [fadeRef, fadeControls] = useScrollAnimation({ threshold: 0.5 });
  const [staggerRef, staggerControls] = useScrollAnimation();
  const [rotateRef, rotateControls] = useScrollAnimation();
  const [bgRef, bgControls] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen py-20 space-y-32">
      {/* Parallax Section */}
      <motion.div
        ref={parallaxRef}
        animate={parallaxControls}
        initial="hidden"
        variants={parallaxScroll}
        className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl"
      >
        <h2 className="text-3xl font-bold text-white">Parallax Scroll</h2>
        <p className="mt-4 text-white/90">Smooth parallax scrolling effect</p>
      </motion.div>

      {/* Scale Reveal Section */}
      <motion.div
        ref={revealRef}
        animate={revealControls}
        initial="hidden"
        variants={revealScale}
        className="p-8 bg-white rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold">Scale Reveal</h2>
        <p className="mt-4 text-gray-600">Elements scale up as they enter the viewport</p>
      </motion.div>

      {/* Blur Fade Section */}
      <motion.div
        ref={fadeRef}
        animate={fadeControls}
        initial="hidden"
        variants={fadeUpBlur}
        className="p-8 bg-gray-900 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold text-white">Blur Fade</h2>
        <p className="mt-4 text-gray-300">Smooth fade up with blur effect</p>
      </motion.div>

      {/* Staggered List */}
      <motion.div
        ref={staggerRef}
        animate={staggerControls}
        initial="hidden"
        variants={staggeredContainer}
        className="p-8 bg-white rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6">Staggered List</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={staggeredReveal}
              className="p-4 bg-gray-100 rounded"
            >
              List Item {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3D Rotation */}
      <motion.div
        ref={rotateRef}
        animate={rotateControls}
        initial="hidden"
        variants={rotate3D}
        className="p-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold text-white">3D Rotation</h2>
        <p className="mt-4 text-white/90">Smooth 3D rotation reveal</p>
      </motion.div>

      {/* Background Parallax */}
      <motion.div
        ref={bgRef}
        animate={bgControls}
        initial="hidden"
        variants={backgroundParallax}
        className="relative h-96 overflow-hidden rounded-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-90" />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <h2 className="text-4xl font-bold">Background Parallax</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimationExample;