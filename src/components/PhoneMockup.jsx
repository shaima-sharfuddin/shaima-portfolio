/**
 * Decorative, abstract phone frame for the featured mobile project.
 * It is a stylised wireframe (shapes only, no text) — not a screenshot of the
 * real app — so it is hidden from assistive technology.
 */
export default function PhoneMockup() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__glow" />
      <div className="phone__frame">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="ph-row ph-row--top">
            <span className="ph-logo" />
            <span className="ph-avatar" />
          </div>
          <span className="ph-line ph-line--sm" />
          <span className="ph-line ph-line--lg" />

          <div className="ph-hero">
            <span className="ph-line ph-line--light ph-line--sm" />
            <span className="ph-amount" />
            <span className="ph-pill" />
          </div>

          <div className="ph-tiles">
            <span className="ph-tile" />
            <span className="ph-tile" />
            <span className="ph-tile" />
          </div>

          <div className="ph-list">
            {[0, 1, 2].map((row) => (
              <div className="ph-item" key={row}>
                <span className="ph-dot" />
                <span className="ph-item__lines">
                  <span className="ph-line ph-line--md" />
                  <span className="ph-line ph-line--xs" />
                </span>
                <span className="ph-badge" />
              </div>
            ))}
          </div>

          <div className="ph-tabbar">
            <span className="ph-tab ph-tab--active" />
            <span className="ph-tab" />
            <span className="ph-tab" />
            <span className="ph-tab" />
          </div>
        </div>
      </div>
    </div>
  )
}
