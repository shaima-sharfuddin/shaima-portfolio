import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const facts = [
  { label: 'Education', value: 'MCA, 2023 – 2025' },
  { label: 'Focus', value: 'Frontend & mobile UI' },
  { label: 'Core stack', value: 'React · React Native · JavaScript' },
  { label: 'Looking for', value: 'Remote roles & freelance work' },
]

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader index="01" eyebrow="About" title="A developer who cares about the details" id="about-title" />

        <div className="about">
          <Reveal className="about__text">
            <p className="lead">
              I&apos;m a frontend developer with a Master of Computer Applications, and I enjoy turning
              ideas into interfaces that are clear, responsive and pleasant to use.
            </p>
            <p>
              My main tools are React and JavaScript on the web, and React Native with Expo on mobile. I
              have built complete projects end to end — from layout and navigation to authentication,
              form validation and connecting screens to real REST APIs — and I have learned as much from
              debugging and testing them as from building them.
            </p>
            <p>
              I&apos;m early in my career and I&apos;m honest about it: I bring solid fundamentals,
              practical project experience and a habit of writing organised, maintainable code. I&apos;m
              currently looking for <strong>remote full-time opportunities</strong> and{' '}
              <strong>freelance collaborations</strong> with teams and clients anywhere in the world.
            </p>
          </Reveal>

          <Reveal as="dl" className="about__facts" delay={120}>
            {facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
