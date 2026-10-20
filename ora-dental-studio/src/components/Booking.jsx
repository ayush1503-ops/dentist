import { useEffect, useRef, useState } from 'react'
import { CLINIC, TREATMENT_OPTIONS } from '../data/content'
import { Reveal } from '../hooks/useReveal'
import { ArrowRight, DentalIcon, WithPh } from './bits'

const TIME_OPTIONS = ['Morning', 'Midday', 'Afternoon', 'Evening (if available)']

const CATEGORY_OPTIONS = [
  ...TREATMENT_OPTIONS.map((t) => ({ value: t.id, label: t.name })),
  { value: 'not-sure', label: 'Not sure yet — I’d like advice' },
]

const initialValues = {
  name: '', phone: '', email: '', date: '', time: '', category: '', message: '',
}

function validate(values) {
  const errors = {}
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  else if (values.name.trim().length < 2) errors.name = 'That name looks a little short.'

  const digits = values.phone.replace(/[^\d]/g, '')
  if (!values.phone.trim()) errors.phone = 'A phone number helps us confirm your request.'
  else if (!/^[+\d][\d\s().-]*$/.test(values.phone.trim()) || digits.length < 7)
    errors.phone = 'Please enter a valid phone number (7+ digits).'

  if (!values.email.trim()) errors.email = 'We need an email to reply to you.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'

  if (!values.date) errors.date = 'Choose a preferred date.'
  else if (new Date(values.date + 'T00:00:00') < today) errors.date = 'Please pick a date in the future.'

  if (!values.time) errors.time = 'Pick a preferred time of day.'
  if (!values.category) errors.category = 'Choose the closest match — “not sure” is fine.'

  if (values.message.length > 600) errors.message = 'Please keep it under 600 characters.'
  return errors
}

