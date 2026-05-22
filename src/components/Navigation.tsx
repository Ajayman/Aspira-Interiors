"use client";
import { Mail, Moon, Sun } from "lucide-react";
import { Instagram } from "@deemlol/next-icons";
import { useEffect, useState } from "react";
export function NavigationMenu() {
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);
  
   useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, []);

   const toggle = () =>{   
      const next = !isDark;
      setIsDark(next);
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  return (
    <>
     <nav className="fixed left-0 top-0 h-full w-16 md:w-24 border-r z-5 flex flex-col items-center justify-between py-12"> 
        <div className="flex flex-col gap-4 fixed left-15 bottom-10">
          <button 
            onClick={toggle}
            className="rounded-full hover:bg-espresso/5 transition-colors mb-4"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Instagram size={20} color="#e1306c" className="hover:opacity-100" strokeWidth={1.5} />
          <Mail size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
        </div>
      </nav>
       {/* Side Label */}
      <div className="fixed left-10 top-9 z-40 hidden xl:block">
        <p className="vertical-text text-[20px] uppercase tracking-[0.4em] opacity-60 rotate-180 font-semibold origin-left">
           Aspira Interiors
        </p>
      </div>
      </>
  )
}