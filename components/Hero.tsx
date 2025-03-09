'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

          {/* Right Content - Empty for now */}
          <div className="hidden lg:block">
            {/* Animation placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

