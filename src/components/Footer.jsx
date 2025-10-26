import React from "react";
import { Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-8 sm:mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Social Links */}
        <div className="flex justify-center gap-5 sm:gap-6 mb-5 sm:mb-6">
          <a
            href="https://linkedin.com/in/DgSapdaan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors active:scale-95"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/unsatisfieDg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors active:scale-95"
            aria-label="GitHub"
          >
            <Github size={22} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://instagram.com/pulispang.kalawakan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors active:scale-95"
            aria-label="Instagram"
          >
            <Instagram size={22} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          <p>© {currentYear} Danie Glenn Sapdaan Jr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
