import type { Metadata, Viewport } from 'next';
import { fontDisplay, fontSans, fontMono } from './fonts';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://piaccounting.dk'),
  title: {
    default: 'PI Accounting · Strategisk CFO-ledelse i København',
    template: '%s · PI Accounting'
  },
  description:
    'Fractional CFO til scale-ups og mellemstore virksomheder i Danmark. 15+ års erfaring fra Deloitte, Big 5-revision og dansk bank. Financial clarity som konkurrencefortrin.',
  keywords: [
    'Fractional CFO København',
    'Interim CFO Danmark',
    'CFO på timebasis',
    'Financial due diligence',
    'Kapitalrejsning scale-up',
    'PI Accounting'
  ],
  authors: [{ name: 'Pernilla Isa Hansen' }],
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://piaccounting.dk',
    siteName: 'PI Accounting',
    title: 'PI Accounting · Strategisk CFO-ledelse i København',
    description:
      'Fractional CFO til scale-ups og mellemstore virksomheder. Big 4-disciplin. Nordisk hastighed.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PI Accounting · Strategisk CFO-ledelse',
    description:
      'Fractional CFO til scale-ups og mellemstore virksomheder i Danmark.'
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: '#F7F4ED',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="da"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="bg-parchment text-midnight antialiased overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
