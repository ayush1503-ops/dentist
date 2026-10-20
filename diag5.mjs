import { chromium } from 'playwright-core'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
await p.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' })
const probe = await p.evaluate(async () => {
  const el = document.querySelector('.gallery-item')
  const fired = { io: false, intersecting: null }
  const io = new IntersectionObserver((es) => { fired.io = true; fired.intersecting = es[0].isIntersecting }, { threshold: 0.16, rootMargin: '0px 0px -7% 0px' })
  io.observe(el)
  window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 200)
  await new Promise((r) => setTimeout(r, 800))
  return {
    fired,
    rectTopInView: Math.round(el.getBoundingClientRect().top),
    vh: window.innerHeight,
    reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
    cls: el.className,
    imgSrcSet: !!el.querySelector('img')?.src,
    imgStyleOpacity: getComputedStyle(el).opacity,
  }
})
console.log(JSON.stringify(probe, null, 1))
await b.close()
