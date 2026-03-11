'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '@/data/content';

export default function HorizontalProjects({ items }: { items: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-64%']);

  return (
    <section className="railSection" ref={ref}>
      <div className="railSticky">
        <motion.div className="railTrack" style={{ x }}>
          {items.map((item) => (
            <article key={item.slug} className="railPanel">
              <div className="railImage">
                <Image src={item.image} alt={item.title} fill sizes="75vw" />
              </div>
              <div className="railMeta">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
                <span>{item.location}</span>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
