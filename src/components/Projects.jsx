import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "MacroGenius",
      type: "Mobile App",
      description: "Smart Nutrition Tracker - React Native mobile app with barcode scanning, personalized macro calculations, food database with 200+ items, and daily goal tracking with streaks",
      url: "github.com/unsatisfieDg/MacroGenius",
      tags: ["React Native", "Mobile App", "Nutrition"],
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
    },
    {
      name: "Coffee Shop Reservation",
      type: "Web App",
      description: "Full-stack reservation website with secure authentication, table booking system, and responsive design. Features password hashing, SQL injection prevention, and session management",
      url: "github.com/unsatisfieDg/Coffee-Shop-Reservation-Website-First-Full-Stack-project-as-a-student-",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80"
    },
    {
      name: "E-Commerce Platform",
      type: "Web App",
      description: "Full-stack online store with payment integration",
      url: "github.com/unsatisfieDg/",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      name: "Task Management App",
      type: "Web App",
      description: "Collaborative project management tool with real-time updates",
      url: "github.com/unsatisfieDg/",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      name: "Analytics Dashboard",
      type: "Web App",
      description: "Real-time data visualization and reporting system",
      url: "github.com/unsatisfieDg/",
      tags: ["React", "D3.js", "Express"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ];

  const displayedProjects = projects.slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span>🚀</span> Projects
        </h2>

        {projects.length > 2 && (
          <Link 
            to="/projects"
            className="text-xs sm:text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer transition-colors"
          >
            View All
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {displayedProjects.map((project, index) => (
          <div 
            key={index}
            className="relative group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg cursor-pointer"
            style={{ minHeight: "180px" }}
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
            
            {/* Content - Landscape Layout */}
            <div className="relative h-full flex flex-col justify-between p-3">
              {/* Top Section - Label */}
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                  {project.type}
                </span>
              </div>
              
              {/* Bottom Section - Title */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                  {project.name}
                </h3>
                
                {/* Tech Stack Tags and Button - Show on Hover */}
                <div className={`transition-all duration-300 ${
                  hoveredProject === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 text-[10px] font-medium bg-gray-800/80 text-gray-200 rounded border border-gray-700"
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
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-white/10 hover:bg-white/20 text-white rounded border border-white/20 transition-colors backdrop-blur-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}