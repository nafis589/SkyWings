import React from 'react'
import Image from 'next/image';
const Explore = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left Circular Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-md mx-auto sm:mx-0">
              <Image
                src="/destinations/img1.jpg"
                alt="Scenic View"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bold Text */}
            <div className="flex-shrink-0 text-center sm:text-left order-first sm:order-none col-span-1 sm:col-span-2 md:col-span-1 mb-6 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Explores the skies<br className="hidden sm:block" />with Confidence
              </h2>
            </div>

            {/* SVG Circle with Text */}
            <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex-shrink-0 group mx-auto sm:mx-0">
              <svg width="100%" height="100%" viewBox="0 0 120 120" className="w-full h-full">
                <circle cx="60" cy="60" r="58" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Circular Text */}
                <path id="circlePath" d="M60,10 A50,50 0 1,1 59.9,10" fill="none" />
                <text>
                  <textPath href="#circlePath" className="text-gray-600 text-xs tracking-wider">
                    EXPLORE MORE · EXPLORE MORE · EXPLORE MORE ·
                  </textPath>
                </text>
                
                {/* Arrow Icon */}
                <g className="">
                  <circle cx="60" cy="60" r="25" fill="#0ea5e9" className="transition-colors duration-300 group-hover:fill-sky-600" />
                  <path d="M55,60 L65,60 M65,60 L60,55 M65,60 L60,65" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            {/* Small Paragraph */}
            <div className="max-w-xs flex-shrink-0 text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Traveling is a wonderful way to explore new places, learn about different cultures, and gain.
              </p>
            </div>

            {/* Right Circular Image */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-md mx-auto sm:mx-0">
              <Image
                src="/destinations/img2.jpg"
                alt="Scenic View"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Mobile version bouton explore */}
          <div className="mt-8 text-center sm:hidden">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
              Explorer maintenant
            </button>
          </div>
        </div>
      </div>
  )
}

export default Explore