import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheck, FaClipboardList } from 'react-icons/fa';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/1.png';

const CTA = () => {
  return (
    <section className="relative bg-gray-200 overflow-hidden">
      {/* Industrial Pattern Background */}
       <img
                  src={backgroundImage}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover mask-fade"
                />
              
       <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent z-0"></div>   
      {/* Diagonal Decorative Element */}
      <div className="absolute top-0 right-0 w-full h-16 bg-yellow-500 transform -skew-y-3 origin-right z-0" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
           <strong>   Ready to Build <span className="text-yellow-600/90">Your Vision</span>?</strong>
            </h2>
            
            <p className="text-lg text-gray-900 mb-8 max-w-lg font-bold">
              Get a free consultation with our construction experts today. We'll provide:
            </p>
            
            <ul className="space-y-4 mb-10 font-bold text-[19px]">
              <li className="flex items-start">
                <div className="bg-yellow-500 rounded-full p-1 mr-4 mt-1">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-gray-900">
                <strong> On-site evaluation with our engineering team</strong>
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-500 rounded-full p-1 mr-4 mt-1">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-gray-900">
                 <strong> Detailed cost estimate within 48 hours</strong>
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-500 rounded-full p-1 mr-4 mt-1">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-gray-900">
                  <strong>Project timeline with milestone breakdown</strong>
                </span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+442085543210">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors flex items-center justify-center">
                <FaPhoneAlt className="mr-2" />
                Call Now 
              </button></a>
        <a href="mailto:estimates@gtacivils.com">
              <button className="bg-gray/50 hover:bg-gray/90 text-gray-900 font-medium py-3 px-8 rounded-lg border border-black/90 transition-colors">
                Request Free Quote
              </button></a>
            </div>
          </motion.div>
          
          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gray-700 text-white p-6">
              <h3 className="text-xl font-bold flex items-center">
                <FaClipboardList className="mr-2 text-yellow-400" />
                Project Consultation
              </h3>
            </div>
            
            {/* Card Body */}
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaPhoneAlt className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">contact@abcconstruction.com</p>
                    <p className="text-sm text-gray-500">Response within 2 business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">123 Construction Ave, Industrial Park</p>
                    <p className="text-sm text-gray-500">Open Mon-Fri: 7AM-5PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {['Colombo', 'Toronto', 'Houston', 'Los Angeles', 'Miami', 'Seattle'].map((city) => (
                    <span key={city} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;