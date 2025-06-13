import { motion } from 'framer-motion';
import Image from '../../assets/poster.jpg';
import { BiCheckCircle } from 'react-icons/bi';
import { BsArrowDownCircle } from 'react-icons/bs';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';

const WelcomeSection = ({ 
  companyName = "GTA CIVILS & HIGHWAYS", 
  highlightColor = "text-yellow-500",
  foundingYear = 1998,
  projectsCompleted = 250,
  squareFootage = "15M+"
}) => {
  return (
    <section className="relative bg-gray-200 overflow-hidden">
     {/* Left-to-right diagonal */}
<div className="absolute top-0 left-0 w-full h-16 bg-yellow-500 transform skew-y-3 origin-left z-0" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 max-w-7xl">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-16 bg-gray-300 mr-4" />
            <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
              EST. {foundingYear}
            </span>
            <div className="h-px w-16 bg-gray-300 ml-4" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Engineering Excellence at <br />
            <span className={`${highlightColor} relative inline-block`}>
              {companyName}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[-5px] left-0 w-full h-1 bg-current origin-left "
              />
            </span>
          </h1>
        </motion.div>

        {/* Content Grid  */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image Column - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
            <img
  src={Image}
  alt="ABC Construction engineering team on site"
  width={800}
  height={800}
  className="object-cover w-full h-full"
/>

            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-900 flex items-center">
                <AiOutlineBarChart className="text-yellow-500 mr-2 text-xl" />
                  Key Metrics
                </h3>
                <div className="grid grid-cols-3 gap-4 mt-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{projectsCompleted}+</div>
                    <div className="text-xs text-gray-500">PROJECTS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{squareFootage}</div>
                    <div className="text-xs text-gray-500">SQ FT BUILT</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">SAFETY RECORD</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                As industry pioneers since {foundingYear}, we deliver mission-critical construction solutions through our proprietary TruFoundation™ system, achieving 40% greater load-bearing capacity than conventional methods.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                <HiOutlineLightningBolt className="text-yellow-500 mr-2 text-xl" />
                  Technical Superiority
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start"><BiCheckCircle className="text-yellow-500 mt-1 mr-2" /> BIM Level 3 Integrated Design</li>
                <li className="flex items-start"><BiCheckCircle className="text-yellow-500 mt-1 mr-2" /> AI-Powered Quality Control</li>
                <li className="flex items-start"><BiCheckCircle className="text-yellow-500 mt-1 mr-2" /> ISO 9001:2015 Certified</li>
                <li className="flex items-start"><BiCheckCircle className="text-yellow-500 mt-1 mr-2" /> LEED Platinum Capable</li>
              </ul>
              </div>

              <p className="text-lg leading-relaxed">
                Our 7-Stage Quality Protocol and robotic total station guidance deliver millimeter-level precision, resulting in structures that consistently exceed lifespan projections by 20-30 years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;