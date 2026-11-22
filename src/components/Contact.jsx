import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { siteConfig } from '../data/siteConfig.js'

const subject = encodeURIComponent('Hello Shaima — opportunity / project enquiry')
const mailto = `mailto:${siteConfig.email}?subject=${subject}`

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2400)
    } catch {
      // Clipboard blocked (e.g. insecure context): fall back to the mail app.
      window.location.href = mailto
    }
  }

  const channels = [
    {
      icon: 'mail',
      label: 'Email',
      value: siteConfig.email,
      href: mailto,
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: `github.com/${siteConfig.githubHandle}`,
      href: siteConfig.githubUrl,
    },
    siteConfig.linkedinUrl && {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: siteConfig.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: siteConfig.linkedinUrl,
    },
  ].filter(Boolean)

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact__panel">
          <div className="contact__grid" aria-hidden="true" />
          <div className="contact__copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__index">06</span>
              <span className="eyebrow__rule" aria-hidden="true" />
              Contact
            </p>
            <h2 className="contact__title" id="contact-title">
              Let&apos;s build something together.
            </h2>
            <p className="contact__text">
              Whether you are hiring for a remote frontend role or need help with a website or mobile
              app, I&apos;d be glad to hear from you. Email is the best way to reach me
              {siteConfig.resumeUrl ? '.' : ' — and I can send my resume on request.'}
            </p>
            <div className="contact__actions">
              <a className="btn btn--light" href={mailto}>
                <Icon name="mail" size={17} />
                Send me an email
              </a>
              <button
                type="button"
                className={`btn btn--ghost-light ${copied ? 'is-done' : ''}`.trim()}
                onClick={copyEmail}
              >
                <Icon name={copied ? 'check' : 'copy'} size={17} />
                {copied ? 'Copied' : 'Copy email address'}
              </button>
            </div>
          </div>

          <ul className="contact__channels">
            {channels.map((channel) => {
              const external = channel.href.startsWith('http')
              return (
                <li key={channel.label}>
                  <a
                    className="channel"
                    href={channel.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="channel__icon">
                      <Icon name={channel.icon} size={18} />
                    </span>
                    <span className="channel__body">
                      <span className="channel__label">{channel.label}</span>
                      <span className="channel__value">{channel.value}</span>
                    </span>
                    <Icon name="arrowUpRight" size={16} className="channel__arrow" />
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>

      <div className={`toast ${copied ? 'is-visible' : ''}`.trim()} role="status" aria-live="polite">
        {copied && (
          <>
            <Icon name="check" size={16} />
            Email address copied to clipboard
          </>
        )}
      </div>
    </section>
  )
}
