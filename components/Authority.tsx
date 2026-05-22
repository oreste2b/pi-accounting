'use client';

import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import FadeIn from './FadeIn';

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30%' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94]
      });
      return () => controls.stop();
    }
  }, [inView, mv, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const metrics = [
  { value: 15, suffix: '+', label: 'Års erfaring i økonomi og revision' },
  { value: 4, suffix: '', label: 'Industrier dækket' },
  { value: 3, suffix: '', label: 'Markeder: DK · Norden · EU' },
  { value: 12, suffix: ' mdr.', label: 'Maks. engagement-længde — herefter overdragelse' }
];

const credentials = [
  'Deloitte',
  'Intertrust',
  'Big 5 audit',
  'Dansk banksektor',
  'MSc',
  'CFO certificering'
];

export default function Authority() {
  return (
    <section className="py-28 md:py-40 relative">
      <div className="container-pi">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-20 md:mb-28">
          <div className="md:col-span-5">
            <FadeIn>
              <div className="label-eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-ochre" />
                01 · Autoritet
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-lg text-balance">
                Bygget på 15 år hos dem, der{' '}
                <span className="text-ochre">sætter standarden</span>.
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <FadeIn delay={0.2}>
              <p className="lede text-pretty">
                Erfaringen jeg bringer til dit bestyrelseslokale, er ikke
                teori. Den er bygget i nogle af de mest krævende økonomiske
                og regulatoriske miljøer i Norden.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border-y border-slate-200">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="bg-parchment p-8 md:p-10 group hover:bg-midnight hover:text-parchment transition-all duration-500 ease-editorial"
            >
              <div className="font-display text-5xl md:text-7xl font-medium leading-none mb-3 tabular">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <p className="text-xs md:text-sm text-slate-600 group-hover:text-parchment/75 transition-colors duration-500 leading-snug text-pretty">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-4">
            <FadeIn>
              <p className="label-eyebrow">Trænet hos</p>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {credentials.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15%' }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="font-display text-2xl md:text-4xl text-midnight"
                >
                  {c}
                  {i < credentials.length - 1 && (
                    <span className="text-ochre ml-6 md:ml-6">·</span>
                  )}
                </motion.span>
              ))}
            </div>
            <FadeIn delay={0.6}>
              <p className="text-[11px] mt-8 text-slate-500 max-w-xl">
                Tidligere arbejdsgivere og uddannelsesplatforme. PI Accounting
                er en uafhængig praksis og er ikke tilknyttet de nævnte
                virksomheder.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
