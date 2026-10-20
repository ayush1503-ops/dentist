import { NAV, BRAND } from '../data/content'
import { ArrowRight, ArrowUpRight } from './bits'

export default function Hero({ mounted }) {
  return (
    <section className={`hero${mounted ? ' mounted' : ''}`} id="top" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow rise" style={{ '--d': '120ms' }}>
              Welcome to {BRAND.name}
            </p>

            <h1 className="display hero-title" aria-label="Excellent dentistry, designed around you.">
              <span className="hl" style={{ '--d': '200ms' }}><span>Excellent dentistry,</span></span>
              <span className="hl hero-hl-accent" style={{ '--d': '300ms' }}><span>designed</span></span>
              <span className="hl" style={{ '--d': '400ms' }}><span>around you.</span></span>
            </h1>

            <p className="lede rise" style={{ '--d': '520ms' }}>
              Thoughtful care, modern techniques and an unhurried, personal
              experience — with the costs always clear before we begin.
            </p>

            <div className="hero-cta rise" style={{ '--d': '620ms' }}>
              <a href="#contact" className="btn btn--primary">
                Book a consultation <ArrowRight />
              </a>
              <a href="#treatments" className="link-quiet">
                Explore treatments <ArrowRight />
              </a>
            </div>

            <ul className="hero-trust rise" style={{ '--d': '720ms' }} aria-label="What to expect">
              <li>New patients welcome</li>
              <li>Written estimates first</li>
              <li>Calm, unhurried visits</li>
            </ul>
          </div>

          <figure className="hero-media">
            <div className="frame hero-frame-a rise" style={{ '--d': '420ms' }}>
              <img
                src="/images/treatment-wing.jpg"
                alt="Bright modern treatment rooms — illustrative demo photography"
                width="600" height="400"
                fetchPriority="high" decoding="async"
              />
              <figcaption className="img-tab">The studio</figcaption>
            </div>
            <div className="frame hero-frame-b rise" style={{ '--d': '560ms' }}>
              <img
                src="/images/hero-portrait.jpg"
                alt="A patient smiling in soft window light — illustrative demo photography"
                width="1125" height="750"
                fetchPriority="high" decoding="async"
              />
            </div>
            <div className="frame hero-frame-c rise" style={{ '--d': '700ms' }}>
              <img
                src="/images/smile-detail.jpg"
                alt="Close detail of a healthy smile — illustrative demo photography"
                width="500" height="334"
                loading="lazy" decoding="async"
              />
              <figcaption className="img-tab">Your smile, kept</figcaption>
            </div>
            <figcaption className="micro hero-cap rise" style={{ '--d': '800ms' }}>
              Illustrative demo photography — never pictures of real patients.
            </figcaption>
          </figure>
        </div>

        <nav className="hero-tabs rise" style={{ '--d': '860ms' }} aria-label="On this page">
          {NAV.map((n, i) => (
            <a key={n.href} href={n.href}>
              <span className="hero-tab-n">0{i + 1}</span>
              <span>{n.label}</span>
              <ArrowUpRight className="hero-tab-arrow" />
            </a>
          ))}
          <a href="#contact" className="hero-tab-cta">
            <span className="hero-tab-n">0{NAV.length + 1}</span>
            <span>Book online</span>
            <ArrowUpRight className="hero-tab-arrow" />
          </a>
        </nav>
      </div>
    </section>
  )
}
