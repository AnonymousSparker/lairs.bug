"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ClickScale } from "@/components/ui/animations";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Dev<span className="text-primary">.Portfolio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <ClickScale onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {mounted && theme === "dark" ? (
                <Sun className="w-5 h-5 text-slate-400 hover:text-yellow-400 transition-colors" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 hover:text-slate-900 transition-colors" />
              )}
            </ClickScale>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-slate-600 dark:text-slate-400"
              >
                {link.name}
              </Link>
            ))}
             <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full text-left py-2 text-base font-medium text-slate-600 dark:text-slate-400"
             >
                Toggle Theme
             </button>
          </div>
        </div>
      )}
    </nav>
  );
}