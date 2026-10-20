import { chromium } from 'playwright-core'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 375, height: 844 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
const out = await p.evaluate(() => {
  const root = document.querySelector('#dentist')
  const els = [root, ...root.querySelectorAll('*')]
  return els.map((e) => {
    const r = e.getBoundingClientRect()
    return { tag: e.tagName, cls: String(e.className).slice(0, 50), right: Math.round(r.right), left: Math.round(r.left), w: Math.round(r.width) }
  }).filter((x) => x.right > 375 || x.left < 0).sort((a, z) => z.right - a.right).slice(0, 10)
})
console.log(JSON.stringify(out, null, 1))
await b.close()
