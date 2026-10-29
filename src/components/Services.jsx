import { Check, Globe, LayoutDashboard, Smartphone } from 'lucide-react'
import { useI18n } from '../i18n/LanguageContext.jsx'

const SERVICE_ICONS = [Globe, LayoutDashboard, Smartphone]

export default function Services() {
  const { dict } = useI18n()

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">{dict.services.eyebrow}</p>
          <h2 className="section-title">{dict.services.title}</h2>
          <p className="section-lead">{dict.services.lead}</p>
        </header>

        <div className="services-grid">
          {dict.services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index] ?? Globe
            return (
              <article className="service-card" key={service.title}>
                <span className="service-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} className="service-check" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
