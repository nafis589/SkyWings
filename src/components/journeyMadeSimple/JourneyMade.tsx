"use client";
import React from 'react'
import { motion } from "framer-motion"
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeUpBlur } from '@/utils/scrollAnimationVariants';
import AnimatedCards from '../UI/framerAnime/AnimatedCards';

const JourneyMade: React.FC = () => {
  const [fadeRef, fadeControls] = useScrollAnimation({ threshold: 0.5 });
  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 bg-white min-h-[500px]">
        <motion.div
          ref={fadeRef}
          animate={fadeControls}
          initial="hidden"
          variants={fadeUpBlur}
          className="flex flex-col items-center justify-center mb-8 sm:mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Journey To the Skies Made Simple!</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-[700px] mx-auto leading-relaxed px-4">
            Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
          </p>
        </motion.div>

        <AnimatedCards />
      </div>
    
  )
}

export default JourneyMade