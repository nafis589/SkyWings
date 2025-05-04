import React from 'react'
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by over thousand travelers</h2>
          </div>

          {/* Testimonials Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial Card 1 */}
            <div className="bg-gray-50 rounded-4xl p-1 pb-7 transition-all duration-300 transform-gpu hover:bg-sky-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="bg-white p-7 rounded-[30px]">  
                <div className="absolute top-4 right-4 opacity-10">
                  <Image 
                    src="/testimonials/quote.svg" 
                    alt="Quote" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i}
                      src="/testimonials/star.svg" 
                      alt="Star" 
                      width={20} 
                      height={20} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 relative z-10">
                  &quot;The flight booking experience was seamless! The website was intuitive and I found the perfect flight within minutes. Will definitely use this service again for my future travels.&quot;
                </p>
              </div>  


              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ml-10 ">
                  <Image 
                    src="/testimonials/profile1.svg" 
                    alt="Sarah Johnson" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Travel Blogger</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-gray-50 rounded-4xl p-1 transition-all duration-300 transform-gpu hover:bg-sky-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="bg-white p-7 rounded-[30px]">  
                <div className="absolute top-4 right-4 opacity-10">
                  <Image 
                    src="/testimonials/quote.svg" 
                    alt="Quote" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i}
                      src="/testimonials/star.svg" 
                      alt="Star" 
                      width={20} 
                      height={20} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 relative z-10">
                  &quot;I&apos;ve been using Skywings for all my business trips. Their customer service is exceptional, and they always find me the best deals. The mobile app is a game-changer for frequent travelers.&quot;
                </p>
              </div>  

              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ml-10">
                  <Image 
                    src="/testimonials/profile2.svg" 
                    alt="Michael Chen" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Business Executive</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-gray-50 rounded-4xl p-1 transition-all duration-300 transform-gpu hover:bg-sky-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="bg-white p-7 rounded-[30px]"> 
                <div className="absolute top-4 right-4 opacity-10">
                  <Image 
                    src="/testimonials/quote.svg" 
                    alt="Quote" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Image 
                      key={i}
                      src="/testimonials/star.svg" 
                      alt="Star" 
                      width={20} 
                      height={20} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 relative z-10">
                  &quot;As a family of five, finding affordable flights can be challenging. Skywings made it easy with their family package options. The kids loved the in-flight entertainment, and we saved a ton!&quot;
                </p>
              </div>  

              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ml-10">
                  <Image 
                    src="/testimonials/profile3.svg" 
                    alt="Emily Rodriguez" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">Family Traveler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonial