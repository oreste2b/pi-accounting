'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32 overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 grain pointer-events-none" />

      {/* Top meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="container-pi absolute top-32 left-0 right-0 hidden md:flex justify-between items-start text-[11px] uppercase tracking-editorial font-mono text-slate-500"
      >
        <div>
          <div>København</div>
          <div className="text-midnight mt-1">55°40′34″N · 12°34′06″E</div>
        </div>
        <div className="text-right">
          <div>Etabl. 2026</div>
          <div className="text-midnight mt-1">Praksis nr. 01</div>
        </div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="container-pi relative">
        <div className="max-w-[1100px]">
          <RevealText
            as="div"
            className="label-eyebrow mb-8 md:mb-12 flex items-center gap-3"
            delay={0.5}
          >
            <span className="inline-block w-8 h-px bg-ochre" />
            København · Fractional CFO praksis
          </RevealText>

          <h1 className="display-xl text-balance">
            <RevealText delay={0.7}>Strategisk</RevealText>
            <RevealText delay={0.85}>CFO-ledelse —</RevealText>
            <RevealText delay={1.0}>
              <span className="italic text-ochre">uden fuldtidsbudgettet.</span>
            </RevealText>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lede max-w-[640px] mt-10 md:mt-14 text-pretty"
          >
            Som Fractional CFO bringer jeg 15+ års erfaring fra Deloitte, Big
            5-revision og dansk bank ind i din virksomhed — i 3, 6 eller 12
            måneder. Du får økonomisk klarhed, beslutningsgrundlag og ro på
            tallene, præcis når væksten kræver det.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12 md:mt-16 flex flex-wrap items-center gap-6"
          >
            <MagneticButton href="#kontakt" strength={0.25}>
              <span className="btn-primary group">
                Book et fortroligt møde
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </MagneticButton>
            <a
              href="#ydelser"
              className="text-sm text-slate-700 link-underline"
            >
              Eller se hvordan fractional fungerer
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="container-pi mt-16 md:mt-20 flex items-end justify-between"
      >
        <div className="text-[11px] uppercase tracking-editorial font-mono text-slate-500">
          <div>Financial clarity</div>
          <div className="text-midnight mt-1">som konkurrencefortrin</div>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[11px] uppercase tracking-editorial font-mono text-slate-500 flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="block w-px h-10 bg-slate-200" />
        </motion.div>
      </motion.div>
    </section>
  );
}
