import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {faqSections} from '../../Components/FAQ/faqSections';

const ConstructionFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Construction FAQs</h2>
          <p className="text-lg text-gray-600">
            Answers to common questions about our construction services, processes, and what makes us different.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="bg-white rounded-xl shadow-md overflow-hidden">
              <motion.h3 
                className="text-xl font-semibold bg-gray-50 px-6 py-4 border-b border-gray-200 text-yellow-700"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {section.title}
              </motion.h3>
              
              <div className="divide-y divide-gray-200">
                {section.items.map((item, itemIndex) => {
                  const index = `${sectionIndex}-${itemIndex}`;
                  const isActive = activeIndex === index;
                  
                  return (
                    <div key={`faq-${index}`} className="px-6 py-4">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full text-left focus:outline-none group"
                      >
                        <span className="text-lg font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                          {item.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 text-yellow-600"
                        >
                          {isActive ? <FiMinus size={20} /> : <FiPlus size={20} />}
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 pb-2 text-gray-600">
                              {item.answer}
                              {index === '0-0' && (
                              <></>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          className="mt-12 bg-yellow-50 rounded-xl p-8 text-center border border-yellow-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our construction experts are ready to provide personalized answers and help you plan your perfect project.
          </p>
          <button className="inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
            Contact Our Team
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionFAQ;