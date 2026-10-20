import { BRAND, CLINIC, NAV, TREATMENT_OPTIONS } from '../data/content'
import { Logo, WithPh } from './bits'

export default function Footer() {
  return (
    <footer className="footer on-dark" aria-labelledby="footer-h">
      <div className="container">
        <div className="footer-cta">
          <p className="footer-line" id="footer-h">
            Ready when <span>you</span> are.
          </p>
          <a href="#contact" className="btn btn--light">
            Book a consultation
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p className="footer-tag">{BRAND.tagline}</p>
            <p className="micro">
              Demonstration website — all names, contact details, credentials
              and imagery shown are samples to be replaced by the clinic
              before launch.
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <p className="footer-col-head micro">Explore</p>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
              <li><a href="#gallery">The studio</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </nav>

          <nav className="footer-col" aria-label="Treatments">
            <p className="footer-col-head micro">Treatments</p>
            <ul>
              {TREATMENT_OPTIONS.slice(0, 5).map((t) => (
                <li key={t.id}><a href="#treatments">{t.name}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <p className="footer-col-head micro">Contact</p>
            <ul className="footer-contact">
              <li><WithPh text={CLINIC.address} /></li>
              <li><WithPh text={CLINIC.phone} /></li>
              <li><WithPh text={CLINIC.email} /></li>
            </ul>
            <p className="footer-col-head micro footer-hours-head">Opening hours</p>
            <dl className="footer-hours">
              {CLINIC.hours.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd><WithPh text={h.time} /></dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="footer-bar">
          <p>© {new Date().getFullYear()} {BRAND.name}</p>
          <p className="micro">
            Privacy: no personal or medical data is collected by this demo.
          </p>
          <a href="#top" className="footer-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
