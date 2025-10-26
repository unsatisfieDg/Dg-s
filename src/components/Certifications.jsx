import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
   {
      title: "Diploma in Bachelor of Science in Information Technology",
      issuer: "University of Northern Philippines",
      credentialUrl: "https://your-diploma-credential-url.com" // Replace with your actual credential URL
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      credentialUrl: "https://www.credly.com/badges/8a53c407-0b12-427d-ae49-68418f79b9b5/public_url" // Replace with your actual credential URL
    },
       {
      title: "AWS Generative AI for Developers",
      issuer: "Amazon Web Services (AWS)",
      credentialUrl: "https://coursera.org/share/b3af5b8ba6f634d85640172fff0f490c" // Replace with your actual credential URL
    },
    
       {
      title: "Generative AI for Software Development",
      issuer: "DeepLearning.AI",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/KFDK60RB3DZU" // Replace with your actual credential URL
    },
     {
      title: "HTML/CSS",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/b052b5ff6ec7479dbc129558fa036bcb" // Replace with your actual credential URL
    },
     {
      title: "JAVASCRIPT AND NODE.JS",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/e40ead02cda94b78aa78f7549d5faa71" // Replace with your actual credential URL
    },
    {
      title: "PHP",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/a67e84cd55f246f0b41b6d2a38c67743" // Replace with your actual credential URL
    },
     {
      title: "PYTHON ",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/95d5a4c46215412eaaa261f5ff729321" // Replace with your actual credential URL
    },
     {
      title: "Software Engineering",
      issuer: "TestDome",
      credentialUrl: "https://www.testdome.com/certificates/3997290858964ab6a7a260f9238f77eb" // Replace with your actual credential URL
    },
  ];

  // Show only 4 certifications initially
  const displayedCertifications = certifications.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span>🎓</span> Certifications
        </h2>
        {certifications.length > 4 && (
          <Link 
            to="/certifications"
            className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View All
          </Link>
        )}
      </div>
      
      <div className="space-y-3">
        {displayedCertifications.map((cert, index) => (
          <a
            key={index}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 sm:p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>
              </div>
              <ExternalLink 
                size={16} 
                className="flex-shrink-0 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-1"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}