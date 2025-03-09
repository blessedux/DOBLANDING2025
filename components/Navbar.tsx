'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dobDropdownItems = [
    { label: 'Buy $DOB', href: '/buy-dob' },
    { label: 'Tokenomics', href: '/tokenomics' },
    { label: 'Roadmap', href: '/roadmap' },
  ];

  const dobiDropdownItems = [
    { label: 'Buy $DOBI', href: '/buy-dobi' },
    { label: 'Workflow', href: '/workflow' },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src="/dob_imagotipo.svg" alt="DOB Protocol" width={180} height={180} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* DOB Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('dob')}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>DOB</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'dob' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'dob' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {dobDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DOBI AI-Agent Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('dobi')}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              >
                <span>DOBI AI-Agent</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'dobi' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'dobi' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {dobiDropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Regular Links */}
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/wiki" className="text-gray-700 hover:text-gray-900">
              Wiki
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact us
            </Link>
            <Link
              href="/invest"
              className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors"
            >
              Invest now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-gray-900"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 