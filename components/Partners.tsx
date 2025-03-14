'use client'
import Image from 'next/image';
// We'll keep the component server-compatible
// import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section className="w-full py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-medium text-gray-500 dark:text-gray-300 mb-8">Trusted by</h2>
        <div className="overflow-hidden">
          <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
            <Image src="/partners/polygon.svg" alt="Polygon" width={100} height={50} />
            <Image src="/partners/base.svg" alt="Base" width={100} height={50} />
            <Image src="/partners/ehive.svg" alt="eHive" width={100} height={50} />
            <Image src="/partners/avalanche.svg" alt="Avalanche" width={100} height={50} />
            <Image src="/partners/celo.svg" alt="Celo" width={100} height={50} />
            <Image src="/partners/vara.svg" alt="Vara" width={100} height={50} />
            <Image src="/partners/odisea.svg" alt="Odisea" width={100} height={50} />
            <Image src="/partners/ents.svg" alt="Ents" width={70} height={50} />
            <Image src="/partners/polygon.svg" alt="Polygon" width={100} height={50} />
            <Image src="/partners/base.svg" alt="Base" width={100} height={50} />
            <Image src="/partners/ehive.svg" alt="eHive" width={100} height={50} />
            <Image src="/partners/avalanche.svg" alt="Avalanche" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 