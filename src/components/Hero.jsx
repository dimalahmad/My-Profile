import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';

const Hero = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    // Show profile after a short delay
    const timer = setTimeout(() => setShowProfile(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (newCount >= 2) { // 2 images in hero (front and back)
        setImagesLoaded(true);
      }
      return newCount;
    });
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
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
        
        {/* Geometric Shapes with Parallax */}
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
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left px-6 lg:px-0"
          >
            {/* Static Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <span className="text-white block">Hi, I'm</span>
                <span 
                  className="text-gradient-premium block floating relative"
                  style={{
                    textShadow: '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)',
                    filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.4))'
                  }}
                >
                  Dimal Karim Ahmad
                </span>
              </motion.h1>

              {/* Typewriter Job Title */}
              <motion.div 
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-medium text-gold tracking-wide min-h-[3rem] md:min-h-[4rem]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <TypeAnimation
                  sequence={[
                    'Aspiring Product Analyst',
                    3000,
                    'Tech & Data Enthusiast',
                    3000,
                    'Creative Problem Solver',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: 'inherit', display: 'inline-block' }}
                  repeat={Infinity}
                  cursor={true}
                />
              </motion.div>

              {/* Value Statement */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed italic"
              >
                Turning data and design into meaningful stories that inspire impactful decisions.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-gold-gradient text-black font-semibold rounded-lg overflow-hidden transition-all duration-300"
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
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-lg font-semibold relative overflow-hidden group"
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: showProfile ? 1 : 0, 
              scale: showProfile ? 1 : 0.8 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            <div className="coin-container">
              {/* Loading Skeleton */}
              {!imagesLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full animate-pulse flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-gold/50 border-t-gold rounded-full animate-spin"></div>
                </div>
              )}
              
              <div className="coin" style={{ opacity: imagesLoaded ? 1 : 0.3 }}>
                {/* Front Side */}
                <div className="side front">
                  <img
                    src="/assets/profile-front.jpg"
                    alt="Dimal Karim Ahmad - Front"
                    loading="eager"
                    decoding="async"
                    onLoad={handleImageLoad}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=350&background=d4af37&color=000000&bold=true&font-size=0.4`;
                      handleImageLoad();
                    }}
                    style={{
                      opacity: imagesLoaded ? 1 : 0.7,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                </div>

                {/* Back Side */}
                <div className="side back">
                  <img
                    src="/assets/profile-back.jpg"
                    alt="Dimal Karim Ahmad - Back"
                    loading="eager"
                    decoding="async"
                    onLoad={handleImageLoad}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=350&background=d4af37&color=000000&bold=true&font-size=0.4`;
                      handleImageLoad();
                    }}
                    style={{
                      opacity: imagesLoaded ? 1 : 0.7,
                      transition: 'opacity 0.3s ease-in-out'
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 md:bottom-8 inset-x-0 flex flex-col items-center justify-center space-y-1 md:space-y-2 px-4"
        >
          <p className="text-gold text-xs md:text-sm font-medium tracking-wide text-center">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 md:w-6 md:h-10 border-2 border-gold rounded-full flex justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 md:w-1 md:h-3 bg-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;