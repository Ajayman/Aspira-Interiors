"use client";

import { motion } from 'motion/react';
import Link from 'next/link';

const sections = [
  { 
    title: "Agency", 
    items: [
      { name: "First words", href: "#about" },
      { name: "Our Manifesto", href: "/about" },
      { name: "The Studio", href: "#about" }
    ] 
  },
  { 
    title: "Works", 
    items: [
      { name: "01 Residential", href: "#project-01" },
      { name: "02 Hospitality", href: "#project-01" },
      { name: "03 Objects", href: "/products" },
      { name: "View full catalogue", href: "/products" }
    ] 
  },
  { 
    title: "Collaboration", 
    items: [
      { name: "My workflow", href: "#collaboration" },
      { name: "Contact information", href: "/contact" }
    ] 
  }
];

export default function TableOfContents() {
  return (
    <section id="tableofContents" className="min-h-screen py-24 px-6 md:px-20 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-12 bg-brand-surface">
      {/* Vertical Side Header */}
      <div className="hidden md:flex flex-col items-center">
        <h2 className="vertical-text rotate-180 text-7xl font-serif text-brand-dark uppercase leading-none origin-center transform -translate-x-1/2">
          <span className="text-xl uppercase tracking-widest font-sans mb-4 block opacity-60">Web</span>
          Contents
        </h2>
      </div>

      {/* Main Images */}
      <div className="flex flex-col gap-6 md:gap-12">
        {[
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
          "https://images.unsplash.com/photo-1615876234886-fd9a39f995af?auto=format&fit=crop&q=80&w=1000"
        ].map((url, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full aspect-[21/9] overflow-hidden rounded-sm grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
          >
            <img src={url} alt={`Section preview ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>

      {/* List Content */}
      <div className="flex flex-col justify-center space-y-16 py-12">
        {sections.map((section, idx) => (
          <motion.div 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="uppercase tracking-[0.2em] font-semibold text-sm mb-6 text-brand-dark border-b border-brand-dark/10 pb-2 inline-block">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li 
                  key={item.name} 
                  className="text-xs md:text-sm font-medium opacity-60 hover:opacity-100 transition-opacity tracking-wide uppercase"
                >
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className="cursor-pointer">{item.name}</a>
                  ) : (
                    <Link href={item.href} className="cursor-pointer">{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      
      {/* Mobile Title */}
      <div className="md:hidden order-first">
        <h2 className="text-5xl font-serif text-brand-dark uppercase leading-none mb-8">
           Table of Contents
        </h2>
      </div>
    </section>
  );
}
