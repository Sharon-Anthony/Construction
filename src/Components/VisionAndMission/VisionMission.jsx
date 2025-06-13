import React from 'react';
import { FaBullseye, FaBinoculars, FaRulerCombined, FaUsers, FaShieldAlt, FaLeaf, FaHandshake,FaCogs,FaChartLine,FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';


const VisionMission = () => {
  return (
    <section className="relative bg-gray-200 overflow-hidden py-20">
      
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Foundation</span> of Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide every project we undertake
          </p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-yellow-500 text-gray-900 p-6 flex items-center">
              <FaBinoculars className="text-3xl mr-4 text-gray-900" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                To redefine construction excellence by pioneering innovative building solutions that shape sustainable urban landscapes for future generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <FaBullseye className="text-yellow-600" />
                  </div>
                  <p className="text-gray-600">
                    <strong>Industry Leadership:</strong> Become the most trusted name in commercial construction by 2030
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <FaRulerCombined className="text-yellow-600" />
                  </div>
                  <p className="text-gray-600">
                    <strong>Innovation:</strong> Implement AI-driven construction technologies across all projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-yellow-500 text-gray-900 p-6 flex items-center">
              <FaUsers className="text-3xl mr-4 text-gray-900" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                To deliver exceptional construction services through uncompromising quality, cutting-edge technology, and unwavering commitment to our clients' success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <FaShieldAlt className="text-yellow-600" />
                  </div>
                  <p className="text-gray-600">
                    <strong>Safety First:</strong> Maintain zero workplace accidents through rigorous protocols
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-4">
                    <FaLeaf className="text-yellow-600" />
                  </div>
                  <p className="text-gray-600">
                    <strong>Sustainability:</strong> Achieve LEED certification for 90% of projects by 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;