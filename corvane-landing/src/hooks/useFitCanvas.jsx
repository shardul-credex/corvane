import { useEffect, useRef, useState } from 'react'

/**
 * Scales a fixed-size 616x499 canvas down to fit its parent width.
 * Used by the hero product mock so the pixel-accurate artwork holds
 * its proportions from 1500px down to 360px viewports.
 */
export function useFitCanvas(designWidth = 616) {
  const outerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const node = outerRef.current
    if (!node) return

    const update = () => {
      const width = node.getBoundingClientRect().width
      setScale(width > 0 ? Math.min(1, width / designWidth) : 1)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(node)
    return () => observer.disconnect()
  }, [designWidth])

  return { outerRef, scale }
}