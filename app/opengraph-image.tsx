import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PI Accounting — Strategisk CFO-ledelse i København';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0E1A2B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#F7F4ED',
          fontFamily: 'Georgia, serif',
          position: 'relative'
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 16,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'rgba(247,244,237,0.6)',
            fontFamily: 'ui-monospace, monospace'
          }}
        >
          <span>PI · Accounting</span>
          <span style={{ color: '#B7892F' }}>København · 2026</span>
        </div>

        {/* Title block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 18,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#B7892F',
              fontFamily: 'ui-monospace, monospace'
            }}
          >
            <span style={{ display: 'inline-block', width: 48, height: 1, background: '#B7892F' }} />
            Fractional CFO praksis
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 960,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <span>Strategisk CFO-ledelse —</span>
            <span style={{ fontStyle: 'italic', color: '#B7892F' }}>
              uden fuldtidsbudgettet.
            </span>
          </div>
        </div>

        {/* Bottom signature */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 16,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'rgba(247,244,237,0.55)',
            fontFamily: 'ui-monospace, monospace',
            borderTop: '1px solid rgba(247,244,237,0.15)',
            paddingTop: 24
          }}
        >
          <span>Financial clarity som konkurrencefortrin</span>
          <span>piaccounting.dk</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
