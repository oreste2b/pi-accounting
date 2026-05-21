'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Ydelser', href: '#ydelser' },
  { label: 'Filosofi', href: '#filosofi' },
  { label: 'Om Pernilla', href: '#om' },
  { label: 'Kontakt', href: '#kontakt' }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled
            ? 'bg-parchment/85 backdrop-blur-lg border-b border-slate-200'
            : 'bg-transparent'
        }`}
      >
        <div className="container-pi flex items-center justify-between py-5">
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-lg md:text-xl font-medium tracking-editorial text-midnight"
          >
            PI · ACCOUNTING
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 hover:text-midnight transition-colors duration-300 link-underline"
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
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-parchment md:hidden flex flex-col justify-center items-center gap-10 pt-20"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="font-display text-4xl text-midnight"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 bg-midnight text-parchment px-8 py-4 text-sm font-medium"
            >
              Book møde →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
