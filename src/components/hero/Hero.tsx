import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8">
        <div className="relative w-full rounded-3xl overflow-hidden bg-sky-50 shadow-sm">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/cloud.jpg" 
              alt="Background Pattern" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row min-h-[400px] sm:min-h-[500px]">
            {/* Left Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-16 flex flex-col justify-center text-center sm:text-left">
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-10 sm:w-12 h-10 sm:h-12 bg-sky-100 rounded-full opacity-50"></div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 relative z-10 tracking-wider font-medium">ELEVATE YOUR TRAVEL JOURNEY</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-8 leading-tight w-full sm:w-[500px] mx-auto sm:mx-0">Experience the <span className="text-sky-500">magic</span> of flight!</h2>
              
              <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4">
                <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg">
                  Book a trip now
                </button>
                <button className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105">
                  <Image 
                    src="/play.svg" 
                    alt="Play" 
                    width={24} 
                    height={24} 
                    className="text-sky-500"
                  />
                </button>
              </div>
            </div>

            {/* Right Content - Staircase Shape */}
            <div className="flex-1 relative mt-8 md:mt-0">
              {/* Airplane Image */}
              <div className="relative sm:absolute left-1/2 sm:left-auto sm:-right-8 lg:-right-16 top-0 sm:top-1/2 transform -translate-x-1/2 sm:-translate-x-0 sm:-translate-y-1/2 z-10 w-3/4 sm:w-[300px] lg:w-[600px] xl:w-[800px] mx-auto transition-all duration-700 hover:translate-x-2 animate-float">
                <Image 
                  src="/removemax.png" 
                  alt="Airplane" 
                  width={3620} 
                  height={2758} 
                  className="object-contain drop-shadow-xl"
                />
              </div>
              
              <div className="hidden sm:block absolute bottom-0 right-0 w-full sm:w-1/2 h-1/3 bg-gradient-to-br from-gray-200 to-white rounded-tl-3xl p-6 flex flex-col justify-between shadow-lg z-50">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-6">
                  <div className="text-center sm:text-left sm:flex-1 sm:ml-4">
                    <h3 className="font-bold text-xl md:text-2xl mb-2">Awesome place</h3>
                    <p className="text-sm md:text-base text-gray-600">Discover the world One Adventure At a Time</p>
                    
                    <button className="mt-4 bg-gray-200 px-4 py-3 rounded-3xl flex items-center gap-2 text-sm font-medium hover:text-sky-500 text-sky-500 transition-colors group mx-auto sm:mx-0">
                      Know more
                      <span className="group-hover:translate-x-1 transition-transform">
                        <Image 
                          src="/arrow.svg" 
                          alt="Arrow" 
                          width={16} 
                          height={16} 
                          className="text-current"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero