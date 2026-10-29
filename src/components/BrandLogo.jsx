import { useState } from 'react'

/**
 * Renders the SpearHawk logo image. If /logo.png is not available yet,
 * falls back to a styled wordmark so the header/footer never show a
 * broken image. Once the logo file is placed in public/, the image
 * renders automatically.
 */
export default function BrandLogo({ variant = 'header' }) {
  const [failed, setFailed] = useState(false)
  const imageClass = variant === 'footer' ? 'footer-logo' : 'brand-logo'

  if (failed) {
    return <span className={`brand-fallback brand-fallback-${variant}`}>SpearHawk</span>
  }

  return (
    <img
      className={imageClass}
      src="/logo.png"
      alt="SpearHawk"
      width={150}
      height={44}
      onError={() => setFailed(true)}
    />
  )
}
