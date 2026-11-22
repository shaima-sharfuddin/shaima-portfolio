import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'
import { services } from '../data/content.js'
import { trackPointer } from '../utils/pointerGlow.js'

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="Freelance"
          title="How I can help"
          intro="Available for freelance projects with individuals, startups and small businesses — wherever you are."
          id="services-title"
        />

        <ul className="services">
          {services.map((service, index) => (
            <Reveal
              as="li"
              className="service glow"
              key={service.title}
              delay={index * 60}
              onPointerMove={trackPointer}
            >
              <span className="service__icon">
                <Icon name={service.icon} size={20} />
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__text">{service.text}</p>
            </Reveal>
          ))}
          <Reveal as="li" className="service service--cta" delay={services.length * 60}>
            <h3 className="service__title">Have a project in mind?</h3>
            <p className="service__text">Tell me what you need and I&apos;ll reply with how I can help.</p>
            <a className="btn btn--light btn--sm" href="#contact">
              Start a conversation
              <Icon name="arrowRight" size={16} />
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
