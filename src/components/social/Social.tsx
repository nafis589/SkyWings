import React from 'react'
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaAirbnb } from 'react-icons/fa';
import { SiTrivago, SiExpedia } from 'react-icons/si';

const Social = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 mt-8">
        <div className="w-full bg-white rounded-2xl shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-0 sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="text-sm font-semibold uppercase tracking-wide">Follow</span>
            <div className="flex items-center gap-3 sm:gap-6">
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
          <div className="hidden sm:flex flex-1 items-center justify-center overflow-x-auto">
            <div className="flex items-center gap-4 md:gap-8 px-4">
              <a href="#" className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-sky-500 transition-colors whitespace-nowrap">
                <FaAirbnb size={30} />
                <span className="text-base sm:text-lg font-medium">Airbnb</span>
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-sky-500 transition-colors whitespace-nowrap">
                <span className="text-base sm:text-lg font-medium">Booking.com</span>
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-sky-500 transition-colors whitespace-nowrap">
                <SiTrivago size={30} />
                <span className="text-base sm:text-lg font-medium">Trivago</span>
              </a>
              <a href="#" className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-sky-500 transition-colors whitespace-nowrap">
                <SiExpedia size={30} />
                <span className="text-base sm:text-lg font-medium">Expedia</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Social