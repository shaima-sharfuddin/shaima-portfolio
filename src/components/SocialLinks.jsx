import Icon from './Icon.jsx'
import { siteConfig } from '../data/siteConfig.js'

/** GitHub + LinkedIn (+ optional email) icon links. LinkedIn hides until its URL is set. */
export default function SocialLinks({ withEmail = false, className = '' }) {
  const links = [
    { name: 'github', label: 'GitHub', href: siteConfig.githubUrl },
    { name: 'linkedin', label: 'LinkedIn', href: siteConfig.linkedinUrl },
    withEmail && { name: 'mail', label: 'Email', href: `mailto:${siteConfig.email}` },
  ].filter((link) => link && link.href)

  return (
    <ul className={`social ${className}`.trim()}>
      {links.map((link) => {
        const external = link.href.startsWith('http')
        return (
          <li key={link.name}>
            <a
              className="social__link"
              href={link.href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${link.label}${external ? ' (opens in a new tab)' : ''}`}
            >
              <Icon name={link.name} size={18} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
