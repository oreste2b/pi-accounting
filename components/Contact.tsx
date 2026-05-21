'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import MagneticButton from './MagneticButton';
import RevealText from './RevealText';

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="py-32 md:py-48 bg-midnight text-parchment relative overflow-hidden"
    >
      {/* Decorative serif glyph */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute -right-20 md:-right-40 top-1/2 -translate-y-1/2 font-display text-[40rem] md:text-[55rem] leading-none text-parchment select-none pointer-events-none"
      >
        ✦
      </motion.div>

      <div className="container-pi relative">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="label-eyebrow text-ochre mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-ochre" />
              06 · Kontakt
            </div>
          </FadeIn>

          <h2 className="display-xl text-balance mb-12 md:mb-16">
            <RevealText>En halv times</RevealText>
            <RevealText delay={0.15}>
              <span>samtale.</span>
            </RevealText>
            <RevealText delay={0.3}>
              <span className="italic text-ochre">Ingen forpligtelser.</span>
            </RevealText>
          </h2>

          <FadeIn delay={0.4}>
            <p className="lede text-parchment/80 max-w-2xl mb-14 md:mb-20 text-pretty">
              De fleste samarbejder begynder med et fortroligt opklaringsmøde.
              Vi taler om, hvor din virksomhed står, hvad der presser, og om
              en Fractional CFO er det rigtige svar. Hvis det ikke er det,
              siger jeg det.
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <FadeIn delay={0.5}>
              <MagneticButton href="https://cal.com/piaccounting" strength={0.3}>
                <span className="inline-flex items-center gap-4 bg-ochre text-midnight px-9 py-5 text-sm font-medium tracking-wide group transition-colors duration-500 hover:bg-parchment">
                  Book 30 minutter
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </MagneticButton>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="text-sm text-parchment/70">
                Foretrækker du e-mail?
                <a
                  href="mailto:pernilla@piaccounting.dk"
                  className="block mt-1 text-parchment hover:text-ochre transition-colors duration-300 link-underline"
                >
                  pernilla@piaccounting.dk
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Meta info */}
          <FadeIn delay={0.8}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 md:mt-32 pt-10 border-t border-parchment/15">
              <div>
                <p className="label-eyebrow text-parchment/50">Lokation</p>
                <p className="mt-2 text-parchment">København, DK</p>
              </div>
              <div>
                <p className="label-eyebrow text-parchment/50">Sprog</p>
                <p className="mt-2 text-parchment">Dansk · Engelsk</p>
              </div>
              <div>
                <p className="label-eyebrow text-parchment/50">Tilgængelighed</p>
                <p className="mt-2 text-parchment">3, 6 eller 12 mdr.</p>
              </div>
              <div>
                <p className="label-eyebrow text-parchment/50">Svartid</p>
                <p className="mt-2 text-parchment">Inden for 24 t.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
