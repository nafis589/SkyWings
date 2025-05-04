import React from 'react'


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6">
        {/* Mobile menu button */}
        <button className="sm:hidden p-2" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className="flex items-center gap-4 lg:gap-70">
          <h1 className="text-xl sm:text-2xl font-bold">UIXSHUVO</h1>
          <div className="hidden sm:flex items-center gap-4 md:gap-8">

            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">ABOUT</a>

            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">TOUR</a>
              
            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">PACKAGE</a>

            <a href="#" className="text-sm font-medium hover:text-sky-500 transition-colors">CONTACT</a>

          </div>
        </div>
        
        <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
          Book Trip
        </button>
    </nav>
  )
}

export default Navbar