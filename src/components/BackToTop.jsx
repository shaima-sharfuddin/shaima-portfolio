import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

/**
 * Floating "back to top" button. It appears once the reader is past the hero
 * and steps aside at the very bottom, where the footer has its own link.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const root = document.documentElement
      const fromBottom = root.scrollHeight - (window.scrollY + window.innerHeight)
      setVisible(window.scrollY > 900 && fromBottom > 260)
    }
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <a
      href="#home"
      className={`to-top ${visible ? 'is-visible' : ''}`.trim()}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      <Icon name="arrowUp" size={18} />
    </a>
  )
}
