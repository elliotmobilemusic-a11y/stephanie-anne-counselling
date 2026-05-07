import { Home, MapPin, Monitor, Train } from 'lucide-react'
import { locationContent } from '../data/siteContent'

const details = [
  {
    title: 'Brighouse, West Yorkshire',
    text: 'A private counselling space for face-to-face sessions.',
    icon: MapPin,
  },
  {
    title: 'Full address after booking',
    text: 'The full address and arrival details are shared once your appointment is confirmed.',
    icon: Home,
  },
  {
    title: 'Online counselling available',
    text: 'Secure video sessions are available if online support feels more accessible.',
    icon: Monitor,
  },
]

export default function Location() {
  return (
    <section id="online-counselling" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-label mb-3">Brighouse and online</p>
            <h2 className="section-heading mb-5">Counselling in Brighouse, West Yorkshire</h2>
            <p className="section-subheading">{locationContent.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(item => {
              const Icon = item.icon
              return (
                <article key={item.title} className="card flex items-start gap-4 bg-white/55">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-blush text-plum">
                    <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.45rem] font-semibold leading-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mauve">{item.text}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[1.35rem] border border-border bg-white/50 p-5">
          <div className="flex items-start gap-3">
            <Train size={18} className="mt-1 shrink-0 text-plum" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-mauve">
              Brighouse is accessible from Halifax, Huddersfield and the surrounding West Yorkshire
              area. Please ask if you have access needs or travel questions before booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
