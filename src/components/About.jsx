import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

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
    <section id="about" className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
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

      <div className="container-custom relative z-10 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-heading font-bold text-gradient-premium mb-6">
            About Me
          </h2>
          
          {/* Gold Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
            <div className="mx-4 w-3 h-3 bg-gold rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
          </div>
        </motion.div>

        {/* Two Column Layout - Mobile: Photo top, Text bottom */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Circular Profile Image with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div className="relative group">
              {/* Circular Profile Image with Glass Hover Effect */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold/40 relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)'
                }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Dimal Karim Ahmad"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=320&background=d4af37&color=000000&bold=true&font-size=0.4`;
                  }}
                />
                
                {/* Glass Overlay on Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
                  style={{
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-center"
                  >
                    <motion.p 
                      className="text-white text-xl md:text-2xl font-heading font-semibold"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Hi there 👋
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-gold rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4 md:w-6 md:h-6 bg-gold-light rounded-full"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Main Description */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl text-white leading-relaxed"
              >
                Hi there! I'm <span className="text-gradient-premium font-heading font-bold">Dimal Karim Ahmad</span> 👋
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 leading-relaxed text-justify"
              >
                Aspiring Product Analyst & Undergraduate Software Engineering Student at{' '}
                <span className="text-gold font-semibold">Universitas Gadjah Mada (UGM)</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-300 leading-relaxed text-justify"
              >
                My passion lies in the fields of programming, data analysis, and engaging in research and exploration.
                I'm driven by curiosity, learning, and the pursuit of turning data-driven insights into impactful product decisions.
              </motion.p>
            </div>

            {/* Interactive Age Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-gold/10 to-transparent p-8 rounded-2xl border border-gold/20"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl">⏳</span>
                <h3 className="text-gold font-heading font-semibold text-2xl">Current Age</h3>
              </div>
              
              {/* Age Grid */}
              <div className="grid grid-cols-6 gap-4 mb-4">
                {/* Labels */}
                <div className="text-center">
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">Years</p>
                  <motion.p 
                    className="text-gold font-mono text-2xl font-bold"
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
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">Months</p>
                  <motion.p 
                    className="text-gold font-mono text-2xl font-bold"
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
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">Days</p>
                  <motion.p 
                    className="text-gold font-mono text-2xl font-bold"
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
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">Hours</p>
                  <motion.p 
                    className="text-gold font-mono text-2xl font-bold"
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
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">Minutes</p>
                  <motion.p 
                    className="text-gold font-mono text-2xl font-bold"
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
                  <p className="text-gold/70 text-xs uppercase tracking-wider mb-2">Seconds</p>
                  <motion.p 
                    className="text-gold font-mono text-2xl font-bold"
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
              
              <p className="text-gray-400 text-sm text-center">
                Born: January 29, 2006 • Updates every second
              </p>
            </motion.div>

            {/* Key Traits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: '🎯', text: 'Goal-Oriented', color: 'from-blue-500 to-blue-600' },
                { icon: '🧠', text: 'Analytical', color: 'from-purple-500 to-purple-600' },
                { icon: '🚀', text: 'Growth-Minded', color: 'from-green-500 to-green-600' }
              ].map((trait, index) => (
                <motion.div
                  key={trait.text}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`text-center p-4 rounded-lg bg-gradient-to-r ${trait.color} bg-opacity-10 border border-gold/20`}
                >
                  <div className="text-2xl mb-2">{trait.icon}</div>
                  <div className="text-white font-medium text-sm">{trait.text}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="pt-4"
            >
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gold-gradient text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent border border-gold/20">
            <div className="absolute top-4 left-4 text-gold text-6xl opacity-30">"</div>
            <blockquote className="text-gray-300 italic text-xl leading-relaxed font-heading">
              Data tells a story, but insights drive decisions. I'm here to bridge that gap and turn curiosity into impact.
            </blockquote>
            <div className="absolute bottom-4 right-4 text-gold text-6xl opacity-30 rotate-180">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;