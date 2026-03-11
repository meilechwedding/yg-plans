'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  axis?: 'x' | 'y';
};

export default function Reveal({ children, delay = 0, axis = 'y' }: RevealProps) {
  const distance = axis === 'y' ? { y: 34 } : { x: 34 };

  return (
    <motion.div
      initial={{ opacity: 0, ...distance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
