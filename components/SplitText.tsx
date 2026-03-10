'use client';

import { motion } from 'framer-motion';

type SplitTextProps = {
  text: string;
  className?: string;
};

export default function SplitText({ text, className }: SplitTextProps) {
  const words = text.split(' ');

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span className="splitWord" key={`${word}-${i}`}>
          <motion.span
            initial={{ y: '120%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
