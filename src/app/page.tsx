import Image from 'next/image';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Social from '@/components/social/Social';
import PopularSection from '@/components/popularSection/PopularSection';
import JourneyMade from '@/components/journeyMadeSimple/JourneyMade';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Social Media Section */}
      <Social />
  

      {/* Popular Destinations Section */}
      <PopularSection />
      {/* Journey Made Simple Section */}
      <JourneyMade />

      {/* Premium Unleash Wanderlust Section */}
      <div className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pl-18">
            {/* Left Side - Image and Promo */}
            <div className="flex relative w-full md:w-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] md:h-[500px] w-full sm:w-[300px] md:w-[350px] mx-auto md:mx-0">
                <Image
                  src="/bg-w.jpg"
                  alt="Premium Travel Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex-1 flex flex-col justify-center h-auto md:h-[500px] gap-4 sm:gap-6 md:gap-7 mt-8 md:mt-0">
              {/* First Heading Block */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-7">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">UNLEASH</h2>
                <p className="text-gray-600 text-sm sm:text-[15px] mt-0 sm:mt-4 leading-relaxed max-w-full sm:max-w-xl text-center sm:text-left w-[350px]">
                  Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
                </p>
              </div>
              
              {/* Second Heading Block */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">WANDERLUST WITH</h2>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
                  <p className="text-gray-600 text-sm sm:text-[15px] mt-0 sm:mt-4 leading-relaxed max-w-full sm:max-w-[200px] md:max-w-[300px] text-center sm:text-left">
                    Traveling is a wonderful way to explore new places, 
                    learn about different cultures,
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left">SKYWINGS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-25 mt-8 sm:mt-4">
          {/* Promo Badge */}
          <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-5 sm:ml-0 md:ml-20">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-500">20% OFF</div>
              <div className="text-xs sm:text-sm font-medium text-black/80">
                    Till 28 April, <br /> 2025
              </div>
          </div>

          {/* CTA Button */}
          <div className="mt-2 sm:mt-4 w-full sm:w-auto">
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <div className="relative px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center z-10 transition-colors duration-300 w-full sm:w-[400px] md:w-[600px] lg:w-[800px] justify-center gap-2 sm:gap-4">
                <span className="text-base sm:text-lg md:text-xl font-bold text-black">Book a flight now</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <Image 
                    src="/arrow.svg" 
                    alt="Arrow" 
                    width={16} 
                    height={16}
                    className="text-white sm:hidden" 
                  />
                  <Image 
                    src="/arrow.svg" 
                    alt="Arrow" 
                    width={20} 
                    height={20}
                    className="text-white hidden sm:block" 
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
      </div>

       {/* About Us Section */}
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

        {/* Discover the World from Above Section */}
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

        {/* Testimonial Section */}
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

      {/* Explore the Skies Section */}
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
      
      {/* Footer */}
      <Footer />
    </main>
  );
}