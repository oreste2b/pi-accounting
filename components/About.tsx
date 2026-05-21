'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section ref={ref} id="om" className="py-28 md:py-44 relative">
      <div className="container-pi">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-5 md:sticky md:top-32"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
              <motion.div
                style={{ y: portraitY, scale: portraitScale }}
                className="absolute inset-0 w-full h-[112%]"
              >
                <Image
                  src="/pernilla.png"
                  alt="Portræt af Pernilla Isa Hansen, grundlægger af PI Accounting"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                {/* Subtle warm overlay to harmonize with brand */}
                <div className="absolute inset-0 bg-midnight/5 mix-blend-multiply pointer-events-none" />
              </motion.div>
              {/* Frame caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-editorial font-mono text-parchment/80 z-10">
                <span>Pernilla Isa Hansen</span>
                <span>Portræt · 01</span>
              </div>
            </div>

            <div className="mt-6 font-mono text-[11px] uppercase tracking-editorial text-slate-500 flex justify-between">
              <span>Grundlægger</span>
              <span>MSc · CFO</span>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="md:col-span-7 md:col-start-7">
            <FadeIn>
              <div className="label-eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-ochre" />
                03 · Om Pernilla
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="display-lg text-balance mb-8 md:mb-12">
                Big 4-disciplin.{' '}
                <span className="text-ochre">Mellemstor virksomheds-tempo.</span>
              </h2>
            </FadeIn>

            <div className="space-y-6 lede text-pretty">
              <FadeIn delay={0.2}>
                <p>
                  I 15+ år har jeg arbejdet med tal, der havde konsekvenser.
                  Hos <strong className="text-midnight font-medium">Deloitte</strong> og
                  inden for <strong className="text-midnight font-medium">Big 5-revision</strong> lærte
                  jeg, at en regnskabslinje aldrig er bare en linje — den er
                  en beslutning, et risikobillede og et signal til markedet.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  Hos <strong className="text-midnight font-medium">Intertrust</strong> og i den
                  <strong className="text-midnight font-medium"> danske banksektor</strong> så jeg
                  hvordan kapitalstrukturer, compliance og governance kan
                  accelerere — eller bremse — en virksomheds vækst.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Det, jeg gør i dag, er enklere: Jeg tager den disciplin med
                  ind i virksomheder, der vokser hurtigere, end deres
                  økonomifunktion er bygget til. Ikke som rådgiver fra
                  sidelinjen, men som integreret CFO — der sætter rammerne,
                  leder økonomiteamet, taler med bestyrelsen, og forlader
                  virksomheden stærkere end jeg fandt den.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="text-midnight font-display text-2xl md:text-3xl italic leading-snug pt-4 border-l-2 border-ochre pl-6">
                  &ldquo;Jeg arbejder med ledere, der ved, at <em>&lsquo;vi har styr på det&rsquo;</em> ikke længere er et svar man kan give bestyrelsen.&rdquo;
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-sm font-mono uppercase tracking-editorial text-slate-500 pt-2">
                  — Pernilla Isa Hansen, MSc · Grundlægger, PI Accounting
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
