import { Phone } from 'lucide-react'
import { fees, siteInfo } from '../data/siteContent'

export default function Fees() {
  return (
    <section id="fees" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label mb-3">Fees</p>
          <h2 className="section-heading mb-4">Session fees</h2>
          <p className="section-subheading">
            Clear, simple fees, with a free first telephone conversation so you can ask questions
            before deciding what feels right.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fees.map(fee => (
            <article
              key={fee.label}
              className={`card ${fee.highlight ? 'bg-blush' : 'bg-cream'}`}
            >
              {fee.highlight && (
                <p className="mb-4 inline-flex rounded-full border border-rose/20 bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-plum">
                  Gentle first step
                </p>
              )}
              <p className="font-serif text-5xl font-semibold leading-none text-ink">{fee.price}</p>
              <h3 className="mt-3 font-serif text-[1.55rem] font-semibold leading-tight text-ink">
                {fee.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mauve">{fee.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="mb-6 text-sm leading-relaxed text-mauve">
            Sessions are 60 minutes. Please get in touch if you have any questions about fees or
            would like to discuss payment options.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteInfo.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a first conversation
            </a>
            <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="btn-secondary">
              <Phone size={15} aria-hidden="true" />
              {siteInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
