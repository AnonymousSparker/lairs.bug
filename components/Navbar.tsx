"use client";

import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react"; // Changed logo icon to Terminal
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "_about", href: "/pages/about" },
    { name: "_projects", href: "/pages/projects" },
    { name: "_blogs", href: "https://lairsbug-blogs.netlify.app" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#3A506B]/20 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight flex items-center gap-3 text-black group">
              {/* The Dot */}
              <span className="w-3 h-3 bg-black rounded-full group-hover:scale-110 transition-transform"></span>
              {/* The Text */}
              <span className="font-sans tracking-tight">Lairs.bug</span>
            </Link>
          </div>

          {/* Desktop Nav - Removed Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-[#3A506B] hover:text-primary transition-colors font-mono"
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/pages/contact"
              className="px-4 py-2 bg-[#0B132B] text-white text-xs font-mono rounded hover:bg-[#1C2541] transition-colors"
            >
              Hire_Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#0B132B]">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#3A506B]/20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-base font-medium text-[#3A506B] font-mono"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}