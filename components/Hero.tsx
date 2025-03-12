'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { y: -192, height: '12rem' },
  animate: {
    y: [0, 192, 384],
    height: ['12rem', '8rem', '8rem'],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsAbove = {
  initial: { y: -192, height: '12rem' },
  animate: {
    y: [0, 192, 384],
    height: ['12rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsTop = {
  initial: { y: -576, height: '12rem' },
  animate: {
    y: [-192, 0, 0, 192],
    height: ['12rem', '12rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.333, 0.666, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsMiddle = {
  initial: { y: -192, height: '8rem' },
  animate: {
    y: [192, 192, 384, 384],
    height: ['8rem', '8rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.333, 0.666, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsLeftTop = {
  initial: { y: -192, height: '12rem' },
  animate: {
    y: [0, 192, 384],
    height: ['12rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsLeftMiddle = {
  initial: { y: -192, height: '8rem' },
  animate: {
    y: [0, 192, 384],
    height: ['8rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsLeftBottom = {
  initial: { y: -192, height: '8rem' },
  animate: {
    y: [0, 192, 384],
    height: ['8rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const cardVariantsSlider = {
  initial: { y: 0, height: '12rem' },
  animate: {
    y: [0, 192, 384, 576, 768, 960],
    height: ['12rem', '8rem', '8rem', '8rem', '8rem', '8rem'],
    transition: {
      duration: 24,
      ease: 'easeInOut',
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 bg-gradient-to-b from-transparent to-white">
      <div className="container mx-auto px-4">
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
              <Link 
                href="/contact"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Contact us
              </Link>
              <Link 
                href="/invest"
                className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors"
              >
                Invest now
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Animated Cards - No fade in animation */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[384px] overflow-hidden">
            <div className="flex flex-col space-y-4">
              <motion.div
                className="bg-blue-400 p-6 rounded-lg shadow-md h-48"
                variants={cardVariantsSlider}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Slider Card 1</h3>
                <p className="text-gray-600">Description for slider card 1.</p>
              </motion.div>
              <motion.div
                className="bg-blue-500 p-6 rounded-lg shadow-md h-32"
                variants={cardVariantsSlider}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Slider Card 2</h3>
                <p className="text-gray-600">Description for slider card 2.</p>
              </motion.div>
              <motion.div
                className="bg-blue-600 p-6 rounded-lg shadow-md h-32"
                variants={cardVariantsSlider}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Slider Card 3</h3>
                <p className="text-gray-600">Description for slider card 3.</p>
              </motion.div>
              <motion.div
                className="bg-blue-700 p-6 rounded-lg shadow-md h-48"
                variants={cardVariantsSlider}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Slider Card 4</h3>
                <p className="text-gray-600">Description for slider card 4.</p>
              </motion.div>
              <motion.div
                className="bg-blue-800 p-6 rounded-lg shadow-md h-48"
                variants={cardVariantsSlider}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Slider Card 5</h3>
                <p className="text-gray-600">Description for slider card 5.</p>
              </motion.div>
              <motion.div
                className="bg-blue-900 p-6 rounded-lg shadow-md h-48"
                variants={cardVariantsSlider}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Slider Card 6</h3>
                <p className="text-gray-600">Description for slider card 6.</p>
              </motion.div>
            </div>
            <div className="flex flex-col space-y-4">
              <motion.div
                className="bg-blue-200 p-6 rounded-lg shadow-md h-48"
                variants={cardVariantsTop}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Top Card</h3>
                <p className="text-gray-600">Description for top card.</p>
              </motion.div>
              <motion.div
                className="bg-blue-300 p-6 rounded-lg shadow-md h-32"
                variants={cardVariantsMiddle}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Middle Card</h3>
                <p className="text-gray-600">Description for middle card.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

