/**
 * Browser-window frame around a real screenshot of a featured web project.
 * The window chrome (dots, address bar) is decorative; the screenshot itself
 * carries the alt text.
 */
export default function BrowserMockup({ src, alt, url }) {
  const host = url ? new URL(url).host : ''

  return (
    <div className="browser">
      <div className="browser__glow" aria-hidden="true" />
      <div className="browser__frame">
        <div className="browser__bar" aria-hidden="true">
          <span className="browser__dots">
            <span />
            <span />
            <span />
          </span>
          {host && <span className="browser__address">{host}</span>}
        </div>
        <div className="browser__screen">
          <img src={src} alt={alt} width="1200" height="640" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  )
}
