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
  // Force enable scroll immediately and set initial page height
  useEffect(() => {
    // Calculate total page height based on section min-heights (responsive)
    const calculateInitialHeight = () => {
      // Use the larger of innerHeight or documentElement.clientHeight for mobile
      const viewportHeight = Math.max(window.innerHeight, document.documentElement.clientHeight || window.innerHeight);
      const viewportWidth = window.innerWidth;
      
      let estimatedHeight;
      
      // Mobile (max-width: 767px)
      if (viewportWidth <= 767) {
        // Hero: 100vh, About: 100vh, Skills: 150vh, Projects: 120vh, Certificates: 150vh, Contact: 90vh, Footer: 30vh
        // Total: ~740vh minimum
        // Add extra buffer for mobile address bar
        estimatedHeight = viewportHeight * 7.6;
      }
      // Tablet (max-width: 1023px)
      else if (viewportWidth <= 1023) {
        // Hero: 100vh, About: 90vh, Skills: 120vh, Projects: 100vh, Certificates: 120vh, Contact: 80vh, Footer: 25vh
        // Total: ~635vh minimum
        estimatedHeight = viewportHeight * 6.4;
      }
      // Desktop
      else {
        // Hero: 100vh, About: 80vh, Skills: 100vh, Projects: 90vh, Certificates: 100vh, Contact: 70vh, Footer: 20vh
        // Total: ~560vh minimum
        estimatedHeight = viewportHeight * 5.6;
      }
      
      // Set initial height to prevent scroll freeze
      document.documentElement.style.minHeight = `${estimatedHeight}px`;
      document.body.style.minHeight = `${estimatedHeight}px`;
      
      // Also set on html element
      document.documentElement.style.height = 'auto';
    };
    
    // Recalculate on resize
    const handleResize = () => {
      calculateInitialHeight();
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
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
    
    // Calculate initial height first
    calculateInitialHeight();
    
    // Enable immediately
    enableScroll();
    
    // Enable on next tick
    setTimeout(() => {
      enableScroll();
      calculateInitialHeight();
    }, 0);
    setTimeout(() => {
      enableScroll();
      calculateInitialHeight();
    }, 10);
    setTimeout(() => {
      enableScroll();
      calculateInitialHeight();
    }, 50);
    setTimeout(() => {
      enableScroll();
      calculateInitialHeight();
    }, 100);
    
    // Update height when DOM changes
    const updateHeight = () => {
      // Force layout calculation
      document.body.offsetHeight;
      
      const actualHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight
      );
      
      if (actualHeight > 0) {
        // Use max of estimated and actual height
        const viewportHeight = Math.max(window.innerHeight, document.documentElement.clientHeight || window.innerHeight);
        const viewportWidth = window.innerWidth;
        
        let estimatedHeight;
        if (viewportWidth <= 767) {
          estimatedHeight = viewportHeight * 7.6;
        } else if (viewportWidth <= 1023) {
          estimatedHeight = viewportHeight * 6.4;
        } else {
          estimatedHeight = viewportHeight * 5.6;
        }
        
        const finalHeight = Math.max(actualHeight, estimatedHeight);
        document.documentElement.style.minHeight = `${finalHeight}px`;
        document.body.style.minHeight = `${finalHeight}px`;
      }
    };
    
    // Continuously ensure scroll is never locked
    const ensureScrollEnabled = () => {
      enableScroll();
      updateHeight();
    };
    
    // Check frequently
    const interval = setInterval(ensureScrollEnabled, 100);
    
    // Also watch for any style changes and DOM changes
    const observer = new MutationObserver(() => {
      enableScroll();
      updateHeight();
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
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <About />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Skills />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Projects />
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Certificates />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
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
