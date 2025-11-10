import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container-custom">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <motion.p
            variants={fadeIn("right", 0.2)}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {currentYear} <span className="text-gold font-medium">Dimal Karim Ahmad</span> — All Rights Reserved
          </motion.p>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="flex items-center space-x-6"
          >
            {['Privacy', 'Terms', 'Contact'].map((link, index) => (
              <motion.button
                key={link}
                whileHover={{ y: -2, color: '#d4af37' }}
                className="text-gray-400 text-sm hover:text-gold transition-colors duration-300"
                onClick={() => {
                  if (link === 'Contact') {
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="mt-6 pt-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Made with love */}
            <motion.p
              variants={fadeIn("right", 0.5)}
              className="text-gray-500 text-xs flex items-center space-x-1"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              <span>using React, Tailwind CSS & Framer Motion</span>
            </motion.p>

            {/* Back to top */}
            <motion.button
              variants={fadeIn("left", 0.6)}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors duration-300 text-xs"
            >
              <span>Back to top</span>
              <motion.svg
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
