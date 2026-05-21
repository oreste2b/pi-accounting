'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const steps = [
  {
    num: '01',
    title: 'Opklaringsmøde',
    duration: '30 min',
    description:
      'Fortrolig samtale om hvor din virksomhed står, hvad der presser, og om en Fractional CFO overhovedet er det rigtige svar. Hvis det ikke er det, siger jeg det.'
  },
  {
    num: '02',
    title: 'Diagnostik',
    duration: 'Uge 1',
    description:
      'Struktureret gennemgang af din økonomifunktion, dine tal, dine processer og dit team. Du modtager en kort, ærlig statusrapport med navngivne risici og prioriteter.'
  },
  {
    num: '03',
    title: 'Engagement',
    duration: '3, 6 eller 12 mdr.',
    description:
      'Eksekvering med klare leverancer, månedlige check-ins og målbare resultater. Du beholder ejerskabet — jeg leverer disciplinen.'
  }
];

export default function Process() {
  return (
    <section className="py-28 md:py-40 bg-slate-100 relative">
      <div className="container-pi">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <FadeIn>
              <div className="label-eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-ochre" />
                06 · Sådan arbejder vi
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-lg text-balance">
                Tre skridt. <span className="italic text-ochre">Ingen overraskelser.</span>
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <FadeIn delay={0.2}>
              <p className="lede text-pretty">
                Et enkelt forløb fra første samtale til underskrevet kontrakt
                — bygget på gennemsigtighed og hurtige beslutninger. Ingen
                lange salgsprocesser, ingen oppustede pitches.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-200">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{
                duration: 0.9,
                delay: 0.1 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="bg-parchment p-10 md:p-12 min-h-[320px] flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="font-mono text-sm text-ochre">{step.num}</span>
                <span className="font-mono text-[11px] uppercase tracking-editorial text-slate-500">
                  {step.duration}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-medium mb-5 text-midnight">
                {step.title}
              </h3>
              <p className="body-pi text-pretty mt-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
