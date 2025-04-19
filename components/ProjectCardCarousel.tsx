// components/ProjectCardCarousel.tsx
"use client"; // Important: Mark as client component

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
}

interface ProjectCardCarouselProps {
  projects: Project[];
}

const ProjectCardCarousel: React.FC<ProjectCardCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle wheel event for scrolling through projects
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    // Debounce the scroll event
    if (scrollTimeout.current) return;
    
    if (e.deltaY > 0) {
      // Scroll down - next project
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (e.deltaY < 0) {
      // Scroll up - previous project
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
    
    // Set a timeout to prevent rapid scrolling
    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 500);
  };
  
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Add and remove wheel event listener
  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('wheel', handleWheel);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [projects.length]);
  
  // Handle manual navigation
  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen flex flex-col items-center justify-between py-4 px-4 bg-[#141312]  relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orange dots grid */}
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 rounded-full bg-orange-500 opacity-30"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animation: 'pulse 3s infinite ease-in-out'
              }} 
            />
          ))}
        </div>
        
        {/* Additional decorative SVG elements */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="20" cy="20" r="5" fill="none" stroke="#FF8C00" strokeWidth="0.5" />
          <circle cx="80" cy="80" r="5" fill="none" stroke="#FF8C00" strokeWidth="0.5" />
          <polygon points="10,30 20,10 30,30" fill="none" stroke="#FF8C00" strokeWidth="0.5" />
          <polygon points="70,70 80,90 90,70" fill="none" stroke="#FF8C00" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Header text */}
      <div className="text-white text-center z-10 mb-2">
        <h1 className="text-2xl font-bold text-orange-500">My Projects</h1>
        <p className="text-gray-400 text-sm">Scroll or use controls to navigate</p>
      </div>
      
      {/* Project card container */}
      <div className="w-full flex-grow flex flex-col items-center justify-center relative max-h-[70vh]">
        {/* Decorative dashed lines */}
        <svg className="absolute top-0 right-1/4 w-1/2 h-1/2 pointer-events-none opacity-60" viewBox="0 0 100 100">
          <path
            d="M20,10 Q60,40 20,90"
            stroke="#FF8C00"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
        
        <svg className="absolute bottom-0 left-1/4 w-1/2 h-1/2 pointer-events-none opacity-60" viewBox="0 0 100 100">
          <path
            d="M80,10 Q40,40 80,90"
            stroke="#FF8C00"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>
        
        {/* Additional curved line */}
        <svg className="absolute top-1/4 left-0 w-full h-1/2 pointer-events-none opacity-40" viewBox="0 0 100 100">
          <path
            d="M0,50 Q50,0 100,50 Q50,100 0,50"
            stroke="#FF8C00"
            strokeWidth="1"
            strokeDasharray="3,3"
            fill="none"
          />
        </svg>
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={projects[currentIndex].id}
            className="w-full max-w-sm bg-[#e6e0e0] rounded-3xl overflow-hidden shadow-2xl relative"
            initial={{ 
              opacity: 0, 
              y: direction > 0 ? 50 : -50 
            }}
            animate={{ 
              opacity: 1, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              y: direction > 0 ? -50 : 50 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
          >
            {/* Project image */}
            {projects[currentIndex].image && (
              <div className="w-full h-36 overflow-hidden">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Content container */}
            <div className="p-4">
              {/* Project title */}
              <h2 className="text-xl font-bold text-center mb-3">{projects[currentIndex].title}</h2>
              
              {/* Orange circle icon */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              
              {/* Project description - shortened container */}
              <div className="text-center text-gray-600 mb-3 max-h-16 overflow-y-auto">
                <p className="text-sm">{projects[currentIndex].description}</p>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {projects[currentIndex].technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* View Project button */}
              {projects[currentIndex].link && (
                <div className="flex justify-center">
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition-colors flex items-center"
                  >
                    View Project
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation controls - more compact */}
      <div className="w-full flex flex-col items-center z-10 mb-2">
        {/* Navigation buttons */}
        <div className="flex justify-center gap-3 mb-2">
          <button
            onClick={prevProject}
            className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            onClick={nextProject}
            className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Pagination dots - horizontally compact */}
        <div className="flex justify-center gap-1 flex-wrap max-w-xs">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex ? "w-4 bg-orange-500" : "bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Footer with project counter */}
      <div className="text-gray-500 text-xs mb-1">
        Project {currentIndex + 1} of {projects.length}
      </div>
    </div>
  );
};

export default ProjectCardCarousel;