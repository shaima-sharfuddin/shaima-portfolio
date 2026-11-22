import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { education, experience } from '../data/content.js'

export default function Experience() {
  return (
    <section className="section section--tint" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title="Experience & education"
          id="experience-title"
        />

        <div className="journey">
          <div className="journey__column">
            <h3 className="journey__heading">
              <Icon name="briefcase" size={18} />
              Experience
            </h3>
            <ol className="timeline">
              {experience.map((item) => (
                <Reveal as="li" className="timeline__item" key={`${item.company}-${item.role}`}>
                  <p className="timeline__period">{item.period}</p>
                  <h4 className="timeline__title">{item.role}</h4>
                  <p className="timeline__org">{item.company}</p>
                  <p className="timeline__text">{item.summary}</p>
                  <ul className="timeline__points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="journey__column" id="education">
            <h3 className="journey__heading">
              <Icon name="graduation" size={18} />
              Education
            </h3>
            <ol className="timeline">
              {education.map((item, index) => (
                <Reveal as="li" className="timeline__item" key={item.degree} delay={index * 100}>
                  <p className="timeline__period">{item.period}</p>
                  <h4 className="timeline__title">{item.degree}</h4>
                  <p className="timeline__org">{item.school}</p>
                  <p className="timeline__grade">{item.grade}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
