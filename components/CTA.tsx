'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// Remove FadeInOnScroll import which uses Framer Motion
// import FadeInOnScroll from './animations/FadeInOnScroll';

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px] transition-colors duration-300">
          {/* Left content */}
          <div className="w-full md:w-1/2 p-10 md:p-16 text-left flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="transition-all"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-[#3E54D3] dark:text-[#4E64E3]">Ready to </span>
                <span className="text-[#9A99FF] dark:text-[#AAAAF0]">revolutionize</span>
                <br />
                <span className="text-[#3E54D3] dark:text-[#4E64E3]">your finances?</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="transition-all"
            >
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-10">Let&apos;s chat!</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="transition-all"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://t.me/dobprotocol_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-gray-100 dark:bg-gray-600 text-[#5F72E4] dark:text-[#9A99FF] font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                >
                  Contact us
                </a>
                <a 
                  href="https://home.dobprotocol.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#5F72E4] text-white font-medium rounded-lg hover:bg-[#4F62D4] transition-colors"
                >
                  Invest now
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right image with Video_APP.gif */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 bg-[#5F72E4] relative overflow-hidden"
          >
            <div className="w-full h-full" style={{ minHeight: '350px' }}>
              <Image
                src="/icons/Video_APP.gif"
                alt="DOB Protocol App Demo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

