import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const [age, setAge] = useState('');

  // Calculate real-time age
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
      
      setAge(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes`);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Passionate about turning data into actionable insights',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: '🧠',
      title: 'Strategic Thinking',
      description: 'Love exploring product metrics and user behavior',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: '💼',
      title: 'Product Focus',
      description: 'Building data-driven strategies for product success',
      gradient: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: '🌱',
      title: 'Continuous Learning',
      description: 'Curious learner who constantly seeks growth',
      gradient: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
      icon: '🌟',
      title: 'Collaborative',
      description: 'Thrives in collaboration and loves solving problems',
      gradient: 'from-pink-500/20 to-pink-600/20'
    }
  ];

  return (
    <section id="about" className="min-h-screen section-padding bg-darker-gray relative overflow-hidden">
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

      <div className="container-custom relative z-10">
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
            About Me
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
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the passion and vision behind the data
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Content Card */}
            <motion.div
              className="glassmorphism rounded-2xl p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Hi there! I'm <span className="text-gradient-premium font-semibold font-heading text-xl">Dimal Karim Ahmad</span>, 
                    an aspiring Product Analyst passionate about turning data and insights into 
                    impactful product decisions.
                  </p>
                  <p>
                    I love exploring product metrics, user behavior, and building data-driven 
                    strategies. I'm a curious learner who thrives in collaboration, loves solving 
                    problems, and constantly seeks growth.
                  </p>
                  <p>
                    My journey is driven by the belief that great products are built on great 
                    insights, and I'm excited to contribute to that process. 
                    <span className="text-gold text-2xl ml-2">🚀</span>
                  </p>
                </div>

                {/* Educational Background */}
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  className="border-t border-gold/20 pt-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎓</span>
                      <div>
                        <h4 className="text-gold font-semibold">Undergraduate Software Engineering Student</h4>
                        <p className="text-gray-400 text-sm">Universitas Gadjah Mada (UGM)</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed ml-11">
                      My passion lies in the fields of programming, data analysis, and engaging in research and exploration.
                    </p>
                  </div>
                </motion.div>

                {/* Real-time Age */}
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  className="border-t border-gold/20 pt-6"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏳</span>
                    <div>
                      <h4 className="text-gold font-semibold">Current Age</h4>
                      <motion.p 
                        className="text-gold-light text-sm font-mono"
                        key={age} // Re-animate when age changes
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {age}
                      </motion.p>
                      <p className="text-gray-500 text-xs">Born: January 29, 2006 • Updates every minute</p>
                    </div>
                  </div>
                </motion.div>

                {/* Personal Tags */}
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  className="flex flex-wrap gap-3 pt-6"
                >
                  {[
                    { icon: '✨', text: 'Problem Solver', color: 'from-blue-500 to-purple-500' },
                    { icon: '🎯', text: 'Goal-Oriented', color: 'from-green-500 to-teal-500' },
                    { icon: '🤝', text: 'Team Player', color: 'from-pink-500 to-rose-500' }
                  ].map((tag, index) => (
                    <motion.div
                      key={tag.text}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${tag.color} bg-opacity-10 border border-gold/20 backdrop-blur-sm`}
                    >
                      <span className="text-lg">{tag.icon}</span>
                      <span className="text-sm font-medium text-white">{tag.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              variants={fadeIn("right", 0.5)}
              className="glassmorphism rounded-2xl p-6 border-l-4 border-gold relative"
            >
              <div className="absolute top-4 left-4 text-gold text-4xl opacity-50">"</div>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed ml-8">
                Data tells a story, but insights drive decisions. I'm here to bridge that gap.
              </blockquote>
              <div className="absolute bottom-4 right-4 text-gold text-4xl opacity-50 rotate-180">"</div>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("left", index * 0.1)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5 
                }}
                className="glassmorphism rounded-xl p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <motion.div 
                    className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-heading font-semibold text-white group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold/30 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-4">
              Ready to turn insights into impact?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate and create data-driven solutions that matter.
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;