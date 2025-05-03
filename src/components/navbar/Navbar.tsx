import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6">
        <div className="flex items-center gap-4 lg:gap-70">
          <h1 className="text-xl sm:text-2xl font-bold">UIXSHUVO</h1>
          <div className="hidden sm:flex items-center gap-4 md:gap-8">

            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">ABOUT</a>

            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">TOUR</a>
              
            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">PACKAGE</a>

            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">CONTACT</a>

          </div>
        </div>
        <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          Book Trip
        </button>
    </nav>
  )
}

export default Navbar