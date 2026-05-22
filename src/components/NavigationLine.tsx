"use client";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
    const SECTIONS = [
  { id: 'hero', label: '' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'products', label: 'Products' },
  { id: 'collaboration', label: 'Collaboration' }
]
const NavigationLine = () => {

  const [activeSection, setActiveSection] = useState('hero');
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
 useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             setActiveSection(entry.target.id);
           }
         });
       },
       { 
         threshold: 0.1, // Trigger when even a small part is visible
         rootMargin: "-45% 0px -45% 0px" // Trigger when section passes the middle of the screen
       }
     );
     
   SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
 
     return () => observer.disconnect();
   }, []);

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use standard scrollIntoView which respects scroll-behavior: smooth in CSS
      element.scrollIntoView({ block: 'start' });
      setActiveSection(id);
    }
  };
    return (
            <div className="flex flex-col gap-2  fixed left-16 top-20 z-50">
                {/* Progress Bar */}
                            <AnimatePresence mode='wait'>
                          <motion.div key={activeSection}
                            className="fixed top-0 left-0 right-0 h-1 bg-brand-medium origin-left z-50"
                            style={{ scaleX }}
                          >
                            </motion.div>
                          </AnimatePresence>
                          {/* Theme Toggle */}
                          <div className="fixed top-6 right-6 z-40 hidden md:flex flex-col items-end gap-2 pr-6 border-r border-brand-dark/20">
                    </div>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              title={s.label}
              className="group flex items-center justify-center py-2 w-full cursor-pointer"
            >
              <div className={`w-[3px] transition-all duration-500 rounded-full ${
                activeSection === s.id ? 'bg-gray-800 h-8' : 'bg-gray-800 h-4 group-hover:bg-gray-400 group-hover:h-6'
              }`} />
            </button>
          ))}
        </div>
    );
}

export default NavigationLine;
