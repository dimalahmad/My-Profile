import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const highlights = [
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Passionate about turning data into actionable insights'
    },
    {
      icon: '🧠',
      title: 'Strategic Thinking',
      description: 'Love exploring product metrics and user behavior'
    },
    {
      icon: '💼',
      title: 'Product Focus',
      description: 'Building data-driven strategies for product success'
    },
    {
      icon: '🌱',
      title: 'Continuous Learning',
      description: 'Curious learner who constantly seeks growth'
    },
    {
      icon: '🌟',
      title: 'Collaborative',
      description: 'Thrives in collaboration and loves solving problems'
    }
  ];

  return (
    <section id="about" className="section-padding bg-darker-gray">
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
            About Me
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-gold mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                Hi there! I'm <span className="text-gold font-semibold">Dimal Karim Ahmad</span>, 
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
                insights, and I'm excited to contribute to that process. 🚀
              </p>
            </div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center space-x-2 bg-dark-gray px-4 py-2 rounded-full">
                <span className="text-gold">✨</span>
                <span className="text-sm font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2 bg-dark-gray px-4 py-2 rounded-full">
                <span className="text-gold">🎯</span>
                <span className="text-sm font-medium">Goal-Oriented</span>
              </div>
              <div className="flex items-center space-x-2 bg-dark-gray px-4 py-2 rounded-full">
                <span className="text-gold">🤝</span>
                <span className="text-sm font-medium">Team Player</span>
              </div>
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="card group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
