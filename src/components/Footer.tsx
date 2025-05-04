import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col col-span-2 sm:col-span-2 md:col-span-1">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">UIXSHUVO</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-xs">
              Discover the world one adventure at a time. Life is short, book the trip.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Twitter size={16} className="text-gray-700 sm:hidden" />
                <Twitter size={20} className="text-gray-700 hidden sm:block" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Facebook size={16} className="text-gray-700 sm:hidden" />
                <Facebook size={20} className="text-gray-700 hidden sm:block" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Instagram size={16} className="text-gray-700 sm:hidden" />
                <Instagram size={20} className="text-gray-700 hidden sm:block" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-sky-50 shadow-sm hover:shadow transition-all hover:scale-105"
              >
                <Linkedin size={16} className="text-gray-700 sm:hidden" />
                <Linkedin size={20} className="text-gray-700 hidden sm:block" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-6">Company</h3>
            <div className="flex flex-col gap-2 sm:gap-4">
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Tour Guide
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Packages
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-6">Resources</h3>
            <div className="flex flex-col gap-2 sm:gap-4">
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Free eBooks
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Development Tutorial
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                How to Blog
              </a>
            </div>
          </div>

          {/* Extra Links */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold uppercase mb-3 sm:mb-6">Extra Links</h3>
            <div className="flex flex-col gap-2 sm:gap-4">
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Customer Support
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-sky-500 hover:underline transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2025 UIXSHUVO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;