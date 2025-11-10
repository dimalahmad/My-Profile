import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'top-2' : 'top-4'
        }`}
      >
        {/* Desktop Navbar */}
        <motion.div
          className={`hidden md:flex items-center justify-center px-8 py-4 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'backdrop-blur-md bg-black/60' 
              : 'backdrop-blur-sm bg-black/40'
          }`}
          style={{
            boxShadow: scrolled 
              ? '0 4px 20px rgba(212, 175, 55, 0.15), 0 8px 40px rgba(0, 0, 0, 0.3)'
              : '0 2px 10px rgba(212, 175, 55, 0.1)'
          }}
          whileHover={{
            boxShadow: '0 6px 25px rgba(212, 175, 55, 0.25), 0 12px 50px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Navigation Items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  activeSection === item.href.slice(1)
                    ? 'text-gold bg-gold/10'
                    : 'text-gray-300 hover:text-gold hover:bg-gold/5'
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ y: 0, scale: 0.95 }}
              >
                {item.name}
                
                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gold/10 rounded-full border border-gold/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Email Bubble */}
            <motion.a
              href="mailto:dimalkarimahmad@gmail.com"
              className="flex items-center px-4 py-2 ml-4 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold text-sm font-medium transition-all duration-300 hover:bg-gold/20 hover:border-gold/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>dimalkarimahmad@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile Navbar */}
        <motion.div
          className={`md:hidden flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'backdrop-blur-md bg-black/60' 
              : 'backdrop-blur-sm bg-black/40'
          }`}
          style={{
            boxShadow: scrolled 
              ? '0 4px 20px rgba(212, 175, 55, 0.15)'
              : '0 2px 10px rgba(212, 175, 55, 0.1)'
          }}
        >
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gold hover:text-gold-light transition-colors duration-300 rounded-lg hover:bg-gold/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>

          {/* Mobile Email */}
          <motion.a
            href="mailto:dimalkarimahmad@gmail.com"
            className="flex items-center px-3 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-black/80 rounded-2xl border border-gold/20 overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full px-6 py-3 text-left text-sm font-medium tracking-wide transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-gold bg-gold/10'
                        : 'text-gray-300 hover:text-gold hover:bg-gold/5'
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
