"use client";
import React from 'react'
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Label + Intro Text */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[210px] mb-6 sm:mb-8 md:mb-12 pl-0 sm:pl-4 md:pl-20 text-center md:text-left">
          <div className="bg-sky-100 text-sky-600 p-3 sm:p-4 md:p-5 lg:p-6 rounded-full text-base sm:text-lg md:text-xl font-medium inline-block text-center mb-4 md:mb-0">
            About Us
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="w-full md:max-w-[60%]"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
              At Skywings, we&apos;re passionate about connecting people to their dream destinations. With over a decade of experience in the travel industry, we&apos;ve helped thousands of travelers experience the magic of flight and discover new horizons.
            </p>
          </motion.div>
        </div>

        {/* Info Boxes */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 sm:mb-10 md:mb-12 pl-0 sm:pl-4 md:pl-[425px]">
          <div className="w-full sm:w-1/2 bg-white pl-4 sm:pl-6 md:pl-8 border-l-4 border-sky-400 md:w-[400px]">
            <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3">Our Mission</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              To provide exceptional travel experiences that inspire wanderlust and create lasting memories, while ensuring safety, comfort, and affordability for all our customers.
            </p>
          </div>
          <div className="w-full sm:w-1/2 bg-white pl-4 sm:pl-6 md:pl-8 border-l-4 border-sky-400 md:w-[400px]">
            <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3">Our Vision</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              To become the world&apos;s most trusted travel companion, revolutionizing how people explore the globe through innovative solutions and personalized service.
            </p>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="w-full bg-gray-50 px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-25 rounded-2xl sm:rounded-3xl md:rounded-[50px] text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-sky-500 mb-1 sm:mb-2">10+</div>
            <div className="text-xs sm:text-sm md:text-base font-medium">Years of Experience</div>
          </div>
          <div className="w-full bg-gray-50 px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-25 rounded-2xl sm:rounded-3xl md:rounded-[50px] text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-sky-500 mb-1 sm:mb-2">12K</div>
            <div className="text-xs sm:text-sm md:text-base font-medium">Happy Travelers</div>
          </div>
          <div className="w-full sm:col-span-2 md:col-span-1 mx-auto bg-gray-50 px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-25 rounded-2xl sm:rounded-3xl md:rounded-[50px] text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-sky-500 mb-1 sm:mb-2">4.8</div>
            <div className="text-xs sm:text-sm md:text-base font-medium">Overall Ratings</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
