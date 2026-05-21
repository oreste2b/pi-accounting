'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-slate-200 py-14 md:py-20">
      <div className="container-pi">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl md:text-4xl font-medium tracking-editorial text-midnight"
            >
              PI · ACCOUNTING
            </motion.div>
            <p className="mt-4 text-sm text-slate-500 max-w-md text-pretty">
              Fractional CFO til scale-ups og mellemstore virksomheder.
              Bygget på Big 4-disciplin og nordisk pragmatisme.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="label-eyebrow mb-4">Site</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><a href="#ydelser" className="link-underline">Ydelser</a></li>
              <li><a href="#filosofi" className="link-underline">Filosofi</a></li>
              <li><a href="#om" className="link-underline">Om</a></li>
              <li><a href="#kontakt" className="link-underline">Kontakt</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label-eyebrow mb-4">Kontakt</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <a href="mailto:pernilla@piaccounting.dk" className="link-underline">
                  pernilla@piaccounting.dk
                </a>
              </li>
              <li>
                <a href="https://cal.com/piaccounting" className="link-underline">
                  Book møde
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="link-underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-eyebrow mb-4">Praksis</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>København, Danmark</li>
              <li>CVR · [pending]</li>
              <li>Etabl. 2026</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] uppercase tracking-editorial font-mono text-slate-500">
          <div>© 2026 PI Accounting · Alle rettigheder forbeholdes</div>
          <div className="flex gap-6">
            <a href="#" className="link-underline">Persondatapolitik</a>
            <a href="#" className="link-underline">Cookie-politik</a>
          </div>
          <div>Designet i København</div>
        </div>
      </div>
    </footer>
  );
}
