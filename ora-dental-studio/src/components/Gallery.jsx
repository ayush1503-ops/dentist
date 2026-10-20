import { GALLERY } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { DentalIcon } from './bits'

/* Staggered editorial columns; the placeholder team tile stays honest. */
export default function Gallery() {
  const cols = [
    [GALLERY[0], GALLERY[2]],
    [GALLERY[1], GALLERY[3]],
    [GALLERY[4], GALLERY[5]],
  ]

  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-h">
      <div className="container">
        <div className="gallery-head">
          <Reveal as="p" variant="up" className="eyebrow">The studio</Reveal>
          <Reveal as="h2" variant="up" delay={80} className="h2 balance" id="gallery-h">
            Designed to lower your pulse, not raise it.
          </Reveal>
          <Reveal as="p" variant="up" delay={150} className="lede">
            Warm materials, soft light and quiet rooms — every detail of the
            space exists to make dental care feel less clinical, not more.
          </Reveal>
        </div>

        <div className="gallery-cols">
          {cols.map((col, ci) => (
            <div className="gallery-col" key={ci}>
              {col.map((item, ri) =>
                item?.ph ? (
                  <Reveal variant="mask" delay={ci * 90 + ri * 60} key={item.ph} className="gallery-item">
                    <figure className="gallery-ph" style={{ aspectRatio: item.ratio }} role="img"
                      aria-label={`Placeholder tile — ${item.label}`}>
                      <DentalIcon name={item.icon} size={26} />
                      <figcaption className="micro">{item.label.split(' — ')[0]} —<br />photo to be added</figcaption>
                    </figure>
                  </Reveal>
                ) : item ? (
                  <Reveal variant="mask" delay={ci * 90 + ri * 60} key={item.label} className="gallery-item">
                    <figure>
                      <div className="frame" style={{ aspectRatio: item.ratio }}>
                        <img
                          src={item.src}
                          alt={`Demo imagery illustrating a ${item.label.toLowerCase()} of a dental studio`}
                          loading="lazy"
                          decoding="async"
                          style={{ objectPosition: item.pos }}
                        />
                      </div>
                      <figcaption className="img-tab">{item.label}</figcaption>
                    </figure>
                  </Reveal>
                ) : (
                  <Reveal variant="mask" delay={ci * 90 + ri * 60} key="team-ph" className="gallery-item">
                    <figure className="gallery-ph" style={{ aspectRatio: '4 / 3.4' }} role="img"
                      aria-label="Placeholder tile — a team photograph will be added">
                      <DentalIcon name="smile" size={26} />
                      <figcaption className="micro">Our team —<br />photo to be added</figcaption>
                    </figure>
                  </Reveal>
                )
              )}
            </div>
          ))}
        </div>

        <Reveal variant="up" className="gallery-note micro">
          Imagery in this section is licensed illustrative demo photography —
          it is not presented as these premises. Replace with photographs of
          the clinic before launch.
        </Reveal>
      </div>
    </section>
  )
}
