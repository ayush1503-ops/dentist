import { chromium } from 'playwright-core'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 375, height: 844 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
const bad = await p.evaluate(() => {
  const els = [...document.querySelectorAll('*')]
  const w = window.innerWidth
  return els.filter((e) => {
    const r = e.getBoundingClientRect()
    return (r.right > w + 1 || r.left < -1) && r.width > 4
  }).slice(0, 14).map((e) => {
    const r = e.getBoundingClientRect()
    return `${e.tagName}.${String(e.className).slice(0, 42)} right=${Math.round(r.right)} w=${Math.round(r.width)}`
  })
})
console.log(bad.join('\n'))
await b.close()
