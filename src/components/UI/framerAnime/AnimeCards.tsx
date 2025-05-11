// AnimatedCards.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const cardData = [
  {
    title: "Various Destinations",
    description:
      "Explore a wide range of breathtaking destinations around the world, from bustling cities to serene natural landscapes.",
    icon: "/globe.svg",
  },
  {
    title: "Guided Adventures",
    description:
      "Join our expert guides for unforgettable adventures tailored to your interests and comfort level.",
    icon: "/compass.svg",
  },
  {
    title: "Exclusive Experiences",
    description:
      "Enjoy unique, once-in-a-lifetime experiences that go beyond traditional tourism and create lasting memories.",
    icon: "/map-pin.svg",
  },
];

export default function AnimeCards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardData.map((card, i) => (
        <motion.div
          key={card.title}
          className="bg-white rounded-2xl p-8 shadow-lg cursor-default"
          custom={i}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.03,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-sky-50 rounded-full">
              <Image
                src={card.icon}
                alt={card.title}
                width={32}
                height={32}
                className="text-sky-500"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 text-center">{card.title}</h3>
          <p className="text-gray-600 text-center">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
