'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Magnetic from '@/components/Magnetic';

export default function BlueprintHero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 20 });
  const y = useSpring(my, { stiffness: 60, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.width / 2 - rect.left) * 0.01);
    my.set((e.clientY - rect.height / 2 - rect.top) * 0.01);
  };

  return (
    <section className="hero" onMouseMove={onMove}>
      <motion.div className="heroImage" style={{ x, y }}>
        <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=80" alt="Modern residential architecture" fill priority sizes="100vw" />
      </motion.div>
      <div className="heroShade" />
      <svg className="blueprint" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {[[8,10,8,90],[25,5,25,95],[74,6,74,95],[90,15,90,88],[6,20,92,20],[10,48,95,48],[6,75,88,75]].map((line, i) => (
          <motion.line
            key={i}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.12 * i, ease: 'easeOut' }}
          />
        ))}
      </svg>
      <motion.div className="heroMonogram" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
        YG
      </motion.div>
      <div className="container heroContent">
        <p>Monsey, NY</p>
        <h1>Modern planning for refined living.</h1>
        <span>Architecture, planning, and spatial design for homes and multi-family projects in Rockland County.</span>
        <div className="heroCtas">
          <Magnetic><Link href="/projects" className="ctaButton">View Projects</Link></Magnetic>
          <Magnetic><Link href="/contact" className="ghostButton">Start Your Project</Link></Magnetic>
        </div>
      </div>
    </section>
  );
}
