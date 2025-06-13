import React, { useRef } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaHardHat,
  FaCertificate
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ConstructionFooter = () => {
  const form = useRef();
  const getNameFromEmail = (email) => {
  return email.split('@')[0]; // Takes everything before "@"
};


  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.elements.to_email.value; // Get email input
  const userName = getNameFromEmail(userEmail); // Extract name
  
    emailjs
      sendForm(
      'service_ufvrhwz',
      'template_fk6bsls',
      form.current,
      'Ig3WbIApE2v0Py8yK',
      { user_name: userName } // Optional: Pass name as extra parameter
    )
      .then(
        () => {
          toast.success('Subscribed successfully!', {
            position: "top-center",
            autoClose: 3000,
          });
          console.log('Subscribed successfully!');
          form.current.reset(); // Clear the form
        },
        (error) => {
          toast.error(`Failed to subscribe: ${error.text}`, {
            position: "top-center",
            autoClose: 5000,
          });
          console.log('Failed!');
        }
      );
  };

  return (
    <footer className="relative bg-white-500 text-gray-900 overflow-hidden">
      <ToastContainer />
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <FaHardHat className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-gray">GTA CIVILS & HIGHWAYS</h3>
            </div>
            <p className="mb-6">
              Building excellence since 1998. Licensed, bonded, and insured for all your construction needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-800 hover:text-yellow-500 transition-colors">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#" className="text-blue-500 hover:text-yellow-500 transition-colors">
                <FaLinkedin className="text-4xl" />
              </a>
              <a href="#" className="text-red-700 hover:text-yellow-500 transition-colors">
                <FaYoutube className="text-4xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray mb-6 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Projects', link: '/projects' },
                { name: 'Careers', link: '/careers' },
                { name: 'Blog', link: '/blog' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray mb-6 border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400">(123) 456-7890</p>
                  <p className="text-sm text-gray-500">24/7 Emergency Service</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">contact@abcconstruction.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-400">123 Construction Ave, Industrial Park</p>
                  <p className="text-gray-400">City, State 12345</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray mb-6 border-b border-gray-700 pb-2">
              Certifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCertificate className="text-yellow-500 mr-3" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center">
                <FaCertificate className="text-yellow-500 mr-3" />
                <span>OSHA Safety Compliant</span>
              </div>
              <div className="flex items-center">
                <FaCertificate className="text-yellow-500 mr-3" />
                <span>LEED Accredited</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray mt-8 mb-4 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex">
                <input
                  type="email"
                  name="to_email"  
                  placeholder="Your email"
                  required
                  className="bg-gray-300 px-4 py-2 rounded-l-lg w-full"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GTA CIVIL AND HIGHWAY LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ConstructionFooter;