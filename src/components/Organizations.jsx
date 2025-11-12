import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaGlobe,
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';

const Organizations = () => {
  const [currentImages, setCurrentImages] = useState({});

  const organizations = [
    {
      id: 1,
      position: 'Head of Strategic Studies and Advocacy Division',
      organization: 'ASSETS UGM',
      period: 'Feb 2025 - Present · 10 mos',
      description: 'Leading initiatives to analyze and advocate for academic policies, conducting in-depth research on campus policies, formulating strategic recommendations, and organizing discussions to raise student awareness.',
      skills: ['Strategic Analysis', 'Research Skills', 'Advocacy', 'Public Speaking', 'Negotiation', 'Leadership'],
      images: [
        { src: '/assets/organizations/assets-head-1.png', alt: 'ASSETS Head 1', link: 'https://www.instagram.com/p/DKUXvXeTWEb/?img_index=1' },
        { src: '/assets/organizations/assets-head-2.png', alt: 'ASSETS Head 2', link: 'https://www.instagram.com/p/DPc_Ii3E7nS/?img_index=3' },
        { src: '/assets/organizations/assets-head-3.png', alt: 'ASSETS Head 3', link: 'https://trpl.sv.ugm.ac.id/2025/11/07/hearing-trpl-sv-ugm-2025-diskusi-terbuka-mahasiswa-dan-dosen-untuk-perbaikan-akademik-fasilitas/' },
        { src: '/assets/organizations/assets-head-4.png', alt: 'ASSETS Head 4', link: 'https://trpl.sv.ugm.ac.id/2025/04/21/techxchange-assets-ugm-x-himadira-telkom-university/' },
        { src: '/assets/organizations/assets-head-5.png', alt: 'ASSETS Head 5', link: 'https://trpl.sv.ugm.ac.id/2025/03/15/menjalin-kebersamaan-sinergi-melalui-first-gathering-assets/' }
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/assets_ugm/'
      }
    },
    {
      id: 2,
      position: 'Vice Head of Competitive Programming Division',
      organization: 'KOMATIK UGM',
      period: 'Jan 2025 - Present · 11 mos',
      description: 'Managing and coordinating training programs and competitions at national/international levels, analyzing algorithm trends, organizing workshops and coding contests.',
      skills: ['Competitive Programming', 'Data Structures', 'Problem Solving', 'Event Management', 'Teamwork'],
      images: [
        { src: '/assets/organizations/komatik-vice-1.png', alt: 'KOMATIK Vice 1', link: 'https://www.instagram.com/p/DGXFsnoxl_q/?img_index=2' },
        { src: '/assets/organizations/komatik-vice-2.png', alt: 'KOMATIK Vice 2'},
        { src: '/assets/organizations/komatik-vice-3.jpg', alt: 'KOMATIK Vice 3'},
        { src: '/assets/organizations/komatik-vice-4.png', alt: 'KOMATIK Vice 4'},
        { src: '/assets/organizations/komatik-vice-5.jpg', alt: 'KOMATIK Vice 5'}
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/komatikugm/'
      }
    },
    {
      id: 3,
      position: 'Staff of Strategy',
      organization: 'ASSETS UGM',
      period: 'Mar 2024 - Feb 2025 · 1 yr',
      description: 'Serving as staff of KASTRAD division, accommodating TRPL student aspirations, communicating research findings, and assisting in welcoming new students.',
      skills: ['Problem Analysis', 'Public Speaking', 'Research Skills', 'Communication', 'Time Management'],
      images: [
        { src: '/assets/organizations/assets-staff-1.png', alt: 'ASSETS Staff 1', link: 'https://www.instagram.com/p/C42dXCiv0Vs/?img_index=3' },
        { src: '/assets/organizations/assets-staff-2.png', alt: 'ASSETS Staff 2', link: 'https://trpl.sv.ugm.ac.id/2024/11/02/hearing-prodi-trpl-2024-wadah-aspirasi-mahasiswa-trpl/' },
        { src: '/assets/organizations/assets-staff-3.png', alt: 'ASSETS Staff 3', link: 'https://trpl.sv.ugm.ac.id/2024/11/30/liga-trpl-2024-ajang-kompetisi-solidaritas-dan-prestasi-mahasiswa/' }
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/assets_ugm/'
      }
    },
    {
      id: 4,
      position: 'Member of ASGAMA',
      organization: 'KOMATIK UGM',
      period: 'Feb 2024 - Feb 2025 · 1 yr 1 mo',
      description: 'Building foundation in networking concepts through hands-on learning with Cisco tools, developing skills for network management and cybersecurity.',
      skills: ['Cybersecurity', 'Network Security', 'Cisco Networking', 'Problem Solving', 'Technical Learning'],
      images: [
        { src: '/assets/organizations/asgama-1.png', alt: 'ASGAMA 1', link: 'https://www.instagram.com/p/C4vW1VzPJD2/?img_index=9' }
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/komatikugm/'
      }
    },
    {
      id: 5,
      position: 'Sub-coordinator of Design, Documentation & Decoration',
      organization: 'SENOPATI UGM',
      period: 'Nov 2024 - Feb 2025 · 4 mos',
      description: 'Leading creative team in producing digital/print promotional materials, managing event visual identity, ensuring high-quality photo/video documentation.',
      skills: ['Graphic Design', 'Creative Direction', 'Team Coordination', 'Event Documentation', 'Leadership'],
      images: [
        { src: '/assets/organizations/senopati-1.png', alt: 'SENOPATI 1', link: 'https://www.instagram.com/p/DEMSD5fPxsd/?img_index=2' },
        { src: '/assets/organizations/senopati-2.png', alt: 'SENOPATI 2'}
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/senopati.ugm/'
      }
    },
    {
      id: 6,
      position: 'Staff of Medinfo',
      organization: 'KMPP YOGYAKARTA',
      period: 'Apr 2024 - Present · 1 yr 8 mos',
      description: 'Contributing to content creation and publication on Instagram, managing posting schedules, editing engaging content, interacting with audience.',
      skills: ['Public Relations', 'Editing', 'Social Media', 'Communication', 'Content Creation'],
      images: [
        { src: '/assets/organizations/kmpp-1.png', alt: 'KMPP 1', link: 'https://www.instagram.com/p/C9SFTp0h6qh/?img_index=3' },
        { src: '/assets/organizations/kmpp-2.png', alt: 'KMPP 2'}
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/kmpp.ugm/'
      }
    },
    {
      id: 7,
      position: 'Staff of HUMPUB',
      organization: 'TECH ENTHUSIAST DAY',
      period: 'Sep 2024 - Nov 2024 · 3 mos',
      description: 'Served in the HUMPUB (Public Relations & Publications) division, responsible for building the organization\'s public image through communication strategies, content creation, and audience engagement.',
      skills: ['Public Relations', 'Public Speaking', 'Communication', 'Teamwork', 'Creative Strategy'],
      images: [
        { src: '/assets/organizations/humpub-1.jpg', alt: 'HUMPUB 1'}
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/techenthusiastday_ugm/'
      }
    },
    {
      id: 8,
      position: 'Liaison between the committee and new students.',
      organization: 'SERIES UGM - Software Engineering Oriented Study',
      period: 'Aug 2024 - Dec 2024 · 5 mos',
      description: 'Acted as the liaison between the committee and new students in the Software Engineering Oriented Study program at the Vocational School of Universitas Gadjah Mada, focusing on communication and coordination.',
      skills: ['Communication', 'Coordination', 'Mentoring', 'Public Relations', 'Team Management'],
      images: [
        { src: '/assets/organizations/series-1.png', alt: 'SERIES 1', link: 'https://www.instagram.com/p/C_lIcvFyjVd/?img_index=5' },
        { src: '/assets/organizations/series-2.jpg', alt: 'SERIES 2'},
        { src: '/assets/organizations/series-3.jpg', alt: 'SERIES 3'}
      ],
      socialLinks: {
        instagram: 'https://www.instagram.com/series.ugm/'
      }
    },
    {
      id: 9,
      position: 'Participant (Competitive Programming Division)',
      organization: 'Kontingen UGM - GEMASTIK XVII',
      period: 'Juni 2024 · 1 month',
      description: 'Represented Universitas Gadjah Mada in the National Student Competition in Technology, Information, and Communication (GEMASTIK XVII), focusing on algorithmic problem solving and teamwork.',
      skills: ['Competitive Programming', 'Algorithm Design', 'Teamwork', 'Problem Solving', 'National Competition'],
      images: [
        { src: '/assets/organizations/gemastik-2024-1.png', alt: 'GEMASTIK 2024 1' }
      ],
      socialLinks: {}
    },
    {
      id: 10,
      position: 'Participant (Product Development Division)',
      organization: 'Kontingen UGM - GEMASTIK XVIII',
      period: 'Agustus 2025 · 1 month',
      description: 'Selected as a delegate for GEMASTIK XVIII representing UGM in the Product Development Division, focusing on data-driven innovation and human-centered solutions.',
      skills: ['Product Development', 'Innovation', 'Design Thinking', 'Team Collaboration', 'UX/UI'],
      images: [
        { src: '/assets/organizations/gemastik-2025-1.png', alt: 'GEMASTIK 2025 1' }
      ],
      socialLinks: {}
    },
    {
      id: 11,
      position: 'Participant (Innovation and Entrepreneurship)',
      organization: 'Kontingen UGM - LIDM 2025',
      period: 'September 2025 · 1 month',
      description: 'Representing Universitas Gadjah Mada in LIDM 2025, emphasizing technology-driven innovation, entrepreneurship, and digital learning transformation.',
      skills: ['Innovation', 'Entrepreneurship', 'Education Technology', 'Research', 'Presentation'],
      images: [
        { src: '/assets/organizations/lidm-2025-1.png', alt: 'LIDM 2025 1' }
      ],
      socialLinks: {}
    },
    {
      id: 12,
      position: 'Finalist',
      organization: 'Code 2024 Competition',
      period: 'Agustus 2024 · 1 month',
      description: 'Achieved finalist position in the Code 2024 competition, showcasing programming and problem-solving capabilities through analytical and creative solutions.',
      skills: ['Programming', 'Problem Solving', 'Data Analysis', 'Competition', 'Creativity'],
      images: [
        { src: '/assets/organizations/code-2024-1.png', alt: 'Code 2024 1' },
        { src: '/assets/organizations/code-2024-2.png', alt: 'Code 2024 2' , link: 'https://www.instagram.com/p/C_S72Z5TdeH/?img_index=2' }
      ],
      socialLinks: {}
    }
  ];

  const setCurrentImage = (orgId, index) => {
    setCurrentImages(prev => ({
      ...prev,
      [orgId]: index
    }));
  };

  const nextImage = (orgId, totalImages) => {
    setCurrentImages(prev => ({
      ...prev,
      [orgId]: ((prev[orgId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (orgId, totalImages) => {
    setCurrentImages(prev => ({
      ...prev,
      [orgId]: ((prev[orgId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const getPlaceholderImage = (alt) => {
    return `https://via.placeholder.com/800x600/1a1a1a/d4af37?text=${encodeURIComponent(alt)}`;
  };

  return (
    <section id="organizations" className="py-20 md:py-28 relative overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
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

      <div className="container-custom relative z-10 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
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
            Organizations & Volunteering
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
            Showcasing my journey in organizational leadership, community engagement, and collaborative impact
          </motion.p>
        </motion.div>

        {/* Organizations Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {organizations.map((org, index) => {
            const currentIndex = currentImages[org.id] || 0;
            const totalImages = org.images.length;

            return (
              <>
                {/* Separator before Competition entries */}
                {index === 8 && (
                  <motion.div
                    key={`separator-${org.id}`}
                    variants={fadeIn("down", 0.1)}
                    className="col-span-1 md:col-span-2 mb-4 md:mb-8"
                  >
                    <div className="flex items-center justify-center mb-6 md:mb-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
                      <div className="mx-4 w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full"></div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-gradient-premium px-4">
                        Competition & Delegation
                      </h3>
                      <div className="mx-4 w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full"></div>
                      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
                    </div>
                  </motion.div>
                )}
                <motion.div
                key={org.id}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ scale: 1.02 }}
                className="group relative backdrop-blur-md bg-black/30 border border-gold/20 rounded-2xl overflow-hidden shadow-lg shadow-gold/10 hover:border-gold/50 transition-all duration-300"
              >
                {/* Card Content */}
                <div className="p-6 md:p-8">
                  {/* Header: Position + Organization + Period */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors">
                      {org.position}
                    </h3>
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <p className="text-lg md:text-xl text-white font-semibold">
                        {org.organization}
                      </p>
                      {/* Social Links - Di sebelah Organization */}
                      <div className="flex items-center gap-2">
                        {org.socialLinks.instagram && (
                          <motion.a
                            href={org.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#E4405F' }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                            aria-label="Instagram"
                          >
                            <FaInstagram className="w-5 h-5" />
                          </motion.a>
                        )}
                        {org.socialLinks.linkedin && (
                          <motion.a
                            href={org.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#0077B5' }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                        {org.socialLinks.github && (
                          <motion.a
                            href={org.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#ffffff' }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                          >
                            <FaGithub className="w-5 h-5" />
                          </motion.a>
                        )}
                        {org.socialLinks.website && (
                          <motion.a
                            href={org.socialLinks.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, color: '#d4af37' }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-gold transition-colors duration-300"
                            aria-label="Website"
                          >
                            <FaGlobe className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-400">
                      {org.period}
                    </p>
                  </div>

                  {/* Image Slider */}
                  <div className="relative mb-6 rounded-xl overflow-hidden bg-dark-gray/50" style={{ minHeight: '250px' }}>
                    {totalImages > 0 ? (
                      <>
                        {/* Current Image */}
                        <div className="relative w-full" style={{ minHeight: '250px' }}>
                          {org.images[currentIndex].link ? (
                            <motion.a
                              href={org.images[currentIndex].link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ opacity: 0.9 }}
                              className="block w-full h-full cursor-pointer group/image-link relative"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <img
                                src={org.images[currentIndex].src}
                                alt={org.images[currentIndex].alt}
                                className="w-full h-full object-cover transition-opacity duration-300"
                                style={{ minHeight: '250px', maxHeight: '400px' }}
                                onError={(e) => {
                                  e.target.src = getPlaceholderImage(org.images[currentIndex].alt);
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
                              src={org.images[currentIndex].src}
                              alt={org.images[currentIndex].alt}
                              className="w-full h-full object-cover"
                              style={{ minHeight: '250px', maxHeight: '400px' }}
                              onError={(e) => {
                                e.target.src = getPlaceholderImage(org.images[currentIndex].alt);
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
                                  prevImage(org.id, totalImages);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 text-gold rounded-full transition-all duration-300 z-10 backdrop-blur-sm border border-gold/30 hover:border-gold/50"
                                aria-label="Previous image"
                              >
                                <FaChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage(org.id, totalImages);
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
                            {org.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImage(org.id, idx);
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
                    ) : (
                      <div className="w-full flex items-center justify-center" style={{ minHeight: '250px' }}>
                        <div className="text-center text-gray-500">
                          <p className="text-sm">No images available</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 text-justify">
                    {org.description}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {org.skills.map((skill, skillIndex) => (
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
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
              </>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Organizations;

