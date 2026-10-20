import { chromium } from 'playwright-core'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 375, height: 844 } })
await p.goto('http://localhost:5173', { waitUntil: 'networkidle' })
const sections = ['.hero', '.statement', '#treatments', '#dentist', '#experience', '#gallery', '#faq', '#contact', '.footer', '.site-head']
for (const s of sections) {
  const r = await p.evaluate((sel) => {
    const el = document.querySelector(sel)
    if (!el) return null
    const prev = el.style.display
    el.style.display = 'none'
    const w = document.documentElement.scrollWidth
    el.style.display = prev
    return w
  }, s)
  console.log(s, '→ page width when hidden:', r)
}
await b.close()
