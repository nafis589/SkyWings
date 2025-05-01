import Image from 'next/image';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaAirbnb } from 'react-icons/fa';
import { SiTrivago, SiExpedia } from 'react-icons/si';
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-70">
          <h1 className="text-2xl font-bold">UIXSHUVO</h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">ABOUT</a>
            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">TOUR</a>
            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">PACKAGE</a>
            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">CONTACT</a>
          </div>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          Book Trip
        </button>
      </nav>

      {/* Hero Section */}
      <div className="px-6 md:px-12 py-8">
        <div className="relative w-full rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl overflow-hidden bg-sky-50 shadow-sm">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/cloud.jpg" 
              alt="Background Pattern" 
              fill 
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row min-h-[500px]">
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
              <div className="relative">
                <div className="absolute -left-2 -top-2 w-12 h-12 bg-sky-100 rounded-full opacity-50"></div>
                <p className="text-sm md:text-base text-gray-600 mb-2 relative z-10 tracking-wider font-medium">ELEVATE YOUR TRAVEL JOURNEY</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight w-[500px]">Experience the <span className="text-sky-500">magic</span> of flight!</h2>
              
              <div className="flex items-center gap-6 mt-4">
                <button className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors shadow-md hover:shadow-lg">
                  Book a trip now
                </button>
                <button className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105">
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
            <div className="flex-1 relative">
              {/* Airplane Image */}
              <div className="absolute -right-8 md:-right-16 top-1/2 transform -translate-y-1/2 z-0 w-[300px] md:w-[800px] transition-all duration-700 hover:translate-x-2 animate-float">
                <Image 
                  src="/removemax.png" 
                  alt="Airplane" 
                  width={3620} 
                  height={2758} 
                  className="object-contain drop-shadow-xl"
                />
              </div>
              
              <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/3 bg-gradient-to-br from-gray-200 to-white rounded-tl-3xl p-6 flex flex-col justify-between shadow-lg">
                {/* Cloud Shape */}
                {/*<div className="absolute -top-3 -left-5 w-24 h-12 bg-white rounded-full before:content-[''] before:absolute before:-top-4 before:-left-4 before:w-16 before:h-16 before:bg-white before:rounded-full after:content-[''] after:absolute after:-top-2 after:left-8 after:w-14 after:h-14 after:bg-white after:rounded-full"></div>*/}
                
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full gap-6">
                  <div className="text-center md:text-left md:flex-1 md:ml-4">
                    <h3 className="font-bold text-xl md:text-2xl mb-2">Awesome place</h3>
                    <p className="text-sm md:text-base text-gray-600">Discover the world One Adventure At a Time</p>
                    
                    <button className="mt-4 bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:text-sky-500 text-sky-500 transition-colors group mx-auto md:mx-0">
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

      {/* Social Media Section */}
      <div className="px-6 md:px-12 mt-8">
        <div className="w-full bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-wide">Follow</span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Twitter size={20} className="text-gray-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Facebook size={20} className="text-gray-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Instagram size={20} className="text-gray-700" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Linkedin size={20} className="text-gray-700" />
              </a>
            </div>
          </div>

          {/* Travel Platforms */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-13 items-center gap-8">
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors">
                <FaAirbnb size={40} />
                <span className="text-lg font-medium">Airbnb</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors">
                <span className="text-lg font-medium">Booking.com</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors">
                <SiTrivago size={40} />
                <span className="text-lg font-medium">Trivago</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-600 hover:text-sky-500 transition-colors">
                <SiExpedia size={40} />
                <span className="text-lg font-medium">Expedia</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="px-6 md:px-12 py-16 bg-gradient-to-br from-white to-white">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Destination</h2>
            <p className="text-gray-600">Unleash Your Wanderlust With Skywings</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <Image 
                src="/arrow.svg" 
                alt="Previous" 
                width={20} 
                height={20} 
                className="transform rotate-180" 
              />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
              <Image 
                src="/arrow.svg" 
                alt="Next" 
                width={20} 
                height={20} 
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden rounded-b-2xl">
                <Image
                  src={`/destinations/img${index}.jpg`}
                  alt={`Destination ${index}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Forest Wild Life</h3>
                  <span className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full flex items-center gap-1 text-sm font-medium">
                    <span>⭐</span>
                    4.7
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaLocationDot />
                  <span>NRT, Indonesia</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Made Simple Section */}
      <div className="px-6 md:px-12 py-16 bg-white h-[500px]">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey To the Skies Made Simple!</h2>
          <p className="text-gray-600 max-w-[700px] mx-auto leading-relaxed">
            Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
                <div className="group relative bg-gray-100 h-[280px] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 ease-linear transform-gpu hover:scale-105 overflow-hidden isolate">
                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center bg-sky-50 rounded-full mb-6">
                      <Image 
                        src="/location.svg" 
                        alt="Location" 
                        width={28} 
                        height={28} 
                        className="text-sky-500" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">Find your destination</h3>
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                      <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                        Discover amazing destinations around the word and the perfect place for your next adventure.
                      </p>
                    </div>
                    <div className="flex items-center justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          <div className="group relative bg-gray-100 rounded-2xl h-[280px] p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate">
            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center bg-sky-50 rounded-full mb-6">
                <Image 
                  src="/ticket.svg" 
                  alt="Ticket" 
                  width={28} 
                  height={28} 
                  className="text-sky-500" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">Book a ticket</h3>
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Secure your flight with our easy booking system and get the best deals for your travel plans.
                </p>
              </div>
              <div className="flex items-center justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          <div className="group relative bg-gray-100 rounded-2xl h-[280px] p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate">
            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center bg-sky-50 rounded-full mb-6">
                <Image 
                  src="/wallet.svg" 
                  alt="Wallet" 
                  width={28} 
                  height={28} 
                  className="text-sky-500" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">Pay & start journey</h3>
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  Complete your payment securely and get ready to embark on an unforgettable journey.
                </p>
              </div>
              <div className="flex items-center justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* Premium Unleash Wanderlust Section */}
      <div className="px-6 md:pl-25 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image and Promo */}
            <div className="flex relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px] w-[350px]">
                <Image
                  src="/destinations/img1.jpg"
                  alt="Premium Travel Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Promo Badge 
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="text-4xl font-extrabold text-white">20% OFF</div>
                <div className="text-sm font-medium text-white/80">
                  Till 28 April, <br /> 2025
                </div>
              </div>*/}
            </div>
            
             {/* Right Side - Text Content */}
            <div className="flex-1 flex flex-col justify-center h-[500px] gap-7">
              {/* First Heading Block */}
              <div className="flex flex-row space-x-7">
                <h2 className="text-7xl md:text-7xl font-extrabold tracking-tight text-gray-900">UNLEASH</h2>
                <p className="text-gray-600 text-[15px] mt-4 leading-relaxed max-w-xl">
                  Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
                </p>
              </div>
              
              {/* Second Heading Block */}
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">WANDERLUST WITH</h2>
                <div className="flex flex-row">
                  <p className="text-gray-600 text-[15px] mt-4 leading-relaxed max-w-90">
                    Traveling is a wonderful way to explore new places, 
                    learn about different cultures,
                  </p>
                  <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">SKYWINGS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row gap-30">
          {/* Promo Badge */}
          <div className="flex items-center gap-5 ml-12">
            <div className="text-4xl font-extrabold text-black">20% OFF</div>
              <div className="text-sm font-medium text-black/80">
                    Till 28 April, <br /> 2025
              </div>
          </div>


          {/* CTA Button */}
            <div className="mt-4">
                  <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
                    <div className="relative bg-sky-500 px-8 py-6 flex items-center z-10 group-hover:bg-sky-600 transition-colors duration-300 w-[800px] justify-center gap-4">
                      <span className="text-xl font-bold text-white">Book a flight now</span>
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Image 
                          src="/arrow.svg" 
                          alt="Arrow" 
                          width={20} 
                          height={20}
                          className="text-white" 
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 opacity-80 z-0">
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
              <div className="bg-sky-100 text-sky-600 p-6 ml-30 rounded-full text-xl font-medium inline-block">
                About Us
              </div>
              <div className="md:max-w-[60%]">
                <p className="text-xl leading-relaxed font-bold">
                  At Skywings, we&apos;re passionate about connecting people to their dream destinations. With over a decade of experience in the travel industry, we&apos;ve helped thousands of travelers experience the magic of flight and discover new horizons.
                </p>
              </div>
            </div>

            {/* Info Boxes */}
            <div className="flex flex-row mb-12 pl-[500px]">
              <div className="bg-white pl-7 border-l-4 border-sky-400 transition-shadow w-[350px] h-[]">
                <h3 className="text-xm font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional travel experiences that inspire wanderlust and create lasting memories, while ensuring safety, comfort, and affordability for all our customers.
                </p>
              </div>
              <div className="bg-white pl-7 border-l-4 border-sky-400 transition-shadow w-[350px]">
                <h3 className="text-xm font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To become the world&apos;s most trusted travel companion, revolutionizing how people explore the globe through innovative solutions and personalized service.
                </p>
              </div>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 px-7 py-25 rounded-[100px] hover:shadow-md transition-shadow text-center">
                <div className="text-8xl font-medium text-sky-500 mb-2">10+</div>
                <div className="font-medium">Years of Experience</div>
              </div>
              <div className="bg-gray-50 px-7 py-25 rounded-[100px] hover:shadow-md transition-shadow text-center">
                <div className="text-8xl font-medium text-sky-500 mb-2">12K</div>
                <div className="font-medium">Happy Travelers</div>
              </div>
              <div className="bg-gray-50 px-7 py-25 rounded-[100px] hover:shadow-md transition-shadow text-center">
                <div className="text-8xl font-medium text-sky-500 mb-2">4.8</div>
                <div className="font-medium">Overall Ratings</div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}