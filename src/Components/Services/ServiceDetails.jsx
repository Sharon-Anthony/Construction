import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../Services/ServiceData';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="max-w-md text-center p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <button
            className="flex items-center justify-center mx-auto bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            onClick={() => navigate('/services')}
          >
            <FiArrowLeft className="mr-2" />
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <button
            onClick={() => navigate('/services')}
            className="flex items-center text-yellow-600 hover:text-yellow-800 mb-8 transition-colors duration-200"
          >
            <FiArrowLeft className="mr-2" />
            Back to Services
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-80 lg:h-full bg-gray-200 animate-pulse">
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
                onLoad={(e) => e.target.classList.remove('opacity-0')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="p-8 md:p-10 flex flex-col">
              <div className="mb-6">
                <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  <FiChevronRight className="mr-1" />
                  {service.category || 'Premium Service'}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FiCheck className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <button
                  className="flex items-center justify-center w-full md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  onClick={() => navigate('/contact')}
                >
                  Get a Free Consultation
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          {service.additionalInfo && (
            <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">More About This Service</h2>
                <div className="prose max-w-none text-gray-600">
                  {service.additionalInfo}
                </div>
              </div>
            </div>
          )}

          {service.testimonial && (
            <div className="mt-12 bg-yellow-50 rounded-xl shadow-lg overflow-hidden border border-yellow-100">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Feedback</h2>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-yellow-200 text-4xl" />
                  <blockquote className="text-lg italic text-gray-700 mb-4 pl-8">
                    {service.testimonial.quote}
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="font-medium text-gray-900">{service.testimonial.name}</div>
                  <div className="mx-2 text-gray-500">•</div>
                  <div className="text-yellow-600">{service.testimonial.position}</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;