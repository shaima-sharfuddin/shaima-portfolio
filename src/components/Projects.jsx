import ProjectCard from './ProjectCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Projects"
          title="Featured work"
          intro="Projects I have designed and built — on the web and on mobile."
          id="projects-title"
        />

        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
