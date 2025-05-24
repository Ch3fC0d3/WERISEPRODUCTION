   import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", showText = false }) => {
  // Using the base URL from Vite config
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="flex items-center">
      <div className={`${className} relative flex-shrink-0`}>
        <img
          src={`${baseUrl}logo.png`}
          alt="We Rise Logo"
          className="w-full h-full object-contain"
          style={{ display: 'block', maxHeight: '100%' }}
          onError={(e) => {
            // Fallback to SVG if PNG fails to load
            const target = e.target as HTMLImageElement;
            target.src = `${baseUrl}logo.svg`;
          }}
        />
      </div>
      {showText && (
        <div className="ml-2 overflow-visible">
          <span className="text-white font-bold text-xl tracking-wider" style={{ lineHeight: '1.2' }}>
            WE RISE
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;