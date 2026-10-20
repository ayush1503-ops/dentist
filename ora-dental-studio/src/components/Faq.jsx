import { useState } from 'react'
import { FAQS, CLINIC } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { WithPh } from './bits'

function FaqItem({ q, a, open, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const btnId = `faq-btn-${index}`
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <h3 className="faq-q">
        <button
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="serif">{q}</span>
          <span className="faq-icon" aria-hidden="true"><i /><i /></span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-panel"
      >
        <div className="faq-panel-inner">
          <p>{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-h">
      <div className="container faq-grid">
        <div className="faq-side">
          <Reveal as="p" variant="up" className="eyebrow">Good to know</Reveal>
          <Reveal as="h2" variant="up" delay={80} className="h2 balance" id="faq-h">
            Questions,<br />answered <em>honestly.</em>
          </Reveal>
          <Reveal as="p" variant="up" delay={150} className="lede">
            The things patients ask us most. For anything personal, the
            honest answer is: come in and let us look.
          </Reveal>
          <Reveal variant="up" delay={210} className="faq-call">
            <p className="micro">Prefer to talk it through?</p>
            <p className="serif faq-call-num"><WithPh text={CLINIC.phone} /></p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={120} className="faq-list">
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
