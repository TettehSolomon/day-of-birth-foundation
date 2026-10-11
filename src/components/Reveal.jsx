import { useEffect, useRef, useState } from 'react'

// Starting (hidden) transforms per direction.
// Horizontal directions fall back to slide-up-from-bottom on mobile,
// and only slide in from the side on md+ screens.
const HIDDEN = {
  up: 'opacity-0 translate-y-10',
  down: 'opacity-0 -translate-y-10',
  left: 'opacity-0 translate-y-10 md:translate-y-0 md:-translate-x-10',
  right: 'opacity-0 translate-y-10 md:translate-y-0 md:translate-x-10',
}

const VISIBLE = 'opacity-100 translate-x-0 translate-y-0'

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  className = '',
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Respect users who prefer reduced motion: show immediately, no animation.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
      className={`transition-all ease-out will-change-transform motion-reduce:transition-none ${
        visible ? VISIBLE : HIDDEN[direction]
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
