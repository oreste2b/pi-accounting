'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import RevealText from './RevealText';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section ref={ref} id="om" className="py-28 md:py-44 relative">
      {/* Philosophy manifesto — merged from old Philosophy.tsx */}
      <div className="container-pi mb-28 md:mb-40">
        <div className="max-w-[1100px]">
          <FadeIn>
            <div className="label-eyebrow mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-ochre" />
              04 · Filosofi
            </div>
          </FadeIn>

          <RevealText
            splitWords
            text="Financial clarity er ikke et regneark."
            as="h2"
            className="display-lg text-balance"
          />
          <div className="mt-3">
            <RevealText
              splitWords
              text="Det er et beslutningsgrundlag."
              as="h2"
              className="display-lg text-ochre italic"
              delay={0.15}
            />
          </div>
        </div>
      </div>

      {/* About — portrait + bio */}
      <div className="container-pi">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-5 md:sticky md:top-32"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-midnight">
              <motion.div
                style={{ y: portraitY }}
                className="absolute inset-0 w-full h-[108%]"
              >
                <Image
                  src="/pernilla-placeholder.svg"
                  alt="Portræt af Pernilla Isa Hansen, grundlægger af PI Accounting"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </div>

            <div className="mt-6 font-mono text-[11px] uppercase tracking-editorial text-slate-600 flex justify-between">
              <span>Grundlægger</span>
              <span>MSc · CFO</span>
            </div>
          </motion.div>

          <div className="md:col-span-7 md:col-start-7">
            <FadeIn>
              <div className="label-eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-ochre" />
                05 · Om Pernilla
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
                  Hos <strong className="text-midnight font-medium">Intertrust</strong> og i den{' '}
                  <strong className="text-midnight font-medium">danske banksektor</strong> så jeg
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
                <blockquote className="text-midnight font-display text-2xl md:text-3xl italic leading-snug pt-4 border-l-2 border-ochre pl-6 mt-4">
                  <p className="text-pretty">
                    &ldquo;Jeg arbejder med ledere, der ved, at <em>&lsquo;vi har styr på det&rsquo;</em> ikke længere er et svar man kan give bestyrelsen.&rdquo;
                  </p>
                  <cite className="block not-italic text-sm font-mono uppercase tracking-editorial text-slate-600 pt-4 font-normal">
                    — Pernilla Isa Hansen, MSc · Grundlægger, PI Accounting
                  </cite>
                </blockquote>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
