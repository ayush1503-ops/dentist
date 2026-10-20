# ORA Dental Studio — website

A premium marketing website for a modern dental clinic, art-directed in a calm
white + warm-mocha editorial language (inspired — in structure and mood, not in
content — by contemporary dentist-site templates).
**“A healthier smile. A more confident you.”**

Built with **React 19 + Vite 8**, a self-hosted variable font (Inter),
and hand-crafted CSS design tokens. No UI frameworks, no animation libraries —
motion is a ~40-line IntersectionObserver system that fully respects
`prefers-reduced-motion`.

## Run it

```bash
npm install          # use --legacy-peer-deps if npm 10.8.x complains
npm run dev          # local dev server
npm run build        # production build to dist/
npm run preview      # preview the production build
```

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#FFFFFF` | page background |
| `--sand` | `#FAF7F5` | alternating section background |
| `--sand-2` | `#EBE3DE` | contact section background |
| `--taupe` | `#C9B4A7` | borders, hairlines, accents |
| `--taupe-deep` | `#B69F8F` | placeholder chips, hero accent word |
| `--mocha` | `#927E70` | muted text, numbering, icons |
| `--ink` | `#382E27` | body text, dark buttons/cards, dark sections |

- **Type:** Inter only — `400` body, `600` UI, `700` headings; tight
  `-0.02em…-0.035em` display tracking; eyebrows are uppercase +0.18em with a
  small taupe tick square.
- **Geometry:** zero border radius everywhere (buttons, inputs, chips, frames);
  1-px taupe hairlines; square image frames with corner tabs.
- **Spacing:** 4-px base scale, sections separated by large `12rem → 144px`
  rhythms; hairline dividers instead of cards.
- **Motion:** 0.2 s colour/background transitions; a signature 0.6 s
  letter-spacing “grow” on hover for buttons and quiet links; reveal
  choreography capped at ±24 px, ~0.9 s, and fully neutralised for reduced
  motion.
- **Patterns:** “Welcome” eyebrow + benefit lead hero with a numbered
  anchor-tab strip; treatments grouped as category blocks with icon-chip link
  rows; commitments as numbered hairline cells; dark `--ink` journey and
  footer sections; a single primary CTA (“Book a consultation”) repeated.
  All copy and structure are original — nothing is lifted from any template.

## Editing content — one file

All copy and contact details live in **`src/data/content.js`**.
Everything shown is currently **demo sample data** — the clinic address,
phone, email, opening hours, the dentist's name (Dr. Priya Kapoor) and
credentials, and all imagery. On the page these are flagged in the footer
notice, the booking-card notes, and the image captions; replace every value
with the clinic's real, verified details before launch:

- `CLINIC` — address, phone, email, opening hours
- `DENTIST` — name, credentials, portrait
- `TREATMENT_CATEGORIES`, `STEPS`, `FAQS`, `GALLERY`, `COMMITMENTS`

Do not fill these in with invented qualifications, awards, review scores or
patient statistics — no map or directions link is rendered until the real
address is set.

## Honesty model (intentional)

- The booking form is a **frontend demo**. It validates fully and shows a
  simulated request lifecycle, then states plainly that nothing was sent and
  no appointment exists. Integration point: `onSubmit` in
  `src/components/Booking.jsx` — replace the `setTimeout` with your
  scheduling/endpoint call.
- Gallery/hero imagery is **labelled illustrative demo photography** and is
  never presented as the premises or as patients. The dentist name
  (**Dr. Priya Kapoor**) and portrait are clearly captioned as a **sample**;
  swap both for the real name, verified credentials, and the practitioner’s
  own photograph before launch. The “Our team” gallery tile stays a dashed
  placeholder until real team photography exists.
- No map or directions link is rendered until a real address exists.

## Imagery credits (demo placeholders — replace before launch)

| File | Source | Licence |
| --- | --- | --- |
| `public/images/hero-portrait.jpg` | Pexels #3791554 | Pexels licence |
| `public/images/smile-detail.jpg` | Pexels #3762453 | Pexels licence |
| `public/images/dentist-portrait.jpg` | Pexels #15752232 (demo stand-in, captioned) | Pexels licence |
| `public/images/instruments-neutral.jpg` | Pexels #39257053 | Pexels licence |
| `public/images/material-detail.jpg` | Pexels #7911701 | Pexels licence |
| `public/images/team.jpg` | Pexels #37458081 (demo stand-in, captioned) | Pexels licence |
| `reception.jpg`, `lounge.jpg`, `treatment-wing.jpg` | Public clinic-interior photography via image search | Verify/replace before launch |

## Structure

```
src/
  data/content.js        ← edit all site content here
  styles/tokens.css      ← design tokens (colour, type, space, motion)
  styles/base.css        ← primitives (buttons, links, reveal system, a11y)
  styles/sections.css    ← per-section layouts + responsive rules
  components/            ← Header, Hero, Statement, Treatments, Dentist,
                           Experience, Gallery, Faq, Booking, Footer, bits
  hooks/useReveal.jsx    ← Reveal component + scroll/mount hooks
```

## Accessibility & QA notes

- Semantic landmarks, skip link, visible `:focus-visible` states, native
  `<button>` accordions with aria wiring, focus-managed mobile menu (Escape
  closes, focus returns), `aria-live` form result.
- Verified at 375 / 390 / 768 / 1366 / 1440 px with no horizontal overflow,
  no console errors, and full content visibility with reduced motion.
