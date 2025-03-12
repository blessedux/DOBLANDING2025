'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeInOnScroll from './animations/FadeInOnScroll';

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          {/* Left content */}
          <div className="w-full md:w-1/2 p-10 md:p-16 text-left flex flex-col justify-center">
            <FadeInOnScroll direction="left" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-[#3E54D3]">Ready to </span>
                <span className="text-[#9A99FF]">revolutionize</span>
                <br />
                <span className="text-[#3E54D3]">your finances?</span>
              </h2>
            </FadeInOnScroll>
            
            <FadeInOnScroll direction="left" delay={0.4}>
              <p className="text-xl text-gray-700 mb-10">Let's chat!</p>
            </FadeInOnScroll>
            
            <FadeInOnScroll direction="none" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gray-100 text-[#5F72E4] font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Contact us
                </Link>
                <Link 
                  href="/invest"
                  className="inline-block px-8 py-4 bg-[#5F72E4] text-white font-medium rounded-lg hover:bg-[#4F62D4] transition-colors"
                >
                  Invest now
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
          
          {/* Right image with Video_APP.gif */}
          <div className="w-full md:w-1/2 bg-[#5F72E4] relative min-h-[350px] md:min-h-full">
            <FadeInOnScroll direction="right" delay={0.4}>
              <div className="absolute inset-0">
                <Image
                  src="/icons/Video_APP.gif"
                  alt="DOB Protocol App Demo"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                  priority
                />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

