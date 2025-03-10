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
  initial: { y: -384, height: '12rem' },
  animate: {
    y: [0, 192, 192, 384],
    height: ['12rem', '8rem', '8rem', '8rem'],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      times: [0, 0.333, 0.666, 1],
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Access global financing within your reach
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Agile, smart and simple!
            </p>
            <div className="flex flex-wrap gap-4">
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
            </div>
          </motion.div>

          {/* Right Content - Animated Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 h-[384px] border border-red-500 overflow-hidden">
            <div className="flex flex-col space-y-4">
              <motion.div
                className="bg-blue-100 p-6 rounded-lg shadow-md h-48"
                variants={cardVariantsAbove}
                initial="initial"
                animate="animate"
              >
                <h3 className="text-lg font-semibold text-blue-600">Above Card</h3>
                <p className="text-gray-600">Description for above card.</p>
              </motion.div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="bg-blue-200 p-4 rounded-lg shadow-md h-32">
                <h3 className="text-lg font-semibold text-blue-600">Card 3</h3>
                <p className="text-gray-600">Description for card 3.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-md h-48">
                <h3 className="text-lg font-semibold text-blue-600">Card 4</h3>
                <p className="text-gray-600">Description for card 4.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

