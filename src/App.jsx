import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Force enable scroll immediately - NEVER wait for loading
  useEffect(() => {
    // Enable scroll immediately on mount - don't wait for anything
    const enableScroll = () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.scrollBehavior = 'smooth';
      // Force remove any hidden overflow
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
    
    // Enable immediately
    enableScroll();
    
    // Enable on next tick
    setTimeout(enableScroll, 0);
    setTimeout(enableScroll, 10);
    setTimeout(enableScroll, 50);
    setTimeout(enableScroll, 100);
    
    // Continuously ensure scroll is never locked
    const ensureScrollEnabled = () => {
      enableScroll();
    };
    
    // Check frequently
    const interval = setInterval(ensureScrollEnabled, 50);
    
    // Also watch for any style changes
    const observer = new MutationObserver(() => {
      enableScroll();
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      childList: true,
      subtree: true
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    
    // Also listen to any attempts to disable scroll
    const originalSetProperty = CSSStyleDeclaration.prototype.setProperty;
    CSSStyleDeclaration.prototype.setProperty = function(property, value, priority) {
      if (property === 'overflow' && value === 'hidden') {
        if (this === document.body.style || this === document.documentElement.style) {
          return; // Block attempts to hide scroll
        }
      }
      if (property === 'overflow-y' && value === 'hidden') {
        if (this === document.body.style || this === document.documentElement.style) {
          return; // Block attempts to hide scroll
        }
      }
      return originalSetProperty.call(this, property, value, priority);
    };
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
      CSSStyleDeclaration.prototype.setProperty = originalSetProperty;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ overflowY: 'visible' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen overflow-visible" style={{ overflowY: 'visible', minHeight: 'auto' }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <About />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Skills />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Projects />
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Certificates />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
