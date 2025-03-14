'use client';

// Remove unused import
// import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Left column animations - one-time animations (downward)
const leftTopCardVariants = {
  initial: { y: -200, opacity: 0, height: '8rem' },
  animate: {
    y: 0,
    opacity: 1,
    height: '8rem',
    transition: {
      duration: 1.2,
      ease: 'easeOut'
    }
  }
};

const leftBottomCardVariants = {
  initial: { y: -200, opacity: 0, height: '12rem' },
  animate: {
    y: 0,
    opacity: 1,
    height: '12rem',
    transition: {
      duration: 1.4,
      ease: 'easeOut',
      delay: 0.2
    }
  }
};

// Right column animations - upward animations
const rightTopCardVariants = {
  initial: { y: 200, opacity: 0, height: '12rem' },
  animate: {
    y: 0,
    opacity: 1,
    height: '12rem',
    transition: {
      duration: 1.2,
      ease: 'easeOut'
    }
  }
};

const rightBottomCardVariants = {
  initial: { y: 200, opacity: 0, height: '8rem' },
  animate: {
    y: 0,
    opacity: 1,
    height: '8rem',
    transition: {
      duration: 1.4,
      ease: 'easeOut',
      delay: 0.2
    }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
            >
              Access global financing within your reach
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Agile, smart and simple!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://t.me/dobprotocol_official"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Contact us
              </a>
              <a 
                href="https://home.dobprotocol.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors"
              >
                Invest now
              </a>
            </motion.div>
          </div>

          {/* Right Content - Animated Cards */}
          <div className="hidden lg:block relative h-[384px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Column - Short card on top, Large card on bottom */}
              <div className="flex flex-col space-y-4">
                {/* Top card (short) with cubes.gif */}
                <motion.div
                  className="rounded-lg shadow-md overflow-hidden h-32 relative"
                  variants={leftTopCardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Image 
                    src="/icons/cubos.gif" 
                    alt="Animated cubes" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </motion.div>
                
                {/* Bottom card (large) with mockup.mp4 */}
                <motion.div
                  className="rounded-lg shadow-md overflow-hidden h-48 relative"
                  variants={leftBottomCardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  >
                    <source src="/icons/mockup.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
              
              {/* Right Column - Large card on top, Short card on bottom */}
              <div className="flex flex-col space-y-4">
                {/* Top card (large) with dashboard.gif */}
                <motion.div
                  className="rounded-lg shadow-md overflow-hidden h-48 relative"
                  variants={rightTopCardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Image 
                    src="/icons/dashboard.gif" 
                    alt="Dashboard animation" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </motion.div>
                
                {/* Bottom card (short) with cubes.gif */}
                <motion.div
                  className="rounded-lg shadow-md overflow-hidden h-32 relative"
                  variants={rightBottomCardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Image 
                    src="/icons/cubos.gif" 
                    alt="Animated cubes" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

