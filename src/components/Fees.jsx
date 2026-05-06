import { Phone } from 'lucide-react'
import { fees, siteInfo } from '../data/siteContent'

export default function Fees() {
  return (
    <section id="fees" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Transparent Pricing</p>
          <h2 className="section-heading mb-4">Session Fees</h2>
          <p className="section-subheading">
            I believe everyone should have access to quality counselling. Your first conversation
            is always free — no pressure, no commitment.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fees.map((fee, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 border transition-all duration-200 ${
                fee.highlight
                  ? 'text-white border-transparent shadow-2xl'
                  : 'bg-white border-cream-200 hover:shadow-md hover:border-lavender-200'
              }`}
              style={fee.highlight ? {
                background: 'linear-gradient(145deg, #5C3A7E 0%, #4A2555 100%)',
              } : {}}
            >
              {fee.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-blush-400 text-white text-xs font-semibold font-sans px-4 py-1.5 rounded-full shadow-md">
                    Start Here
                  </span>
                </div>
              )}

              <p
                className={`font-serif text-4xl font-bold mb-1 ${
                  fee.highlight ? 'text-white' : 'text-plum-700'
                }`}
              >
                {fee.price}
              </p>

              <h3
                className={`font-serif text-lg font-semibold leading-snug mb-3 ${
                  fee.highlight ? 'text-white/90' : 'text-plum-800'
                }`}
              >
                {fee.label}
              </h3>

              <p
                className={`font-sans text-sm leading-relaxed ${
                  fee.highlight ? 'text-white/65' : 'text-plum-400'
                }`}
              >
                {fee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note + CTAs */}
        <div className="mt-12 text-center space-y-6">
          <p className="font-sans text-sm text-plum-400 max-w-xl mx-auto">
            Sessions are 50 minutes. Please get in touch if you have any questions about fees or
            would like to discuss payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <a
              href={siteInfo.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Free Consultation
            </a>
            <a
              href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
              className="btn-secondary"
            >
              <Phone size={15} aria-hidden="true" />
              {siteInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
