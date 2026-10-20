import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Reveal — wrap any block to animate it in when it enters the viewport. */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (prefersReduced()) { setInView(true); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -7% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const cls = `rv rv-${variant}${inView ? ' in' : ''}${className ? ' ' + className : ''}`
  const style = { '--d': `${delay}ms` }

  /* Mask variant: the clip is applied to an inner wrapper so the observed
     element keeps a real intersection area (IO honours clip-path). */
  if (variant === 'mask') {
    return (
      <Tag ref={ref} className={cls} style={style} {...rest}>
        <div className="rv-mask-inner">{children}</div>
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  )
}

/* True once the page has scrolled past `offset` px. */
export function useScrolled(offset = 10) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/* Adds a class to <body> once (used for the hero load choreography). */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if (prefersReduced()) { setMounted(true); return }
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)))
    return () => cancelAnimationFrame(id)
  }, [])
  return mounted
}
