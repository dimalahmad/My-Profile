import { motion } from 'framer-motion';
import { fadeIn, textVariant, zoomIn } from '../utils/motion';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left mb-10 lg:mb-0"
          >
            <motion.h1
              variants={textVariant(0.3)}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="text-gradient">Dimal Karim Ahmad</span>
            </motion.h1>

            <motion.div
              variants={textVariant(0.5)}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gold mb-4">
                Aspiring Product Analyst
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Hi, I'm Dimal — passionate about turning data & insights into impactful product decisions.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={zoomIn(0.5, 0.8)}
            initial="hidden"
            animate="show"
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-gold opacity-20"
                style={{ width: '320px', height: '320px' }}
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gold glow-gold"
              >
                <img
                  src="/assets/profile.jpg"
                  alt="Dimal Karim Ahmad"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Dimal+Karim+Ahmad&size=320&background=d4af37&color=000000&bold=true`;
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          animate="show"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
