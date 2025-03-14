'use client';

import { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useCallback } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const FadeInOnScroll = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}: FadeInOnScrollProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });

  // Set the initial and animate states based on the direction
  const getDirectionOffset = useCallback(() => {
    switch (direction) {
      case 'up':
        return { y: 50 };
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      case 'none':
        return {};
    }
  }, [direction]);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        ...getDirectionOffset(),
        transition: { 
          duration: duration, 
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth easing
        },
      });
    }
  }, [controls, inView, delay, duration, getDirectionOffset]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...getDirectionOffset(),
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll; 