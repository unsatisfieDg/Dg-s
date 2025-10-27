import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from 'lucide-react';

export default function AllProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const projects = [
    {
      name: "MacroGenius",
      description: "Smart Nutrition Tracker - React Native mobile app with barcode scanning, personalized macro calculations, food database with 200+ items, and daily goal tracking with streaks",
      url: "github.com/unsatisfieDg/MacroGenius",
      tags: ["React Native", "Mobile App", "Nutrition"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
    },
    {
      name: "Coffee Shop Reservation",
      description: "Full-stack reservation website with secure authentication, table booking system, and responsive design. Features password hashing, SQL injection prevention, and session management",
      url: "github.com/unsatisfieDg/Coffee-Shop-Reservation-Website-First-Full-Stack-project-as-a-student-",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
    },
    {
      name: "E-Commerce Platform",
      description: "Full-stack online store with payment integration",
      url: "github.com/unsatisfieDg/",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      url: "github.com/unsatisfieDg/",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time data visualization and reporting system",
      url: "github.com/unsatisfieDg/",
      tags: ["React", "D3.js", "Express"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 pb-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-3 sm:mb-4"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            🚀 All Projects
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Explore my complete portfolio of web development projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl cursor-pointer"
              style={{ minHeight: "280px" }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  filter: 'brightness(0.4)'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6">
                {/* Top Section - Label */}
                <div>
                  <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    Web App
                  </span>
                </div>
                
                {/* Bottom Section */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {project.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-gray-800/80 text-gray-200 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Button */}
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded border border-white/20 transition-colors backdrop-blur-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Project</span>
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

