import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronsRight } from 'lucide-react';
import { services } from '../Services/ServiceData';
import { useNavigate } from 'react-router-dom';


const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const autoplayRef = useRef();
  const isHovering = useRef(false);
  const navigate = useNavigate();

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
  });

  const startAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isHovering.current) {
        instanceRef.current?.next();
      }
    }, 4000);
  }, [instanceRef]);

  useEffect(() => {
    if (loaded) {
      startAutoplay();
    }
    return () => clearInterval(autoplayRef.current);
  }, [loaded, startAutoplay]);


  return (
    <section id="services" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 ">
            <strong> Our <span className="text-yellow-500">Construction Services</span></strong>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive building solutions from groundbreaking to completion
          </p>
        </motion.div>

        <div className="relative group">
          <div className='absolute right-0 top-[-60px] '>  <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
          >
            View All Services <ChevronsRight size={18} className="ml-2" />
          </button></div>
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current.prev()}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous service"
              >
                <ArrowLeft size={20} className="text-gray-800" />
              </button>
              <button
                onClick={() => instanceRef.current.next()}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next service"
              >
                <ArrowRight size={20} className="text-gray-800" />
              </button>
            </>
          )}

          <div
            ref={sliderRef}
            className="keen-slider pb-8"
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
          >
            {services.map((service, index) => (
              <div key={index} className="keen-slider__slide min-w-[300px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all h-full flex flex-col overflow-hidden"
                >
                  {/* Visible Content (Always Shown) */}
                  <div className="relative h-[270px] w-full">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading={index < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{service.desc}</p>
                  </div>

                  {/* Hover Overlay (Shows on hover) */}
                  <strong><div className="absolute inset-0 bg-white/70 opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2"><strong>{service.title}</strong></h3>
                      <p className="text-sm text-gray-900 mb-3">{service.desc}</p>
                      <ul className="text-sm text-gray-900 space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg shadow-sm transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/services/${service.slug}`);
                      }}
                    >
                      View Details
                    </button>
                  </div></strong>
                </motion.div>
              </div>
            ))}

          </div>

          {loaded && instanceRef.current && (
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(instanceRef.current.track.details.slides.length)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current.moveToIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-yellow-500 w-4' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          )}

        </div>

      </div>


    </section>
  );
};

export default React.memo(Services);