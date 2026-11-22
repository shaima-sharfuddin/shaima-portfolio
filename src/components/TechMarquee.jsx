import { skillGroups } from '../data/content.js'

const technologies = skillGroups.flatMap((group) => group.skills)

/**
 * Slowly scrolling band of the technologies from the Skills section.
 * The list is rendered twice for a seamless loop; the copy is hidden from
 * screen readers. With reduced motion it becomes a static, wrapped list.
 */
export default function TechMarquee() {
  return (
    <div className="marquee">
      <p className="marquee__label">Technologies I work with</p>
      <div className="marquee__viewport">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <ul className="marquee__list" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {technologies.map((tech) => (
                <li className="marquee__item" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
