import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CgSpinner } from 'react-icons/cg';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaHardHat,
  FaCalendarAlt,
  FaClock,
  FaTools,
  FaBuilding,
  FaTruck
} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import constructionSite from '../../assets/hero.png';
import truck from '../../assets/Contactus.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'Residential Construction',
    'Commercial Building',
    'Road & Highway',
    'Renovation',
    'Structural Repair',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.message.trim()) newErrors.message = 'Please describe your project';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error('Please fill all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mkgjzowk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          company: 'GTA CIVILS & HIGHWAYS'
        }),
      });

      if (response.ok) {
        toast.success('Your construction inquiry has been sent! We\'ll contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('There was an error submitting your construction inquiry. Please call us directly.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-500 text-white py-32 align-center">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
         
                 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-6">
              
              <h1 className="text-4xl md:text-5xl font-bold">
                Contact <span className="text-yellow-400">GTA CIVILS & HIGHWAYS</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our construction experts to discuss your next project
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+11234567890" 
                className="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
              <a 
                href="mailto:contact@gtacivils.com" 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                <FaEnvelope className="mr-2" /> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ToastContainer position="top-center" autoClose={5000} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="bg-yellow-600 text-white p-6">
              <h2 className="text-2xl font-bold">Construction Inquiry Form</h2>
              <p className="text-yellow-100">Complete this form for a free consultation</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                  placeholder="John Smith"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.projectType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                >
                  <option value="">Select Project Type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={10}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500`}
                  placeholder="Describe your construction project, timeline, and any specific requirements..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-lg shadow-md transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
              >
                {isSubmitting ? (
                  <button disabled className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center">
  <CgSpinner className="animate-spin h-5 w-5 mr-2" />
  Submitting...
</button>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaHardHat className="mr-2" /> Get Free Consultation
                  </span>
                )}
              </button>
            </form>
          </motion.div>

           



           {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
               {/* Image Card */}
            <div className="relative rounded-xl shadow-xl overflow-hidden h-64">
              <img 
                src={constructionSite} 
                alt="GTA CIVILS construction site" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Our Construction Projects</h3>
                  <p className="text-yellow-200">View our portfolio of completed works</p>
                </div>
              </div>
            </div>
              {/* Contact Cards */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                      <FaPhone className="text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                      <p className="text-sm text-gray-500 mt-1">24/7 Emergency Service Available</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">contact@abcconstruction.com</p>
                      <p className="text-sm text-gray-500 mt-1">Response within 2 business hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Headquarters</h4>
                      <p className="text-gray-600">64 Quebec Road, Ilford</p>
                      <p className="text-gray-600">Englang, IG2 6AN</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-yellow-500 mr-3" />
                      <span className="font-medium">Monday - Friday</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-gray-400 mr-2" />
                      <span>7:00 AM - 5:00 PM</span>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-yellow-500 mr-3" />
                      <span className="font-medium">Saturday</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-gray-400 mr-2" />
                      <span>8:00 AM - 12:00 PM</span>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-yellow-500 mr-3" />
                      <span className="font-medium">Sunday</span>
                    </div>
                    <span className="text-gray-400">Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div className="bg-yellow-600 text-white p-6">
            <h3 className="text-2xl font-bold">Find Our Headquarters</h3>
          </div>
          <div className="h-96 w-full">
            <iframe
              title="GTA CIVILS Location"
              className="w-full h-full"
              
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.8328925884757!2d0.07810389999999999!3d51.5712969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a69114f01c2d%3A0x678d056fdd015771!2s64%20Quebec%20Rd%2C%20Ilford%20IG2%206AN%2C%20UK!5e0!3m2!1sen!2slk!4v1747496115801!5m2!1sen!2slk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </section>

      
    </div>
  );
};

export default ContactUs;