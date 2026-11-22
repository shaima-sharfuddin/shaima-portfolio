import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { skillGroups } from '../data/content.js'
import { trackPointer } from '../utils/pointerGlow.js'

export default function Skills() {
  return (
    <section className="section section--tint" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Skills"
          title="Technical skills"
          intro="The technologies I have used in my projects and studies — and keep building on."
          id="skills-title"
        />

        <div className="skills">
          {skillGroups.map((group, index) => (
            <Reveal
              as="article"
              className="skill-card glow"
              key={group.title}
              delay={index * 80}
              onPointerMove={trackPointer}
            >
              <div className="skill-card__icon">
                <Icon name={group.icon} size={22} />
              </div>
              <h3 className="skill-card__title">{group.title}</h3>
              <p className="skill-card__summary">{group.summary}</p>
              <ul className="chips" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li className="chip" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
