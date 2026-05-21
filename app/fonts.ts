import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';

// Fraunces — contemporary editorial serif, closer in spirit to GT Sectra
// (rational, low-contrast, modern) than Cormorant Garamond.
export const fontDisplay = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
});

export const fontSans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap'
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap'
});
