import { COMMITMENTS } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { ArrowRight } from './bits'

/* Welcome / about — the clinic's working commitments, as bordered cells. */
export default function Statement() {
  return (
    <section className="section welcome" id="welcome" aria-labelledby="welcome-h">
      <div className="container">
        <div className="welcome-head">
          <div>
            <Reveal as="p" variant="up" className="eyebrow">Welcome</Reveal>
            <Reveal as="h2" variant="up" delay={80} className="h2 balance" id="welcome-h">
              A calmer kind of dental studio — built on three working commitments.
            </Reveal>
          </div>
          <Reveal as="div" variant="up" delay={150}>
            <p className="lede">
              ORA was imagined as the opposite of a rushed clinic. Appointments
              are paced, explanations are plain, and prevention is treated as
              the most valuable treatment of all.
            </p>
            <a href="#dentist" className="link-quiet welcome-more">
              Meet the dentist <ArrowRight />
            </a>
          </Reveal>
        </div>

        <div className="commit-grid" role="list">
          {COMMITMENTS.map((c, i) => (
            <Reveal
              as="div"
              variant="up"
              delay={i * 100}
              className="commit-cell"
              role="listitem"
              key={c.n}
            >
              <span className="commit-n">{c.n}</span>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
