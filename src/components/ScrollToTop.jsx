import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1, 
            y: -2,
            boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 md:w-12 md:h-12 bg-gold hover:bg-gold-light text-black rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          style={{
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
          }}
        >
          <ChevronUp className="w-4 h-4 md:w-6 md:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
