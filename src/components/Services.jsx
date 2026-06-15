import { Heart, Leaf, MapPin, Monitor } from 'lucide-react'
import { services, siteInfo } from '../data/siteContent'

const iconMap = { Heart, Leaf, Monitor, MapPin }

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="section-label mb-3">How I Help</p>
          <h2 className="section-heading mb-5">How I can help</h2>
          <p className="section-subheading max-w-2xl">
            Person-centred counselling offers a steady, compassionate space to explore what feels
            heavy, confusing or painful, without being rushed or judged.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(service => {
            const Icon = iconMap[service.icon] || Heart

            return (
              <article key={service.id} className="card bg-cream">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-plum">
                  <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-serif text-[1.55rem] font-semibold leading-tight text-ink">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-mauve">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-12">
          <a
            href={siteInfo.enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Make an enquiry
          </a>
        </div>
      </div>
    </section>
  )
}
