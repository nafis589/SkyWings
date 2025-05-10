'use client';

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  return (
    <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-0">
        <div className="mobile-only hidden">
          {/* Left Content */}
          <motion.div 
            className="flex-1 p-6 sm:p-8 lg:p-16 flex flex-col justify-center text-center sm:text-left order-2 sm:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
              <motion.div className="relative" variants={itemVariants}>
                <motion.div 
                  className="absolute -left-2 -top-2 w-10 sm:w-12 h-10 sm:h-12 bg-sky-100 rounded-full opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 relative z-10 tracking-wider font-medium">ELEVATE YOUR TRAVEL JOURNEY</p>
              </motion.div>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-8 leading-tight w-full sm:w-[500px] mx-auto sm:mx-0"
                variants={itemVariants}
              >
                Experience the <motion.span 
                  className="text-sky-500"
                  animate={{ 
                    textShadow: ["0 0 0px rgba(14, 165, 233, 0)", "0 0 20px rgba(14, 165, 233, 0.5)", "0 0 0px rgba(14, 165, 233, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >magic</motion.span> of flight!
              </motion.h2>
              
              <motion.div 
                className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4"
                variants={itemVariants}
              >
                <motion.button 
                  className="bg-sky-400 hover:bg-sky-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a trip now
                </motion.button>
                <motion.button 
                  className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image 
                    src="/play.svg" 
                    alt="Play" 
                    width={24} 
                    height={24} 
                    className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
        </div>
        <div className="hero-mobile relative w-full rounded-[50px] overflow-hidden bg-sky-50">
          {/* Background Image */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image 
              src="/cloud.jpg" 
              alt="Background Pattern" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="relative z-10 flex flex-col-reverse sm:flex-row min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Left Content */}
            <motion.div 
              className="only-mobile flex-1 p-6 sm:p-8 lg:p-16 flex flex-col justify-center text-center sm:text-left order-2 sm:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="relative" variants={itemVariants}>
                <motion.div 
                  className="absolute -left-2 -top-2 w-10 sm:w-12 h-10 sm:h-12 bg-sky-100 rounded-full opacity-50"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 relative z-10 tracking-wider font-medium">ELEVATE YOUR TRAVEL JOURNEY</p>
              </motion.div>
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-8 leading-tight w-full sm:w-[500px] mx-auto sm:mx-0"
                variants={itemVariants}
              >
                Experience the <motion.span 
                  className="text-sky-500"
                  animate={{ 
                    textShadow: ["0 0 0px rgba(14, 165, 233, 0)", "0 0 20px rgba(14, 165, 233, 0.5)", "0 0 0px rgba(14, 165, 233, 0)"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >magic</motion.span> of flight!
              </motion.h2>
              
              <motion.div 
                className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4"
                variants={itemVariants}
              >
                <motion.button 
                  className="bg-sky-400 hover:bg-sky-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a trip now
                </motion.button>
                <motion.button 
                  className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image 
                    src="/play.svg" 
                    alt="Play" 
                    width={24} 
                    height={24} 
                    className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6"
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Staircase Shape */}
            <div className="flex-1 relative mt-8 md:mt-0 order-1 sm:order-2">
              {/* Airplane Image */}
              <motion.div 
                className="airmobile relative sm:absolute left-1/2 sm:left-auto sm:-right-8 lg:-right-16 top-0 sm:top-1/2 transform -translate-x-1/2 sm:-translate-x-0 sm:-translate-y-1/2 z-10 w-4/5 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[850px] mx-auto"
                animate={{ 
                  y: [0, -20, 0],
                  
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image 
                  src="/removemax.png" 
                  alt="Airplane" 
                  width={3620} 
                  height={2758} 
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 650px"
                />
              </motion.div>
              
              <motion.div 
                className="hidden sm:block absolute bottom-0 right-0 w-[400px] h-1/3 rounded-tl-3xl p-4 sm:p-6 flex flex-col justify-between z-50"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-tl-3xl w-[480px]">
                  <Image 
                    src="/Untitled.svg" 
                    alt="Background Pattern" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-2 md:gap">
                  <div className="text-center sm:text-left sm:flex-1 sm:ml-2 md:ml-4">
                    <motion.h3 
                      className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1 pl-[160px] mt-13"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      Awesome place
                    </motion.h3>
                    
                    <div className="flex flex-row">
                      {/* Three consecutive divs for future images */}
                      <motion.div 
                        className="flex mt-8 ml-9 space-x-2 justify-center sm:justify-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        {[1, 2, 3].map((index) => (
                          <motion.div
                            key={index}
                            className="w-10 h-10 z-10 -mr-3 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Image 
                              src={`/destinations/destination${index}.svg`}
                              alt={`Destination ${index}`}
                              width={48} 
                              height={48}
                              className="w-full h-full object-cover rounded-full" 
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    
                      <motion.button 
                        className="bg-gray-200 h-10 mt-7 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl flex items-center gap-1 text-xs font-medium hover:text-sky-500 text-sky-500 transition-colors group mx-auto"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Know more
                        <motion.span 
                          className="group-hover:translate-x-1 transition-transform"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Image 
                            src="/arrow.svg" 
                            alt="Arrow" 
                            width={12} 
                            height={12} 
                            className="text-current w-2.5 h-2.5" 
                          />
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero