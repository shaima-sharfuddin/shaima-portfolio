import Icon from './Icon.jsx'
import TechMarquee from './TechMarquee.jsx'
import { siteConfig } from '../data/siteConfig.js'

const str = (value) => <span className="tok-str">&apos;{value}&apos;</span>

// The about.js card, one entry per line (rendered with line numbers).
const codeLines = [
  <>
    <span className="tok-key">const</span> <span className="tok-var">developer</span> = {'{'}
  </>,
  <>
    {'  '}
    <span className="tok-prop">name</span>: {str(siteConfig.name)},
  </>,
  <>
    {'  '}
    <span className="tok-prop">role</span>: {str(siteConfig.role)},
  </>,
  <>
    {'  '}
    <span className="tok-prop">focus</span>: [{str('React')}, {str('JavaScript')}, {str('React Native')}],
  </>,
  <>
    {'  '}
    <span className="tok-prop">education</span>: {str('MCA')},
  </>,
  <>
    {'  '}
    <span className="tok-prop">openTo</span>: [{str('Remote roles')}, {str('Freelance')}],
  </>,
  <>
    {'}'}
    <span className="caret" />
  </>,
]

const socials = [
  { name: 'github', label: 'GitHub', href: siteConfig.githubUrl },
  { name: 'linkedin', label: 'LinkedIn', href: siteConfig.linkedinUrl },
].filter((link) => link.href)

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            Open to remote roles &amp; freelance projects
          </p>

          <h1 className="hero__title" id="hero-title">
            <span className="hero__name">{siteConfig.name}</span>
            <span className="hero__role">{siteConfig.role}</span>
          </h1>

          <p className="hero__headline">Building responsive, user-friendly digital experiences.</p>

          <p className="hero__intro">
            I build clean, accessible interfaces with <strong>React</strong> and modern{' '}
            <strong>JavaScript</strong>, and cross-platform <strong>mobile apps</strong> with React
            Native and Expo — turning designs and APIs into products that feel good to use.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View My Work
              <Icon name="arrowRight" size={17} />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <ul className="hero__social" aria-label="Profiles">
            {socials.map((link) => (
              <li key={link.name}>
                <a
                  className="hero__social-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={link.name} size={16} />
                  {link.label}
                  <Icon name="arrowUpRight" size={13} className="hero__social-arrow" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero__visual" aria-label="A short introduction written as a JavaScript object">
          <div className="hero__float hero__float--one" aria-hidden="true">
            <Icon name="code" size={15} />
            React
          </div>
          <div className="hero__float hero__float--two" aria-hidden="true">
            <Icon name="mobile" size={15} />
            React Native
          </div>

          <div className="code-card">
            <div className="code-card__bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>about.js</p>
            </div>
            <pre className="code-card__body">
              <code>
                {codeLines.map((line, index) => (
                  <span className="code-line" key={index}>
                    <span className="code-line__number" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="code-line__text">{line}</span>
                  </span>
                ))}
              </code>
            </pre>
          </div>

          <figcaption className="hero__card-note">
            <Icon name="pin" size={15} />
            {siteConfig.location}
          </figcaption>
        </figure>
      </div>

      <div className="container hero__bottom">
        <TechMarquee />
        <a className="hero__scroll" href="#about">
          <span>Scroll</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
