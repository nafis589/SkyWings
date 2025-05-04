import React from 'react'

const About = () => {
  return (
    <div className="px-6 md:px-12 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Label + Intro Text */}
            <div className="flex flex-col md:flex-row items-center gap-55 mb-12 pl-20">
              <div className="bg-sky-100 text-sky-600 p-4 sm:p-6 rounded-full text-lg sm:text-xl font-medium inline-block text-center">
                About Us
              </div>
              <div className="w-full md:max-w-[60%]">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed font-bold text-center md:text-left">
                  At Skywings, we&apos;re passionate about connecting people to their dream destinations. With over a decade of experience in the travel industry, we&apos;ve helped thousands of travelers experience the magic of flight and discover new horizons.
                </p>
              </div>
            </div>

            {/* Info Boxes */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 pl-85">
              <div className="bg-white pl-5 sm:pl-7 border-l-4 border-sky-400 transition-shadow w-full sm:w-[350px]">
                <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  To provide exceptional travel experiences that inspire wanderlust and create lasting memories, while ensuring safety, comfort, and affordability for all our customers.
                </p>
              </div>
              <div className="bg-white pl-5 sm:pl-7 border-l-4 border-sky-400 transition-shadow w-full sm:w-[350px]">
                <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  To become the world&apos;s most trusted travel companion, revolutionizing how people explore the globe through innovative solutions and personalized service.
                </p>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-gray-50 px-4 sm:px-7 py-10 sm:py-16 md:py-25 rounded-[50px] sm:rounded-[100px] transition-shadow text-center">
                <div className="text-5xl sm:text-6xl md:text-8xl font-medium text-sky-500 mb-2">10+</div>
                <div className="text-sm sm:text-base font-medium">Years of Experience</div>
              </div>
              <div className="bg-gray-50 px-4 sm:px-7 py-10 sm:py-16 md:py-25 rounded-[50px] sm:rounded-[100px] transition-shadow text-center">
                <div className="text-5xl sm:text-6xl md:text-8xl font-medium text-sky-500 mb-2">12K</div>
                <div className="text-sm sm:text-base font-medium">Happy Travelers</div>
              </div>
              <div className="bg-gray-50 px-4 sm:px-7 py-10 sm:py-16 md:py-25 rounded-[50px] sm:rounded-[100px] transition-shadow text-center">
                <div className="text-5xl sm:text-6xl md:text-8xl font-medium text-sky-500 mb-2">4.8</div>
                <div className="text-sm sm:text-base font-medium">Overall Ratings</div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default About