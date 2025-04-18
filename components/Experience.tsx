import React from 'react';

const ExperienceAndTools = () => {
  const developerTools = [
    { 
      id: 1, 
      name: 'Website Builder', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
        </svg>
      )
    },
    { 
      id: 2, 
      name: 'Design Tool', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="8" r="4" fill="#FF4A4A"/>
          <circle cx="8" cy="16" r="4" fill="#4A9DFF"/>
          <circle cx="16" cy="16" r="4" fill="#4AFF91"/>
        </svg>
      )
    },
    { 
      id: 3, 
      name: 'Payments Provider', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L8 12 2 8l10 4-4 10 4-10 6 4z" fill="#FFCC44"/>
        </svg>
      )
    },
    { 
      id: 4, 
      name: 'AI Assistant', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    { 
      id: 5, 
      name: 'Productivity Tool', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h5v2H7v-2z"/>
        </svg>
      )
    },
    { 
      id: 6, 
      name: 'React framework', 
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 7l5 5-5 5"/>
          <path d="M7 7l5 5-5 5"/>
        </svg>
      )
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white p-6">
      <div className="w-3/4">
        {/* Experience Section */}
        <div className="mb-20">
          <h1 className="text-7xl font-bold text-white mb-2">1 YEAR OF</h1>
          <h1 className="text-7xl font-bold text-gray-700 mb-16">EXPERIENCE</h1>
          
          <div className="flex items-center">
            <div className="w-1/4 mr-8">
              <img 
                src="/api/placeholder/240/180" 
                alt="Project screenshot" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="w-3/4 flex justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">aaa</h2>
                <p className="text-gray-400 max-w-xl">
                  I started this platform to provide a safe space for 
                  individuals to express themselves freely and 
                  anonymously. I want to create a community where 
                  everyone can share their thoughts and experiences 
                  without fear of judgment.
                </p>
              </div>
              <div className="self-start">
                <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Tools Section */}
        <div className="mb-20">
          <h1 className="text-7xl font-bold text-white mb-2">PREMIUM</h1>
          <h1 className="text-7xl font-bold text-gray-700 mb-16">TOOLS</h1>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {developerTools.map(tool => (
              <div key={tool.id} className="flex items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg mr-4">
                  <div className="text-black">
                    {tool.icon}
                  </div>
                </div>
                <span className="text-xl text-gray-400">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndTools;