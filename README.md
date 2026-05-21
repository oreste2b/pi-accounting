# PI Accounting · Website

> Strategisk CFO-ledelse — uden fuldtidsbudgettet.
> Fractional CFO til scale-ups og mellemstore virksomheder i København.

One-pager web for **Pernilla Isa Hansen** / PI Accounting.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom brand tokens
- **Framer Motion** for editorial animations
- **Lenis** smooth scroll
- **Google Fonts**: Cormorant Garamond + Inter + JetBrains Mono
- Deployed on **Vercel** (recommended) — works on any Node host

---

## Quick start

```bash
# 1. Install deps
npm install

# 2. Run dev server
npm run dev
# → open http://localhost:3000

# 3. Production build
npm run build
npm start
```

Or run the all-in-one helper:

```bash
bash setup.sh
```

It installs, builds, initializes git, and prints the GitHub push commands.

---

## Project structure

```
pi-accounting-web/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home (composes all sections)
│   ├── globals.css         # Tailwind + brand CSS
│   ├── fonts.ts            # next/font config
│   ├── icon.svg            # Favicon "PI"
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Nav.tsx             # Sticky nav with scroll blur
│   ├── Hero.tsx            # H1 text reveal + parallax
│   ├── Marquee.tsx         # Brand values ticker
│   ├── Services.tsx        # 3 expandable service rows
│   ├── Philosophy.tsx      # Dark section, scroll-driven opacity
│   ├── About.tsx           # Portrait + bio with parallax
│   ├── Authority.tsx       # Animated metric counters
│   ├── Process.tsx         # 3-step "how we work"
│   ├── Contact.tsx         # CTA + meta grid
│   ├── Footer.tsx
│   ├── SmoothScroll.tsx    # Lenis wrapper
│   ├── CustomCursor.tsx    # Magnetic blob cursor
│   ├── RevealText.tsx      # Word-split text reveal
│   ├── FadeIn.tsx          # Generic scroll-in
│   └── MagneticButton.tsx  # CTA magnetic pull
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── setup.sh
├── DEPLOY.md               # Step-by-step deployment guide
└── README.md
```

---

## Brand tokens (Tailwind)

| Token | Value | Use |
|---|---|---|
| `midnight` | `#0E1A2B` | Headings, dark sections |
| `parchment` | `#F7F4ED` | Page background |
| `ochre` | `#B7892F` | Single accent — links, CTAs |
| `slate-700` | `#3A4456` | Body text |
| `slate-500` | `#6B7280` | Captions, meta |
| `slate-200` | `#D6D3CC` | Hairlines |
| `font-display` | Cormorant Garamond | H1–H3, quotes |
| `font-sans` | Inter | Body, UI |
| `font-mono` | JetBrains Mono | Numbers, eyebrows |

---

## Animation system

- **Lenis** drives smooth scroll globally (`<SmoothScroll>` wrapper)
- **RevealText** splits headings by word and reveals with stagger on scroll
- **FadeIn** for paragraphs, cards, metrics
- **MagneticButton** for CTAs (mouse pulls the button toward cursor)
- **CustomCursor** replaces the system cursor on desktop with a blending blob
- **Parallax** on Hero (scroll Y → translate Y) and on About portrait
- **Counter** animates numbers from 0 → value on enter
- **Marquee** infinite ticker for brand values

All animations respect reduced motion preferences via Framer Motion's defaults.

---

## Placeholders to replace before launch

Search the codebase for these strings and swap with real values:

- `pernilla@piaccounting.dk` → real email
- `https://cal.com/piaccounting` → real Cal.com / Calendly URL
- `https://linkedin.com` → real LinkedIn URL
- `CVR · [pending]` → real CVR-nummer
- `app/icon.svg` → custom favicon (or keep "PI" mark)
- Portrait SVG in `components/About.tsx` → real photo (use `next/image` + `/public/portrait.jpg`)

---

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) for step-by-step GitHub + Vercel instructions.

---

## License

Proprietary. © 2026 PI Accounting / Pernilla Isa Hansen.
