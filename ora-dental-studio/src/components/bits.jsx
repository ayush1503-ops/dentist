import { Fragment } from 'react'
import { BRAND } from '../data/content'

/* ---------- Arrows ---------- */
export const ArrowRight = (props) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
    <path d="M2 8h11M9.5 3.5 14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
  </svg>
)

export const ArrowUpRight = (props) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
    <path d="M4 12 12 4M5.5 4H12v6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
  </svg>
)

/* ---------- Original dental line icons (24 grid, square caps) ---------- */
const ICONS = {
  tooth: (
    <path d="M12 4.2c-2.6 0-2.9 1-4 1s-1.4-1-4-1c-2.4 0-4.2 2-4.2 4.6 0 2.7 1.4 4.6 2 7.7.4 2 1 5.5 2.5 5.5 1.6 0 1.4-3.6 3.7-3.6s2.1 3.6 3.7 3.6c1.5 0 2.1-3.5 2.5-5.5.6-3.1 2-5 2-7.7 0-2.6-1.8-4.6-4.2-4.6Z" />
  ),
  drop: (
    <path d="M12 3.4S5.8 10.3 5.8 15a6.2 6.2 0 0 0 12.4 0c0-4.7-6.2-11.6-6.2-11.6ZM9 15.2a3 3 0 0 0 3 3" strokeLinejoin="round" />
  ),
  shield: (
    <>
      <path d="M12 3 4.6 5.6v6.1c0 4.2 3 7 7.4 8.9 4.4-1.9 7.4-4.7 7.4-8.9V5.6L12 3Z" strokeLinejoin="round" />
      <path d="m8.6 11.8 2.4 2.4 4.4-4.6" />
    </>
  ),
  sparkle: (
    <path d="M12 3c.5 4.6 3.4 7.5 8 8-4.6.5-7.5 3.4-8 8-.5-4.6-3.4-7.5-8-8 4.6-.5 7.5-3.4 8-8Z" strokeLinejoin="round" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.6M12 19.4V22M2 12h2.6M19.4 12H22M4.9 4.9l1.9 1.9M17.2 17.2l1.9 1.9M19.1 4.9l-1.9 1.9M6.8 17.2l-1.9 1.9" />
    </>
  ),
  braces: (
    <>
      <path d="M3 12h18" />
      <rect x="5" y="9" width="4" height="6" />
      <rect x="15" y="9" width="4" height="6" />
    </>
  ),
  implant: (
    <>
      <path d="M8.6 3h6.8v4H8.6V3Z" />
      <path d="M9.2 7v3.4m5.6-3.4v3.4M9.2 13.8h5.6M9.2 17.4h5.6M9.2 21h5.6M9.2 10.4v11" />
    </>
  ),
  cross: (
    <path d="M9.4 3h5.2v6.4H21v5.2h-6.4V21H9.4v-6.4H3V9.4h6.4V3Z" strokeLinejoin="round" />
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M7.6 14.2c1 1.5 2.6 2.3 4.4 2.3s3.4-.8 4.4-2.3M8.8 9.4h.01M15.2 9.4h.01" />
    </>
  ),
}

export function DentalIcon({ name, size = 18, className = '' }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="square"
      aria-hidden="true" className={className} focusable="false"
    >
      {ICONS[name] || ICONS.tooth}
    </svg>
  )
}

/* ---------- Brand lockup — square wordmark ---------- */
export function Logo({ light = false }) {
  return (
    <span className={`brand${light ? ' brand--light' : ''}`}>
      <svg className="brand-mark" viewBox="0 0 30 30" aria-hidden="true" focusable="false">
        <rect x="1.5" y="1.5" width="27" height="27" stroke="currentColor" strokeWidth="2.4" fill="none" />
        <path d="M9.2 15h11.6M15 9.2v11.6" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      <span className="brand-word-row">
        <span className="brand-word">
          {BRAND.wordmark}
          <span className="brand-sub">{BRAND.sub}</span>
        </span>
      </span>
    </span>
  )
}

/* Renders a string, wrapping [bracketed] placeholders in a visible marker. */
export function WithPh({ text }) {
  const parts = String(text).split(/(\[[^\]]+\])/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('[') && p.endsWith(']') ? (
          <span className="ph" key={i} title="Editable demo detail">{p}</span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        )
      )}
    </>
  )
}
