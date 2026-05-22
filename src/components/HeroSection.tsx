"use client";

import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col relative bg-brand-bg">
      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-sm shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7" 
            alt="Hero Image" 
            className="w-full h-screen grayscale-[0.2] hover:scale-105 object-cover transition-transform duration-[3s]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply" />
        </motion.div>
      </div>

      <div className="absolute pb-12 md:pb-20 text-center left-10 bottom-10 px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-2 opacity-70"
        >
          A Complete
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-[10rem] font-serif leading-none tracking-tighter text-brand-dark uppercase"
        >
          Interiors
        </motion.h1>
      </div>
    </section>
  );
}
