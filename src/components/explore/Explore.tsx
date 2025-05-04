import React from 'react'
import Image from 'next/image';
const Explore = () => {
  return (
    <div className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Circular Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-md">
              <Image
                src="/destinations/img1.jpg"
                alt="Scenic View"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bold Text */}
            <div className="flex-shrink-0">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                Explores the skies<br />with Confidence
              </h2>
            </div>

            {/* SVG Circle with Text */}
            <div className="relative w-[120px] h-[120px] flex-shrink-0 group">
              <svg width="120" height="120" viewBox="0 0 120 120">
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
            <div className="max-w-xs flex-shrink-0">
              <p className="text-sm text-gray-600 leading-relaxed">
                Traveling is a wonderful way to explore new places, learn about different cultures, and gain.
              </p>
            </div>

            {/* Right Circular Image */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-md">
              <Image
                src="/destinations/img2.jpg"
                alt="Scenic View"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Explore