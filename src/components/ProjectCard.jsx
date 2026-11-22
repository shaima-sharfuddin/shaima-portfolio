import Icon from './Icon.jsx'
import PhoneMockup from './PhoneMockup.jsx'
import Reveal from './Reveal.jsx'
import { trackPointer } from '../utils/pointerGlow.js'

/** A link when the URL exists, otherwise a quiet "coming soon" label (never a dead link). */
function ProjectLink({ href, icon, label, pendingLabel, projectTitle, primary }) {
  if (!href) {
    return (
      <span className="project__link project__link--pending">
        <span className="project__pending-dot" aria-hidden="true" />
        {pendingLabel}
      </span>
    )
  }
  return (
    <a
      className={`project__link ${primary ? 'project__link--primary' : ''}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${projectTitle} (opens in a new tab)`}
    >
      <Icon name={icon} size={16} />
      {label}
      <Icon name="arrowUpRight" size={14} className="project__link-arrow" />
    </a>
  )
}

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0')

  const body = (
    <>
      <div className="project__top">
        <span className="project__number" aria-hidden="true">
          {number}
        </span>
        <p className="project__type">{project.type}</p>
      </div>

      <h3 className="project__title" id={`project-${number}`}>
        {project.title}
      </h3>
      <p className="project__description">{project.description}</p>

      <ul className="project__contributions" aria-label="Highlights">
        {project.contributions.map((item) => (
          <li key={item}>
            <Icon name="check" size={15} />
            {item}
          </li>
        ))}
      </ul>

      <ul className="chips chips--muted" aria-label="Technologies">
        {project.tech.map((tech) => (
          <li className="chip" key={tech}>
            {tech}
          </li>
        ))}
      </ul>

      <div className="project__links">
        <ProjectLink
          href={project.repoUrl}
          icon="github"
          label="View on GitHub"
          pendingLabel="Repository coming soon"
          projectTitle={project.title}
          primary={project.featured}
        />
        <ProjectLink
          href={project.liveUrl}
          icon="arrowUpRight"
          label={project.liveLabel || 'Live demo'}
          pendingLabel={`${project.liveLabel || 'Live demo'} coming soon`}
          projectTitle={project.title}
        />
        {project.apkUrl && (
          <ProjectLink
            href={project.apkUrl}
            icon="download"
            label="Android app"
            projectTitle={project.title}
          />
        )}
      </div>
    </>
  )

  return (
    <Reveal
      as="article"
      className={`project glow ${project.featured ? 'project--featured' : ''}`.trim()}
      delay={(index % 3) * 90}
      aria-labelledby={`project-${number}`}
      onPointerMove={trackPointer}
    >
      {project.featured ? (
        <div className="project__layout">
          <div className="project__content">{body}</div>
          <div className="project__visual">
            <PhoneMockup />
          </div>
        </div>
      ) : (
        body
      )}
    </Reveal>
  )
}
