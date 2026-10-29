import { Briefcase, MessageSquare, ShieldCheck, Target } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'

const PRINCIPLE_ICONS = [Target, MessageSquare, ShieldCheck, Briefcase]

export default function WhySpearhawk() {
  const { dict } = useI18n()

  return (
    <section id="why" className="section">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">{dict.why.eyebrow}</p>
          <h2 className="section-title">{dict.why.title}</h2>
          <p className="section-lead">{dict.why.lead}</p>
        </header>

        <div className="why-grid">
          {dict.why.principles.map((principle, index) => {
            const Icon = PRINCIPLE_ICONS[index] ?? Target
            return (
              <article className="why-card" key={principle.title}>
                <span className="why-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div className="why-copy">
                  <h3 className="why-title">{principle.title}</h3>
                  <p className="why-description">{principle.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
