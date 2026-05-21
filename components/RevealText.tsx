'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Props = {
  children?: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  className?: string;
  delay?: number;
  splitWords?: boolean;
  text?: string;
};

export default function RevealText({
  children,
  as = 'div',
  className = '',
  delay = 0,
  splitWords = false,
  text
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });

  if (splitWords && text) {
    const words = text.split(' ');
    const Tag = as as any;
    return (
      <Tag ref={ref} className={className} aria-label={text}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : { y: '110%' }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: delay + i * 0.06
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  const Tag = as as any;
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}
