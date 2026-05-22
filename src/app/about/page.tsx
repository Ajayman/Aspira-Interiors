"use client";

import { motion } from 'motion/react';
import { ArrowLeft, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: "14 Days Return",
    desc: "We are able to ship our items to almost anywhere in the world",
    border: true
  },
  {
    title: "Security Payment",
    desc: "Usually fall within the 14-day return policy,",
    border: true
  },
  {
    title: "24/7 Support",
    desc: "Securely process all of our card transactions",
    border: false
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Header */}
      <header className="py-16 text-center">
        <Link href="/" className="fixed top-8 left-8 p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all z-50">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">About Us</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 font-medium pb-12">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <span className="text-black">About Us</span>
        </div>
      </header>

      <hr className="border-gray-100" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Intro Section */}
        <div className="text-center mb-32">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-12"
           >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Workspace" 
                className="w-full max-w-lg mx-auto aspect-video object-cover rounded-sm shadow-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
           </motion.div>
           <h2 className="text-4xl md:text-5xl font-bold text-[#56BBEB] mb-6">Great Design For All</h2>
           <p className="text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              At Funito, we create affordable designs for the modern home. Our philosophy is rooted in the belief that everyone deserves a space that inspires them.
           </p>
        </div>

        {/* Overlapping Panels Section 1 */}
        <div className="relative mb-48 flex justify-end">
           <div className="w-full lg:w-2/3 relative">
              <img 
                src="https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80&w=1000" 
                alt="Design Panel" 
                className="w-full aspect-[16/9] object-cover rounded-sm opacity-20"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-0 -translate-y-1/2 lg:-translate-x-24 w-full md:w-3/4 lg:w-2/3 bg-[#8B7E66] p-12 md:p-20 text-white shadow-2xl"
              >
                 <h3 className="text-4xl font-bold mb-6">Designs You Desire</h3>
                 <p className="text-sm leading-loose opacity-80 mb-10">
                    We love creating furniture you want and will love for years to come. Our designs feature a fusion of unique styles that inspire us — from mid-century modern to contemporary.
                 </p>
                 <button className="text-[10px] uppercase font-bold tracking-[0.2em] border border-white px-8 py-3 hover:bg-white hover:text-[#8B7E66] transition-all">
                    Read More
                 </button>
              </motion.div>
           </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48">
           {features.map((f, i) => (
             <div key={f.title} className={`text-center space-y-4 ${f.border ? 'md:border-r border-gray-100 pr-0 md:pr-12' : ''}`}>
                <h4 className="text-[#56BBEB] text-lg font-bold">{f.title}</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[200px] mx-auto">
                   {f.desc}
                </p>
             </div>
           ))}
        </div>

        {/* Overlapping Panels Section 2 */}
        <div className="relative mb-48 flex justify-start">
           <div className="w-full lg:w-2/3 relative">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" 
                alt="Quality Panel" 
                className="w-full aspect-[16/9] object-cover rounded-sm opacity-20"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 right-0 -translate-y-1/2 lg:translate-x-24 w-full md:w-3/4 lg:w-2/3 bg-[#444C5C] p-12 md:p-20 text-white shadow-2xl text-right"
              >
                 <h3 className="text-4xl font-bold mb-6">Quality At Every Step</h3>
                 <p className="text-sm leading-loose opacity-80 mb-10">
                    Rest easy. From choice materials and expert hands, to precision tools and tests, we ensure your product is made of hardy stuff.
                 </p>
                 <button className="text-[10px] uppercase font-bold tracking-[0.2em] border border-white px-8 py-3 hover:bg-white hover:text-[#444C5C] transition-all ml-auto block">
                    Read More
                 </button>
              </motion.div>
           </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
               <Quote className="w-12 h-12 text-gray-100" />
            </div>
            
            <div className="flex justify-center gap-1 mb-8">
               {[1,2,3,4].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
               <Star className="w-4 h-4 text-gray-200" />
            </div>

            <div className="relative mb-12">
               <button className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 text-gray-200 hover:text-black transition-colors hidden md:block">
                  <ChevronLeft className="w-8 h-8" />
               </button>
               
               <p className="text-xl md:text-2xl font-medium italic text-gray-600 leading-relaxed">
                  "The items we ordered are well made and robust and have far exceeded our expectations — we are absolutely delighted with the results for our studio."
               </p>

               <button className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 text-gray-200 hover:text-black transition-colors hidden md:block">
                  <ChevronRight className="w-8 h-8" />
               </button>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="w-32 h-32 rounded-full p-2 border border-orange-200">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                      alt="Alish Poudel" 
                      className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="space-y-1">
                   <h5 className="text-base font-bold uppercase tracking-tight">Alish Poudel</h5>
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 italic">Graphic Designer</p>
                </div>
            </div>
        </div>

      </main>

      <div className="py-24 text-center">
         <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300 mb-8">Get In Touch</p>
         <Link href="/" className="text-2xl font-serif text-gray-400 hover:text-black transition-colors uppercase tracking-widest italic">
            Back to Home
         </Link>
      </div>
    </div>
  );
}
