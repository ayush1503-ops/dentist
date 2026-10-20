/* ============================================================
   EDIT SITE CONTENT HERE
   ------------------------------------------------------------
   All names, contact details, credentials and imagery below are
   DEMO SAMPLES so the design can be reviewed filled. Replace every
   value with the clinic's real, verified details before launch.
   Never invent qualifications, awards, review scores, or patient
   statistics.
   ============================================================ */

export const BRAND = {
  name: 'ORA Dental Studio',
  wordmark: 'ORA',
  sub: 'Dental Studio',
  tagline: 'A healthier smile. A more confident you.',
}

export const CLINIC = {
  address: 'Studio 4, 2nd Floor, Green Avenue Market, New Delhi 110016',
  phone: '+91 98100 12345',
  email: 'hello@oradental.in',
  hours: [
    { days: 'Monday – Friday', time: '10:00 – 19:30' },
    { days: 'Saturday', time: '10:00 – 14:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
}

export const DENTIST = {
  name: 'Dr. Priya Kapoor',
  credentials: 'Demo credentials — replace with the dentist’s real, verified qualifications before launch',
  portrait: { src: '/images/dentist-portrait.jpg', label: 'Portrait — demo image' },
  areas: [
    'Preventive & family dentistry',
    'Restorative care',
    'Cosmetic treatment planning',
    'Care for anxious patients',
  ],
}

export const NAV = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Welcome', href: '#welcome' },
  { label: 'The dentist', href: '#dentist' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

/* Flat option list (booking select + anchors) */
export const TREATMENT_OPTIONS = [
  { id: 'general', name: 'Check-ups & X-rays' },
  { id: 'cleaning', name: 'Professional cleaning' },
  { id: 'emergency', name: 'Emergency dental care' },
  { id: 'cosmetic', name: 'Cosmetic dentistry' },
  { id: 'whitening', name: 'Teeth whitening' },
  { id: 'orthodontics', name: 'Orthodontic consultations' },
  { id: 'implants', name: 'Dental implant consultations' },
]

export const TREATMENT_CATEGORIES = [
  {
    id: 'general-care',
    title: 'General dentistry',
    blurb:
      'The foundation of everything we do — unhurried examinations, X-rays only when clinically indicated, and practical advice that keeps small issues small.',
    image: '/images/treatment-wing.jpg',
    imgAlt: 'Bright modern dental treatment area — demo imagery',
    items: [
      { icon: 'tooth', value: 'general', name: 'Check-ups & X-rays', note: 'Recommended intervals, set individually' },
      { icon: 'drop', value: 'cleaning', name: 'Professional cleaning', note: 'Gentle scaling tailored to gum health' },
      { icon: 'cross', value: 'emergency', name: 'Emergency dental care', note: 'Weekday time held for urgent problems' },
    ],
  },
  {
    id: 'cosmetic-care',
    title: 'Cosmetic dentistry',
    blurb:
      'Veneers, bonding, whitening and smile design — planned conservatively around your face, your expectations and your budget. Suitability is always assessed clinically first.',
    image: '/images/smile-detail.jpg',
    imgAlt: 'Detail of a healthy smile — demo imagery',
    items: [
      { icon: 'sparkle', value: 'cosmetic', name: 'Cosmetic consultations', note: 'Design before any commitment' },
      { icon: 'sun', value: 'whitening', name: 'Teeth whitening', note: 'Dentist-supervised, results vary' },
    ],
  },
  {
    id: 'consultations',
    title: 'Specialist consultations',
    blurb:
      'A careful, honest first step before bigger decisions — alignment options, missing-tooth replacement and referrals to trusted specialists when that serves you better.',
    image: '/images/lounge.jpg',
    imgAlt: 'Calm clinic lounge with plants — demo imagery',
    items: [
      { icon: 'braces', value: 'orthodontics', name: 'Orthodontic consultations', note: 'Including clear-aligner options' },
      { icon: 'implant', value: 'implants', name: 'Implant consultations', note: 'Evaluation & imaging before decisions' },
    ],
  },
]

export const COMMITMENTS = [
  { n: '01', t: 'Prevention before intervention', d: 'Recall plans built around your actual risk, not a template.' },
  { n: '02', t: 'Consent before treatment', d: 'Written estimates and options first. Nothing starts without your approval.' },
  { n: '03', t: 'Comfort as a standard', d: 'Unhurried appointments, plain-language explanations, breaks whenever you need.' },
]

export const STEPS = [
  {
    title: 'Book an appointment',
    copy: 'Request a time online or by phone. A real person confirms your booking — no automated guesswork.',
  },
  {
    title: 'Discuss your needs',
    copy: 'First visits begin with an unhurried conversation about your concerns, your history, and what you want to change — or protect.',
  },
  {
    title: 'Receive your plan',
    copy: 'You get an individual treatment plan with options, sequencing and honest advice. Ask anything; we would rather explain twice.',
  },
  {
    title: 'Approve before we begin',
    copy: 'You see the next steps and full costs in writing first. Nothing starts without your informed consent.',
  },
]

export const FAQS = [
  {
    q: 'How do I book an appointment?',
    a: 'Use the request form below or call the clinic during opening hours. You tell us your preferred day, time and reason for visiting, and a member of the team will personally confirm your appointment.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Please bring a list of any medicines you take, details of recent dental treatment or X-rays if you have them, and your insurance information if applicable. Arriving a few minutes early gives you time to complete a short medical-history form without rushing.',
  },
  {
    q: 'How can I ask about treatment costs?',
    a: 'Just ask — at any point. Before any treatment begins you receive a written estimate describing the work and its cost, and you are welcome to take it away and think it over. Nothing proceeds without your approval.',
  },
  {
    q: 'What if I feel anxious about dental visits?',
    a: 'Tell us when you book — it genuinely changes how we plan your visit. We keep appointments unhurried, explain each step before it happens, agree a signal for breaks, and never rush a nervous patient.',
  },
  {
    q: 'How do I contact the clinic about an urgent dental problem?',
    a: 'Call us as early in the day as you can and describe your symptoms — time is held each weekday for urgent problems. For severe symptoms such as uncontrolled bleeding or swelling that affects your breathing or swallowing, seek emergency medical care first.',
  },
]

export const GALLERY = [
  { src: '/images/reception.jpg', label: 'Reception', ratio: '4 / 3', pos: '50% 55%' },
  { src: '/images/instruments-neutral.jpg', label: 'Instrumentation', ratio: '1 / 1', pos: '50% 50%' },
  { src: '/images/lounge.jpg', label: 'Patient lounge', ratio: '4 / 4.4', pos: '50% 60%' },
  { src: '/images/material-detail.jpg', label: 'Material detail', ratio: '3 / 3.4', pos: '50% 50%' },
  { src: '/images/treatment-wing.jpg', label: 'Treatment wing', ratio: '4 / 3', pos: '50% 45%' },
  { src: '/images/team.jpg', label: 'Team photo', ratio: '4 / 3.4', pos: '50% 32%' },
]
