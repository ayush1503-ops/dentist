import { useEffect, useRef, useState } from 'react'
import { NAV, CLINIC } from '../data/content'
import { Logo, ArrowUpRight, WithPh } from './bits'
import { useScrolled } from '../hooks/useReveal'

export default function Header() {
  const scrolled = useScrolled(14)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const firstLinkRef = useRef(null)

  /* Close on Escape, lock scroll while open, manage focus */
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      toggleRef.current?.focus()
    }
  }, [open])

  return (
    <header className={`site-head${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container head-row">
        <a href="#top" className="head-brand" aria-label="ORA Dental Studio — back to top">
          <Logo />
        </a>

        <nav className="head-nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="head-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="head-actions">
          <a href="#contact" className="btn btn--primary btn--sm head-cta">
            Book a consultation <ArrowUpRight />
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-toggle-label">{open ? 'Close' : 'Menu'}</span>
            <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>

      {/* Mobile / overlay menu */}
      <div
        id="mobile-menu"
        className="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
      >
        <nav className="menu-nav" aria-label="Menu">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href} style={{ '--d': `${90 + i * 70}ms` }}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  ref={i === 0 ? firstLinkRef : undefined}
                >
                  <span className="menu-idx">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--light menu-book"
            style={{ '--d': '400ms' }}
            onClick={() => setOpen(false)}
          >
            Book a consultation <ArrowUpRight />
          </a>
        </nav>
        <div className="menu-meta on-dark">
          <p><WithPh text={CLINIC.phone} /></p>
          <p><WithPh text={CLINIC.email} /></p>
          <p className="micro"><WithPh text={CLINIC.address} /></p>
        </div>
      </div>
    </header>
  )
}
