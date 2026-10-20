import { chromium } from 'playwright-core'
import fs from 'node:fs'

const OUT = '/home/user/qa'
fs.mkdirSync(OUT, { recursive: true })
const URL = 'http://localhost:5173'

const browser = await chromium.launch()
const errors = []

async function newPage(width, height) {
  const page = await browser.newPage({ viewport: { width, height } })
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${width}px] ` + m.text()) })
  page.on('pageerror', (e) => errors.push(`[${width}px] PAGEERROR ` + e.message))
  return page
}

async function overflow(page) {
  return page.evaluate(() => ({
    inner: window.innerWidth,
    doc: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
  }))
}

/* ---------- Desktop full sweep ---------- */
let page = await newPage(1440, 900)
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1400)
await page.screenshot({ path: `${OUT}/d-home.png` })
// scroll through to trigger reveals, then full-page
await page.evaluate(async () => {
  await new Promise((res) => {
    let y = 0
    const t = setInterval(() => {
      y += 700
      window.scrollTo(0, y)
      if (y >= document.body.scrollHeight) { clearInterval(t); res() }
    }, 90)
  })
})
await page.waitForTimeout(900)
await page.screenshot({ path: `${OUT}/d-full.png`, fullPage: true })
const ovD = await overflow(page)
await page.screenshot({ path: `${OUT}/d-ended.png` })

// FAQ interaction
await page.click('#faq-btn-2')
await page.waitForTimeout(700)
// Treatment prefill -> booking form select value
await page.evaluate(() => document.querySelectorAll('.treat-links a')[4].click())
await page.waitForTimeout(1200)
const prefill = await page.evaluate(() => document.getElementById('category').value)
await page.screenshot({ path: `${OUT}/d-booking-prefill.png` })
// Invalid submit
await page.evaluate(() => {
  document.querySelector('.book-form button[type=submit]').click()
})
await page.waitForTimeout(500)
const errCount = await page.evaluate(() => document.querySelectorAll('.field-error').length)
await page.screenshot({ path: `${OUT}/d-form-errors.png` })
// Valid submit
await page.fill('#name', 'Test Person')
await page.fill('#phone', '+91 98111 22334')
await page.fill('#email', 'test@example.com')
await page.fill('#date', '2026-10-26')
await page.selectOption('#time', 'Morning')
await page.click('.book-form button[type=submit]')
await page.waitForTimeout(1700)
const success = await page.evaluate(() => !!document.getElementById('booking-result'))
await page.screenshot({ path: `${OUT}/d-form-success.png` })
console.log('desktop overflow', ovD, '| prefill:', prefill, '| errors shown:', errCount, '| success:', success)
await page.close()

/* ---------- Laptop 1366 ---------- */
page = await newPage(1366, 800)
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(900)
console.log('1366 overflow', await overflow(page))
await page.close()

/* ---------- Tablet 768 ---------- */
page = await newPage(768, 1024)
await page.goto(URL, { waitUntil: 'networkidle' })
await page.evaluate(async () => {
  await new Promise((res) => { let y = 0; const t = setInterval(() => { y += 800; window.scrollTo(0, y); if (y >= document.body.scrollHeight) { clearInterval(t); res() } }, 80) })
})
await page.waitForTimeout(700)
console.log('768 overflow', await overflow(page))
await page.screenshot({ path: `${OUT}/t-full.png`, fullPage: true })
await page.close()

/* ---------- Mobile 390 + 375 ---------- */
for (const w of [390, 375]) {
  page = await newPage(w, 844)
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.screenshot({ path: `${OUT}/m${w}-hero.png` })
  // menu
  await page.click('.menu-toggle')
  await page.waitForTimeout(900)
  await page.screenshot({ path: `${OUT}/m${w}-menu.png` })
  await page.keyboard.press('Escape')
  await page.waitForTimeout(400)
  await page.evaluate(async () => {
    await new Promise((res) => { let y = 0; const t = setInterval(() => { y += 800; window.scrollTo(0, y); if (y >= document.body.scrollHeight) { clearInterval(t); res() } }, 70) })
  })
  await page.waitForTimeout(600)
  console.log(`${w} overflow`, await overflow(page))
  await page.screenshot({ path: `${OUT}/m${w}-full.png`, fullPage: true })
  await page.close()
}

console.log('CONSOLE ERRORS:', errors.length ? errors : 'none')
await browser.close()
