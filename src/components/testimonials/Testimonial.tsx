import React from 'react'
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Loved by over thousand travelers</h2>
          </div>

          {/* Testimonials Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl md:rounded-4xl p-1 pb-4 sm:pb-6 md:pb-7 transition-all duration-300 transform-gpu hover:bg-sky-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="bg-white p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl md:rounded-[30px]">  
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-10">
                  <Image 
                    src="/testimonials/quote.svg" 
                    alt="Quote" 
                    width={32} 
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  />
                </div>
                <div className="flex mb-2 sm:mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i}
                      src="/testimonials/star.svg" 
                      alt="Star" 
                      width={16} 
                      height={16}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" 
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 relative z-10">
                  &quot;The flight booking experience was seamless! The website was intuitive and I found the perfect flight within minutes. Will definitely use this service again for my future travels.&quot;
                </p>
              </div>  


              <div className="flex items-center mt-3 sm:mt-4 md:mt-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 ml-4 sm:ml-6 md:ml-10">
                  <Image 
                    src="/testimonials/profile1.svg" 
                    alt="Sarah Johnson" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900">Sarah Johnson</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Travel Blogger</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl md:rounded-4xl p-1 pb-4 sm:pb-6 md:pb-7 transition-all duration-300 transform-gpu hover:bg-sky-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="bg-white p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl md:rounded-[30px]">  
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-10">
                  <Image 
                    src="/testimonials/quote.svg" 
                    alt="Quote" 
                    width={32} 
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                  />
                </div>
                <div className="flex mb-2 sm:mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i}
                      src="/testimonials/star.svg" 
                      alt="Star" 
                      width={16} 
                      height={16}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" 
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 relative z-10">
                  &quot;I&apos;ve been using Skywings for all my business trips. Their customer service is exceptional, and they always find me the best deals. The mobile app is a game-changer for frequent travelers.&quot;
                </p>
              </div>  

              <div className="flex items-center mt-3 sm:mt-4 md:mt-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 ml-4 sm:ml-6 md:ml-10">
                  <Image 
                    src="/testimonials/profile2.svg" 
                    alt="Michael Chen" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900">Michael Chen</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Business Executive</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl md:rounded-4xl p-1 pb-4 sm:pb-6 md:pb-7 transition-all duration-300 transform-gpu hover:bg-sky-500 hover:-translate-y-1 relative overflow-hidden sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none md:mx-0 w-full">
              <div className="bg-white p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl md:rounded-[30px]"> 
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-10">
                  <Image 
                    src="/testimonials/quote.svg" 
                    alt="Quote" 
                    width={32} 
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                  />
                </div>
                <div className="flex mb-2 sm:mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i}
                      src="/testimonials/star.svg" 
                      alt="Star" 
                      width={16} 
                      height={16}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" 
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 relative z-10">
                  &quot;As a family of five, finding affordable flights can be challenging. Skywings made it easy with their family package options. The kids loved the in-flight entertainment, and we saved a ton!&quot;
                </p>
              </div>  

              <div className="flex items-center mt-3 sm:mt-4 md:mt-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 ml-4 sm:ml-6 md:ml-10">
                  <Image 
                    src="/testimonials/profile3.svg" 
                    alt="Emily Rodriguez" 
                    width={48} 
                    height={48}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900">Emily Rodriguez</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Family Traveler</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination dots for mobile */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2 md:hidden">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
  )
}

export default Testimonial