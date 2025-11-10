import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center',
      description: 'Advanced web analytics and data interpretation',
      credentialId: 'GA-2024-001'
    },
    {
      id: 2,
      title: 'SQL for Data Analysis',
      issuer: 'Coursera',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
      description: 'Database querying and data manipulation',
      credentialId: 'SQL-2024-002'
    },
    {
      id: 3,
      title: 'Python Data Science',
      issuer: 'DataCamp',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center',
      description: 'Data analysis and visualization with Python',
      credentialId: 'PY-2023-003'
    },
    {
      id: 4,
      title: 'Product Analytics Fundamentals',
      issuer: 'Udemy',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      description: 'Product metrics and user behavior analysis',
      credentialId: 'PA-2023-004'
    },
    {
      id: 5,
      title: 'Excel Advanced Analytics',
      issuer: 'Microsoft',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center',
      description: 'Advanced Excel functions and data modeling',
      credentialId: 'EX-2023-005'
    },
    {
      id: 6,
      title: 'Digital Marketing Analytics',
      issuer: 'Google',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop&crop=center',
      description: 'Marketing performance measurement and optimization',
      credentialId: 'DM-2023-006'
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn("down", 0.1)}
            className="text-4xl md:text-5xl font-bold text-gradient mb-6"
          >
            Certificates & Achievements
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-gold mx-auto mb-4"
          />
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Continuous learning and professional development in data analysis and product analytics
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={zoomIn(index * 0.1, 0.6)}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateY: 5 
              }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Credential ID overlay */}
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gold font-mono bg-black/50 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </p>
                </div>

                {/* Verification badge */}
                <div className="absolute top-2 right-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="w-8 h-8 bg-gold rounded-full flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300 flex-1">
                    {cert.title}
                  </h3>
                  <span className="text-gold text-sm font-medium ml-2">
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <p className="text-gray-400 text-sm font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {cert.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold/30 transition-all duration-300 pointer-events-none" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '6+', label: 'Certificates' },
            { number: '3', label: 'Platforms' },
            { number: '2024', label: 'Latest' },
            { number: '100%', label: 'Verified' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn("up", index * 0.1)}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-gradient mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;