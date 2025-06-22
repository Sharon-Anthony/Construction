import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiUsers } from 'react-icons/fi';
import { FaHardHat } from 'react-icons/fa';
import constructionTeam from '../../assets/poster.jpg';
import projectSite from '../../../public/Hero.png';
import blueprint from '../../assets/1.png';
import FAQ from '../../Components/FAQ/FAQ';
import CountUp from 'react-countup';

const AboutUs = () => {
  const stats = [
    { value: '25+', label: 'Years Experience', icon: <FiAward className="text-yellow-500" size={24} /> },
    { value: '250+', label: 'Projects Completed', icon: <FiCheckCircle className="text-yellow-500" size={24} /> },
    { value: '50+', label: 'Skilled Professionals', icon: <FiUsers className="text-yellow-500" size={24} /> },
    { value: '100%', label: 'Safety Record', icon: <FaHardHat className="text-yellow-500" size={24} /> }
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "We build trust through transparency in all our dealings and maintain the highest ethical standards."
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge technology to deliver smarter, more efficient construction solutions."
    },
    {
      title: "Quality",
      description: "Uncompromising standards in materials and craftsmanship that stand the test of time."
    },
    {
      title: "Community",
      description: "Committed to sustainable practices that benefit both our clients and the environment."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-500 text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building Excellence Since <span className="text-yellow-400">1998</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              GTA CIVILS & HIGHWAYS Ltd. transforms visions into enduring structures through unmatched expertise in civil engineering and construction management.
            </p>
           
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-yellow-600">Story</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, GTA CIVILS & HIGHWAYS Ltd. began as a small local contractor and has grown into a premier construction firm serving the Greater Toronto Area. Our journey reflects our commitment to delivering exceptional quality while adapting to the evolving needs of our clients.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              From our first residential project to complex highway infrastructures, we've maintained the same dedication to precision engineering and client satisfaction that earned us our reputation.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700 font-medium">
                "We don't just build structures - we build relationships that last generations."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src={constructionTeam} 
              alt="Our team at work" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img 
              src={projectSite} 
              alt="Construction site" 
              className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
            />
            <img 
              src={blueprint} 
              alt="Project blueprint" 
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <div className="bg-yellow-600 rounded-lg shadow-md h-64 flex items-center justify-center p-4">
              <p className="text-white text-xl font-bold text-center">
                25 Years of Building Toronto's Future
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    <section className="py-16 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="group"
        >
          <div className="p-6 md:p-8 flex flex-col items-center text-center">
            <div className="mb-4 text-yellow-400 transition-colors duration-300 group-hover:text-white">
              {React.cloneElement(stat.icon, { size: 22 })}
            </div>
            <div className="text-3xl md:text-4xl font-light tracking-tight mb-1 text-white">
              {stat.value.includes('+') || stat.value.includes('%') ? (
                <CountUp
                  end={parseInt(stat.value)}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  suffix={stat.value.includes('+') ? '+' : '%'}
                  className="font-medium"
                />
              ) : (
                <CountUp
                  end={parseInt(stat.value)}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                  className="font-medium"
                />
              )}
            </div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
              {stat.label}
            </div>
            <div className="mt-4 w-8 h-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      

      <FAQ />
    </div>
  );
};

export default AboutUs;