import { chromium } from 'playwright-core'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 940 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
const secs = [['#treatments', 'treatments'], ['#dentist', 'dentist'], ['#experience', 'experience'], ['#gallery', 'gallery'], ['#faq', 'faq'], ['#contact', 'contact'], ['.footer', 'footer'], ['.welcome', 'welcome']]
for (const [s, name] of secs) {
  await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'start', behavior: 'instant' }), s)
  await p.waitForTimeout(1400)
  await p.screenshot({ path: `/home/user/qa/sec-${name}.png` })
}
await b.close()
