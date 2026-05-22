'use client';

import { motion, useReducedMotion } from 'framer-motion';

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
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Brand keywords"
      className="border-y border-slate-200 py-5 overflow-hidden bg-parchment"
    >
      {reduce ? (
        // Static fallback: a single, calm row of keywords
        <ul className="container-pi flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-editorial font-mono text-slate-600">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        >
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-editorial font-mono text-slate-600 flex items-center gap-12"
            >
              {item}
              <span className="text-slate-300" aria-hidden>·</span>
            </span>
          ))}
        </motion.div>
      )}
    </section>
  );
}
