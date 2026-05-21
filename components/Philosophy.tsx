'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={ref}
      id="filosofi"
      className="py-32 md:py-48 bg-midnight text-parchment relative overflow-hidden"
    >
      <div className="container-pi relative">
        <motion.div style={{ opacity }} className="max-w-[1100px]">
          <div className="label-eyebrow mb-10 text-ochre flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-ochre" />
            02 · Filosofi
          </div>

          <RevealText splitWords text="Financial clarity er ikke et regneark." as="h2" className="display-lg text-parchment" delay={0.1} />
          <div className="mt-3">
            <RevealText splitWords text="Det er et beslutningsgrundlag." as="h2" className="display-lg text-ochre italic" delay={0.3} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20 mt-16 md:mt-24">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lede text-parchment/85"
            >
              I 15+ år har jeg arbejdet med tal, der havde konsekvenser. Hos
              Deloitte og inden for Big 5-revision lærte jeg, at en
              regnskabslinje aldrig er bare en linje — den er en beslutning,
              et risikobillede og et signal til markedet.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lede text-parchment/85"
            >
              I dag bringer jeg den disciplin ind i virksomheder, der vokser
              hurtigere, end deres økonomifunktion er bygget til. Ikke som
              rådgiver fra sidelinjen — men som integreret CFO, der efterlader
              virksomheden stærkere end jeg fandt den.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
