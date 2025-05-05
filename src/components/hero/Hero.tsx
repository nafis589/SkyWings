import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-12">
        <div className="relative w-full rounded-3xl overflow-hidden bg-sky-50">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/cloud.jpg" 
              alt="Background Pattern" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            {/* Left Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-16 flex flex-col justify-center text-center sm:text-left">
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-10 sm:w-12 h-10 sm:h-12 bg-sky-100 rounded-full opacity-50"></div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 relative z-10 tracking-wider font-medium">ELEVATE YOUR TRAVEL JOURNEY</p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-8 leading-tight w-full sm:w-[500px] mx-auto sm:mx-0">Experience the <span className="text-sky-500">magic</span> of flight!</h2>
              
              <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-4">
                <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg">
                  Book a trip now
                </button>
                <button className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105">
                  <Image 
                    src="/play.svg" 
                    alt="Play" 
                    width={24} 
                    height={24} 
                    className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6"
                  />
                </button>
              </div>
            </div>

            {/* Right Content - Staircase Shape */}
            <div className="flex-1 relative mt-8 md:mt-0">
              {/* Airplane Image */}
              <div className="relative sm:absolute left-1/2 sm:left-auto sm:-right-8 lg:-right-16 top-0 sm:top-1/2 transform -translate-x-1/2 sm:-translate-x-0 sm:-translate-y-1/2 z-10 w-4/5 sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[850px] mx-auto transition-all duration-700 hover:translate-x-2 animate-float">
                <Image 
                  src="/removemax.png" 
                  alt="Airplane" 
                  width={3620} 
                  height={2758} 
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 650px"
                />
              </div>
              
              <div className="sm:block absolute bottom-0 right-0 w-[400px] h-1/3 rounded-tl-3xl p-4 sm:p-6 flex flex-col justify-between z-50">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-tl-3xl w-[465px]">
                  <Image 
                    src="/Untitled.svg" 
                    alt="Background Pattern" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-2 md:gap">
                  <div className="text-center sm:text-left sm:flex-1 sm:ml-2 md:ml-4">
                    <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1 pl-[160px] mt-13">Awesome place</h3>
                    {/*<p className="text-xs text-gray-600">Discover the world One Adventure At a Time</p>*/}
                    
                    <button className="mt-10 bg-gray-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl flex items-center gap-1 text-xs font-medium hover:text-sky-500 text-sky-500 transition-colors group mx-auto sm:ml-50">
                      Know more
                      <span className="group-hover:translate-x-1 transition-transform">
                        <Image 
                          src="/arrow.svg" 
                          alt="Arrow" 
                          width={12} 
                          height={12} 
                          className="text-current w-2.5 h-2.5" 
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile version of the "Awesome place" card */}
              <div className="sm:hidden bg-gradient-to-br from-gray-200 to-white rounded-xl p-4 mt-4 flex flex-col items-center shadow-lg">
                <h3 className="font-bold text-lg mb-1">Awesome place</h3>
                <p className="text-xs text-gray-600 text-center">Discover the world One Adventure At a Time</p>
                <button className="mt-3 bg-gray-200 px-3 py-2 rounded-3xl flex items-center gap-2 text-xs font-medium text-sky-500 transition-colors group">
                  Know more
                  <span className="group-hover:translate-x-1 transition-transform">
                    <Image 
                      src="/arrow.svg" 
                      alt="Arrow" 
                      width={16} 
                      height={16} 
                      className="text-current w-3 h-3"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero