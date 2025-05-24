import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="absolute min-w-full min-h-full object-cover"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col items-center justify-start h-full px-4 text-center pt-32">
        <div className="transform -rotate-2">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="block leading-tight">WE RISE.</span>
            </span>
          </h1>
          <div className="space-y-4 mb-16">
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="block leading-tight text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">RESIST INJUSTICE.</span>
            </div>
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="block leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">SEEK EQUALITY.</span>
            </div>
          </div>
        </div>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-200 mt-8 mb-10 leading-relaxed">
          We Rise exists to dismantle oligarchic power and return control of government to the people. 
          Through collective action, creative resistance, and radical transparency, we fight for a just and truly democratic future.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a 
            href="#join" 
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-sm hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            JOIN THE MOVEMENT
          </a>
          <a 
            href="https://actogether.us" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-black transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            UPCOMING ACTION
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;