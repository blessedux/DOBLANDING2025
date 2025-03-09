'use client'
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Partners = () => {
  return (
    <motion.section 
      className="w-full py-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg font-medium text-gray-500 mb-8">Trusted by</h2>
        <div className="overflow-hidden">
          <motion.div 
            className="flex justify-center items-center space-x-24"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
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
            <Image src="/partners/celo.svg" alt="Celo" width={100} height={50} />
            <Image src="/partners/vara.svg" alt="Vara" width={100} height={50} />
            <Image src="/partners/odisea.svg" alt="Odisea" width={100} height={50} />
            <Image src="/partners/ents.svg" alt="Ents" width={70} height={50} />
            <Image src="/partners/polygon.svg" alt="Polygon" width={100} height={50} />
            <Image src="/partners/base.svg" alt="Base" width={100} height={50} />
            <Image src="/partners/ehive.svg" alt="eHive" width={100} height={50} />
            <Image src="/partners/avalanche.svg" alt="Avalanche" width={100} height={50} />
            <Image src="/partners/celo.svg" alt="Celo" width={100} height={50} />
            <Image src="/partners/vara.svg" alt="Vara" width={100} height={50} />
            <Image src="/partners/odisea.svg" alt="Odisea" width={100} height={50} />
            <Image src="/partners/ents.svg" alt="Ents" width={70} height={50} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Partners; 