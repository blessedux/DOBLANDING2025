'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
// We need to keep GlowCapture and Glow but handle them properly for client-side only
import dynamic from 'next/dynamic';

// Dynamically import react-glow components with no SSR
const GlowCapture = dynamic(() => import('@codaworks/react-glow').then((mod) => mod.GlowCapture), { ssr: false });
const Glow = dynamic(() => import('@codaworks/react-glow').then((mod) => mod.Glow), { ssr: false });

const RealWorldApplication = () => {
  // Configuration for easy adjustment
  const config = {
    // Connector configuration
    connector: {
      width: '70%', // Control the width of the connector
      height: '70%', // Control the height of the connector
      top: '150px',  // Position from top
      left: '15%',   // Position from left
    },
    // Card positions - easily adjustable
    cards: {
      card1: { top: '0px', left: '0px' }, // Top left
      card2: { top: '520px', left: 'calc(50% - 480px)' }, // Bottom center, moved down 800px
      card3: { top: '360px', right: '0px' }, // Top right
    },
    // Card dimensions - consistent for all cards
    cardSize: {
      width: '320px',
      height: '320px',
    }
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
    <section className="w-full py-24 bg-gray-50 dark:bg-gray-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Real world application</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-4xl font-bold text-[#597CE9] dark:text-[#6A8CF9] mb-20">EV-Charger</h3>
        </motion.div>
        
        <GlowCapture className="relative w-full">
          <div className="relative max-w-5xl mx-auto min-h-[1000px]">
            {/* Connector SVG - Smaller and centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>

            {/* First card - Top left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>

            {/* Second card - Bottom center */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
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
            </motion.div>

            {/* Third card - Top right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
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
            </motion.div>
          </div>
        </GlowCapture>
      </div>
    </section>
  );
};

export default RealWorldApplication; 