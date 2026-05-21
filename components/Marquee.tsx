'use client';

import { motion } from 'framer-motion';

const items = [
  'Disciplin',
  'Klarhed',
  'Ro på tallene',
  'Pragmatisme',
  'Beslutningsgrundlag',
  'Uafhængighed',
  'Præcision',
  'Konkurrencefortrin'
];

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="border-y border-slate-200 py-7 md:py-9 overflow-hidden bg-parchment"
    >
      <motion.div
        className="flex gap-16 md:gap-24 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl text-midnight flex items-center gap-16 md:gap-24"
          >
            {item}
            <span className="text-ochre text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
