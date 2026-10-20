import { TREATMENT_CATEGORIES } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { ArrowRight, ArrowUpRight, DentalIcon } from './bits'

export default function Treatments({ onPick }) {
  return (
    <section id="treatments" aria-labelledby="treatments-h" className="treatments">
      <div className="container treatments-intro">
        <Reveal as="p" variant="up" className="eyebrow">Treatments</Reveal>
        <Reveal as="h2" variant="up" delay={80} className="h2 balance" id="treatments-h">
          Every treatment begins with a conversation — never a sales pitch.
        </Reveal>
      </div>

      {TREATMENT_CATEGORIES.map((cat, i) => (
        <div className={`container treat-cat${i % 2 ? ' treat-cat--flip' : ''}`} key={cat.id}>
          <Reveal variant="mask" className="treat-media">
            <figure>
              <div className="frame" style={{ aspectRatio: '4 / 3' }}>
                <img src={cat.image} alt={cat.imgAlt} loading="lazy" decoding="async" />
              </div>
              <figcaption className="img-tab">{cat.title}</figcaption>
              <span className="treat-cat-n" aria-hidden="true">0{i + 1}</span>
            </figure>
          </Reveal>

          <div className="treat-panel">
            <Reveal variant="up">
              <h3 className="h3">{cat.title}</h3>
              <p className="treat-blurb">{cat.blurb}</p>
            </Reveal>
            <Reveal variant="up" delay={90}>
              <ul className="treat-links">
                {cat.items.map((item) => (
                  <li key={item.value}>
                    <a
                      href="#contact"
                      onClick={() => onPick?.(item.value)}
                      aria-label={`Book a consultation about ${item.name}`}
                    >
                      <span className="treat-icon"><DentalIcon name={item.icon} /></span>
                      <span className="treat-link-main">
                        <span className="treat-link-name">{item.name}</span>
                        <span className="micro">{item.note}</span>
                      </span>
                      <ArrowUpRight className="treat-link-arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      ))}

      <div className="container">
        <Reveal variant="up" className="treat-disclaimer">
          <DentalIcon name="shield" size={22} />
          <p>
            <strong>Fixed, written estimates before any treatment.</strong>
            Descriptions on this page are general information, not medical
            advice — treatment suitability is always confirmed after a clinical
            assessment, and nothing proceeds without your approval.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
