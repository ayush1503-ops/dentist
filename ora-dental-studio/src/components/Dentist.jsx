import { DENTIST } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { ArrowRight, WithPh } from './bits'

export default function Dentist() {
  return (
    <section className="section dentist" id="dentist" aria-labelledby="dentist-h">
      <div className="container dentist-grid">
        <Reveal variant="left" className="dentist-figure">
          <figure>
            <div className="frame dentist-portrait-frame" style={{ aspectRatio: '4 / 5.2' }}>
              <img
                src={DENTIST.portrait.src}
                alt="Demo stock portrait in place of the dentist’s photograph — not the actual practitioner"
                loading="lazy"
                decoding="async"
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
            <figcaption className="img-tab">{DENTIST.portrait.label}</figcaption>
          </figure>
          <p className="micro dentist-figcap">
            Demo stock imagery — replace with the dentist’s own photograph
            before launch.
          </p>
        </Reveal>

        <div className="dentist-body">
          <Reveal as="p" variant="up" className="eyebrow">The dentist</Reveal>

          <Reveal as="h2" variant="up" delay={80} className="h2" id="dentist-h">
            <WithPh text={DENTIST.name} />
          </Reveal>

          <Reveal variant="up" delay={140}>
            <p className="micro dentist-cred">
              <WithPh text={DENTIST.credentials} />
            </p>
          </Reveal>

          <Reveal as="blockquote" variant="up" delay={200} className="dentist-quote">
            “No one should have to brace themselves to sit in my chair.
            If you feel calm, listened to and informed — the dentistry
            tends to take care of itself.”
          </Reveal>

          <Reveal variant="up" delay={260} className="dentist-copy">
            <p>
              That is the philosophy behind every appointment at ORA: plain
              language, steady hands, and treatment plans that respect both
              your health and your circumstances. Prevention is always the
              first agenda item.
            </p>
          </Reveal>

          <Reveal variant="up" delay={300}>
            <h3 className="eyebrow dentist-areas-label">Areas of practice</h3>
            <ul className="dentist-areas">
              {DENTIST.areas.map((a) => (
                <li key={a}><span>{a}</span></li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" delay={340} className="dentist-cta">
            <a href="#contact" className="btn btn--mocha">
              Book with our dentist <ArrowRight />
            </a>
            <p className="micro">
              Profile details are labelled placeholders until verified
              information is supplied — no credentials are claimed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
