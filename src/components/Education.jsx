import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Education = () => {
  const educations = [
    {
      id: 1,
      institution: 'Universitas Gadjah Mada',
      location: 'Yogyakarta, Indonesia',
      period: 'Aug 2023 – Nov 2027 (Expected)',
      degree: 'Bachelor of Applied Computer – Software Engineering',
      gpa: '3.71 / 4.00',
      description: 'Currently pursuing an applied bachelor\'s degree in Software Engineering at Universitas Gadjah Mada, focusing on product development, data analysis, and user-centered design. Actively involved in organizations such as ASSETS and KOMATIK, combining analytical and creative skills to drive impactful digital innovation.'
    },
    {
      id: 2,
      institution: 'SMA Negeri 1 Pati',
      location: 'Pati, Indonesia',
      period: 'Jul 2020 – Jun 2023',
      degree: 'Senior High School – Mathematics and Science',
      gpa: null,
      description: 'Focused on mathematics and science track, strengthening analytical and logical thinking foundations. Participated in various academic and extracurricular activities that enhanced teamwork, communication, and leadership skills.'
    },
    {
      id: 3,
      institution: 'SMP Negeri 3 Pati',
      location: 'Pati, Indonesia',
      period: 'Jul 2018 – Jun 2020',
      degree: 'Accelerated Program',
      gpa: null,
      description: 'Completed the accelerated program with distinction, emphasizing academic excellence and self-discipline. Built early interest in technology and computing through self-learning and creative digital exploration.'
    }
  ];

  return (
    <section 
      id="education" 
      className="py-20 md:py-28 relative overflow-x-hidden overflow-y-visible" 
      style={{ 
        backgroundColor: '#0a0a0a', 
        minHeight: '100vh' 
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 md:right-10 w-64 md:w-96 h-96 bg-gold/3 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10 py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            variants={fadeIn("down", 0.1)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gradient-premium mb-6 md:mb-8"
          >
            Education
          </motion.h2>
          
          {/* Gold Divider */}
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
            <div className="mx-4 w-2 h-2 md:w-3 md:h-3 bg-gold rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-24 md:w-32"></div>
          </div>
          
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center"
          >
            My academic journey in technology, innovation, and continuous learning
          </motion.p>
        </motion.div>

        {/* Education Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {educations.map((education, index) => (
            <motion.div
              key={education.id}
              variants={fadeIn("up", 0.15 + index * 0.1)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px rgba(255,215,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-gold/50 transition-all duration-300 ease-in-out"
            >
              {/* Glass Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-300 ease-in-out pointer-events-none backdrop-blur-sm" />

              {/* Card Content */}
              <div className="p-6 md:p-8 relative z-10">
                {/* Institution Name */}
                <h3 
                  className="text-xl md:text-2xl font-semibold mb-2"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  🎓 {education.institution}
                </h3>

                {/* Location & Period */}
                <p className="text-gray-300 text-sm md:text-base mt-1 mb-4">
                  {education.location} · {education.period}
                </p>

                {/* Separator */}
                <hr className="border-t border-white/10 my-4" />

                {/* Degree */}
                <p className="text-base md:text-lg text-white font-medium mb-2">
                  {education.degree}
                </p>

                {/* GPA if available */}
                {education.gpa && (
                  <p className="text-gold text-sm md:text-base font-semibold mb-3">
                    GPA: {education.gpa}
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify mt-3">
                  {education.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

