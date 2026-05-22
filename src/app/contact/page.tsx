"use client";

import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Phone, Globe, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Breadcrumbs */}
      <div className="flex items-center justify-center gap-2 text-sm font-medium py-12">
        <Link href="/" className="text-gray-400 hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4 text-gray-300" />
        <span className="text-black">Contact</span>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] bg-[#F2EDE9] shadow-xl min-h-[700px]">
          
          {/* Left Side: Image & Info Overlay */}
          <div className="relative w-full lg:w-2/3 h-[500px] lg:h-auto overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsman at work" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Text Overlay */}
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Contact Aspira Interiors</h2>
              
              <div className="space-y-4 opacity-90">
                <p className="text-lg md:text-xl font-medium">Onti, Bhaktapur</p>
                <p className="text-lg md:text-xl font-medium">Nepal</p>
                <p className="text-lg md:text-xl font-medium pt-4">+977 9851111978</p>
              </div>

              <button className="mt-12 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all border border-white/20 active:scale-95 shadow-lg">
                Get Directions
              </button>
            </div>
            
            <Link href="/" className="absolute top-8 left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border border-white/10">
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-16 text-center lg:text-left">Get in Touch</h1>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Name</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-white px-6 py-4 rounded-3xl text-sm border-transparent focus:border-gray-200 focus:ring-0 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Email *</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full bg-white px-6 py-4 rounded-3xl text-sm border-transparent focus:border-gray-200 focus:ring-0 transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Phone</label>
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-white px-6 py-4 rounded-3xl text-sm border-transparent focus:border-gray-200 focus:ring-0 transition-all placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-4">Your Message</label>
                <textarea 
                  rows={6}
                  placeholder="Your Message"
                  className="w-full bg-white px-6 py-6 rounded-[2rem] text-sm border-transparent focus:border-gray-200 focus:ring-0 transition-all placeholder:text-gray-300 resize-none"
                />
              </div>

              <div className="pt-8 flex justify-center lg:justify-end">
                <button className="bg-black text-white px-12 py-4 rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.7101222677193!2d85.43606489150616!3d27.681200785892894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b4722cfa223%3A0x770f5e1f2c301283!2sAspira%20Interiors!5e0!3m2!1sen!2snp!4v1779183265279!5m2!1sen!2snp" width="100%" height="650" className="border:0; pt-12" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </main>

      <div className="py-24 text-center">
         <p className="text-[12px] uppercase tracking-[0.4em] text-gray-800 mb-8">Let's Connect</p>
      </div>
    </div>
  );
}
