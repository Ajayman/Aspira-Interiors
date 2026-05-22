"use client";

import { motion } from 'motion/react';

const projects = [
  {
    id: "01",
    type: "Residential design",
    title: "The Cozy Nook",
    description: "A minimalist haven designed for a young professional in the heart of the city. Focus on natural materials, warm lighting, and efficient space utilization.",
    image: "https://images.unsplash.com/photo-1616137422495-1e96f5ee8c2e?auto=format&fit=crop&q=80&w=1200",
    inspiration: "Inspired by Nordic simplicity and Japanese functionality (Japandi). The goal was to create a clutter-free environment that promotes mental clarity.",
    details: {
      location: "San Francisco, CA",
      area: "850 sq.ft",
      duration: "6 months"
    },
    palette: ["#4A2C1D", "#8B5E3C", "#C5A880", "#E5D3B3", "#FDFCFB"]
  },
  {
    id: "02",
    type: "Hospitality design",
    title: "The Corner Café",
    description: "An urban bistro that blends industrial elements with warm, inviting textures. Custom lighting and bespoke furniture create a unique social atmosphere.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    inspiration: "The rhythm of the city and the intimacy of a local gathering spot. We used raw steel, reclaimed wood, and velvet upholstery to create contrast.",
    details: {
      location: "New York, NY",
      area: "1,200 sq.ft",
      duration: "9 months"
    },
    palette: ["#1A1A1A", "#3D2B1F", "#6B4226", "#A67B5B", "#D9C5B2"]
  },
  {
    id: "03",
    type: "Furniture design",
    title: "The Simple Chair",
    description: "A study in ergonomics and material honesty. Handcrafted from solid walnut and woven cane, this piece celebrates traditional craftsmanship.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=1200",
    inspiration: "Classic mid-century modern silhouettes reimagined for contemporary living. The focus was on the tactile quality of the materials.",
    details: {
      material: "Solid Walnut / Cane",
      dimensions: "18\" x 20\" x 32\"",
      weight: "12 lbs"
    },
    palette: ["#2C1B10", "#4D3B2B", "#8C7152", "#BFAC95", "#EFEDE7"]
  },
  {
    id: "04",
    type: "Commercial design",
    title: "The Botanical Office",
    description: "A biophilic workspace designed to boost productivity and employee well-being. Integration of live plants, natural light, and organic shapes.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    inspiration: "The restorative power of nature in an urban environment. We used curved glass walls and integrated planters to bring the outside in.",
    details: {
      location: "Seattle, WA",
      area: "4,500 sq.ft",
      duration: "14 months"
    },
    palette: ["#2D3B2D", "#4B5D4B", "#7C8D7C", "#BACCBA", "#EAF2EA"]
  }
];

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="bg-brand-bg">
      {projects.map((project, index) => (
        <div key={project.id}>
          {/* Main Project Section */}
          <section 
            id={`project-${project.id}`}
            className={`min-h-screen py-24 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 px-6 md:px-20 relative border-b border-brand-dark/5`}
          >
            {/* Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
               <span className="text-[30vw] font-serif leading-none select-none">{project.id}</span>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 z-10">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.3em] font-medium text-brand-medium mb-4">{project.type}</p>
                <h2 className="text-5xl md:text-7xl font-serif text-brand-dark uppercase mb-8 leading-tight tracking-tighter">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base leading-relaxed opacity-80 mb-12 max-w-lg">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-brand-dark/10 pt-8">
                   <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-widest mb-2 opacity-50">Inspiration</h4>
                      <p className="text-xs leading-relaxed opacity-70 italic">{project.inspiration}</p>
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-[10px] uppercase font-bold tracking-widest mb-2 opacity-50">Details</h4>
                      {Object.entries(project.details).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-brand-dark/5 pb-1">
                          <span className="text-[10px] uppercase opacity-40">{key}</span>
                          <span className="text-[10px] uppercase font-medium">{val}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Main Image */}
            <div className="w-full md:w-1/2">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true }}
                 className="aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-lg grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[5s]" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </section>

          {/* Project Details Spread */}
          <section className="min-h-screen py-24 px-6 md:px-20 bg-brand-surface flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
              {/* Secondary Images/Visuals */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-brand-dark/5 rounded-sm overflow-hidden mt-12">
                   <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale-[0.3]" alt="Detail 1" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] bg-brand-dark/5 rounded-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale-[0.3]" alt="Detail 2" referrerPolicy="no-referrer" />
                </div>
                <div className="col-span-2 relative aspect-[16/9] bg-brand-dark/10 rounded-sm mt-4 p-8 flex items-center justify-center">
                    {/* Simulated Floorplan */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 stroke-brand-dark fill-none stroke-[0.5]">
                      <rect x="10" y="10" width="80" height="80" />
                      <line x1="10" y1="50" x2="90" y2="50" />
                      <circle cx="30" cy="30" r="10" />
                      <circle cx="70" cy="70" r="15" />
                    </svg>
                    <div className="absolute top-4 left-4 text-[8px] uppercase tracking-widest font-mono opacity-50">Floor Plan / Type A</div>
                </div>
              </div>

              {/* Spread Details */}
              <div className="flex flex-col justify-center gap-12">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                >
                  <h3 className="text-xl font-serif uppercase text-brand-dark mb-4 border-l-2 border-brand-medium pl-4">The Interior</h3>
                  <p className="text-xs leading-relaxed opacity-60">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </motion.div>

                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-6">Materials & Colors</h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {project.palette.map((color, cIdx) => (
                        <motion.div 
                          key={color}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: cIdx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex flex-col gap-2"
                        >
                          <div className="w-full aspect-square rounded-sm border border-brand-dark/5" style={{ backgroundColor: color }} />
                          <div className="flex flex-col">
                             <span className="text-[8px] font-mono uppercase opacity-50">{color}</span>
                             <span className="text-[9px] uppercase font-bold tracking-tighter opacity-80">Material Info</span>
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>

                <div className="text-[8px] uppercase tracking-[0.5em] opacity-30 mt-auto">
                   Project Detail Spread — {project.title} / 2025
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
