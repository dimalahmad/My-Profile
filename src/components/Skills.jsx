import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, bounceIn } from '../utils/motion';

const Skills = () => {
  const skills = [
    {
      name: 'SQL',
      icon: '🗃️',
      level: 85,
      description: 'Database querying and data manipulation'
    },
    {
      name: 'Excel',
      icon: '📊',
      level: 90,
      description: 'Advanced formulas, pivot tables, and data analysis'
    },
    {
      name: 'Google Analytics',
      icon: '📈',
      level: 80,
      description: 'Web analytics and user behavior tracking'
    },
    {
      name: 'Python',
      icon: '🐍',
      level: 75,
      description: 'Data analysis, automation, and scripting'
    },
    {
      name: 'Figma',
      icon: '🎨',
      level: 70,
      description: 'UI/UX design and prototyping'
    },
    {
      name: 'Notion',
      icon: '📝',
      level: 95,
      description: 'Project management and documentation'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-black">
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
            Skills & Tools
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="w-24 h-1 bg-gold mx-auto mb-4"
          />
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I use to turn data into actionable insights
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={bounceIn(index * 0.1)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              className="card group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl"
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-gold font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-gold to-gold-light h-2 rounded-full relative overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Tableau', 'Power BI', 'R', 'JavaScript', 'Git', 'Jira', 'Slack', 'Miro'].map((tool, index) => (
              <motion.span
                key={tool}
                variants={fadeIn("up", index * 0.05)}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-dark-gray border border-gray-700 rounded-full text-sm text-gray-300 hover:border-gold hover:text-gold transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
