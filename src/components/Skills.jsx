import { motion } from 'framer-motion';
import { fadeIn, fadeInFast, staggerContainer } from '../utils/motion';

const Skills = () => {
  const skills = [
    {
      name: 'SQL',
      icon: '🗃️',
      description: 'Database querying and data manipulation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Excel',
      icon: '📊',
      description: 'Advanced formulas, pivot tables, and data analysis',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Google Analytics',
      icon: '📈',
      description: 'Web analytics and user behavior tracking',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Python',
      icon: '🐍',
      description: 'Data analysis, automation, and scripting',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Figma',
      icon: '🎨',
      description: 'UI/UX design and prototyping',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Notion',
      icon: '📝',
      description: 'Project management and documentation',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28" style={{ backgroundColor: '#0c0c0c' }}>
      <div className="container-custom px-6 md:px-12 lg:px-24 relative z-10">
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
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Technologies and tools I use to transform data into actionable insights
          </motion.p>
        </motion.div>
      
        <motion.div
          variants={staggerContainer(0.05, 0.02)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInFast("up", index * 0.02)}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card group cursor-pointer relative overflow-hidden"
            >
              {/* Skill Icon */}
              <div className="relative mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>

                {/* Progress indicator */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full w-[85%]`} />
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-white mb-8">
              Additional Skills & Tools
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {['Tableau', 'Power BI', 'R', 'JavaScript', 'Git', 'Jupyter', 'Pandas', 'NumPy'].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-dark-gray/50 rounded-lg border border-gray-700 hover:border-gold/50 transition-colors duration-300"
                >
                  <span className="text-gray-300 font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute top-0 left-4 text-gold text-6xl opacity-30">"</div>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed ml-8">
                The best insights come from combining the right tools with curious thinking and collaborative spirit.
              </blockquote>
              <div className="absolute bottom-4 right-4 text-gold text-4xl opacity-50 rotate-180">"</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;