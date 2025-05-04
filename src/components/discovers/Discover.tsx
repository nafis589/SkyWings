import React from 'react'
import Image from 'next/image';
const Discover = () => {
  return (
    <div className="px-6 md:px-12 py-16 bg-[#fff]">
          <div className="max-w-7xl mx-auto">
            {/* Section Title and Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the World from Above</h2>
              <p className="text-gray-600 max-w-[700px] mx-auto leading-relaxed">
                Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
              </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 transform-gpu hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-50 rounded-full">
                    <Image 
                      src="/globe.svg" 
                      alt="Various Destinations" 
                      width={32} 
                      height={32} 
                      className="text-sky-500" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Various Destinations</h3>
                <p className="text-gray-600 text-center">
                  Explore a wide range of breathtaking destinations around the world, from bustling cities to serene natural landscapes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 transform-gpu hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-50 rounded-full">
                    <Image 
                      src="/compass.svg" 
                      alt="Guided Adventures" 
                      width={32} 
                      height={32} 
                      className="text-sky-500" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Guided Adventures</h3>
                <p className="text-gray-600 text-center">
                  Join our expert guides for unforgettable adventures tailored to your interests and comfort level.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 transform-gpu hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-50 rounded-full">
                    <Image 
                      src="/map-pin.svg" 
                      alt="Exclusive Experiences" 
                      width={32} 
                      height={32} 
                      className="text-sky-500" 
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Exclusive Experiences</h3>
                <p className="text-gray-600 text-center">
                  Enjoy unique, once-in-a-lifetime experiences that go beyond traditional tourism and create lasting memories.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Discover
