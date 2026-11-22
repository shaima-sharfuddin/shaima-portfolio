import Icon from './Icon.jsx'
import { navLinks, siteConfig } from '../data/siteConfig.js'

export default function Footer() {
  const connect = [
    { label: 'Email', href: `mailto:${siteConfig.email}` },
    { label: 'GitHub', href: siteConfig.githubUrl },
    { label: 'LinkedIn', href: siteConfig.linkedinUrl },
  ].filter((link) => link.href)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="nav__brand" href="#home" aria-label={`${siteConfig.name} — back to top`}>
              <span className="nav__monogram" aria-hidden="true">
                SS
              </span>
              <span className="footer__name">{siteConfig.name}</span>
            </a>
            <p className="footer__role">{siteConfig.role}</p>
            <p className="footer__status">
              <span className="hero__dot" aria-hidden="true" />
              Open to remote roles &amp; freelance projects
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__heading">Navigate</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a className="footer__link" href={`#${link.id}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Connect</h2>
            <ul>
              {connect.map((link) => {
                const external = link.href.startsWith('http')
                return (
                  <li key={link.label}>
                    <a
                      className="footer__link"
                      href={link.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                      {external && (
                        <>
                          <Icon name="arrowUpRight" size={13} />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with React &amp; Vite.
          </p>
          <a href="#home" className="footer__top">
            Back to top
            <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
