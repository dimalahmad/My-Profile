import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaGithub, FaGitlab, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [currentImages, setCurrentImages] = useState({});
  // Leadership & Management Roles
  const leadershipProjects = [
    {
      id: 1,
      title: 'Website Sistem Manajemen Obat – Klinik Hewan dr. Hendrik',
      role: 'System Analyst',
      type: 'Mitra Project',
      period: 'Agustus 2024 – Juni 2025',
      description: 'Responsible for requirement analysis, data flow design, and testing documentation for a web-based medicine management system at Klinik Hewan dr. Hendrik.',
      skills: ['System Analysis', 'Product Documentation', 'Testing', 'Team Collaboration'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/pad-1.png', alt: 'PAD Project 1' },
        { src: '/assets/projects/pad-2.png', alt: 'PAD Project 2' }
      ]
    },
    {
      id: 2,
      title: 'Website Company Profile and Store – PT INVIRO',
      role: 'Product Manager',
      type: 'Mitra Project',
      period: 'Agustus 2025 – Present',
      description: 'Managed the product development roadmap, coordinated developer and design teams, and ensured timely delivery of the integrated company profile and store website for PT INVIRO.',
      skills: ['Product Management', 'Planning', 'Communication', 'UI/UX Strategy', 'Team Coordination'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/pmld-1.png', alt: 'PMLD Project 1' },
        { src: '/assets/projects/pmld-2.png', alt: 'PMLD Project 2' }
      ]
    },
    {
      id: 3,
      title: 'GaiaEcho – Carbon Calculator & Waste Bank Map',
      role: 'QA & Documentation Supervisor',
      type: 'Non-Mitra Project',
      period: 'Juli – Agustus 2024',
      description: 'Led quality testing and user experience evaluation for the GaiaEcho web app — a green-tech initiative that calculates personal carbon footprints and locates nearby waste banks.',
      skills: ['QA Testing', 'Research', 'Documentation', 'UX Validation'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/gaiaecho-1.png', alt: 'GaiaEcho Project 1' },
        { src: '/assets/projects/gaiaecho-2.png', alt: 'GaiaEcho Project 2' }
      ]
    },
    {
      id: 4,
      title: 'EduKita – Education Database for Indonesia',
      role: 'System Analyst',
      type: 'Non-Mitra Project',
      period: 'Februari – Juni 2025',
      description: 'Conducted analysis, structured data flow, and collaborated with the frontend team to ensure smooth data visualization in the EduKita education database website.',
      skills: ['System Design', 'API Integration', 'Data Analysis', 'Collaboration'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/edukita-1.png', alt: 'EduKita Project 1' },
        { src: '/assets/projects/edukita-2.png', alt: 'EduKita Project 2' }
      ]
    }
  ];

  // Development Projects
  const developmentProjects = [
    {
      id: 5,
      title: 'Blangkis – E-commerce Store Platform',
      role: 'Fullstack Developer',
      type: 'Development',
      period: '5–7 Juli 2025',
      description: 'Built an e-commerce web application with store management, cart, checkout, RajaOngkir API integration, real-time order tracking, admin dashboard, and invoice management.',
      skills: ['React', 'Node.js', 'Express', 'MySQL', 'RajaOngkir API', 'Payment Gateway', 'Tailwind CSS'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/blangkis-1.png', alt: 'Blangkis Project 1' },
        { src: '/assets/projects/blangkis-2.png', alt: 'Blangkis Project 2' },
        { src: '/assets/projects/blangkis-3.png', alt: 'Blangkis Project 3' }
      ]
    },
    {
      id: 6,
      title: 'Android Development Projects',
      role: 'Mobile Developer',
      type: 'Development',
      period: '1 Semester 2025',
      description: 'A collection of Android-based projects built during one semester, covering CRUD operations, UI design, API integration, and Firebase authentication.',
      skills: ['Kotlin', 'Android Studio', 'Firebase', 'Retrofit'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/android-1.png', alt: 'Android Project 1' },
        { src: '/assets/projects/android-2.png', alt: 'Android Project 2' }
      ]
    },
    {
      id: 7,
      title: 'Web Development Projects',
      role: 'Frontend Developer',
      type: 'Development',
      period: 'Perkuliahan 2024–2025',
      description: 'A portfolio of various frontend projects developed during coursework, focusing on interactivity, API usage, and responsive web design.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/web-1.png', alt: 'Web Project 1' },
        { src: '/assets/projects/web-2.png', alt: 'Web Project 2' }
      ]
    },
    {
      id: 8,
      title: 'PAD Autotesting Suite',
      role: 'QA Developer',
      type: 'Development',
      period: 'Juni 2025',
      description: 'Developed an automated testing framework for the PAD project (Klinik Hewan dr. Hendrik) using Jest and Cypress. The system automates UI, API, and data validation testing pipelines to ensure software stability and data integrity across all modules.',
      skills: ['Cypress', 'Jest', 'Node.js', 'CI/CD', 'GitHub Actions', 'Automation Testing'],
      github: 'https://github.com/dimalahmad',
      gitlab: 'https://gitlab.com/dimalahmad',
      images: [
        { src: '/assets/projects/autotesting-pad-1.png', alt: 'PAD Autotesting 1' },
        { src: '/assets/projects/autotesting-pad-2.png', alt: 'PAD Autotesting 2' }
      ]
    }
  ];

  const setCurrentImage = (projectId, index) => {
    setCurrentImages(prev => ({
      ...prev,
      [projectId]: index
    }));
  };

  const nextImage = (projectId, totalImages) => {
    setCurrentImages(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId, totalImages) => {
    setCurrentImages(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getPlaceholderImage = (alt) => {
    return `https://via.placeholder.com/800x600/1a1a1a/d4af37?text=${encodeURIComponent(alt)}`;
  };

  const getTypeColor = (type) => {
    if (type === 'Mitra Project') return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (type === 'Non-Mitra Project') return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    return 'bg-green-500/20 text-green-400 border-green-500/30';
  };

  return (
    <section 
      id="projects" 
      className="py-12 md:py-16 relative overflow-x-hidden overflow-y-visible" 
      style={{ 
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
        minHeight: '100vh' 
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 md:right-10 w-64 md:w-96 h-96 bg-gold/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 py-6 md:py-8 px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeIn("down", 0.1)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient-premium mb-6 md:mb-8"
          >
            Featured Projects
          </motion.h2>
          
          {/* Gold Divider */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
            <div className="mx-4 w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
          </div>
          
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Showcasing my journey in leadership, management, and development
          </motion.p>
        </motion.div>
      
        {/* Leadership & Management Roles Section */}
        <motion.div
          variants={fadeIn("down", 0.15)}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <motion.h3
            variants={fadeIn("down", 0.15)}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-6"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Leadership & Management Roles
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {leadershipProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", index * 0.1)}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 25px rgba(255,215,0,0.3)" 
                }}
                className="group relative backdrop-blur-md bg-black/30 border border-gold/20 rounded-2xl overflow-hidden shadow-lg shadow-gold/10 hover:border-gold/50 transition-all duration-300 ease-in-out"
              >
                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-300 ease-in-out pointer-events-none backdrop-blur-sm" />

                {/* Card Content */}
                <div className="p-6 md:p-8 relative z-10">
                  {/* Type Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Image Slider */}
                  {project.images && project.images.length > 0 && (() => {
                    const currentIndex = currentImages[project.id] || 0;
                    const totalImages = project.images.length;
                    const currentImage = project.images[currentIndex];

                    return (
                      <div className="relative mb-6 rounded-xl overflow-hidden bg-dark-gray/50" style={{ minHeight: '250px' }}>
                        {/* Current Image */}
                        <div className="relative w-full" style={{ minHeight: '250px' }}>
                          {currentImage.link ? (
                            <motion.a
                              href={currentImage.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ opacity: 0.9 }}
                              className="block w-full h-full cursor-pointer group/image-link relative"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <img
                                src={currentImage.src}
                                alt={currentImage.alt}
                                className="w-full h-full object-cover transition-opacity duration-300"
                                style={{ minHeight: '250px', maxHeight: '400px' }}
                                onError={(e) => {
                                  e.target.src = getPlaceholderImage(currentImage.alt);
                                }}
                                loading="lazy"
                              />
                              {/* Link Indicator */}
                              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-gold/30 opacity-0 group-hover/image-link:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                <span className="text-xs text-gold font-medium">Click to view</span>
                              </div>
                            </motion.a>
                          ) : (
                            <img
                              src={currentImage.src}
                              alt={currentImage.alt}
                              className="w-full h-full object-cover"
                              style={{ minHeight: '250px', maxHeight: '400px' }}
                              onError={(e) => {
                                e.target.src = getPlaceholderImage(currentImage.alt);
                              }}
                              loading="lazy"
                            />
                          )}

                          {/* Navigation Arrows */}
                          {totalImages > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevImage(project.id, totalImages);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-gold rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-gold/30 hover:border-gold/50"
                                aria-label="Previous image"
                              >
                                <FaChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage(project.id, totalImages);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-gold rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-gold/30 hover:border-gold/50"
                                aria-label="Next image"
                              >
                                <FaChevronRight className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>

                        {/* Navigation Dots */}
                        {totalImages > 1 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImage(project.id, idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  idx === currentIndex
                                    ? 'bg-gold w-6'
                                    : 'bg-gray-500 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* Title */}
                  <h4 className="text-xl md:text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {project.title}
                  </h4>

                  {/* Role & Period */}
                  <div className="mb-4">
                    <p className="text-lg text-white font-semibold mb-1">
                      {project.role}
                    </p>
                    <p className="text-sm md:text-base text-gray-400">
                      {project.period}
                    </p>
              </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, skillIndex) => (
                    <motion.span
                        key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-xs md:text-sm text-gold group-hover:border-gold/50 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Repository Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: '#ffffff' }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm md:text-base"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="hover:underline">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={project.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: '#FC6D26' }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gold hover:text-orange-500 transition-colors duration-300 text-sm md:text-base"
                    >
                      <FaGitlab className="w-5 h-5" />
                      <span className="hover:underline">GitLab</span>
                    </motion.a>
                  </div>
              </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
          </motion.div>
        </motion.div>

        {/* Development Projects Section */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="mt-12"
        >
          <motion.h3
            variants={fadeIn("down", 0.2)}
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-6"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Development Projects
          </motion.h3>

          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {developmentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", (leadershipProjects.length + index) * 0.1)}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 25px rgba(255,215,0,0.3)" 
                }}
                className="group relative backdrop-blur-md bg-black/30 border border-gold/20 rounded-2xl overflow-hidden shadow-lg shadow-gold/10 hover:border-gold/50 transition-all duration-300 ease-in-out"
              >
                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-300 ease-in-out pointer-events-none backdrop-blur-sm" />

                {/* Card Content */}
                <div className="p-6 md:p-8 relative z-10">
                  {/* Type Badge */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(project.type)}`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Image Slider */}
                  {project.images && project.images.length > 0 && (
                    <div className="relative mb-6 rounded-xl overflow-hidden bg-dark-gray/50" style={{ minHeight: '250px' }}>
                      {(() => {
                        const currentIndex = currentImages[project.id] || 0;
                        const totalImages = project.images.length;
                        const currentImage = project.images[currentIndex];

                        return (
                          <>
                            {/* Current Image */}
                            <div className="relative w-full" style={{ minHeight: '250px' }}>
                              {currentImage.link ? (
                                <motion.a
                                  href={currentImage.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ opacity: 0.9 }}
                                  className="block w-full h-full cursor-pointer group/image-link relative"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <img
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                    style={{ minHeight: '250px', maxHeight: '400px' }}
                                    onError={(e) => {
                                      e.target.src = getPlaceholderImage(currentImage.alt);
                                    }}
                                    loading="lazy"
                                  />
                                  {/* Link Indicator */}
                                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-gold/30 opacity-0 group-hover/image-link:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <span className="text-xs text-gold font-medium">Click to view</span>
                                  </div>
                                </motion.a>
                              ) : (
                                <img
                                  src={currentImage.src}
                                  alt={currentImage.alt}
                                  className="w-full h-full object-cover"
                                  style={{ minHeight: '250px', maxHeight: '400px' }}
                                  onError={(e) => {
                                    e.target.src = getPlaceholderImage(currentImage.alt);
                                  }}
                                  loading="lazy"
                                />
                              )}

                              {/* Navigation Arrows */}
                              {totalImages > 1 && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      prevImage(project.id, totalImages);
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-gold rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-gold/30 hover:border-gold/50"
                                    aria-label="Previous image"
                                  >
                                    <FaChevronLeft className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      nextImage(project.id, totalImages);
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-gold rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-gold/30 hover:border-gold/50"
                                    aria-label="Next image"
                                  >
                                    <FaChevronRight className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                            </div>

                            {/* Navigation Dots */}
                            {totalImages > 1 && (
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {project.images.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImage(project.id, idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      idx === currentIndex
                                        ? 'bg-gold w-6'
                                        : 'bg-gray-500 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to image ${idx + 1}`}
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  )}

                  {/* Title */}
                  <h4 className="text-xl md:text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {project.title}
                  </h4>

                  {/* Role & Period */}
                  <div className="mb-4">
                    <p className="text-lg text-white font-semibold mb-1">
                      {project.role}
                    </p>
                    <p className="text-sm md:text-base text-gray-400">
                      {project.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 text-justify">
                    {project.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-xs md:text-sm text-gold group-hover:border-gold/50 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Repository Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: '#ffffff' }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm md:text-base"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="hover:underline">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={project.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: '#FC6D26' }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gold hover:text-orange-500 transition-colors duration-300 text-sm md:text-base"
                    >
                      <FaGitlab className="w-5 h-5" />
                      <span className="hover:underline">GitLab</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
