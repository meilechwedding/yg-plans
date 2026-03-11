'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Magnetic from '@/components/Magnetic';

export default function BlueprintHero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 55, damping: 20 });
  const y = useSpring(my, { stiffness: 55, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.012);
    my.set((e.clientY - rect.top - rect.height / 2) * 0.012);
  };

  return (
    <section className="hero" onMouseMove={onMove}>
      <motion.div className="heroImage" style={{ x, y }}>
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2400&q=80"
          alt="Premium residential architecture"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="heroShade" />
      <svg className="heroDraft" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {[6, 22, 41, 70, 92].map((xLine, i) => (
          <motion.line
            key={`v-${xLine}`}
            x1={xLine}
            y1="4"
            x2={xLine}
            y2="96"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {[14, 34, 63, 86].map((yLine, i) => (
          <motion.line
            key={`h-${yLine}`}
            x1="4"
            y1={yLine}
            x2="96"
            y2={yLine}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>

      <div className="container heroContent">
        <p className="heroKicker">Monsey, New York</p>
        <h1>Planning and architecture for refined residential living.</h1>
        <span>Custom homes, apartments, and multi-family planning across Rockland County.</span>
        <div className="heroCtas">
          <Magnetic><Link href="/projects" className="ctaButton">View Projects</Link></Magnetic>
          <Magnetic><Link href="/contact" className="ghostButton">Start Your Project</Link></Magnetic>
        </div>
      </div>
    </section>
  );
}
