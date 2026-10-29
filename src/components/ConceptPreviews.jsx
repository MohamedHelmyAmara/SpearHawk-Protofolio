/**
 * Conceptual interface previews for the showcase section.
 * Built entirely with HTML/CSS (no images). These are illustrative concepts,
 * not real client work — every card is labeled "Conceptual Design".
 */

export function WebsitePreview() {
  return (
    <div className="concept-stage">
      <div className="concept-browser">
        <div className="concept-chrome">
          <span className="chrome-dots" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <div className="concept-page">
          <div className="cp-nav">
            <span className="cp-logo"><i className="cp-logo-mark" /></span>
            <span className="cp-links"><i /><i /><i /></span>
            <i className="cp-pill" />
          </div>
          <div className="cp-hero">
            <span className="cp-heading"><i className="w-60" /><i className="w-40 accent" /></span>
            <span className="cp-sub"><i className="w-80" /></span>
            <span className="cp-btns"><i className="cp-btn-primary" /><i className="cp-btn-ghost" /></span>
          </div>
          <div className="cp-cards">
            <span className="cp-card"><i className="cp-card-icon" /><span className="cp-card-lines"><i /><i /></span></span>
            <span className="cp-card"><i className="cp-card-icon" /><span className="cp-card-lines"><i /><i /></span></span>
            <span className="cp-card"><i className="cp-card-icon" /><span className="cp-card-lines"><i /><i /></span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardPreview() {
  return (
    <div className="concept-stage">
      <div className="concept-browser">
        <div className="concept-chrome">
          <span className="chrome-dots" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <div className="cp-dash">
          <aside className="cp-side">
            <span className="cp-logo"><i className="cp-logo-mark" /></span>
            <span className="cp-side-links">
              <i className="is-active" /><i /><i /><i /><i />
            </span>
          </aside>
          <div className="cp-main">
            <div className="cp-topbar">
              <i className="cp-search" />
              <span className="cp-avatar" />
            </div>
            <div className="cp-stats">
              <span className="cp-stat">
                <i className="cp-stat-label" />
                <span className="cp-stat-value">128</span>
                <i className="cp-trend up" />
              </span>
              <span className="cp-stat is-accent">
                <i className="cp-stat-label" />
                <span className="cp-stat-value">86%</span>
                <i className="cp-trend up" />
              </span>
              <span className="cp-stat">
                <i className="cp-stat-label" />
                <span className="cp-stat-value">4.9</span>
                <i className="cp-trend up" />
              </span>
            </div>
            <div className="cp-chart" aria-hidden="true">
              <i style={{ height: '42%' }} />
              <i style={{ height: '66%' }} />
              <i className="is-accent" style={{ height: '88%' }} />
              <i style={{ height: '54%' }} />
              <i className="is-accent" style={{ height: '74%' }} />
              <i style={{ height: '35%' }} />
              <i style={{ height: '58%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobilePreview() {
  return (
    <div className="concept-stage concept-stage-center">
      <div className="concept-phone">
        <span className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <div className="phone-status" dir="ltr">
            <span>9:41</span>
            <span className="phone-status-icons"><i /><i /><i /></span>
          </div>
          <div className="phone-header">
            <span className="phone-avatar" />
            <span className="phone-title-lines"><i /><i /></span>
          </div>
          <i className="cp-search cp-search-wide" />
          <div className="phone-list">
            <span className="phone-row is-highlight">
              <i className="phone-row-icon" />
              <span className="phone-row-lines"><i /><i /></span>
              <i className="cp-status-pill" />
            </span>
            <span className="phone-row">
              <i className="phone-row-icon" />
              <span className="phone-row-lines"><i /><i /></span>
              <i className="cp-status-pill is-muted" />
            </span>
            <span className="phone-row">
              <i className="phone-row-icon" />
              <span className="phone-row-lines"><i /><i /></span>
              <i className="cp-status-pill is-muted" />
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
