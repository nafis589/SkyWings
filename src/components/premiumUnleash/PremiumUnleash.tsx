"use client";
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { rotate3D } from '@/utils/scrollAnimationVariants';
import HeroAnimatedText from '../UI/framerAnime/HeroAnimatedText';

const PremiumUnleash: React.FC = () => {
  const [rotateRef, rotateControls] = useScrollAnimation();
  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 bg-white">


        <div className="max-w-7xl mx-auto">
          <div className="tab flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 pl-0 sm:pl-6 md:pl-12 lg:pl-18">
            {/* Left Side - Image and Promo */}
            <motion.div 
              ref={rotateRef}
              animate={rotateControls}
              initial="hidden"
              variants={rotate3D}
              className="flex relative w-full md:w-auto"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl h-[400px] sm:h-[400px] md:h-[400px] lg:h-[500px] w-full sm:w-[300px] md:w-[350px] max-w-[280px] sm:max-w-none mx-auto md:mx-0">
                <Image
                  src="/bg-w.jpg"
                  alt="Premium Travel Experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Promo Badge */}
          <div className="hidden items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-5 sm:ml-0 md:ml-20 cm">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-sky-500">20% OFF</div>
              <div className="text-xs sm:text-sm font-medium text-black/80">
                    Till 28 April, <br /> 2025
              </div>
          </div>
            
            {/* Right Side - Text Content */}
            <HeroAnimatedText />
          </div>
        </div>
        
        <div className="tab flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-25 mt-8 sm:mt-4">
          {/* Promo Badge */}
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-5 sm:ml-0 md:ml-20 iv">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-sky-500">20% OFF</div>
              <div className="text-xs sm:text-sm font-medium text-black/80">
                    Till 28 April, <br /> 2025
              </div>
          </div>

          {/* CTA Button */}
          <div className="mt-2 sm:mt-4 w-full sm:w-auto">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer">
              <div className="relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex items-center z-10 transition-colors duration-300 w-full sm:w-[400px] md:w-[600px] lg:w-[800px] justify-center gap-2 sm:gap-4">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black">Book a flight now</span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <Image 
                    src="/arrow.svg" 
                    alt="Arrow" 
                    width={12} 
                    height={12}
                    className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" 
                  />
                </div>
              </div>
              <div className="absolute inset-0 opacity-80 z-0">
                <Image
                  src="/cloud.jpg"
                  alt="Background Pattern"
                  fill
                  className="object-cover opacity-20 mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Version mobile bouton supplémentaire */}
        <div className="iv flex justify-center mt-6 sm:hidden">
          <button className="bg-sky-100 text-sky-600 px-5 py-2 rounded-full text-xs font-medium">
            Explorer toutes nos destinations
          </button>
        </div>
      </div>
  )
}

export default PremiumUnleash