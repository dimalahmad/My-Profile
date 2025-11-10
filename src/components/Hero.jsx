import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Dimal — passionate about turning data & insights into impactful product decisions.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-black/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Gold Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-gold/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border border-gold/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <motion.p 
                className="text-gold text-lg font-medium tracking-wide floating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hello, World! 👋
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="text-white block">Hi, I'm</span>
                <span className="text-gradient-premium block floating">
                  Dimal Karim Ahmad
                </span>
              </motion.h1>
            </motion.div>

            {/* Title with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-gold tracking-wide">
                Aspiring Product Analyst
              </h2>
              
              {/* Typing Animation */}
              <div className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed min-h-[3rem]">
                <span>{displayedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="border-r-2 border-gold ml-1"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gold text-black font-semibold rounded-lg overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gold-light"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
              </motion.button>
              
              <motion.button
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Let's Connect</span>
                <motion.div
                  className="absolute inset-0 bg-gold"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Premium Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ 
                  background: 'conic-gradient(from 0deg, #d4af37, transparent, #d4af37)',
                  width: '400px', 
                  height: '400px',
                  padding: '3px'
                }}
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>
              
              {/* Glow Effect */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 60px rgba(212, 175, 55, 0.3)',
                    '0 0 80px rgba(212, 175, 55, 0.5)',
                    '0 0 60px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-4 rounded-full"
              />
              
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-gold z-10 glow-premium"
                style={{ margin: '2px' }}
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Dimal Karim Ahmad"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=400&background=d4af37&color=000000&bold=true&font-size=0.4`;
                  }}
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <p className="text-gold text-sm font-medium tracking-wide">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;