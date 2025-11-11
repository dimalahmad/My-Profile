import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      value: 'Yogyakarta, Indonesia',
      description: 'Available to work from anywhere',
    },
    {
      icon: '💼',
      title: 'Status',
      value: 'Open to Opportunities',
      description: 'Product Analyst, Product Management, or Data-related roles',
    },
    {
      icon: '🕒',
      title: 'Response Time',
      value: '24/7',
      description: 'Usually respond within a few hours',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dimal-karim-ahmad',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dimalahmad',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:dimalkarimahmad01@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="pt-16 pb-24 md:pt-20 md:pb-28 relative overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#111111' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeIn("down", 0.1)}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient-premium mb-8 text-center"
          >
            Let's Connect
          </motion.h2>
          
          {/* Gold Divider */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="flex items-center justify-center mb-8"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
            <div className="mx-4 w-3 h-3 bg-gold rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
          </motion.div>
          
          {/* Main Text */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Ready to turn data into insights? Let's discuss how we can collaborate to create meaningful impact through product and analytics innovation.
          </motion.p>

          {/* Follow-up Text */}
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-base md:text-lg text-center text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed"
          >
            I'm always open to new opportunities, creative collaborations, and meaningful conversations about data, product design, and technology. 
            Feel free to reach out — I'll get back to you as soon as possible!
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 12px 40px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.3)',
                }}
                className="relative group p-6 rounded-2xl bg-gradient-to-br from-gold/5 via-gold/3 to-transparent border border-gold/20 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                }}
              >
                {/* Glass effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
                    boxShadow: 'inset 0 0 60px rgba(212, 175, 55, 0.1)',
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-gold font-semibold text-lg mb-2">{info.title}</h3>
                  <p className="text-white font-medium text-base mb-2">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 md:mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 p-4 md:p-5 rounded-xl bg-gradient-to-r from-gold/10 to-gold/5 hover:from-gold/20 hover:to-gold/10 backdrop-blur-md border border-gold/20 transition-all duration-300 group"
                style={{
                  minHeight: '60px',
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-gold group-hover:text-gold-light"
                >
                  {social.icon}
                </motion.div>
                <span className="font-medium text-sm md:text-base text-white group-hover:text-gold transition-colors duration-300">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center"
          >
            <motion.a
              href="mailto:dimalkarimahmad01@gmail.com"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 text-lg font-semibold rounded-2xl bg-gold-gradient text-black transition-all duration-300 relative overflow-hidden group"
              style={{
                minHeight: '56px',
                minWidth: '280px',
              }}
            >
              <span className="relative z-10">Ready to Collaborate? Let's Talk!</span>
              <motion.div
                className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.svg
                className="w-5 h-5 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
