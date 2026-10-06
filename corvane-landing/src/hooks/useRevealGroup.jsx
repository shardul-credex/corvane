import { useEffect, useRef } from 'react'

/**
 * Returns `reveal(shown, variant, delay)` — an event handler that reveals
 * all `[data-reveal]` nodes inside the container once it scrolls into view.
 */
export function useRevealGroup() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const targets = node.querySelectorAll('[data-reveal]')
    const show = () => {
      targets.forEach((el) => {
        el.style.setProperty(
          '--reveal-delay',
          el.dataset.revealDelay ? `${el.dataset.revealDelay}ms` : '0ms',
        )
        el.classList.add('is-revealed')
      })
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}