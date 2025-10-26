import React from "react";
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (!savedMode && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center h-7 w-12 sm:h-8 sm:w-14 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        darkMode ? 'bg-blue-600' : 'bg-gray-300'
      }`}
      aria-label="Toggle dark mode"
    >
      {/* Toggle Circle */}
      <span
        className={`inline-block h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 flex items-center justify-center ${
          darkMode ? 'translate-x-6 sm:translate-x-7' : 'translate-x-1'
        }`}
      >
        {darkMode ? (
          <Moon size={12} className="text-blue-600 sm:w-[14px] sm:h-[14px]" />
        ) : (
          <Sun size={12} className="text-yellow-500 sm:w-[14px] sm:h-[14px]" />
        )}
      </span>
    </button>
  );
}