"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Grid3X3, 
  List, 
  ChevronDown,
  Search,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { NavigationMenu } from '@/src/components/Navigation';

const subCategories = [
  { name: "Bed Bench", icon: "https://images.unsplash.com/photo-1595428774751-2df825785084?auto=format&fit=crop&q=80&w=200" },
  { name: "Bed-Side Table", icon: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=200" },
  { name: "Beds", icon: "https://images.unsplash.com/photo-1505691722718-47841b046654?auto=format&fit=crop&q=80&w=200" },
  { name: "Bookshelf", icon: "https://images.unsplash.com/photo-1594620302200-9a7622d4a13f?auto=format&fit=crop&q=80&w=200" },
  { name: "Cabinets", icon: "https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80&w=200" },
];

const archiveData = [
  { date: "May 2023", count: 1 },
  { date: "April 2023", count: 7 },
  { date: "March 2023", count: 1 },
];

const products = [
  {
    id: 1,
    name: "Modern TV Cabinet White",
    price: "$299.00",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Sleek Grey TV Unit",
    price: "$349.00",
    image: "https://images.unsplash.com/photo-1595514535315-7389ea5098fc?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Walnut Entertainment Center",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Contemporary Sideboard",
    price: "$199.00",
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39f995af?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "Oak Minimalist Console",
    price: "$275.00",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "Industrial Metal Rack",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1594620302200-9a7622d4a13f?auto=format&fit=crop&q=80&w=600",
  },
];

export default function ProductListPage() {
  const [viewType, setViewType] = useState('grid');

  return (
    <>
    <NavigationMenu />
    <div className="min-h-screen bg-white text-black font-sans pl-16">
      {/* Top Header */}
      <header className="py-16 text-center">
        <Link href="/" className="fixed top-8 left-8 p-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all z-50">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">Living Room</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 font-medium pb-12">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="opacity-30">/</span>
          <span className="text-black">Living Room</span>
        </div>

        {/* Categories Carousel */}
        <div className="max-w-4xl mx-auto px-6 relative mt-4">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="flex justify-center gap-8 md:gap-12 overflow-x-auto scrollbar-hide py-4">
            {subCategories.map((cat, idx) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-2 p-1 transition-all duration-500 overflow-hidden ${idx === 4 ? 'border-purple-200' : 'border-gray-100 group-hover:border-gray-300'}`}>
                   <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 relative">
                     {idx === 4 && <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay" />}
                     <img src={cat.icon} alt={cat.name} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" referrerPolicy="no-referrer" />
                   </div>
                </div>
                <span className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center group-hover:text-gray-600 transition-colors">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </header>

      <hr className="border-gray-100" />

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          Showing 1-12 of 291 item(s)
        </div>

        <div className="flex items-center gap-8">
          {/* View Toggles */}
          <div className="flex border border-gray-100 rounded-sm overflow-hidden">
            <button 
              onClick={() => setViewType('grid-small')}
              className={`p-2 transition-colors ${viewType === 'grid-small' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
            >
              <LayoutGrid className="w-4 h-4 opacity-50" />
            </button>
            <button 
              onClick={() => setViewType('grid')}
              className={`p-2 border-x border-gray-100 transition-colors ${viewType === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
            >
              <Grid3X3 className="w-4 h-4 opacity-70" />
            </button>
            <button 
              onClick={() => setViewType('list')}
              className={`p-2 transition-colors ${viewType === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
            >
              <List className="w-4 h-4 opacity-50" />
            </button>
          </div>

          {/* Sort Dropdown */}
          <button className="flex items-center gap-8 border border-gray-100 px-4 py-2 rounded-sm group hover:border-gray-300 transition-colors">
            <span className="text-xs font-bold uppercase tracking-widest">Default Sorting</span>
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-black transition-colors" />
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 space-y-16">
          {/* Archives */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-gray-100">Archives</h3>
            <ul className="space-y-4">
              {archiveData.map((item) => (
                <li key={item.date} className="flex justify-between items-baseline group cursor-pointer">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-gray-500 transition-colors">{item.date}</span>
                  <span className="text-[10px] text-gray-400 font-medium">({item.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-gray-100">Categories</h3>
            <div className="text-sm font-bold text-gray-900 hover:text-gray-500 transition-colors cursor-pointer">
              Life Style
            </div>
          </div>

          {/* Help / Newsletter Placeholder */}
          <div className="bg-gray-50 p-8 rounded-sm">
             <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-gray-400">Need Help?</h4>
             <p className="text-xs font-medium leading-relaxed opacity-60">
                Contact our customer support for any questions regarding our collections.
             </p>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className={`grid gap-8 ${
            viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 
            viewType === 'grid-small' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 
            'grid-cols-1'
          }`}>
            {products.map((product, idx) => (
              <Link 
                key={product.id}
                href={`/products/${product.id}`}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/5] bg-[#E8E8E8] rounded-sm flex items-center justify-center p-8 overflow-hidden">
                   {/* Blob Background Effect */}
                   <div className="absolute inset-4 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]" />
                   <div className="absolute w-64 h-64 bg-gray-400/20 rounded-full mix-blend-multiply blur-3xl transform translate-x-4 -translate-y-4" />
                   
                   {/* Centered Image with Blob Reveal */}
                   <div className="relative w-full h-full z-10 flex items-center justify-center">
                     <div className="absolute inset-0 bg-gray-300 opacity-20" 
                          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }} />
                     <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-[85%] h-[85%] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                     />
                   </div>

                   {/* Quick View Overlay */}
                   <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <div className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                         <Search className="w-4 h-4 text-black" />
                      </div>
                   </div>
                </div>

                <div className="mt-6 text-center space-y-1">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 opacity-60">Living Room</h4>
                   <p className="text-sm font-bold uppercase tracking-tight group-hover:text-gray-600 transition-colors">
                     {product.name}
                   </p>
                   <p className="text-sm font-bold text-gray-900 mt-2">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-2">
             {[1, 2, 3, "...", 25].map((page, i) => (
                <button 
                  key={i} 
                  className={`w-10 h-10 flex items-center justify-center text-[10px] font-bold uppercase border transition-all ${
                    page === 1 ? 'bg-black text-white border-black' : 'border-gray-100 hover:border-black'
                  }`}
                >
                   {page}
                </button>
             ))}
          </div>
        </div>
      </div>

      {/* Simple Footer Link */}
      <div className="py-24 text-center">
         <p className="text-[10px] uppercase tracking-[0.4em] text-gray-300 mb-8">End of Collection</p>
         <Link href="/" className="text-2xl font-serif text-gray-400 hover:text-black transition-colors uppercase tracking-widest italic">
            Back to Home
         </Link>
      </div>
    </div>
    </>
  );
}
