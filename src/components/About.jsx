import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { 
  FaBullseye, 
  FaChartLine, 
  FaRocket, 
  FaPalette, 
  FaHandshake, 
  FaSyncAlt 
} from 'react-icons/fa';

const About = () => {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate real-time age with seconds
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2006-01-29'); // January 29, 2006
      const now = new Date();
      
      const diffTime = Math.abs(now - birthDate);
      const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      setAge({ years, months, days, hours, minutes, seconds });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#111111', minHeight: '80vh' }}>
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
            About Me
          </motion.h2>
          
          {/* Gold Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
            <div className="mx-4 w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
          </div>
        </motion.div>

        {/* Section 1: Profile - Description (2 Columns) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Left Column - Circular Profile Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center lg:justify-start w-full lg:w-auto"
          >
            <div className="relative group">
              <motion.div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gold/40 relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)'
                }}
              >
                <img
                  src="/assets/profile.png"
                  alt="Dimal Karim Ahmad"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=320&background=d4af37&color=000000&bold=true&font-size=0.4`;
                  }}
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gold rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gold-light rounded-full"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-4 md:space-y-6 w-full"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-medium text-center lg:text-left"
            >
              Hi there! I'm <span className="text-gradient-premium font-heading font-bold">Dimal Karim Ahmad</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed lg:leading-loose text-justify"
            >
              A Software Engineering undergraduate at <span className="text-gold font-semibold">Universitas Gadjah Mada (UGM)</span> passionate about connecting technology, data, and human-centered design.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed lg:leading-loose text-justify"
            >
              I believe that great innovation starts from curiosity and empathy. My experiences in <span className="text-gold font-semibold">ASSETS, KOMATIK, and SENOPATI</span> have taught me how collaboration, analysis, and creativity come together to build meaningful products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed lg:leading-loose text-justify"
            >
              Whether leading strategic studies, coordinating competitive programming events, or designing visual narratives, I thrive at the intersection where data meets design—turning insights into stories that drive decisions.
            </motion.p>
          </motion.div>
        </div>

        {/* Section 2: Age - Core Values (2 Columns) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Left Column - Current Age */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-gold/10 to-transparent p-6 md:p-8 rounded-2xl border border-gold/20 h-full flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <h3 className="text-gold font-heading font-semibold text-xl md:text-2xl">Current Age</h3>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 md:gap-4 mb-4">
              <div className="text-center">
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 md:mb-2">Years</p>
                <motion.p 
                  className="text-gold font-mono text-xl sm:text-2xl font-bold"
                  key={age.years}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}
                >
                  {age.years}
                </motion.p>
              </div>
              
              <div className="text-center">
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 md:mb-2">Months</p>
                <motion.p 
                  className="text-gold font-mono text-xl sm:text-2xl font-bold"
                  key={age.months}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}
                >
                  {age.months}
                </motion.p>
              </div>
              
              <div className="text-center">
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 md:mb-2">Days</p>
                <motion.p 
                  className="text-gold font-mono text-xl sm:text-2xl font-bold"
                  key={age.days}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}
                >
                  {age.days}
                </motion.p>
              </div>
              
              <div className="text-center">
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 md:mb-2">Hours</p>
                <motion.p 
                  className="text-gold font-mono text-xl sm:text-2xl font-bold"
                  key={age.hours}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}
                >
                  {age.hours}
                </motion.p>
              </div>
              
              <div className="text-center">
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 md:mb-2">Minutes</p>
                <motion.p 
                  className="text-gold font-mono text-xl sm:text-2xl font-bold"
                  key={age.minutes}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}
                >
                  {age.minutes}
                </motion.p>
              </div>
              
              <div className="text-center">
                <p className="text-gold/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 md:mb-2">Seconds</p>
                <motion.p 
                  className="text-gold font-mono text-xl sm:text-2xl font-bold"
                  key={age.seconds}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ textShadow: '0 0 10px rgba(212, 175, 55, 0.5)' }}
                >
                  {age.seconds}
                </motion.p>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm text-center mb-4 md:mb-6">
              Born: January 29, 2006 • Updates every second
            </p>
            
            {/* Quote Card */}
            <div className="relative p-4 md:p-6 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent border border-gold/20 mt-4 md:mt-6">
              <div className="absolute top-1 left-1 md:top-2 md:left-2 text-gold text-2xl md:text-4xl opacity-30">"</div>
              <blockquote className="text-gray-300 italic text-base sm:text-lg md:text-xl leading-relaxed font-heading pl-4 md:pl-6 pr-4 md:pr-6">
                I believe that great technology is built on empathy, clarity, and purpose. My goal is to bridge the gap between data, design, and decisions—creating products that not only solve problems but also inspire meaningful impact.
              </blockquote>
              <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 text-gold text-2xl md:text-4xl opacity-30 rotate-180">"</div>
            </div>
          </motion.div>

          {/* Right Column - Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-gold/10 to-transparent p-6 md:p-8 rounded-2xl border border-gold/20 h-full flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <h3 className="text-gold font-heading font-semibold text-xl md:text-2xl">Core Values</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
              {[
                { icon: FaBullseye, text: 'Goal-Oriented' },
                { icon: FaChartLine, text: 'Analytical' },
                { icon: FaRocket, text: 'Growth-Minded' },
                { icon: FaPalette, text: 'Creative-Driven' },
                { icon: FaHandshake, text: 'Collaborative' },
                { icon: FaSyncAlt, text: 'Adaptable' }
              ].map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <motion.div
                    key={trait.text}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center p-3 md:p-4 rounded-lg bg-gold/5 border border-gold/20 flex flex-col justify-center group"
                  >
                    <motion.div 
                      className="text-gold mb-1 md:mb-2 flex justify-center"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent className="text-xl md:text-2xl" />
                    </motion.div>
                    <div className="text-white font-medium text-xs sm:text-sm break-words group-hover:text-gold transition-colors duration-300">{trait.text}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;