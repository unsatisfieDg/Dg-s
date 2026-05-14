import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Code, Briefcase, Award } from 'lucide-react';

import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", hash: "#about", icon: <User size={18} /> },
    { name: "Skills", hash: "#skills", icon: <Code size={18} /> },
    { name: "Experience", hash: "#experience", icon: <Briefcase size={18} /> },
    { name: "Projects", hash: "#projects", icon: <Award size={18} /> },
  ];

  const handleLinkClick = (hash) => {
    setIsMenuOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          Danie<span className="text-blue-600">.</span>
        </button>

        {/* Desktop Links & Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.hash)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-2" />
          <DarkModeToggle />
        </div>

        {/* Mobile View - Toggle and Menu */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 dark:text-white p-1"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[60px] bg-white dark:bg-gray-950 z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.hash)}
              className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-4 py-2 border-b border-gray-100 dark:border-gray-800"
            >
              <span className="text-blue-600">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
