"use client";

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const workflowSteps = [
  "Consultation & Research",
  "Concept Development",
  "Documentation & Construction",
  "Project Completion"
];

export default function CollaborationSection() {
  return (
    <section id="collaboration" className="min-h-screen bg-brand-bg py-24 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Workflow */}
        <div className="relative">
          <div className="bg-brand-medium/10 absolute inset-y-0 -left-6 w-1 hidden md:block" />
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark uppercase mb-16 leading-none tracking-tight">
            My <br /> Workflow
          </h2>
          
          <div className="space-y-4 max-w-md">
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="bg-brand-medium text-brand-bg w-10 h-10 flex items-center justify-center rounded-sm font-serif text-sm">
                  {idx + 1}
                </div>
                <div className="flex-1 p-6 border border-brand-dark/10 group-hover:bg-brand-medium/5 transition-colors">
                   <p className="uppercase text-xs font-bold tracking-widest text-brand-dark">{step}</p>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <div className="absolute left-5 ml-[-1px] h-4 w-[1px] bg-brand-dark/20 z-0 mt-20" />
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-xs leading-relaxed opacity-60 max-w-sm">
             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        </div>

        {/* Contact info */}
        <div className="bg-brand-surface p-8 md:p-16 rounded-sm border border-brand-dark/5 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-serif uppercase text-brand-dark mb-12 tracking-tight italic">
            Let's work together!
          </h3>
          
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-medium mt-1 shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-40 mb-1">Call Me</p>
                <p className="text-sm font-medium hover:text-brand-medium transition-colors">+123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-brand-medium mt-1 shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-40 mb-1">Send Me a Message</p>
                <p className="text-sm font-medium hover:text-brand-medium transition-colors">hello@sydneybrown.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-medium mt-1 shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-40 mb-1">Visit My Office</p>
                <p className="text-sm font-medium">Example City, Example Road 1</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="w-5 h-5 text-brand-medium mt-1 shrink-0" />
              <div>
                <p className="text-[10px] uppercase font-bold opacity-40 mb-1">Visit My Website</p>
                <p className="text-sm font-medium hover:text-brand-medium transition-colors underline underline-offset-4">www.sydneybrown.com</p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="block outline-none">
            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-16 flex items-center gap-4 text-brand-dark font-serif text-lg group bg-brand-light/10 px-6 py-4 rounded-full border border-brand-light/20 w-full"
            >
              Start a project <ArrowRight className="w-5 h-5 group-hover:text-brand-medium transition-colors" />
            </motion.button>
          </Link>
        </div>
      </div>
      
      {/* Footer / Re-cover */}
      <footer className="mt-32 pt-12 border-t border-brand-dark/10 flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-[10px] uppercase tracking-widest opacity-40 italic">Interior Design Portfolio</p>
         <h2 className="text-2xl font-serif text-brand-dark uppercase tracking-tighter">Sydney Brown</h2>
         <p className="text-[10px] uppercase tracking-widest opacity-40 italic">Works 2020 / 2025</p>
      </footer>
    </section>
  );
}
