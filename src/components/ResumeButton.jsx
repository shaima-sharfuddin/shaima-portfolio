import Icon from './Icon.jsx'
import { siteConfig } from '../data/siteConfig.js'

/**
 * Downloads the resume PDF when siteConfig.resumeUrl is set; until then it
 * leads to the Contact section, where visitors can request it by email.
 */
export default function ResumeButton({ className = '', onClick }) {
  const { resumeUrl, resumeFileName } = siteConfig

  if (resumeUrl) {
    return (
      <a className={`btn btn--outline ${className}`.trim()} href={resumeUrl} download={resumeFileName} onClick={onClick}>
        <Icon name="download" size={17} />
        Download Resume
      </a>
    )
  }

  return (
    <a
      className={`btn btn--outline ${className}`.trim()}
      href="#contact"
      onClick={onClick}
      title="Resume available on request — see the contact section"
    >
      <Icon name="download" size={17} />
      Download Resume
    </a>
  )
}
