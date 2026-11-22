import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ResumeButton from './ResumeButton.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import SocialLinks from './SocialLinks.jsx'
import { navLinks, siteConfig } from '../data/siteConfig.js'
import { useActiveSection, useScrolled } from '../hooks/useActiveSection.js'

// Services has no nav link, but is tracked so no link stays highlighted while it is in view.
const sectionIds = [...navLinks.map((link) => link.id).slice(0, -1), 'services', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled()
  const listRef = useRef(null)

  // Slide the highlight pill under the active link (desktop). Positions are
  // written as CSS variables, so no extra React state or re-render is needed.
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return undefined
    const place = () => {
      const link = list.querySelector('.nav__link.is-active')
      if (!link) {
        list.style.setProperty('--pill-opacity', '0')
        return
      }
      list.style.setProperty('--pill-x', `${link.offsetLeft}px`)
      list.style.setProperty('--pill-w', `${link.offsetWidth}px`)
      list.style.setProperty('--pill-opacity', '1')
    }
    place()
    document.fonts?.ready.then(place)
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active])

  // Close the mobile menu with Escape, and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.classList.add('menu-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  // Close it if the window grows to desktop width.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 961px)')
    const onChange = (event) => event.matches && setOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`.trim()}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={close} aria-label={`${siteConfig.name} — back to top`}>
          <span className="nav__monogram" aria-hidden="true">
            SS
          </span>
          <span className="nav__name">{siteConfig.name}</span>
        </a>

        <nav className="nav__menu" id="primary-menu" aria-label="Primary">
          <ul className="nav__links" ref={listRef}>
            {navLinks.map((link, index) => (
              <li key={link.id} style={{ '--i': index }}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link ${active === link.id ? 'is-active' : ''}`.trim()}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={close}
                >
                  <span className="nav__link-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton className="btn--sm nav__resume" onClick={close} />
          <div className="nav__menu-footer">
            <p>Open to remote roles &amp; freelance projects</p>
            <SocialLinks withEmail />
          </div>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav__toggle-lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
      <ScrollProgress />
    </header>
  )
}
