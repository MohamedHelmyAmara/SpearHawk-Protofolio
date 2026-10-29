import { Sparkles } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'
import { WebsitePreview, DashboardPreview, MobilePreview } from './ConceptPreviews.jsx'

const PREVIEW_COMPONENTS = [WebsitePreview, DashboardPreview, MobilePreview]

export default function Showcase() {
  const { dict } = useI18n()

  return (
    <section id="showcase" className="section">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">{dict.showcase.eyebrow}</p>
          <h2 className="section-title">{dict.showcase.title}</h2>
          <p className="section-lead">{dict.showcase.lead}</p>
        </header>

        <div className="showcase-grid">
          {dict.showcase.items.map((item, index) => {
            const Preview = PREVIEW_COMPONENTS[index] ?? WebsitePreview
            return (
              <article className="showcase-card" key={item.title}>
                <div className="showcase-preview">
                  <span className="concept-badge">
                    <Sparkles size={12} aria-hidden="true" />
                    {dict.showcase.conceptualLabel}
                  </span>
                  <Preview />
                </div>
                <div className="showcase-info">
                  <h3 className="showcase-title">{item.title}</h3>
                  <p className="showcase-description">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
