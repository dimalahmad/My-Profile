import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Google Analytics Individual Qualification',
      description: 'Advanced web analytics and data interpretation certification covering GA4, reporting, and data-driven insights for business growth.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      tags: ['Google Analytics', 'Web Analytics', 'Data Analysis', 'Reporting'],
      issuer: 'Google',
      date: '2024',
      credentialId: 'GA-2024-001',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'SQL for Data Science Specialization',
      description: 'Comprehensive database management and advanced querying techniques for data science applications and business intelligence.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      tags: ['SQL', 'Database', 'Data Science', 'Business Intelligence'],
      issuer: 'Coursera',
      date: '2024',
      credentialId: 'SQL-DS-2024',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Python Data Analysis Professional',
      description: 'Data manipulation and statistical analysis with Python, pandas, and numpy for extracting actionable business insights.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center',
      tags: ['Python', 'Pandas', 'Data Analysis', 'Statistics'],
      issuer: 'DataCamp',
      date: '2023',
      credentialId: 'PY-DA-2023',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Product Analytics Fundamentals',
      description: 'User behavior analysis and product metrics to drive data-informed product decisions and sustainable growth strategies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center',
      tags: ['Product Analytics', 'User Behavior', 'Metrics', 'Growth'],
      issuer: 'Product School',
      date: '2023',
      credentialId: 'PA-FUND-2023',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Advanced Excel for Business Analytics',
      description: 'Advanced Excel functions, pivot tables, and data visualization techniques for comprehensive business analytics and reporting.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&crop=center',
      tags: ['Excel', 'Pivot Tables', 'Data Visualization', 'Business Analytics'],
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'EXL-ADV-2023',
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Digital Marketing Analytics Certificate',
      description: 'Marketing performance measurement and optimization using digital analytics tools, attribution models, and ROI frameworks.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center',
      tags: ['Digital Marketing', 'Performance Marketing', 'Analytics', 'ROI'],
      issuer: 'Google Digital Academy',
      date: '2023',
      credentialId: 'DMA-2023-456',
      status: 'Completed'
    }
  ];

  return (
    <section id="certificates" className="py-20 md:py-28" style={{ backgroundColor: '#101010' }}>
      <div className="container-custom px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
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
            Continuous learning and professional development in data analysis and product analytics
          </motion.p>
        </motion.div>
      
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium">
                  {certificate.status}
                </span>
              </div>

              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <motion.img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-gold text-black font-medium rounded-lg hover:bg-gold-light transition-colors duration-300"
                  >
                    View Certificate
                  </motion.button>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                  {certificate.title}
                </h3>
                
                {/* Certificate Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Issuer:</span>
                    <span className="text-gray-300 font-medium">{certificate.issuer}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Year:</span>
                    <span className="text-gray-300 font-medium">{certificate.date}</span>
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
                  {certificate.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                      className="px-3 py-1 bg-dark-gray border border-gray-700 rounded-full text-xs text-gray-300 group-hover:border-gold/50 transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to learn more about my certifications and qualifications?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-lg font-medium"
            onClick={() => {
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
