import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {projects} from '../../Components/Projects/ProjectData';
import {ChevronsRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!isSliderHovered) {
      intervalRef.current = setInterval(() => {                                                                                                                                                                    




                                                                                                                 
        setCurrentIndex(prev => (prev + 1) % projects.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isSliderHovered]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 5).concat(
    projects.slice(0, Math.max(0, (currentIndex + 5) - projects.length))
  );

  return (
    <section className="relative py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <strong> Our <span className="text-yellow-500">Projects</span></strong>
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
              A showcase of craftsmanship, innovation, and industry-standard practices—built to last, designed to impress.
            </p>

          </div>
        </motion.div>
        <div
          className="relative group"
          onMouseEnter={() => setIsSliderHovered(true)}
          onMouseLeave={() => setIsSliderHovered(false)}
        >
            <div className='absolute right-0 top-[-60px] '>  <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
          >
            View All Projects <ChevronsRight size={18} className="ml-2" />
          </button></div>
          
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)}
            className="absolute z-10 left-12 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-yellow-200 w-[70px] h-[70px] rounded-full flex items-center justify-center transition"
            aria-label="Previous"
          >
            &lt;
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="text-center mb-16 lg:mb-20"
          >
            <div className="flex gap-4 overflow-hidden px-10">

              {visibleProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`relative rounded-xl shadow-lg transition-all duration-500 cursor-pointer overflow-hidden
                flex-shrink-0
                ${hoveredId === null
                      ? 'w-1/5' // Equal width by default
                      : hoveredId === project.id
                        ? 'w-2/3' // Expanded width
                        : 'w-[calc(10%-16px)] opacity-60 scale-[0.98]' // Shrunk width
                    }`}
                  style={{
                    transformOrigin: index < currentIndex ? 'left center' : 'right center'
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold text-center px-4">{project.title}</h3>
                  </div>
                </div>
              ))}

            </div>
          </motion.div>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}
            className="absolute z-10 right-1 top-1/2 transform -translate-y-1/2 bg-white shadow-md hover:bg-yellow-300 w-[70px] h-[70px] rounded-full flex items-center justify-center transition"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>


        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-yellow-500 w-4' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition"
              >
                &times;
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
