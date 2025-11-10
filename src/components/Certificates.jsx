import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'Google Analytics Individual Qualification',
      icon: '📊',
      issuer: 'Google',
      date: '2023',
      description: 'Advanced web analytics and data interpretation',
      credentialId: 'GA-2023-001'
    },
    {
      id: 2,
      name: 'SQL for Data Science',
      icon: '🗃️',
      issuer: 'Coursera',
      date: '2023',
      description: 'Database management and advanced querying techniques',
      credentialId: 'SQL-2023-002'
    },
    {
      id: 3,
      name: 'Python Data Analysis',
      icon: '🐍',
      issuer: 'DataCamp',
      date: '2023',
      description: 'Data manipulation and statistical analysis with Python',
      credentialId: 'PY-2023-003'
    },
    {
      id: 4,
      name: 'Product Analytics Fundamentals',
      icon: '📈',
      issuer: 'Udemy',
      date: '2023',
      description: 'User behavior analysis and product metrics',
      credentialId: 'PA-2023-004'
    },
    {
      id: 5,
      name: 'Excel Advanced Analytics',
      icon: '📋',
      issuer: 'Microsoft',
      date: '2023',
      description: 'Advanced Excel functions and data visualization',
      credentialId: 'EX-2023-005'
    },
    {
      id: 6,
      name: 'Digital Marketing Analytics',
      icon: '🎯',
      issuer: 'Google Digital Garage',
      date: '2023',
      description: 'Marketing performance measurement and optimization',
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
              {/* Certificate Icon */}
              <div className="relative mb-6">
                <motion.div
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {cert.icon}
                </motion.div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>

              {/* Certificate Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300 flex-1">
                    {cert.name}
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
                    ID: <span className="text-gray-400 font-mono">{cert.credentialId}</span>
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-8">
              Learning Statistics
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { number: '6+', label: 'Certificates' },
                { number: '4', label: 'Platforms' },
                { number: '100+', label: 'Study Hours' },
                { number: '2023', label: 'Latest Year' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-dark-gray/50 rounded-lg border border-gray-700 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-gold mb-1">{stat.number}</div>
                  <span className="text-gray-300 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute top-0 left-4 text-gold text-6xl opacity-30">"</div>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed ml-8">
                Continuous learning is the key to staying relevant in the ever-evolving world of data analytics.
              </blockquote>
              <div className="absolute bottom-4 right-4 text-gold text-4xl opacity-50 rotate-180">"</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
