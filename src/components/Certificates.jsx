import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { X, FileText } from 'lucide-react';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(true);

  const certificates = [
    {
      id: 0,
      name: 'HUAWEI ICT ACADEMY',
      issuer: 'Huawei',
      year: 2025,
      credentialId: 'EBG20250625016286',
      description: 'Telah berhasil menyelesaikan studi dan ujian HCIA-AI V3.5 (Indonesian).',
      skills: ['AI', 'Machine Learning', 'Huawei ICT'],
      pdfPath: '/assets/certificates/Certificates_11.pdf'
    },
    {
      id: 1,
      name: 'Seminar Nasional AMCC 2024',
      issuer: 'Universitas AMIKOM Yogyakarta',
      year: 2024,
      credentialId: '75/C/PES-SEMNAS/AMCC-AMIKOM/IX/2024',
      description: 'Seminar nasional yang mengembangkan keahlian di Public Relations, Global Thinking, dan Analytics.',
      skills: ['Public Relations', 'Global Thinking', 'Analytics'],
      pdfPath: '/assets/certificates/Certificates_10.pdf' // Path ke file PDF di public/assets/certificates/
    },
    {
      id: 2,
      name: 'DP Database Programming with SQL Learner',
      issuer: 'Oracle',
      year: 2024,
      credentialId: '-',
      description: 'Pemahaman database, SQL, problem analysis, data modeling, dan Oracle Database.',
      skills: ['SQL', 'Oracle Database', 'Data Analysis', 'Problem Solving', 'Data Modeling'],
      pdfPath: '/assets/certificates/Certificates_09.pdf'
    },
    {
      id: 3,
      name: 'Getting Started Programming with Python',
      issuer: 'Dicoding Indonesia',
      year: 2024,
      credentialId: '4EXGKQDN9ZRL',
      description: 'Sertifikat untuk pemula Python, problem solving, algoritma, dan analisis data.',
      skills: ['Python', 'Problem Solving', 'Algorithms', 'Data Analysis'],
      pdfPath: '/assets/certificates/Certificates_08.pdf'
    },
    {
      id: 4,
      name: 'Digitalk 59 "Gamechangers: Empowering Digital Youth through Esports"',
      issuer: 'Center for Digital Society (CfDS) UGM',
      year: 2023,
      credentialId: '21/XI/DTALK/2023',
      description: 'Seminar terkait pengembangan digital youth dan esports.',
      skills: ['Digital Engagement', 'Esports', 'Youth Empowerment'],
      pdfPath: '/assets/certificates/Certificates_07.pdf'
    },
    {
      id: 5,
      name: 'Digital Experts Talk #19 "AI 101"',
      issuer: 'Center for Digital Society (CfDS) UGM x KORIKA',
      year: 2023,
      credentialId: '268/XI/DET/CfDS/2023',
      description: 'Pemahaman dasar AI dan implementasinya di berbagai sektor.',
      skills: ['AI', 'Artificial Intelligence', 'Technology'],
      pdfPath: '/assets/certificates/Certificates_06.pdf'
    },
    {
      id: 6,
      name: 'Digital Experts Talk #20 "Seberapa Penting AI bagi Akselerasi Talenta Digital Indonesia?"',
      issuer: 'Center for Digital Society (CfDS) UGM x KORIKA',
      year: 2023,
      credentialId: '594/XI/DET/CfDS/2023',
      description: 'Diskusi tentang peran AI dalam pengembangan talenta digital Indonesia.',
      skills: ['AI', 'Digital Talent', 'Technology'],
      pdfPath: '/assets/certificates/Certificates_05.pdf'
    },
    {
      id: 7,
      name: 'Intro Data Analytics',
      issuer: 'RevoU',
      year: 2023,
      credentialId: '-',
      description: 'Dasar-dasar problem solving, data analysis, data entry, dan visualisasi data.',
      skills: ['Data Analysis', 'Problem Solving', 'Data Visualization', 'Data Entry'],
      pdfPath: '/assets/certificates/Certificates_04.pdf'
    },
    {
      id: 8,
      name: 'Learning Basic Data Visualization',
      issuer: 'Dicoding Indonesia',
      year: 2023,
      credentialId: '07Z682QLRXQR',
      description: 'Dasar-dasar visualisasi data dan manajemen waktu dalam analisis data.',
      skills: ['Data Visualization', 'Time Management', 'Data Entry'],
      pdfPath: '/assets/certificates/Certificates_03.pdf'
    },
    {
      id: 9,
      name: 'How to Start Your Mobile Developer Career with Flutter',
      issuer: 'Edspert.id',
      year: 2023,
      credentialId: '-',
      description: 'Dasar Flutter, algoritma, dan problem solving untuk pengembangan mobile.',
      skills: ['Flutter', 'Mobile Development', 'Problem Solving', 'Algorithms'],
      pdfPath: '/assets/certificates/Certificates_02.pdf'
    },
    {
      id: 10,
      name: 'Start Your Career as Data Analytic with Microsoft Excel',
      issuer: 'Edspert.id',
      year: 2023,
      credentialId: '-',
      description: 'Analisis data menggunakan Microsoft Excel, termasuk data entry dan visualisasi.',
      skills: ['Excel', 'Data Analysis', 'Data Entry', 'Data Visualization'],
      pdfPath: '/assets/certificates/Certificates_01.pdf'
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setPdfLoading(true);
    document.body.style.overflow = 'hidden';
    
    // Auto-hide loading setelah 2 detik (fallback jika onLoad tidak trigger)
    setTimeout(() => {
      setPdfLoading(false);
    }, 2000);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setPdfLoading(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="certificates" className="py-20 md:py-28" style={{ backgroundColor: '#101010', minHeight: '100vh' }}>
        <div className="container-custom px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate="show"
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeIn("down", 0.1)}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient-premium mb-8"
            >
              Certificates & Achievements
            </motion.h2>
            
            {/* Gold Divider */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="flex items-center justify-center mb-8"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
              <div className="mx-4 w-2 h-2 bg-gold rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
            </motion.div>
            
            <motion.p
              variants={fadeIn("up", 0.3)}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center"
            >
              Showcasing my professional certificates and achievements in technology, data, and product analytics
            </motion.p>
          </motion.div>
        
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card group cursor-pointer relative overflow-hidden"
                onClick={() => openModal(certificate)}
              >
                {/* Certificate Image/Thumbnail */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  {/* Certificate Icon Background dengan pattern */}
                  <div className="w-full h-48 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent flex items-center justify-center relative overflow-hidden">
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.1) 10px, rgba(212, 175, 55, 0.1) 20px)`
                    }}></div>
                    {/* Icon */}
                    <FileText className="w-20 h-20 text-gold/70 relative z-10" strokeWidth={1.5} />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-gold text-black font-medium rounded-lg hover:bg-gold-light transition-colors duration-300 shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(certificate);
                      }}
                    >
                      View Certificate
                    </motion.button>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {certificate.name}
                  </h3>
                  
                  {/* Certificate Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Issuer:</span>
                      <span className="text-gray-300 font-medium">{certificate.issuer}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Year:</span>
                      <span className="text-gray-300 font-medium">{certificate.year}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">ID:</span>
                      <span className="text-gray-300 font-mono text-xs">{certificate.credentialId}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {certificate.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, tagIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        className="px-3 py-1 bg-dark-gray border border-gray-700 rounded-full text-xs text-gray-300 group-hover:border-gold/50 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9998]"
            />
            
            {/* Modal - Fullscreen-like (lebih lebar ke atas dan ke bawah) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fixed inset-2 md:inset-4 lg:inset-6 z-[9999] bg-black rounded-xl md:rounded-2xl border-2 border-gold/30 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-gold/20 bg-gradient-to-r from-gold/10 to-transparent">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gold truncate">
                    {selectedCertificate.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {selectedCertificate.issuer} • {selectedCertificate.year}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="ml-4 p-2 rounded-lg bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/50 text-gold transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden relative bg-dark-gray/30" style={{ minHeight: '500px', height: '100%' }}>
                {selectedCertificate.pdfPath ? (
                  <>
                    {/* Loading Indicator */}
                    {pdfLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-gray/80 z-10">
                        <div className="text-center">
                          <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
                          <p className="text-gold text-sm">Memuat PDF...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* PDF Viewer - Iframe */}
                    <iframe
                      key={`pdf-${selectedCertificate.id}`}
                      src={`${selectedCertificate.pdfPath}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
                      className="w-full h-full border-0"
                      title={`${selectedCertificate.name} Certificate`}
                      style={{ 
                        height: '100%',
                        width: '100%',
                        display: pdfLoading ? 'none' : 'block',
                        minHeight: '500px'
                      }}
                      onLoad={() => {
                        setTimeout(() => {
                          setPdfLoading(false);
                        }, 500);
                      }}
                      allow="fullscreen"
                    />
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full bg-dark-gray/50">
                    <div className="text-center p-8">
                      <FileText className="w-16 h-16 text-gold/50 mx-auto mb-4" />
                      <p className="text-gray-400 text-lg mb-2">PDF belum diunggah</p>
                      <p className="text-gray-500 text-sm">
                        Silakan tambahkan file PDF di <code className="text-gold">public/assets/certificates/</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 md:p-6 border-t border-gold/20 bg-gradient-to-r from-transparent to-gold/10">
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
