'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 30, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 400, damping: 30, mass: 0.3 });

  useEffect(() => {
    // Only enable on devices with fine pointer
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduceMotion.matches) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only show cursor over interactive elements
      const interactive = target.closest(
        'a, button, [role="button"], [data-cursor="hover"]'
      );
      setVisible(!!interactive);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-difference bg-parchment"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      animate={{
        width: visible ? 28 : 0,
        height: visible ? 28 : 0,
        opacity: visible ? 0.9 : 0
      }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    />
  );
}
