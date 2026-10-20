import { chromium } from 'playwright-core'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
// scroll to gallery
await p.evaluate(() => document.querySelector('#gallery').scrollIntoView())
await p.waitForTimeout(1600)
const info = await p.evaluate(() => {
  return [...document.querySelectorAll('.gallery-item')].map((el) => {
    const cs = getComputedStyle(el)
    const img = el.querySelector('img')
    const frame = el.querySelector('.frame')
    const fr = frame ? frame.getBoundingClientRect() : null
    return {
      cls: el.className,
      clip: cs.clipPath,
      rectH: Math.round(el.getBoundingClientRect().height),
      frameH: fr ? Math.round(fr.height) : null,
      imgLoaded: img ? img.naturalWidth : 'n/a',
    }
  })
})
console.log(JSON.stringify(info, null, 1))
await b.close()
