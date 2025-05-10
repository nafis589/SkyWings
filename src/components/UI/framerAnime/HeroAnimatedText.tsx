'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const HeroAnimatedText = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% de l’élément visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants avec typage propre
  const headingVariant = {
    hidden: { y: 200, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4 + 0.5,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const skywingsVariant = {
    hidden: { opacity: 0, scale: 2, rotateX: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <div
      ref={ref}
      className="flex-1 flex flex-col justify-center h-auto md:h-[400px] lg:h-[500px] gap-4 sm:gap-6 md:gap-7 mt-6 md:mt-0"
    >
      {/* First Heading Block */}
      <div className="flex flex-col sm:flex-row space-y-3 md:space-x-7 mobile">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left"
          custom={0}
          initial="hidden"
          animate={controls}
          variants={headingVariant}
        >
          UNLEASH
        </motion.h2>

        <motion.p
          className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-0 sm:mt-2 md:mt-4 leading-relaxed max-w-full sm:max-w-xl text-center sm:text-left w-full sm:w-auto md:w-[350px]"
          custom={1}
          initial="hidden"
          animate={controls}
          variants={paragraphVariant}
        >
          Traveling is a wonderful way to explore new places, learn about different cultures, and gain unique experiences.
        </motion.p>
      </div>

      {/* Second Heading Block */}
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left"
          custom={2}
          initial="hidden"
          animate={controls}
          variants={headingVariant}
        >
          WANDERLUST WITH
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mobile-c">
          <motion.p
            className="text-gray-600 text-xs sm:text-sm md:text-[15px] mt-0 sm:mt-2 md:mt-4 leading-relaxed max-w-full sm:max-w-[150px] md:max-w-[200px] lg:max-w-[300px] text-center sm:text-left"
            custom={3}
            initial="hidden"
            animate={controls}
            variants={paragraphVariant}
          >
            Traveling is a wonderful way to explore new places, learn about different cultures,
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center sm:text-left"
            initial="hidden"
            animate={controls}
            variants={skywingsVariant}
          >
            SKYWINGS
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimatedText;
