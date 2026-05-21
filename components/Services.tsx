'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from './FadeIn';

type Service = {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  fit: string;
};

const services: Service[] = [
  {
    num: '01',
    title: 'Interim CFO',
    subtitle: 'Strategisk økonomiledelse, fra dag ét.',
    description:
      'Når din virksomhed har overhalet sin økonomifunktion — eller når en CFO-rolle står ubesat — træder jeg ind som operationel og strategisk leder. Jeg styrer økonomiteamet, ejer forecastet, sidder med ved bestyrelsens bord.',
    deliverables: [
      'Månedsrapportering der bruges til beslutninger',
      '13-ugers cash flow og rullende 12-måneders forecast',
      'Bestyrelsesmateriale i Big 4-kvalitet',
      'KPI-arkitektur tilpasset din forretningsmodel',
      'Ren overdragelse til permanent CFO'
    ],
    fit: 'Series A–C · Ejerskifter · Post-acquisition · CFO-vakance'
  },
  {
    num: '02',
    title: 'Financial Health Check',
    subtitle: 'Find risikoen, før den finder dig.',
    description:
      'En struktureret gennemgang af din økonomifunktion, dine tal og dine processer — leveret med revisorens grundighed, men i en CFO\'s sprog. Du får et tydeligt billede af hvor du står, hvad der kan brænde, og hvad der skal rettes.',
    deliverables: [
      'Diagnostik-rapport (15–25 sider) med navngivne risici',
      'Proces- og kontrol-audit',
      'Benchmarks mod nordisk peer-gruppe',
      'Investor- eller exit-readiness scoring',
      'Eksekverbar 90-dages roadmap'
    ],
    fit: 'Pre-fundraising · Pre-exit · Bestyrelsesskifte · Diligence forberedelse'
  },
  {
    num: '03',
    title: 'Fundraising Support',
    subtitle: 'Fra modelfejl til underskrevet term sheet.',
    description:
      'Investorer giver ikke kapital til usikre tal. Jeg forbereder din virksomhed til kapitalrejsning — fra finansiel model og data room til Q&A med VC\'er. Du beholder ejerskabet; jeg sørger for, at tallene står til presset.',
    deliverables: [
      'Investor-grade finansiel model (3–5 år)',
      'Unit economics og sensitivitetsanalyser',
      'Data room: struktur og kvalitetskontrol',
      'Coaching før investor- og købermøder',
      'Term sheet review og valuation-argumentation'
    ],
    fit: 'Series A–C · Growth equity · M&A salg · Bridge runder'
  }
];

export default function Services() {
  const [active, setActive] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-15% 0px' });

  return (
    <section
      ref={sectionRef}
      id="ydelser"
      className="py-28 md:py-40 relative"
    >
      <div className="container-pi">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <FadeIn>
              <div className="label-eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-ochre" />
                02 · Ydelser
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="display-lg text-balance">
                Tre måder at <span className="text-ochre">engagere</span>.
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <FadeIn delay={0.2}>
              <p className="lede text-pretty">
                Alle ydelser leveres som tidsbegrænsede kontrakter — 3, 6 eller
                12 måneder — med klare leverancer og målbare resultater.
                Ingen retainer for retainerens skyld.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Service rows */}
        <div className="border-t border-slate-200">
          {services.map((service, i) => (
            <motion.article
              key={service.num}
              onClick={() => setActive(active === i ? -1 : i)}
              role="button"
              tabIndex={0}
              aria-expanded={active === i}
              aria-controls={`service-${service.num}-detail`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActive(active === i ? -1 : i);
                } else if (e.key === 'Escape' && active === i) {
                  setActive(-1);
                }
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group border-b border-slate-200 py-10 md:py-14 relative cursor-pointer focus:outline-none"
              data-cursor="hover"
            >
              {/* Hover background — full-bleed edge-to-edge */}
              <motion.div
                className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-midnight origin-bottom z-0"
                initial={{ scaleY: 0 }}
                animate={active === i ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              />

              <div className="relative z-10 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="md:col-span-1">
                  <span
                    className={`font-mono text-sm transition-colors duration-500 ${
                      active === i ? 'text-ochre' : 'text-slate-500'
                    }`}
                  >
                    {service.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3
                    className={`display-md transition-colors duration-500 ${
                      active === i ? 'text-parchment' : 'text-midnight'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm md:text-base italic font-display transition-colors duration-500 ${
                      active === i ? 'text-ochre' : 'text-slate-500'
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p
                    className={`body-pi transition-colors duration-500 ${
                      active === i ? 'text-parchment/85' : 'text-slate-700'
                    }`}
                  >
                    {service.description}
                  </p>
                  <motion.div
                    id={`service-${service.num}-detail`}
                    initial={false}
                    animate={
                      active === i
                        ? { height: 'auto', opacity: 1, marginTop: 24 }
                        : { height: 0, opacity: 0, marginTop: 0 }
                    }
                    transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 text-sm text-parchment/80 font-sans">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="text-ochre">·</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 text-[11px] uppercase tracking-editorial font-mono text-ochre">
                      Egnet til: {service.fit}
                    </div>
                  </motion.div>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start gap-3">
                  <span
                    className={`hidden md:inline text-[11px] uppercase tracking-editorial font-mono transition-colors duration-500 ${
                      active === i
                        ? 'text-parchment/60'
                        : 'text-slate-600 group-hover:text-midnight'
                    }`}
                    aria-hidden
                  >
                    {active === i ? 'Luk' : 'Læs mere'}
                  </span>
                  <motion.span
                    animate={active === i ? { rotate: 45 } : { rotate: 0 }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    className={`text-3xl font-light transition-colors duration-500 leading-none ${
                      active === i ? 'text-ochre' : 'text-midnight'
                    }`}
                    aria-hidden
                  >
                    +
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
