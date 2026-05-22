"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Minus, 
  Plus, 
  ArrowLeft,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const products = {
  "1": {
    id: 1,
    name: "TV Cabinet - TV-CA-31",
    price: "Rs. 22,600",
    description: "This modern TV stand brings a clean and stylish look to any room with its smooth shape, gentle edges, and neat design. It has roomy drawers and cabinets that help you store your media items, books, and décor so your space stays tidy. The metal legs and accents with a gold touch add a hint of elegance without being too bold. Whether you place it in your living room or bedroom, this TV stand offers practical storage and a smart design that fits easily into any modern home.",
    details: "Note that this product is only available after custom orders. TV Cabinet Dimension - Height - 1.7 ft and Wide - 6 ft",
    category: ["Living Room", "TV Cabinets"],
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595514535315-7389ea5098fc?auto=format&fit=crop&q=80&w=800"
    ],
    related: [
      { id: 2, name: "Classic Armchair", price: "Rs. 15,000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=400", blob: "bg-cyan-100" },
      { id: 3, name: "Soft Lounge Chair", price: "Rs. 18,500", image: "https://images.unsplash.com/photo-1598191950976-3b7bc189d261?auto=format&fit=crop&q=80&w=400", blob: "bg-orange-100" },
      { id: 4, name: "Modern Sofa L-Shape", price: "Rs. 45,000", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400", blob: "bg-blue-100" },
      { id: 5, name: "Minimalist Desk", price: "Rs. 12,000", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=400", blob: "bg-cyan-50" }
    ]
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || "1";
  const product = products[id as keyof typeof products] || products["1"];
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-24">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12">
          <ArrowLeft className="w-3 h-3" /> Back to collection
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Images */}
        <div className="space-y-6">
           <div className="relative aspect-square bg-[#E8E8E8] rounded-sm flex items-center justify-center p-12 overflow-hidden">
             {/* Blob Background */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80%] h-[80%] bg-gray-400/20 blur-3xl rounded-full" 
                     style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }} />
             </div>
             
             <AnimatePresence mode="wait">
               <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
               />
             </AnimatePresence>
           </div>

           {/* Thumbnails */}
           <div className="flex gap-4">
             {product.images.map((img, idx) => (
               <button 
                 key={idx}
                 onClick={() => setActiveImage(idx)}
                 className={`w-24 h-24 rounded-sm border-2 transition-all p-2 overflow-hidden bg-[#E8E8E8] ${activeImage === idx ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
               >
                 <img src={img} alt="Thumbnail" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
               </button>
             ))}
           </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
             <span>Home</span>
             <span className="opacity-30">/</span>
             <span>{product.category[0]}</span>
             <span className="opacity-30">/</span>
             <span>{product.category[1]}</span>
             <span className="opacity-30">/</span>
             <span className="text-black">{product.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
          <p className="text-2xl font-bold mb-8">{product.price}</p>

          <hr className="border-gray-100 mb-8" />

          <p className="text-sm text-gray-500 leading-relaxed mb-8 font-medium">
            {product.description}
          </p>

          <p className="text-sm italic text-gray-600 mb-12 border-l-2 border-gray-100 pl-4">
             {product.details}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div className="flex items-center border border-gray-200 rounded-sm">
               <button 
                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
                 className="p-3 hover:bg-gray-50 transition-colors"
                >
                 <Minus className="w-3 h-3" />
               </button>
               <span className="px-6 text-sm font-bold min-w-[50px] text-center">{quantity}</span>
               <button 
                 onClick={() => setQuantity(quantity + 1)}
                 className="p-3 hover:bg-gray-50 transition-colors"
                >
                 <Plus className="w-3 h-3" />
               </button>
            </div>
            
            <button className="flex-1 min-w-[200px] bg-[#333] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors rounded-sm shadow-md active:scale-95">
               Add to Cart
            </button>
          </div>

          <div className="flex gap-8 mb-12">
             <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors group">
                <Heart className="w-4 h-4 group-hover:fill-current" /> Add to wishlist
             </button>
             <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                <Share2 className="w-4 h-4" /> Share
             </button>
          </div>

          <hr className="border-gray-100 mb-8" />

          {/* Metadata */}
          <div className="space-y-4">
             <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Categories:</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{product.category.join(', ')}</span>
             </div>
             <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Share:</span>
                <div className="flex gap-4">
                   <Facebook className="w-3.5 h-3.5 text-gray-400 hover:text-[#1877F2] cursor-pointer" />
                   <Twitter className="w-3.5 h-3.5 text-gray-400 hover:text-[#1DA1F2] cursor-pointer" />
                   <Linkedin className="w-3.5 h-3.5 text-gray-400 hover:text-[#0A66C2] cursor-pointer" />
                   <Instagram className="w-3.5 h-3.5 text-gray-400 hover:text-[#E4405F] cursor-pointer" />
                </div>
             </div>
          </div>
        </div>
      </main>

      {/* Tabs */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <div className="flex justify-center gap-12 border-b border-gray-100 mb-12">
           {['description', 'reviews (0)'].map((tab) => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-4 text-xs font-bold uppercase tracking-widest relative transition-colors ${activeTab === tab ? 'text-black' : 'text-gray-300 hover:text-gray-500'}`}
             >
               {tab}
               {activeTab === tab && (
                 <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
               )}
             </button>
           ))}
        </div>

        <div className="min-h-[200px]">
           <AnimatePresence mode="wait">
             {activeTab === 'description' ? (
               <motion.div 
                 key="desc"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="text-sm text-gray-500 leading-loose text-center"
               >
                  <p>
                    This contemporary TV cabinet brings a sleek and stylish touch to any living space with its smooth lines, rounded edges, and clean design. It features spacious drawers and cabinets for organizing media devices, books, and decorative items, keeping your area tidy and functional. The metal legs and subtle gold accents add a refined touch of elegance while maintaining a modern, understated look. Fully customizable, you can adjust the size, design, and Formica color options to perfectly suit your home and personal style, making this TV cabinet a practical and attractive centerpiece for any room.
                  </p>
                  <p className="mt-8 italic opacity-60">
                    Please note that this product is only available after custom orders. Our team will work with you to create a bespoke version of this item, tailored to your exact specifications. Once your order is confirmed, our skilled craftsmen will begin the production process. Due to the custom nature of this product, please allow for additional production and delivery time. We appreciate your patience and understanding as we create a one-of-a-kind piece just for you.
                  </p>
               </motion.div>
             ) : (
               <motion.div 
                  key="rev"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center py-12"
               >
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">No reviews yet</p>
                  <button className="text-[10px] font-bold uppercase tracking-widest border border-gray-200 px-6 py-3 hover:bg-black hover:text-white hover:border-black transition-all">Be the first to review</button>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Related Products</h2>
            <div className="w-12 h-0.5 bg-black mx-auto" />
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.related.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`relative aspect-square rounded-sm flex items-center justify-center p-8 overflow-hidden bg-gray-50`}>
                   {/* Blob Effect */}
                   <div className={`absolute inset-4 rounded-full blur-3xl opacity-40 transition-transform group-hover:scale-125 duration-700 ${item.blob}`} />
                   
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      className="relative z-10 w-[80%] h-[80%] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                   />
                </div>
                <div className="mt-6 text-center">
                   <h4 className="text-sm font-bold uppercase tracking-tight mb-1 group-hover:text-gray-500 transition-colors">{item.name}</h4>
                   <p className="text-sm font-bold text-gray-400">{item.price}</p>
                </div>
              </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}
