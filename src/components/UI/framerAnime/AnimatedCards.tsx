'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AnimatedCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // L'animation se déclenche une seule fois
    threshold: 0.3, // L'élément devient visible lorsque 30% de sa hauteur est dans le viewport
  });

  // Variants pour l'animation de la carte
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
        delay: 0.2, // Ajuste le délai ici pour stagger
      },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
      {/* Card 1 */}
      <motion.div
        ref={ref}
        className="group relative bg-gray-100 rounded-2xl h-[250px] sm:h-[280px] p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={cardVariant}
      >
        <div className="relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-sky-50 rounded-full mb-4 sm:mb-6">
            <Image
              src="/location.svg"
              alt="Location"
              width={24}
              height={24}
              className="text-sky-500 sm:hidden"
            />
            <Image
              src="/location.svg"
              alt="Location"
              width={28}
              height={28}
              className="text-sky-500 hidden sm:block"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
            Find your destination
          </h3>
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
            <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
              Discover amazing destinations around the world and the perfect place for your next adventure.
            </p>
          </div>
          <div className="flex items-center justify-end mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="uppercase text-xs font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
              Learn more
            </span>
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
      </motion.div>

      {/* Card 2 */}
      <motion.div
        ref={ref}
        className="group relative bg-gray-100 rounded-2xl h-[250px] sm:h-[280px] p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={cardVariant}
      >
        <div className="relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-sky-50 rounded-full mb-4 sm:mb-6">
            <Image
              src="/ticket.svg"
              alt="Ticket"
              width={24}
              height={24}
              className="text-sky-500 sm:hidden"
            />
            <Image
              src="/ticket.svg"
              alt="Ticket"
              width={28}
              height={28}
              className="text-sky-500 hidden sm:block"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
            Book a ticket
          </h3>
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
            <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
              Secure your flight with our easy booking system and get the best deals for your travel plans.
            </p>
          </div>
          <div className="flex items-center justify-end mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="uppercase text-xs font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
              Learn more
            </span>
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
      </motion.div>

      {/* Card 3 */}
      <motion.div
        ref={ref}
        className="group relative bg-gray-100 rounded-2xl h-[250px] sm:h-[280px] p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 transform-gpu hover:scale-105 overflow-hidden isolate"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={cardVariant}
      >
        <div className="relative z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-sky-50 rounded-full mb-4 sm:mb-6">
            <Image
              src="/wallet.svg"
              alt="Wallet"
              width={24}
              height={24}
              className="text-sky-500 sm:hidden"
            />
            <Image
              src="/wallet.svg"
              alt="Wallet"
              width={28}
              height={28}
              className="text-sky-500 hidden sm:block"
            />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
            Pay & start journey
          </h3>
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden mb-4">
            <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
              Complete your payment securely and get ready to embark on an unforgettable journey.
            </p>
          </div>
          <div className="flex items-center justify-end mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="uppercase text-xs font-semibold tracking-wider group-hover:text-white transition-colors duration-300">
              Learn more
            </span>
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
      </motion.div>
    </div>
  );
};

export default AnimatedCards;
