"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = ["New Products", "Most Popular", "Furniture", "Accessories"];

const allProducts = [
  {
    id: 1,
    type: "New Products",
    category: "Cutting Boards",
    name: "Premium Walnut Cutting Board - Champagne Gold & White",
    price: "CHF 189.00",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
    status: "Sold Out"
  },
  {
    id: 2,
    type: "New Products",
    category: "Cutting Boards",
    name: "Premium Walnut Cutting Board - Deep Ocean Blue",
    price: "CHF 198.00",
    image: "https://images.unsplash.com/photo-1544650039-2287f3ee339a?auto=format&fit=crop&q=80&w=800",
    status: "Sold Out"
  },
  {
    id: 3,
    type: "New Products",
    category: "Cutting Boards",
    name: "Premium Walnut Cutting Board - Saffron & Azure",
    price: "CHF 239.00",
    originalPrice: "CHF 259.00",
    image: "https://images.unsplash.com/photo-1621271105151-5517228892dc?auto=format&fit=crop&q=80&w=800",
    status: "Sold Out"
  },
  {
    id: 4,
    type: "Furniture",
    category: "Tables",
    name: "Minimalist Oak Coffee Table",
    price: "CHF 450.00",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
    status: "Available"
  }
];

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("New Products");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Most Popular") return allProducts.slice(0, 2);
    if (activeCategory === "Accessories") return allProducts.filter(p => p.category === "Cutting Boards");
    return allProducts.filter(p => p.type === activeCategory || activeCategory === "New Products");
  }, [activeCategory]);

  return (
    <section id="products" className="py-24 px-6 md:px-20 bg-brand-bg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="flex flex-wrap gap-8 md:gap-12 items-baseline">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`text-2xl md:text-4xl font-serif tracking-tight transition-all duration-500 relative cursor-pointer ${
                activeCategory === cat ? 'text-brand-dark' : 'text-brand-dark/30 hover:text-brand-dark/50'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-brand-dark/40"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>
        <Link href="/products" className="group flex items-center gap-2 text-xs uppercase font-bold tracking-widest border-b border-brand-dark pb-1 text-brand-dark cursor-pointer">
          View all products <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid with AnimatePresence */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="wait">
          {filteredProducts.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.id}`}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 bg-brand-surface">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-dark/40 backdrop-blur-md text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-md">
                    {product.status}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Search className="w-4 h-4 text-brand-dark" />
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/95 text-brand-dark text-[11px] uppercase font-bold py-3 text-center rounded-xl shadow-lg">
                    {product.status}
                  </div>
                </div>
              </div>

              <div className="px-2">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-dark/40 mb-2">
                  {product.category}
                </p>
                <h3 className="text-sm font-serif text-brand-dark mb-3 leading-snug group-hover:text-brand-medium transition-colors">
                  {product.name}
                </h3>
                <div className="flex gap-3 items-baseline">
                  <span className={`text-sm font-bold ${product.originalPrice ? 'text-red-700' : 'text-brand-dark'}`}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs line-through opacity-30 text-brand-dark">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
