import React from 'react'
import Image from 'next/image';

const PremiumUnleash = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 pl-0 sm:pl-6 md:pl-12 lg:pl-18">
            {/* Left Side - Image and Promo */}
            <div className="flex relative w-full md:w-auto">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full sm:w-[300px] md:w-[350px] max-w-[280px] sm:max-w-none mx-auto md:mx-0">
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
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex-1 flex flex-col justify-center h-auto md:h-[400px] lg:h-[500px] gap-4 sm:gap-6 md:gap-7 mt-6 md:mt-0">
              {/* First Heading Block */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-7">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">UNLEASH</h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-0 sm:mt-2 md:mt-4 leading-relaxed max-w-full sm:max-w-xl text-center sm:text-left w-full sm:w-auto md:w-[350px]">
                  Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
                </p>
              </div>
              
              {/* Second Heading Block */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">WANDERLUST WITH</h2>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                  <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-0 sm:mt-2 md:mt-4 leading-relaxed max-w-full sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] text-center sm:text-left">
                    Traveling is a wonderful way to explore new places, 
                    learn about different cultures,
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">SKYWINGS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-25 mt-8 sm:mt-4">
          {/* Promo Badge */}
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-5 sm:ml-0 md:ml-20">
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
        <div className="flex justify-center mt-6 sm:hidden">
          <button className="bg-sky-100 text-sky-600 px-5 py-2 rounded-full text-xs font-medium">
            Explorer toutes nos destinations
          </button>
        </div>
      </div>
  )
}

export default PremiumUnleash