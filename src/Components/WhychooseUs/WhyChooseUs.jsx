import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHardHat,
  FaTools,
  FaGlobe,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import backgroundImage from '../../assets/3.png';


const features = [
  {
    title: "Expert Craftsmanship",
    description:
      "We bring decades of combined experience, delivering structurally sound, innovative, and enduring construction solutions.",
    icon: <FaHardHat className="text-4xl text-yellow-500" />,
  },
  {
    title: "Advanced Technology",
    description:
      "Equipped with cutting-edge tools and modern machinery, we ensure efficiency, accuracy, and quality at every stage.",
    icon: <FaTools className="text-4xl text-yellow-500" />,
  },
  {
    title: "Global Standards",
    description:
      "Our projects meet international benchmarks in safety, sustainability, and engineering excellence.",
    icon: <FaGlobe className="text-4xl text-yellow-500" />,
  },
  {
    title: "Recognized Excellence",
    description:
      "Our work has earned accolades from industry authorities, showcasing our commitment to quality and performance.",
    icon: <FaAward className="text-4xl text-yellow-500" />,
  },
  {
    title: "Integrity & Reliability",
    description:
      "We honor deadlines, prioritize safety, and maintain transparent communication throughout the project lifecycle.",
    icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
  },
];

const FeatureCard = ({ feature, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative bg-white rounded-2xl p-8 flex flex-col items-center transition-all duration-300 w-full max-w-xs group"
    >
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute h-full w-0 border-t-2 border-yellow-500 left-0 top-0 transition-all duration-300 group-hover:w-full"></div>
        <div className="absolute h-0 w-full border-r-2 border-yellow-500 right-0 top-0 transition-all duration-300 group-hover:h-full delay-75"></div>
        <div className="absolute h-full w-0 border-b-2 border-yellow-500 right-0 bottom-0 transition-all duration-300 group-hover:w-full delay-150"></div>
        <div className="absolute h-0 w-full border-l-2 border-yellow-500 left-0 bottom-0 transition-all duration-300 group-hover:h-full delay-200"></div>
      </div>
      <div className="relative z-10 hover:-translate-y-2 duration-300 w-full max-w-xs">
        <div className="mb-4 flex justify-center w-full">
          {React.cloneElement(feature.icon, {
            className: `${feature.icon.props.className} mx-auto`,
          })}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
        <p className="text-gray-600 mt-3">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gray-200 overflow-hidden">
  {/* Blurred background image */}
    <img
            src={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover mask-fade"
          />
        
          {/* Black overlay for contrast */}
          <div className="absolute inset-0 bg-black/10"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="text-center mb-16 lg:mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900/90 mb-4">
       <strong> Why Choose <span className="text-yellow-500/90">GTA CIVILS & HIGHWAYS</span></strong>
      </h2>
      <p className="text-lg text-gray-900 mb-16 max-w-2xl mx-auto">
        Our reputation is built on engineering precision, ethical partnerships,
        and future-proof infrastructure that exceeds industry standards.
      </p>
    </motion.div>
        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-y-10 place-items-center">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} feature={feature} delay={index * 0.2} />
            ))}
          </div>
          <div className="col-span-3 flex justify-center gap-20 -ml-6 mt-10">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                feature={feature}
                delay={(index + 3) * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-8 items-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full max-w-sm">
              <FeatureCard feature={feature} delay={index * 0.2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
