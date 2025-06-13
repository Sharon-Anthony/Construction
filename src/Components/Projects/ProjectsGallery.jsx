import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../Components/Projects/ProjectData';
import { ArrowRight, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
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

const ProjectsGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let result = projects;
    
    if (categoryFilter !== 'all') {
      result = result.filter(project => project.category === categoryFilter);
    }
    
    if (statusFilter !== 'all') {
      result = result.filter(project => project.status === statusFilter);
    }
    
    setFilteredProjects(result);
  }, [categoryFilter, statusFilter]);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateProject = (direction) => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    } else {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    }
    
    setSelectedProject(filteredProjects[newIndex]);
  };

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'renovation', name: 'Renovation' },
    { id: 'design', name: 'Design' }
  ];

  const statuses = [
    { id: 'all', name: 'All Statuses' },
    { id: 'completed', name: 'Completed' },
    { id: 'ongoing', name: 'Ongoing' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our completed projects that showcase our craftsmanship, innovation, and attention to detail
          </p>
        </motion.div>

        {/* Dual Filter Controls */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Status Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {statuses.map((status) => (
              <button
                key={status.id}
                onClick={() => setStatusFilter(status.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  statusFilter === status.id
                    ? 'bg-green-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {status.name}
              </button>
            ))}
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  categoryFilter === category.id
                    ? 'bg-yellow-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="relative h-64 w-full overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
                  project.status === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-gray-900'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                    <button className="mt-3 flex items-center text-white text-sm font-medium">
                      View Project <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {project.status === 'completed' 
                        ? `Completed: ${project.completionDate || project.date}` 
                        : `Target: ${project.targetCompletion}`}
                    </p>
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {project.category || 'Construction'}
                  </span>
                </div>
                {/* Progress bar for ongoing projects */}
                {project.status === 'ongoing' && project.progress && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full" 
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                  </div>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {project.location || 'Various Locations'}
                  </div>
                  <button 
                    onClick={() => openModal(project)}
                    className="text-yellow-500 hover:text-yellow-600 text-sm font-medium flex items-center"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-4">We don't have any projects matching these filters</p>
            <button
              onClick={() => {
                setCategoryFilter('all');
                setStatusFilter('all');
              }}
              className="text-yellow-500 hover:text-yellow-600 font-medium"
            >
              View all projects
            </button>
          </motion.div>
        )}

        {/* Project Modal */}
        {selectedProject && (
          <div
            className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 ${
              isFullscreen ? 'p-0' : ''
            }`}
            onClick={closeModal}
          >
            <div
              className={`bg-white ${
                isFullscreen ? 'w-full h-full rounded-none' : 'rounded-2xl max-w-6xl w-full max-h-[90vh]'
              } overflow-hidden relative`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-gray-800 text-white hover:bg-gray-700 rounded-full p-2 transition"
              >
                <X size={20} />
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="absolute top-4 right-16 z-20 bg-gray-800 text-white hover:bg-gray-700 rounded-full p-2 transition"
              >
                <Maximize2 size={20} />
              </button>

              {/* Navigation Arrows */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProject('prev');
                    }}
                    className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700 rounded-full p-2 transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProject('next');
                    }}
                    className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-gray-800 text-white hover:bg-gray-700 rounded-full p-2 transition"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Project Content */}
              <div className={`flex ${isFullscreen ? 'flex-col h-full' : 'flex-col lg:flex-row'}`}>
                {/* Image Section */}
                <div className={`relative ${isFullscreen ? 'h-2/4' : 'lg:w-2/3 h-96 lg:h-auto'}`}>
                  <img
                    src={selectedProject.src}
                    alt={selectedProject.title}
                    className={`w-full h-full object-cover ${
                      isFullscreen ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </div>

                {/* Details Section */}
                <div
                  className={`${
                    isFullscreen
                      ? ' overflow-y-auto p-8'
                      : 'lg:w-1/3 p-6 overflow-y-auto max-h-96 lg:max-h-full'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                      <div className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold ${
                        selectedProject.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-gray-900'
                      }`}>
                        {selectedProject.status === 'completed' ? 'Completed' : 'Ongoing'}
                      </div>
                    </div>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {selectedProject.category || 'Construction'}
                    </span>
                  </div>

                  {/* Status-specific information */}
                  <div className="mb-4">
                    {selectedProject.status === 'completed' ? (
                      <p className="text-gray-700">
                        <strong>Completed:</strong> {selectedProject.completionDate || selectedProject.date}
                      </p>
                    ) : (
                      <p className="text-gray-700">
                        <strong>Target Completion:</strong> {selectedProject.targetCompletion}
                        {selectedProject.progress && (
                          <span className="ml-2">({selectedProject.progress} done)</span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Progress bar for ongoing projects in modal */}
                  {selectedProject.status === 'ongoing' && selectedProject.progress && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>Project Progress</span>
                        <span>{selectedProject.progress}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-yellow-500 h-2.5 rounded-full" 
                          style={{ width: selectedProject.progress }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                    {selectedProject.details && (
                      <div className="prose prose-sm text-gray-600">
                        {selectedProject.details}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">PROJECT DETAILS</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700">Size: {selectedProject.size || 'N/A'}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700">Location: {selectedProject.location || 'N/A'}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700">Client: {selectedProject.client || 'Confidential'}</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700">Budget: {selectedProject.budget || 'N/A'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white mt-[100px]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaBuilding className="text-yellow-400 text-5xl mx-auto mb-6" />
            
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of certified construction professionals is ready to bring your vision to life with quality craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+442085543210" 
                className="flex items-center bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <FaPhone className="mr-2" /> Call Our Project Manager
              </a>
              <a 
                href="mailto:estimates@gtacivils.com" 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <FaEnvelope className="mr-2" /> Request a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsGallery;