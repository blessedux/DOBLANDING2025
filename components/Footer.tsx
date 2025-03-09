'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex items-center justify-between"
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/dob_imagotipo.svg"
            alt="DOB Protocol"
            width={150}
            height={150}
            className="h-24 w-full"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:grid grid-cols-3 gap-12 ml-auto w-1/2 h-full ">
          {/* DOB Token Section */}
          <div className="flex flex-col items-start justify-center h-full mt-0">
            <span className="text-sm font-medium text-gray-500">$DOB token</span>
            <div className="flex flex-col space-y-2 mt-1">
              <Link href="/buy-dob" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">Buy $DOB</Link>
              <Link href="/tokenomics" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">Tokenomics</Link>
              <Link href="/roadmap" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">Roadmap</Link>
            </div>
          </div>

          {/* DOBI AI-Agent Section */}
          <div className="flex flex-col items-start h-full mt-0">
            <span className="text-sm font-medium text-gray-500">DOBI AI-Agent</span>
            <div className="flex flex-col space-y-2 mt-1">
              <Link href="/buy-dobi" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">Buy $DOBI</Link>
              <Link href="/workflow" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">Workflow</Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-start h-full mt-0">
            <span className="text-sm font-medium text-gray-500">Support</span>
            <div className="flex flex-col space-y-2 mt-1">
              <Link href="/faq" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">FAQ</Link>
              <Link href="/wiki" className="text-sm text-[#4F46E5] hover:text-[#4338CA] transition-colors">Wiki</Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center space-y-4">
          <span className="text-sm font-medium text-gray-500">Networks</span>
          <div className="flex items-center space-x-6">
            <Link href="https://t.me/dobprotocol" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Link href="https://twitter.com/dobprotocol" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/x-twitter.svg" alt="X (Twitter)" width={20} height={20} />
            </Link>
            <Link href="https://linkedin.com/company/dobprotocol" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </Link>
          </div>
          <Link 
            href="/contact"
            className="mt-4 px-4 py-2 text-gray-500 rounded-lg hover:bg-[#f0f0f0] transition-colors"
          >
            Contact us
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

