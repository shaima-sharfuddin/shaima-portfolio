import Reveal from './Reveal.jsx'

/**
 * Numbered eyebrow + title, with the optional intro set beside the title on
 * wide screens (stacked on smaller ones).
 */
export default function SectionHeader({ index, eyebrow, title, intro, id }) {
  return (
    <Reveal className={`section-header ${intro ? 'section-header--split' : ''}`.trim()}>
      <div>
        <p className="eyebrow">
          <span className="eyebrow__index">{index}</span>
          <span className="eyebrow__rule" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="section-title" id={id}>
          {title}
        </h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  )
}
