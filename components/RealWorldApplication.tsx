'use client'
import Image from 'next/image';
import { useState } from 'react';

const RealWorldApplication = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const applications = [
    {
      icon: '/icons/Step 1 EV charger.png',
      alt: 'EV-Charger'
    },
    {
      icon: '/icons/Step 2 EV charger.png',
      alt: 'Data Oversight'
    },
    {
      icon: '/icons/Step 3 EV charger.png',
      alt: 'Funds Distribution'
    }
  ];

  return (
    <section className="w-full py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Real world application</h2>
        <h3 className="text-4xl font-bold text-[#597CE9] mb-20">EV-Charger</h3>
        
        <div className="relative max-w-5xl mx-auto min-h-[1000px]">
          {/* Connector SVG */}
          <div 
            className="absolute w-full h-full z-0" 
            style={{ left: '50px', top: '100px' }} 
            onMouseMove={handleMouseMove}
          >
            <div className="relative w-full h-full">
              <Image 
                src="/icons/connector.svg" 
                alt="Connector" 
                layout="fill"
                objectFit="contain"
              />
              <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
                <circle 
                  cx={hoverPosition.x} 
                  cy={hoverPosition.y} 
                  r="20" 
                  fill="#C7F8FF" 
                  className="transition-opacity duration-300"
                />
              </svg>
            </div>
          </div>

          {/* First card - Top left */}
          <div className="absolute w-80 h-80 z-10 transform hover:-translate-y-2 transition-transform" style={{ left: '0px', top: '0px' }}>
            <Image 
              src={applications[0].icon} 
              alt={applications[0].alt} 
              width={320} 
              height={320} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second card - Bottom center */}
          <div className="absolute w-80 h-80 z-10 transform hover:-translate-y-2 transition-transform" style={{ left: 'calc(50% - 160px)', bottom: '50px' }}>
            <Image 
              src={applications[2].icon} 
              alt={applications[2].alt} 
              width={320} 
              height={320}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third card - Further down */}
          <div className="absolute w-80 h-80 z-10 transform hover:-translate-y-2 transition-transform" style={{ right: '0px', top: '500px' }}>
            <Image 
              src={applications[1].icon} 
              alt={applications[1].alt} 
              width={320} 
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldApplication; 