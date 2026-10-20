import { STEPS } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { ArrowRight } from './bits'

export default function Experience() {
  return (
    <section className="section exp on-dark" id="experience" aria-labelledby="exp-h">
      <div className="container">
        <div className="exp-head">
          <Reveal as="p" variant="up" className="eyebrow eyebrow--light">The patient journey</Reveal>
          <Reveal as="h2" variant="up" delay={80} className="h2 balance exp-title" id="exp-h">
            No surprises. Just a clear, calm process.
          </Reveal>
          <Reveal as="p" variant="up" delay={150} className="lede exp-lede">
            Four steps, the same for everyone — whether it is a first check-up
            or the start of a longer treatment plan.
          </Reveal>
        </div>

        <ol className="exp-steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" variant="up" delay={i * 100} key={s.title} className="exp-step">
              <span className="exp-n" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal variant="up" delay={120} className="exp-foot">
          <a href="#contact" className="link-quiet link-quiet--light">
            Start with step one — book a consultation <ArrowRight />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
