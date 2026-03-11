'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollGuide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 35%'] });

  return (
    <div className="guideWrap" ref={ref}>
      <div className="guideLine" />
      <motion.div className="guideProgress" style={{ scaleY: scrollYProgress }} />
      {children}
    </div>
  );
}
