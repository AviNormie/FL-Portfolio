import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#141312] py-6 text-white ">
      <div className="w-3/4">
        <div className="mb-16">
          <h1 className="text-7xl font-bold text-white mb-2">SOFTWARE</h1>
          <h1 className="text-7xl font-bold text-gray-700 mb-6">ENGINEER</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Passionate about creating intuitive and engaging
            user experiences. Specialize in transforming ideas
            into beautifully crafted products.
          </p>
        </div>

        <div className="flex gap-24 mb-24">
          <div className="flex flex-col">
            <span className="text-6xl font-bold">+1</span>
            <span className="uppercase text-gray-400 text-sm mt-2">
              Years of<br />Experience
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-6xl font-bold">+5</span>
            <span className="uppercase text-gray-400 text-sm mt-2">
              Projects<br />Completed
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-6xl font-bold">+1</span>
            <span className="uppercase text-gray-400 text-sm mt-2">
              Worldwide<br />Clients
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="relative rounded-lg p-8 bg-orange-500 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {/* Orange background with curved lines */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-contain bg-no-repeat" 
                   style={{backgroundImage: "url('/left1.svg')"}}></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-contain bg-no-repeat" 
                   style={{backgroundImage: "url('/left2.svg')"}}></div>
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">DYNAMIC ANIMATION,</h3>
              <h3 className="text-2xl font-bold text-white">MOTION DESIGN</h3>
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/20 rounded-full p-2">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg p-8 bg-lime-300 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {/* Lime background with angular lines */}
              <div className="absolute top-0 left-0 w-full bg-contain bg-no-repeat z-96" 
                   style={{backgroundImage: "url('/right.svg')"}}></div>
            
            </div>
            <div className="relative z-10">
              <div className="mb-6">
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-1">SOFTWARE DEVELOPMENT</h3>
              <h3 className="text-2xl font-bold text-black">ACROSS MOST DOMAINS</h3>
              <div className="absolute bottom-6 right-6">
                <div className="bg-black/20 rounded-full p-2">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;