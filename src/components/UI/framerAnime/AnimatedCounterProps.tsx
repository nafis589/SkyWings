import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const CountUpNumber = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 1.2,
      ease: 'easeOut',
    });

    const unsubscribe = rounded.on('change', v => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, target, rounded]);

  return <>{display}</>;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const StatsGrid = () => {
  const stats = [
    { value: 10, suffix: '+', label: 'Years of Experience' },
    { value: 12000, suffix: '', label: 'Happy Travelers' },
    { value: 4.8, suffix: '', label: 'Overall Ratings' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className={`bg-gray-50 px-4 sm:px-6 md:px-7 py-6 sm:py-10 md:py-16 lg:py-20 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] transition-shadow text-center ${
            i === 2 ? 'sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 sm:w-1/2 md:w-full' : ''
          }`}
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-sky-500 mb-1 sm:mb-2">
            <CountUpNumber target={stat.value} />
            {stat.suffix}
          </div>
          <div className="text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
