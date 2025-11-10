import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, bounceIn } from '../utils/motion';

const Skills = () => {
  const skills = [
    {
      name: 'SQL',
      icon: '🗃️',
      level: 85,
      description: 'Database querying and data manipulation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Excel',
      icon: '📊',
      level: 90,
      description: 'Advanced formulas, pivot tables, and data analysis',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Google Analytics',
      icon: '📈',
      level: 80,
      description: 'Web analytics and user behavior tracking',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Python',
      icon: '🐍',
      level: 75,
      description: 'Data analysis, automation, and scripting',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Figma',
      icon: '🎨',
      level: 70,
      description: 'UI/UX design and prototyping',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Notion',
      icon: '📝',
      level: 95,
      description: 'Project management and documentation',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <section id="skills" className="min-h-screen section-padding bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-96 h-96 bg-gold/3 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            Skills & Expertise
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
            Technologies and tools I use to transform data into actionable insights
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={bounceIn(index * 0.1)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                y: -10
              }}
              className="glassmorphism rounded-2xl p-8 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.2 
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl"
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-heading font-semibold text-white group-hover:text-gold transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                  <motion.span 
                    className="text-gold font-bold text-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {skill.description}
                </p>

                {/* Enhanced Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: 1.5 + index * 0.1 
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`}
                  />
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-8">
              Also Familiar With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Tableau', 'Power BI', 'R', 'JavaScript', 'Git', 'Jira', 'Slack', 'Miro'].map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)'
                  }}
                  className="px-6 py-3 glassmorphism rounded-full text-sm text-gray-300 hover:text-gold transition-all duration-300 cursor-default border border-gold/20 hover:border-gold/50"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;