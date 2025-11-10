import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Google Analytics Individual Qualification',
      issuer: 'Google',
      date: '2023',
      description: 'Advanced web analytics and data interpretation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
      credentialId: 'GA-2023-001'
    },
    {
      id: 2,
      title: 'SQL for Data Science',
      issuer: 'Coursera',
      date: '2023',
      description: 'Database management and advanced querying techniques',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      credentialId: 'SQL-2023-002'
    },
    {
      id: 3,
      title: 'Python Data Analysis',
      issuer: 'DataCamp',
      date: '2023',
      description: 'Data manipulation and statistical analysis with Python',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center',
      credentialId: 'PY-2023-003'
    },
    {
      id: 4,
      title: 'Product Analytics Fundamentals',
      issuer: 'Udemy',
      date: '2023',
      description: 'User behavior analysis and product metrics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
      credentialId: 'PA-2023-004'
    },
    {
      id: 5,
      title: 'Excel Advanced Analytics',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Advanced Excel functions and data visualization',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center',
      credentialId: 'EX-2023-005'
    },
    {
      id: 6,
      title: 'Digital Marketing Analytics',
      issuer: 'Google Digital Garage',
      date: '2023',
      description: 'Marketing performance measurement and optimization',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&crop=center',
      credentialId: 'DM-2023-006'
    }
  ];

  return (
    <section id="certificates" className="py-20 md:py-28" style={{ backgroundColor: '#0b0b0b' }}>
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
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
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
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300 flex-1">
                    {cert.title}
                  </h3>
                  <span className="text-gold text-sm font-medium ml-2">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-gold-light font-medium text-sm">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>

                {/* Credential ID */}
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-xs text-gray-500">
                    Credential ID: <span className="text-gray-400 font-mono">{cert.credentialId}</span>
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '6+', label: 'Certificates' },
              { number: '3+', label: 'Platforms' },
              { number: '50+', label: 'Study Hours' },
              { number: '2023', label: 'Latest Year' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-gold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;