'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Ydelser', href: '#ydelser' },
  { label: 'Sådan arbejder vi', href: '#proces' },
  { label: 'Om Pernilla', href: '#om' },
  { label: 'Kontakt', href: '#kontakt' }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled
            ? 'bg-parchment/85 backdrop-blur-lg border-b border-slate-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container-pi flex items-center justify-between py-5">
          <a
            href="#top"
            className="font-display text-lg md:text-xl font-medium tracking-editorial text-midnight py-2 -my-2"
            aria-label="PI Accounting — gå til toppen"
          >
            PI · ACCOUNTING
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Hovednavigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-midnight transition-colors duration-300 link-underline py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="text-sm font-medium text-midnight border border-midnight px-5 py-2.5 hover:bg-midnight hover:text-parchment transition-all duration-500 ease-editorial"
            >
              Book møde
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-3 -mr-3 relative z-50"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Luk menu' : 'Åbn menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-px bg-midnight transition-transform duration-300 ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-midnight transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-midnight transition-transform duration-300 ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilmenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-parchment md:hidden flex flex-col justify-center items-start px-8 gap-6 pt-20"
          >
            <span className="label-eyebrow text-slate-600 mb-2">Menu</span>
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                className="font-display text-4xl text-midnight py-2"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 inline-flex items-center gap-3 bg-midnight text-parchment px-7 py-4 text-sm font-medium"
            >
              Book 30 min
              <span aria-hidden>→</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
