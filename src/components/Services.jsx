import { Heart, Leaf, Monitor, MapPin } from 'lucide-react'
import { services, siteInfo } from '../data/siteContent'

const iconMap = { Heart, Leaf, Monitor, MapPin }

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">What I Offer</p>
          <h2 className="section-heading mb-4">Counselling Services</h2>
          <p className="section-subheading">
            Every person is different, and so is every journey through therapy. I offer a range of
            approaches and session types to suit what you need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Heart
            // Alternating subtle accent for icon badge
            const accentBg = i % 2 === 0 ? 'bg-lavender-100' : 'bg-blush-100'
            const accentIcon = i % 2 === 0 ? 'text-plum-500' : 'text-blush-500'

            return (
              <div
                key={service.id}
                className="rounded-2xl border border-cream-200 bg-white p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${accentBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110`}
                >
                  <Icon size={22} className={accentIcon} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-plum-800 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-plum-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteInfo.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
