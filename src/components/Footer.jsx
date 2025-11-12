import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 pt-8 pb-8">
      <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          {/* Copyright */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-gray-400 text-sm text-center"
          >
            © {currentYear} <span className="text-gold font-medium">Dimal Karim Ahmad</span> — All Rights Reserved
          </motion.p>

          {/* Made with love */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-gray-400 text-sm flex items-center justify-center space-x-1 text-center"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-400"
            >
              ❤️
            </motion.span>
            <span>and</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-400"
            >
              ☕
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
