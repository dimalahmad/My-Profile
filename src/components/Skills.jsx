import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      description: 'Bahasa dan framework yang saya kuasai untuk pengembangan software, web, dan aplikasi interaktif.',
      highlight: 'Interactive Web & Data Dashboard',
      subcategories: [
        {
          name: 'Languages',
          skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
        },
        {
          name: 'Web Development',
          skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Next.js', 'Vite'],
        },
        {
          name: 'Backend & API',
          skills: ['Node.js', 'Laravel', 'RESTful API'],
        },
        {
          name: 'Version Control',
          skills: ['Git', 'GitHub', 'GitLab'],
        },
      ],
    },
    {
      title: 'Data & Analytics',
      description: 'Skill untuk menganalisis data dan mendapatkan insight yang bermakna.',
      subcategories: [
        {
          name: 'Data Tools',
          skills: ['Excel', 'Google Sheets', 'SQL'],
        },
        {
          name: 'Programming',
          skills: ['Python (pandas, numpy)', 'Google Colab'],
        },
      ],
    },
    {
      title: 'Design & Creative Tools',
      description: 'Kreativitas saya dalam membuat visual yang menarik dan bermakna.',
      subcategories: [
        {
          name: 'UI/UX Design',
          skills: ['Figma', 'Adobe XD'],
        },
        {
          name: 'Graphic Design',
          skills: ['Canva', 'Photoshop', 'Illustrator'],
        },
        {
          name: 'Prototyping & Interaction',
          skills: ['Blender'],
        },
        {
          name: 'Content Creation',
          skills: ['CapCut', 'Lightroom'],
        },
      ],
    },
    {
      title: 'Product & Research',
      description: 'Menghubungkan desain, data, dan keputusan melalui analisis produk.',
      subcategories: [
        {
          name: 'Product Analytics',
          skills: ['User Metrics', 'Funnel Analysis', 'Retention Metrics'],
        },
        {
          name: 'Research',
          skills: ['User Research', 'Data Interpretation', 'Competitive Analysis'],
        },
        {
          name: 'Documentation',
          skills: ['Technical Writing', 'Product Specs', 'Reporting'],
        },
      ],
    },
    {
      title: 'Other Technical Tools & Concepts',
      description: 'Skill pendukung yang memperkuat keahlian saya di bidang IT.',
      subcategories: [
        {
          name: 'Versioning & Deployment',
          skills: ['GitHub Actions', 'CI/CD', 'Vercel Deployment'],
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#111111' }}>
      {/* Parallax Background Elements */}
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
        {/* Reflective glass effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-30" 
             style={{ 
               backgroundImage: 'linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)',
               backdropFilter: 'blur(1px)'
             }} 
        />
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn("down", 0.1)}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gradient-premium mb-8"
          >
            Skills & Expertise
          </motion.h2>
          
          {/* Gold Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
            <div className="mx-4 w-3 h-3 bg-gold rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
          </div>
        </motion.div>

        {/* Skills Categories - Custom Layout */}
        <div className="space-y-8">
          {/* Row 1: Programming & Development - Product & Research (2 columns) */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[skillCategories[0], skillCategories[3]].map((category, index) => {
              const categoryIndex = [0, 3][index]; // Original index for animation delay
              return (
                <motion.div
                  key={category.title}
                  variants={fadeIn("up", categoryIndex * 0.1)}
                  className="relative group"
                >
              {/* Category Card with Glassmorphism */}
              <div
                className="relative p-6 md:p-10 rounded-2xl bg-gradient-to-br from-gold/5 via-gold/3 to-transparent border border-gold/20 backdrop-blur-sm transition-all duration-500 h-full"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                  backgroundColor: 'rgba(26, 26, 26, 0.6)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                }}
              >
                {/* Animated Border Glow on Hover */}
            <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
                    boxShadow: 'inset 0 0 60px rgba(212, 175, 55, 0.1)',
                  }}
                />

                {/* Category Header */}
                <div className="relative z-10 mb-6">
                  <motion.h3
                    variants={fadeIn("down", 0.1)}
                    className="text-2xl md:text-3xl font-heading font-bold text-gradient-premium mb-3"
                  >
                    {category.title}
                  </motion.h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {category.description}
                  </p>
                  {category.highlight && (
                    <p className="text-gold text-sm md:text-base font-semibold mt-2 italic">
                      💡 {category.highlight}
                    </p>
                  )}
              </div>

                {/* Subcategories */}
                <div className="relative z-10 space-y-6">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <motion.div
                      key={subcategory.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (subIndex * 0.05) }}
                      className="space-y-3"
                    >
                      <h4 className="text-gold font-semibold text-sm md:text-base uppercase tracking-wider">
                        {subcategory.name}
                      </h4>
                      
                      {/* Skills Badges Grid */}
                      <div className="flex flex-wrap gap-3">
                        {subcategory.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: (categoryIndex * 0.1) + (subIndex * 0.05) + (skillIndex * 0.02),
                              type: "spring",
                              stiffness: 200,
                              damping: 15
                            }}
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
                            }}
                            className="relative group/badge"
                          >
                            <div
                              className="px-4 py-2 rounded-lg bg-black/40 border border-gold/30 backdrop-blur-sm cursor-pointer transition-all duration-300 text-sm md:text-base text-white font-medium"
                              style={{
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                              }}
                            >
                              {skill}
                            </div>
                            
                            {/* Gold Glow Effect on Hover */}
                            <motion.div
                              className="absolute inset-0 rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none"
                              style={{
                                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
                                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
              );
            })}
        </motion.div>

          {/* Row 2: Design & Creative Tools - Data & Analytics - Other Technical Tools & Concepts (3 columns) */}
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[skillCategories[2], skillCategories[1], skillCategories[4]].map((category, index) => {
              const categoryIndex = [2, 1, 4][index]; // Original index for animation delay
              return (
                <motion.div
                  key={category.title}
                  variants={fadeIn("up", (categoryIndex + 2) * 0.1)}
                  className="relative group"
                >
                  {/* Category Card with Glassmorphism */}
                  <div
                    className="relative p-6 md:p-10 rounded-2xl bg-gradient-to-br from-gold/5 via-gold/3 to-transparent border border-gold/20 backdrop-blur-sm transition-all duration-500 h-full"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                      backgroundColor: 'rgba(26, 26, 26, 0.6)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 12px 48px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                    }}
                  >
                    {/* Animated Border Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.05))',
                        boxShadow: 'inset 0 0 60px rgba(212, 175, 55, 0.1)',
                      }}
                    />

                    {/* Category Header */}
                    <div className="relative z-10 mb-6">
                      <motion.h3
                        variants={fadeIn("down", 0.1)}
                        className="text-2xl md:text-3xl font-heading font-bold text-gradient-premium mb-3"
                      >
                        {category.title}
                      </motion.h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {category.description}
                      </p>
                      {category.highlight && (
                        <p className="text-gold text-sm md:text-base font-semibold mt-2 italic">
                          💡 {category.highlight}
                        </p>
                      )}
                    </div>

                    {/* Subcategories */}
                    <div className="relative z-10 space-y-6">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <motion.div
                          key={subcategory.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (subIndex * 0.05) }}
                          className="space-y-3"
                        >
                          <h4 className="text-gold font-semibold text-sm md:text-base uppercase tracking-wider">
                            {subcategory.name}
                          </h4>
                          
                          {/* Skills Badges Grid */}
                          <div className="flex flex-wrap gap-3">
                            {subcategory.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  delay: (categoryIndex * 0.1) + (subIndex * 0.05) + (skillIndex * 0.02),
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 15
                                }}
                                whileHover={{ 
                                  scale: 1.05,
                                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2)',
                                }}
                                className="relative group/badge"
                              >
                                <div
                                  className="px-4 py-2 rounded-lg bg-black/40 border border-gold/30 backdrop-blur-sm cursor-pointer transition-all duration-300 text-sm md:text-base text-white font-medium"
                                  style={{
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                                  }}
                                >
                                  {skill}
                                </div>
                                
                                {/* Gold Glow Effect on Hover */}
                                <motion.div
                                  className="absolute inset-0 rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none"
                                  style={{
                                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
                                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>
                </motion.div>
              ))}
            </div>
            </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
