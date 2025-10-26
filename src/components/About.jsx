import React from "react";
export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>📋</span> About
      </h2>
      <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-3 sm:space-y-4 leading-relaxed">
        <p>
          I'm an aspiring software developer passionate about building meaningful digital solutions. 
          As a dedicated Information Technology graduate, I have hands-on experience in IT support, 
          web development, and software programming, with fundamental skills in Python and JavaScript.
        </p>
       
        <p>
          With academic and project experience in full-stack development and application design, 
          I'm continuously exploring emerging technologies, including AI and the metaverse, to 
          enhance how people interact with technology. My goal is to combine creativity and 
          technical expertise with problem-solving ability and a team-oriented mindset 
          to develop solutions that make a real impact.
        </p>
      </div>
    </div>
  );
}