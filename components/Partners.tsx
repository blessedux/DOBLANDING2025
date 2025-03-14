'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
// We'll keep the component server-compatible
// import { motion } from 'framer-motion';

const Partners = () => {
  // State to track if the primary SVGs fail to load
  const [svgLoadFailed, setSvgLoadFailed] = useState({
    polygon: false,
    avalanche: false,
    celo: false
  });

  // Inline SVG components as fallbacks
  const InlinePolygon = () => (
    <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L75 25L50 40L25 25L50 10Z" fill="#8247E5"/>
      <path d="M50 43L75 28V25L50 40V43Z" fill="#2BBDF7"/>
      <path d="M25 25V28L50 43V40L25 25Z" fill="#2BBDF7"/>
      <path d="M50 10V25L75 25L50 10Z" fill="#7B3FE4"/>
      <path d="M50 25L25 25L50 10V25Z" fill="#9373E5"/>
    </svg>
  );

  const InlineAvalanche = () => (
    <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10L25 40H45L50 30L55 40H75L50 10Z" fill="#E84142"/>
    </svg>
  );

  const InlineCelo = () => (
    <svg width="100" height="50" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10C61.0457 10 70 18.9543 70 30C70 41.0457 61.0457 50 50 50C38.9543 50 30 41.0457 30 30C30 18.9543 38.9543 10 50 10Z" fill="#FCFF52"/>
      <path d="M45 25C47.7614 25 50 27.2386 50 30C50 32.7614 47.7614 35 45 35C42.2386 35 40 32.7614 40 30C40 27.2386 42.2386 25 45 25Z" fill="#35D07F"/>
      <path d="M55 25C57.7614 25 60 27.2386 60 30C60 32.7614 57.7614 35 55 35C52.2386 35 50 32.7614 50 30C50 27.2386 52.2386 25 55 25Z" fill="#5EA33B"/>
    </svg>
  );

  // Handle image load errors
  const handleError = (logo: keyof typeof svgLoadFailed) => {
    setSvgLoadFailed(prev => ({
      ...prev,
      [logo]: true
    }));
  };

  return (
    <section className="w-full py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-300 mb-8">Trusted by</h2>
        <div className="overflow-hidden">
          <div className="partners-container animate-marquee">
            {/* Polygon with fallback */}
            <div className="partner-logo">
              {svgLoadFailed.polygon ? (
                <InlinePolygon />
              ) : (
                <img 
                  src="/partners/polygon.svg" 
                  alt="Polygon" 
                  onError={() => handleError('polygon')}
                />
              )}
            </div>
            
            <div className="partner-logo">
              <Image src="/partners/base.svg" alt="Base" width={100} height={50} unoptimized />
            </div>
            
            <div className="partner-logo">
              <Image src="/partners/ehive.svg" alt="eHive" width={100} height={50} unoptimized />
            </div>
            
            {/* Avalanche with fallback */}
            <div className="partner-logo">
              {svgLoadFailed.avalanche ? (
                <InlineAvalanche />
              ) : (
                <img 
                  src="/partners/avalanche.svg" 
                  alt="Avalanche" 
                  onError={() => handleError('avalanche')}
                />
              )}
            </div>
            
            {/* Celo with fallback */}
            <div className="partner-logo">
              {svgLoadFailed.celo ? (
                <InlineCelo />
              ) : (
                <img 
                  src="/partners/celo.svg" 
                  alt="Celo" 
                  onError={() => handleError('celo')}
                />
              )}
            </div>
            
            <div className="partner-logo">
              <Image src="/partners/vara.svg" alt="Vara" width={100} height={50} unoptimized />
            </div>
            
            <div className="partner-logo">
              <Image src="/partners/odisea.svg" alt="Odisea" width={100} height={50} unoptimized />
            </div>
            
            <div className="partner-logo">
              <Image src="/partners/ents.svg" alt="Ents" width={70} height={50} unoptimized />
            </div>
            
            {/* Repeat for continuous effect - only two needed for visual continuity */}
            <div className="partner-logo">
              {svgLoadFailed.polygon ? (
                <InlinePolygon />
              ) : (
                <img 
                  src="/partners/polygon.svg" 
                  alt="Polygon" 
                  onError={() => handleError('polygon')}
                />
              )}
            </div>
            
            <div className="partner-logo">
              <Image src="/partners/base.svg" alt="Base" width={100} height={50} unoptimized />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 