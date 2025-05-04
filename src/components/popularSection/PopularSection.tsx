import React from 'react'
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PopularSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-16 bg-gradient-to-br from-white to-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Popular Destination</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Unleash Your Wanderlust With Skywings</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-black hover:text-white transition-all hover:scale-105">
              <IoIosArrowBack size={16} className="sm:text-lg md:text-xl" />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-black hover:text-white transition-all hover:scale-105">
              <IoIosArrowForward size={16} className="sm:text-lg md:text-xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden transition-all hover:-translate-y-1">
              <div className="relative h-40 sm:h-48 md:h-56 rounded-2xl sm:rounded-3xl md:rounded-4xl overflow-hidden">
                <Image
                  src={`/destinations/img${index}.jpg`}
                  alt={`Destination ${index}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">Forest Wild Life</h3>
                  <span className="px-2 sm:px-3 py-1 bg-sky-100 text-sky-600 rounded-full flex items-center gap-1 text-xs sm:text-sm font-medium">
                    <span>⭐</span>
                    4.7
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-xs sm:text-sm md:text-base">
                  <FaLocationDot className="text-xs sm:text-sm md:text-base" />
                  <span>NRT, Indonesia</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Afficher un bouton "Voir plus" sur mobile */}
        <div className="mt-6 sm:mt-8 text-center sm:hidden">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
            Voir plus de destinations
          </button>
        </div>
      </div>
  )
}

export default PopularSection