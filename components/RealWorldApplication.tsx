'use client'
import Image from 'next/image';
import { useState } from 'react';
import { GlowCapture, Glow } from '@codaworks/react-glow';
import FadeInOnScroll from './animations/FadeInOnScroll';

const RealWorldApplication = () => {
  // Configuration for easy adjustment
  const config = {
    // Connector configuration
    connector: {
      width: '80%', // Control the width of the connector
      height: '70%', // Control the height of the connector
      top: '150px',  // Position from top
      left: '15%',   // Position from left
    },
    // Card positions - easily adjustable
    cards: {
      card1: { top: '0px', left: '0px' }, // Top left
      card2: { top: '520px', left: 'calc(50% - 400px)' }, // Bottom center, moved down 800px
      card3: { top: '300px', right: '0px' }, // Top right
    },
    // Card dimensions - consistent for all cards
    cardSize: {
      width: '320px',
      height: '320px',
    }
  };

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
        <FadeInOnScroll>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Real world application</h2>
        </FadeInOnScroll>
        
        <FadeInOnScroll delay={0.2}>
          <h3 className="text-4xl font-bold text-[#597CE9] mb-20">EV-Charger</h3>
        </FadeInOnScroll>
        
        <GlowCapture className="relative w-full">
          <div className="relative max-w-5xl mx-auto min-h-[800px]">
            {/* Connector SVG - Smaller and centered */}
            <FadeInOnScroll delay={0.4} direction="none">
              <Glow color="#C7F8FF">
                <div 
                  className="absolute z-0" 
                  style={{ 
                    width: config.connector.width, 
                    height: config.connector.height, 
                    top: config.connector.top, 
                    left: config.connector.left 
                  }}
                >
                  <div className="relative w-full h-full glow:brightness-110">
                    <Image 
                      src="/icons/connector.svg" 
                      alt="Connector" 
                      fill={true}
                      style={{ objectFit: "contain" }}
                      className="transition-all duration-300 glow:drop-shadow-[0_0_15px_rgba(199,248,255,0.7)]"
                    />
                  </div>
                </div>
              </Glow>
            </FadeInOnScroll>

            {/* First card - Top left */}
            <FadeInOnScroll delay={0.6} direction="left">
              <div 
                className="absolute z-20 transform hover:-translate-y-2 transition-transform" 
                style={{ 
                  width: config.cardSize.width, 
                  height: config.cardSize.height,
                  ...config.cards.card1 
                }}
              >
                <Image 
                  src={applications[0].icon} 
                  alt={applications[0].alt} 
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="opacity-100"
                />
              </div>
            </FadeInOnScroll>

            {/* Second card - Bottom center */}
            <FadeInOnScroll delay={0.8} direction="up">
              <div 
                className="absolute z-20 transform hover:-translate-y-2 transition-transform" 
                style={{ 
                  width: config.cardSize.width, 
                  height: config.cardSize.height,
                  ...config.cards.card2 
                }}
              >
                <Image 
                  src={applications[2].icon} 
                  alt={applications[2].alt} 
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="opacity-100"
                />
              </div>
            </FadeInOnScroll>

            {/* Third card - Top right */}
            <FadeInOnScroll delay={1.0} direction="right">
              <div 
                className="absolute z-20 transform hover:-translate-y-2 transition-transform" 
                style={{ 
                  width: config.cardSize.width, 
                  height: config.cardSize.height,
                  ...config.cards.card3
                }}
              >
                <Image 
                  src={applications[1].icon} 
                  alt={applications[1].alt} 
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="opacity-100"
                />
              </div>
            </FadeInOnScroll>
          </div>
        </GlowCapture>
      </div>
    </section>
  );
};

export default RealWorldApplication; 