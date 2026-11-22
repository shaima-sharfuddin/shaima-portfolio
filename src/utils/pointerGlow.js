/**
 * onPointerMove handler for cards with the `glow` class: records the pointer
 * position so CSS can draw a soft spotlight that follows the cursor.
 * Writes straight to the element's style — no React re-render per mouse move.
 */
export function trackPointer(event) {
  if (event.pointerType !== 'mouse') return
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  el.style.setProperty('--my', `${event.clientY - rect.top}px`)
}
