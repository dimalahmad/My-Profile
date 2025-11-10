import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';

const Hero = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-hero"
        style={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-black/90"></div>
      
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0">
        {/* Floating Gold Particles */}
        {[...Array(25)].map((_, i) => (
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
        
        {/* Geometric Shapes with Parallax */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-gold/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ y: 0 }}
          whileInView={{ y: -10 }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border border-gold/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ y: 0 }}
          whileInView={{ y: 10 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content with Typing Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Typing Animation */}
            <div className="space-y-4">
              <div className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight min-h-[400px]">
                <Typewriter
                  options={{
                    strings: [
                      '<span style="color: #d4af37; font-size: 0.4em; display: block; margin-bottom: 1rem;">Hello, World! 👋</span>',
                      '<span style="color: #d4af37; font-size: 0.4em; display: block; margin-bottom: 1rem;">Hello, World! 👋</span><span style="color: white; display: block;">Hi, I\'m</span>',
                      '<span style="color: #d4af37; font-size: 0.4em; display: block; margin-bottom: 1rem;">Hello, World! 👋</span><span style="color: white; display: block;">Hi, I\'m</span><span style="background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: block;">Dimal Karim Ahmad</span>',
                      '<span style="color: #d4af37; font-size: 0.4em; display: block; margin-bottom: 1rem;">Hello, World! 👋</span><span style="color: white; display: block;">Hi, I\'m</span><span style="background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: block;">Dimal Karim Ahmad</span><span style="color: #d4af37; font-size: 0.5em; display: block; margin-top: 1rem;">Aspiring Product Analyst</span>'
                    ],
                    autoStart: true,
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 1000,
                    startDelay: 500,
                    loop: false,
                    showCursor: true,
                    cursorClassName: 'typewriter-cursor',
                    onComplete: () => {
                      setTypingComplete(true);
                      setTimeout(() => setShowProfile(true), 500);
                    }
                  }}
                />
              </div>
            </div>

            {/* CTA Buttons - Show after typing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: typingComplete ? 1 : 0, 
                y: typingComplete ? 0 : 30 
              }}
              transition={{ delay: 0.5, duration: 0.8 }}
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

          {/* 3D Coin Spinning Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: showProfile ? 1 : 0, 
              x: showProfile ? 0 : 50 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative perspective-1000">
              {/* Coin Container */}
              <motion.div
                className="relative w-96 h-96 preserve-3d"
                animate={{ rotateY: 360 }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                whileHover={{ 
                  rotateY: 720,
                  transition: { duration: 2 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Front Side */}
                <motion.div
                  className="absolute inset-0 w-96 h-96 rounded-full overflow-hidden border-4 border-gold backface-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                  whileHover={{
                    boxShadow: [
                      '0 0 60px rgba(212, 175, 55, 0.4)',
                      '0 0 80px rgba(212, 175, 55, 0.6)',
                      '0 0 60px rgba(212, 175, 55, 0.4)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img
                    src="/assets/profile.jpg"
                    alt="Dimal Karim Ahmad - Front"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=400&background=d4af37&color=000000&bold=true&font-size=0.4`;
                    }}
                  />
                  
                  {/* Gold rim effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 via-transparent to-gold/20"></div>
                </motion.div>

                {/* Back Side */}
                <motion.div
                  className="absolute inset-0 w-96 h-96 rounded-full overflow-hidden border-4 border-gold-light backface-hidden bg-gradient-to-br from-gold/20 to-gold-dark/20"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-darker-gray to-black">
                    {/* Logo or Alternative Design */}
                    <div className="text-center space-y-4">
                      <motion.div
                        className="text-6xl text-gold"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💼
                      </motion.div>
                      <div className="text-gold font-heading font-bold text-2xl">
                        Product
                      </div>
                      <div className="text-gold font-heading font-bold text-2xl">
                        Analyst
                      </div>
                    </div>
                  </div>
                  
                  {/* Gold rim effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-l from-gold-light/20 via-transparent to-gold-light/20"></div>
                </motion.div>
              </motion.div>

              {/* Glow Effect Ring */}
              <motion.div
                className="absolute inset-0 w-96 h-96 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(212, 175, 55, 0.3)',
                    '0 0 60px rgba(212, 175, 55, 0.5)',
                    '0 0 40px rgba(212, 175, 55, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: typingComplete ? 1 : 0, 
            y: typingComplete ? 0 : 20 
          }}
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

      {/* Custom CSS for typewriter cursor */}
      <style jsx>{`
        .typewriter-cursor {
          color: #d4af37 !important;
          font-size: 1em !important;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;