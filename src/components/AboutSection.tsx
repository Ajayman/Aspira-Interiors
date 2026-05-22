"use client";

import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row bg-brand-bg pt-20">
      {/* Left Pane - First Words */}
      <div className="w-full md:w-1/2 bg-brand-dark text-brand-bg p-8 md:p-20 flex flex-col justify-center relative">
        <div className="absolute top-8 left-8 vertical-text text-[20px] uppercase tracking-widest opacity-40">
          About Aspira Interiors
        </div>
        
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12 aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000" 
              alt="Sydney Brown" 
              className="w-full h-full object-cover grayscale-[0.5]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="relative">
             <span className="absolute -top-12 -left-6 text-[8rem] font-serif opacity-10 leading-none">F</span>
             <h2 className="text-sm font-semibold uppercase tracking-[0.3em] mb-6">First Words</h2>
             <p className="text-sm leading-relaxed opacity-70 font-light italic">
                "Design is not just what it looks like and feels like. Design is how it works. My approach merges the aesthetic with the functional, creating spaces that breathe and tell a story of their own."
             </p>
             <p className="mt-6 text-xs leading-relaxed opacity-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
          </div>
        </div>
      </div>

      {/* Right Pane - CV Details */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center bg-brand-surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-2xl mx-auto">
          
          {/* Experience */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
          >
            <h3 className="bg-brand-medium/10 text-brand-medium inline-block px-3 py-1 text-[10px] uppercase font-bold tracking-widest mb-6">Experience</h3>
            <div className="space-y-6">
              {[
                { title: "Senior Designer", company: "Studio Lux", years: "2022 - Present" },
                { title: "Interior Architect", company: "Metro Design", years: "2020 - 2022" },
                { title: "Junior Designer", company: "Creative Spaces", years: "2018 - 2020" }
              ].map((job) => (
                <div key={job.title} className="border-l border-brand-light/30 pl-4">
                  <p className="text-[10px] uppercase tracking-tighter font-bold text-brand-dark">{job.title} / {job.company}</p>
                  <p className="text-[9px] opacity-40 mb-2 uppercase">{job.years}</p>
                  <p className="text-[10px] leading-snug opacity-70">Leading high-end residential projects from concept to completion.</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <div className="space-y-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               viewport={{ once: true }}
            >
              <h3 className="bg-brand-medium/10 text-brand-medium inline-block px-3 py-1 text-[10px] uppercase font-bold tracking-widest mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] uppercase font-bold">Master in Interior Design</p>
                  <p className="text-[10px] opacity-40 uppercase">University of Arts / 2018</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold">Bachelor of Architecture</p>
                  <p className="text-[10px] opacity-40 uppercase">Design Institute / 2016</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               viewport={{ once: true }}
            >
               <h3 className="bg-brand-medium/10 text-brand-medium inline-block px-3 py-1 text-[10px] uppercase font-bold tracking-widest mb-6">Skills</h3>
               <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                 {["Concept Design", "Space Planning", "3D Visualization", "Material Research", "Project Management", "Detailing"].map(skill => (
                   <div key={skill} className="flex items-center gap-2">
                     <span className="w-1 h-1 bg-brand-medium rounded-full" />
                     <span className="text-[10px] uppercase opacity-70">{skill}</span>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
