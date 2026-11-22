import { useEffect, useRef } from 'react'

/** Thin bar under the navigation showing how far down the page the reader is. */
export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const root = document.documentElement
      const max = root.scrollHeight - root.clientHeight
      const progress = max > 0 ? Math.min(root.scrollTop / max, 1) : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      <span className="progress__bar" ref={barRef} />
    </div>
  )
}
