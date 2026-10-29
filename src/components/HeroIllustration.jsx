import { Code2, Palette } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'

/**
 * Decorative hero illustration: a browser mockup of a website being built,
 * an overlapping phone mockup, and restrained brand accents. Pure HTML/CSS.
 * Rendered inside an aria-hidden container — labels here are illustrative.
 */
export default function HeroIllustration() {
  const { dict } = useI18n()

  return (
    <div className="illustration">
      <div className="illustration-backdrop">
        <span className="glow glow-a" />
        <span className="glow glow-b" />
      </div>

      <div className="float-chip float-chip-a">
        <Code2 size={15} aria-hidden="true" />
        <span>{dict.hero.illustration.chipCode}</span>
      </div>
      <div className="float-chip float-chip-b">
        <Palette size={15} aria-hidden="true" />
        <span>{dict.hero.illustration.chipUi}</span>
      </div>

      {/* Browser mockup */}
      <div className="mock-browser">
        <div className="mock-chrome">
          <span className="chrome-dots" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="chrome-address">
            <span className="chrome-url" dir="ltr">{dict.hero.illustration.browserUrl}</span>
          </span>
        </div>
        <div className="mock-page">
          <div className="mock-site-nav">
            <span className="mock-logo">
              <span className="mock-logo-mark" />
            </span>
            <span className="mock-nav-links">
              <i /><i /><i />
            </span>
            <span className="mock-nav-cta" />
          </div>
          <div className="mock-site-hero">
            <span className="mock-heading">
              <i className="w-70" /><i className="w-45 accent" />
            </span>
            <span className="mock-text">
              <i className="w-90" /><i className="w-75" />
            </span>
            <span className="mock-buttons">
              <i className="mock-btn-primary" />
              <i className="mock-btn-ghost" />
            </span>
          </div>
          <div className="mock-cards">
            <span className="mock-card">
              <i className="mock-card-icon" />
              <span className="mock-card-lines"><i /><i /></span>
            </span>
            <span className="mock-card">
              <i className="mock-card-icon" />
              <span className="mock-card-lines"><i /><i /></span>
            </span>
          </div>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="mock-phone">
        <span className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <div className="phone-status" dir="ltr">
            <span>9:41</span>
            <span className="phone-status-icons">
              <i /><i /><i />
            </span>
          </div>
          <div className="phone-header">
            <span className="phone-avatar" />
            <span className="phone-title-lines"><i /><i /></span>
          </div>
          <div className="phone-list">
            <span className="phone-row">
              <i className="phone-row-icon" />
              <span className="phone-row-lines"><i /><i /></span>
            </span>
            <span className="phone-row">
              <i className="phone-row-icon" />
              <span className="phone-row-lines"><i /><i /></span>
            </span>
            <span className="phone-row is-highlight">
              <i className="phone-row-icon" />
              <span className="phone-row-lines"><i /><i /></span>
            </span>
          </div>
          <div className="phone-tabbar">
            <i className="is-active" /><i /><i /><i />
          </div>
        </div>
      </div>
    </div>
  )
}