function Field({ id, label, error, children, hint }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint && !error && <p className="field-hint micro">{hint}</p>}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Booking({ category }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [summary, setSummary] = useState(null)
  const dateRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    if (dateRef.current) {
      const t = new Date()
      const iso = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`
      dateRef.current.min = iso
    }
  }, [])

  /* Treatment rows pre-fill the select */
  useEffect(() => {
    if (category) {
      setValues((v) => ({ ...v, category }))
      setErrors((e) => ({ ...e, category: undefined }))
      setTouched((t) => ({ ...t, category: true }))
    }
  }, [category])

  const set = (id) => (e) => {
    const val = e.target.value
    setValues((v) => ({ ...v, [id]: val }))
    if (touched[id]) {
      setErrors((prev) => ({ ...prev, ...validate({ ...values, [id]: val }) }))
    }
  }

  const blur = (id) => () => {
    setTouched((t) => ({ ...t, [id]: true }))
    setErrors((prev) => ({ ...prev, ...validate(values) }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched(Object.keys(initialValues).reduce((a, k) => ({ ...a, [k]: true }), {}))
    if (Object.values(errs).some(Boolean)) {
      const firstKey = Object.keys(errs).find((k) => errs[k])
      formRef.current?.querySelector(`#${firstKey}`)?.focus()
      return
    }
    setStatus('sending')
    /* Frontend demo: no backend is connected. We simulate the request
       lifecycle and then explain clearly that nothing was sent. */
    window.setTimeout(() => {
      const cat = CATEGORY_OPTIONS.find((c) => c.value === values.category)?.label
      setSummary({ ...values, categoryLabel: cat })
      setStatus('sent')
      document.getElementById('booking-result')?.focus()
    }, 1100)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setSummary(null)
    setStatus('idle')
  }

  const inputProps = (id) => ({
    id,
    value: values[id],
    onChange: set(id),
    onBlur: blur(id),
    'aria-invalid': errors[id] ? true : undefined,
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
  })

  return (
    <section className="section booking" id="contact" aria-labelledby="contact-h">
      <div className="container booking-grid">
        {/* ---- Contact panel ---- */}
        <div className="book-info on-dark">
          <Reveal as="p" variant="up" className="eyebrow eyebrow--light">Visit us</Reveal>
          <Reveal as="h2" variant="up" delay={70} className="h2" id="contact-h">
            Come and<br /><em>say hello.</em>
          </Reveal>

          <Reveal variant="up" delay={140} className="book-info-list">
            <div className="book-info-row">
              <p className="micro book-info-label">Address</p>
              <p className="serif"><WithPh text={CLINIC.address} /></p>
              <p className="micro book-info-note">Sample address shown — a directions link and map will be added here with the real address before launch.</p>
            </div>
            <div className="book-info-row">
              <p className="micro book-info-label">Phone</p>
              <p className="serif"><WithPh text={CLINIC.phone} /></p>
            </div>
            <div className="book-info-row">
              <p className="micro book-info-label">Email</p>
              <p className="serif"><WithPh text={CLINIC.email} /></p>
            </div>
            <div className="book-info-row">
              <p className="micro book-info-label">Opening hours</p>
              <dl className="book-hours">
                {CLINIC.hours.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd><WithPh text={h.time} /></dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200} className="book-urgent">
            <DentalIcon name="cross" size={15} />
            <p className="micro">
              <strong>Urgent dental problem?</strong> Call early in the day and
              describe your symptoms — we hold time for emergencies.
            </p>
          </Reveal>
        </div>

        {/* ---- Form / result ---- */}
        <div className="book-form-wrap">
          {status === 'sent' && summary ? (
            <div
              className="book-result"
              id="booking-result"
              tabIndex={-1}
              role="status"
              aria-live="polite"
            >
              <span className="book-result-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4.5 12.5 10 18 19.5 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="serif">Request captured — nothing is booked yet.</h3>
              <p>
                This website is a <strong>frontend demonstration</strong>: no
                appointment system is connected, so your request was not sent
                anywhere and no appointment exists. Once the clinic connects its
                scheduling system, this form will deliver requests directly to
                the front desk for personal confirmation.
              </p>
              <dl className="book-summary">
                <div><dt>Name</dt><dd>{summary.name}</dd></div>
                <div><dt>Phone</dt><dd>{summary.phone}</dd></div>
                <div><dt>Email</dt><dd>{summary.email}</dd></div>
                <div><dt>Preferred</dt><dd>{summary.date} · {summary.time}</dd></div>
                <div><dt>Regarding</dt><dd>{summary.categoryLabel}</dd></div>
              </dl>
              <button className="btn btn--ghost" onClick={reset}>
                Make another request
              </button>
            </div>
          ) : (
            <form className="book-form" onSubmit={onSubmit} noValidate ref={formRef}>
              <div className="book-form-head">
                <h3 className="serif">Request an appointment</h3>
                <p className="micro">
                  A request, not a booking — the clinic confirms every appointment
                  personally. Please don’t include sensitive medical details.
                </p>
              </div>

              <div className="fields-2">
                <Field id="name" label="Full name" error={errors.name}>
                  <input type="text" autoComplete="name" placeholder="e.g. Priya Sharma" {...inputProps('name')} />
                </Field>
                <Field id="phone" label="Phone number" error={errors.phone}>
                  <input type="tel" autoComplete="tel" placeholder="e.g. +91 98•• ••• •••" {...inputProps('phone')} />
                </Field>
              </div>

              <Field id="email" label="Email address" error={errors.email}>
                <input type="email" autoComplete="email" placeholder="you@example.com" {...inputProps('email')} />
              </Field>

              <div className="fields-2">
                <Field id="date" label="Preferred date" error={errors.date}>
                  <input type="date" ref={dateRef} {...inputProps('date')} />
                </Field>
                <Field id="time" label="Preferred time" error={errors.time}>
                  <select {...inputProps('time')}>
                    <option value="">Select…</option>
                    {TIME_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <Field id="category" label="Treatment category" error={errors.category}>
                <select {...inputProps('category')}>
                  <option value="">Select the closest match…</option>
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </Field>

              <Field
                id="message"
                label="Anything we should know? (optional)"
                error={errors.message}
                hint="No medical records needed — a sentence is plenty."
              >
                <textarea rows="4" maxLength="700" placeholder="e.g. I’m a nervous patient; I’d prefer a quiet morning slot." {...inputProps('message')} />
              </Field>

              <div className="book-form-foot">
                <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>Sending<span className="dots" aria-hidden="true"><i /><i /><i /></span></>
                  ) : (
                    <>Send request <ArrowRight /></>
                  )}
                </button>
                <p className="micro">
                  Your details are used only to respond to this request — this demo
                  stores nothing.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
