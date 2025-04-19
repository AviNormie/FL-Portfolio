"use client"
import React from 'react';
import { useState } from 'react';

const RecentProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Starting and Growing a Career in Web Design",
      description: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Create a Landing Page That Performs Great",
      description: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "How to Create a Website That Converts",
      description: "A website is a powerful tool for any business. It can help you reach new customers, generate leads, and increase sales. But not all websites are created equal. To be effective, your website must be designed with conversion in mind.",
      image: "/api/placeholder/400/300"
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen text-white py-6">
      <div className="w-3/4">
        <div className="mb-16">
          <h1 className="text-7xl font-bold text-white mb-2">RECENT</h1>
          <h1 className="text-7xl font-bold text-gray-700 mb-12">PROJECTS</h1>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex items-center transition-all duration-300 ease-in-out"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              <div className="flex-1 pr-8">
                <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
              </div>
              <div className="flex-shrink-0 w-1/3 transition-all duration-300 ease-in-out overflow-hidden rounded-lg" 
                style={{
                  transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;