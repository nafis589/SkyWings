import React from 'react'
import Image from 'next/image';

const journeyMade = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 bg-white min-h-[500px]">
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Journey To the Skies Made Simple!</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-[700px] mx-auto leading-relaxed px-4">
            Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
          {/* Card 1 */}
                <div className="group relative bg-gray-100 h-[250px] sm:h-[280px] rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 ease-linear transform-gpu hover:scale-105 overflow-hidden isolate">
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-sky-50 rounded-full mb-4 sm:mb-6">
                      <Image 
                        src="/location.svg" 
                        alt="Location" 
                        width={24} 
                        height={24} 
                        className="text-sky-500 sm:hidden" 
                      />
                      <Image 
                        src="/location.svg" 
                        alt="Location" 
                        width={28} 
                        height={28} 
                        className="text-sky-500 hidden sm:block" 
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">Find your destination</h3>
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                      <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                        Discover amazing destinations around the word and the perfect place for your next adventure.
                      </p>
                    </div>
                    <div className="flex items-center justify-end mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="uppercase text-xs font-semibold tracking-wider group-hover:text-white transition-colors duration-300">Learn more</span>
                      <Image 
                        src="/arrow-right.svg" 
                        alt="Arrow" 
                        width={16} 
                        height={16} 
                        className="ml-2 text-white" 
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-sky-500/80 z-0"></div>
                    <Image 
                      src="/destinations/img1.jpg" 
                      alt="Destination Background" 
                      fill 
                      className="object-cover z-[-1] transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                </div>
                

          {/* Card 2 */}
          <div className="group relative bg-gray-100 rounded-2xl h-[250px] sm:h-[280px] p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate">
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-sky-50 rounded-full mb-4 sm:mb-6">
                <Image 
                  src="/ticket.svg" 
                  alt="Ticket" 
                  width={24} 
                  height={24} 
                  className="text-sky-500 sm:hidden" 
                />
                <Image 
                  src="/ticket.svg" 
                  alt="Ticket" 
                  width={28} 
                  height={28} 
                  className="text-sky-500 hidden sm:block" 
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">Book a ticket</h3>
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Secure your flight with our easy booking system and get the best deals for your travel plans.
                </p>
              </div>
              <div className="flex items-center justify-end mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="uppercase text-xs font-semibold tracking-wider group-hover:text-white transition-colors duration-300">Learn more</span>
                <Image 
                  src="/arrow-right.svg" 
                  alt="Arrow" 
                  width={16} 
                  height={16} 
                  className="ml-2 text-white" 
                />
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-sky-500/80 z-0"></div>
              <Image 
                src="/destinations/img2.jpg" 
                alt="Booking Background" 
                fill 
                className="object-cover z-[-1] transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-gray-100 rounded-2xl h-[250px] sm:h-[280px] p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate">
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-sky-50 rounded-full mb-4 sm:mb-6">
                <Image 
                  src="/wallet.svg" 
                  alt="Wallet" 
                  width={24} 
                  height={24} 
                  className="text-sky-500 sm:hidden" 
                />
                <Image 
                  src="/wallet.svg" 
                  alt="Wallet" 
                  width={28} 
                  height={28} 
                  className="text-sky-500 hidden sm:block" 
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">Pay & start journey</h3>
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Complete your payment securely and get ready to embark on an unforgettable journey.
                </p>
              </div>
              <div className="flex items-center justify-end mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="uppercase text-xs font-semibold tracking-wider group-hover:text-white transition-colors duration-300">Learn more</span>
                <Image 
                  src="/arrow-right.svg" 
                  alt="Arrow" 
                  width={16} 
                  height={16} 
                  className="ml-2 text-white" 
                />
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-sky-500/80 z-0"></div>
              <Image 
                src="/destinations/img3.jpg" 
                alt="Payment Background" 
                fill 
                className="object-cover z-[-1] transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default journeyMade