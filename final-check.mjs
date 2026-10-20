import { chromium } from 'playwright-core'
const b = await chromium.launch()

/* 1. Reduced motion — all content must be visible without scrolling chores */
let p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
await p.waitForTimeout(400)
const hiddenCount = await p.evaluate(() => {
  const bad = []
  for (const el of document.querySelectorAll('.rv, .rise, .hl > span')) {
    const cs = getComputedStyle(el)
    if (parseFloat(cs.opacity) < 0.99 || cs.clipPath.includes('100%')) bad.push(el.className.toString().slice(0, 60))
  }
  return bad
})
console.log('reduced-motion hidden elements:', hiddenCount.length ? hiddenCount : 'none ✓')
await p.close()

/* 2. Tablet hero + reflow check */
p = await b.newPage({ viewport: { width: 768, height: 1024 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
await p.waitForTimeout(900)
await p.screenshot({ path: 'qa/final-768-hero.png' })
await p.close()

/* 3. Dentist panel + footer bottom re-shot */
p = await b.newPage({ viewport: { width: 1440, height: 940 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
await p.evaluate(() => document.querySelector('#dentist').scrollIntoView({ behavior: 'instant' }))
await p.waitForTimeout(1300)
await p.screenshot({ path: 'qa/final-dentist.png' })
await p.evaluate(() => document.querySelector('.footer-bar').scrollIntoView({ behavior: 'instant' }))
await p.waitForTimeout(900)
await p.screenshot({ path: 'qa/final-footerbar.png' })
await p.close()
await b.close()
