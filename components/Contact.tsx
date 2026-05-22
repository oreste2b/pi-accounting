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
      {/* Editorial corner mark — replaces the oversized ✦ */}
      <div
        aria-hidden
        className="absolute top-10 right-10 md:top-16 md:right-16 flex items-center gap-3 text-[11px] uppercase tracking-editorial font-mono text-parchment/50"
      >
        <span>PI · KONTAKT</span>
        <span className="inline-block w-8 h-px bg-ochre" />
      </div>

      {/* Subtle hairline composition */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-[8%] hidden md:block w-px bg-parchment/8"
      />

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
            <RevealText delay={0.12}>
              <span>samtale.</span>
            </RevealText>
            <RevealText delay={0.24}>
              <span className="italic text-ochre">Ingen forpligtelser.</span>
            </RevealText>
          </h2>

          <FadeIn delay={0.3}>
            <p className="lede text-parchment/85 max-w-2xl mb-14 md:mb-20 text-pretty">
              De fleste samarbejder begynder med et fortroligt opklaringsmøde.
              Vi taler om, hvor din virksomhed står, hvad der presser, og om
              en Fractional CFO er det rigtige svar. Hvis det ikke er det,
              siger jeg det.
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <FadeIn delay={0.4}>
              <MagneticButton href="https://cal.com/piaccounting" strength={0.25}>
                <span className="inline-flex items-center gap-4 bg-ochre text-midnight px-9 py-5 text-sm font-medium tracking-wide group transition-colors duration-500 hover:bg-parchment">
                  Book 30 minutter
                  <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </MagneticButton>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="text-sm text-parchment/75">
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
          <FadeIn delay={0.6}>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 md:mt-32 pt-10 border-t border-parchment/15">
              <div>
                <dt className="label-eyebrow text-parchment/50">Lokation</dt>
                <dd className="mt-2 text-parchment">København, DK</dd>
              </div>
              <div>
                <dt className="label-eyebrow text-parchment/50">Sprog</dt>
                <dd className="mt-2 text-parchment">Dansk · Engelsk</dd>
              </div>
              <div>
                <dt className="label-eyebrow text-parchment/50">Engagement</dt>
                <dd className="mt-2 text-parchment tabular">3 · 6 · 12 mdr.</dd>
              </div>
              <div>
                <dt className="label-eyebrow text-parchment/50">Svartid</dt>
                <dd className="mt-2 text-parchment tabular">{'<'} 24 t.</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
