import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaArrowRight } from 'react-icons/fa';



const cvideo = "/construction-hero.mp4";
const poster = "/Hero.png";


const HomePage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Performance-optimized video loading
  useEffect(() => {
    const videoTimer = setTimeout(() => setShowVideo(true), 800);
    return () => clearTimeout(videoTimer);
  }, []);



  return (
    <section>
    <div className="relative overflow-hidden">
      
      <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-black/40  z-10" />

        
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-3xl"
          >
            

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-outline">
             <strong> <span className="block mb-2 ">GTA CIVILS & HIGHWAYS</span></strong>
              <span className="text-yellow-400 block">Built to Last Generations</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Since 1998, we've delivered <strong>250+ commercial projects</strong> with 
              <strong> zero safety incidents</strong>, combining cutting-edge technology 
              with old-world craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center">
                Get Quote
                <FaArrowRight className="ml-2" />
              </button></a>
              <a href="/projects">
              <button className="bg-transparent border-2 border-white hover:bg-white/10 py-4 px-8 rounded-lg transition-all flex items-center justify-center">
                View Projects
              </button></a>
            </div>
          </motion.div>
        </div>

        {/* Background Media */}
        <div className="absolute inset-0 overflow-hidden">
          {showVideo ? (
            <video
            src={cvideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={poster}
              className="w-full h-full object-cover"
              onLoadedData={() => setIsVideoLoaded(true)}
            >
            </video>
          ) : (
            <img 
              src={poster} 
              alt="Construction site" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>


      </section>
    </div>
    </section>
  );
};

export default HomePage;