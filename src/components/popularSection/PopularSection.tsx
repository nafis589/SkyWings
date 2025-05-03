import React from 'react'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PopularSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white to-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Popular Destination</h2>
            <p className="text-sm sm:text-base text-gray-600">Unleash Your Wanderlust With Skywings</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all hover:scale-105">
              <IoIosArrowBack size={18} className="sm:text-xl" />
            </button>
            <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white hover:bg-black hover:text-white transition-all hover:scale-105">
              <IoIosArrowForward size={18} className="sm:text-xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-4xl overflow-hidden transition-all hover:-translate-y-1">
              <div className="relative h-50 overflow-hidden rounded-b-4xl">
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

  )
}

export default PopularSection