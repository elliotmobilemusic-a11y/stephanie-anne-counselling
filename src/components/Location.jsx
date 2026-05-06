import { MapPin, Train, Bus, Car, Users } from 'lucide-react'
import { locationContent, siteInfo } from '../data/siteContent'

const transportIcons = [Train, Bus, Car, Users]

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Where to Find Me</p>
          <h2 className="section-heading mb-4">{locationContent.heading}</h2>
          <p className="section-subheading">{locationContent.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-cream-200 shadow-sm aspect-[4/3] bg-lavender-50 flex flex-col items-center justify-center gap-4">
            {/*
              TODO: Replace this block with a Google Maps embed.
              1. Go to maps.google.com, search for the address, click Share → Embed a map
              2. Copy the <iframe> src URL
              3. Replace this comment block with:

              <iframe
                src="PASTE_YOUR_EMBED_URL_HERE"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stephanie Anne Counselling location map"
              />
            */}
            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center">
              <MapPin size={26} className="text-plum-400" aria-hidden="true" />
            </div>
            <div className="text-center px-6">
              <p className="font-sans text-sm font-medium text-plum-500 mb-1">
                Brighouse, West Yorkshire
              </p>
              <p className="font-sans text-xs text-plum-300">
                Google Maps embed — add iframe here
              </p>
            </div>
          </div>

          {/* Location info */}
          <div className="space-y-7">

            {/* Address card */}
            <div className="card flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center shrink-0">
                <MapPin size={17} className="text-plum-500" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-plum-800 mb-1">Location</h3>
                <p className="font-sans text-sm text-plum-400 whitespace-pre-line leading-relaxed">
                  {locationContent.address}
                </p>
              </div>
            </div>

            {/* Getting here */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-plum-800 mb-4">Getting Here</h3>
              <div className="space-y-3">
                {locationContent.transport.map((item, i) => {
                  const Icon = transportIcons[i % transportIcons.length]
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blush-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={14} className="text-blush-400" aria-hidden="true" />
                      </div>
                      <p className="font-sans text-sm text-plum-500 pt-1 leading-relaxed">{item}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Online nudge */}
            <div className="rounded-2xl bg-lavender-50 border border-lavender-100 p-5">
              <p className="font-sans text-sm text-plum-600 leading-relaxed">
                <span className="font-semibold">Not local to Brighouse?</span>{' '}
                No problem. I offer online counselling via video call, so you can access support
                from wherever feels comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
