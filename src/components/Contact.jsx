import { ExternalLink, Mail, MapPin, MessageSquareHeart, Phone } from 'lucide-react'
import { contactContent, siteInfo } from '../data/siteContent'

export default function Contact() {
  const socialLinks = [
    { label: 'Facebook', href: siteInfo.facebookUrl },
    { label: 'Instagram', href: siteInfo.instagramUrl },
  ].filter(link => link.href && link.href !== '#')

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-heading mb-4">{contactContent.heading}</h2>
          <p className="section-subheading">{contactContent.intro}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="card flex flex-col bg-cream p-7 sm:p-9">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blush text-plum">
              <MessageSquareHeart size={26} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <h3 className="mb-3 font-serif text-3xl font-semibold text-ink">Make an enquiry</h3>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-mauve">
              The easiest way to reach me is through my secure enquiry form. Share a little about
              what has brought you here and any questions you have, and I&apos;ll get back to you —
              usually within 24&ndash;48 hours.
            </p>

            <a
              href={siteInfo.enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageSquareHeart size={16} aria-hidden="true" />
              Make an enquiry
              <ExternalLink size={13} aria-hidden="true" />
            </a>

            <p className="mt-6 text-xs leading-relaxed text-mauve">
              Your enquiry is confidential. Please avoid sharing urgent crisis information through
              the form, as replies are not immediate.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-[1.5rem] bg-ink p-7 text-white shadow-[0_24px_70px_rgba(66,55,61,0.16)] sm:p-8">
              <h3 className="mb-2 font-serif text-3xl font-semibold text-white">Prefer to talk first?</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/70">
                A free telephone consultation is a gentle way to ask questions and see whether
                counselling with Stephanie feels right for you. Call or send an enquiry and we&apos;ll
                arrange a time.
              </p>
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-blush"
              >
                <Phone size={15} aria-hidden="true" />
                {siteInfo.phone}
              </a>
            </div>

            <div className="card bg-cream">
              <h3 className="mb-5 font-serif text-2xl font-semibold text-ink">Contact details</h3>
              <div className="space-y-4">
                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-plum">
                    <Phone size={15} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-mauve">Phone</span>
                    <span className="text-sm font-semibold text-ink group-hover:text-plum">{siteInfo.phone}</span>
                  </span>
                </a>
                <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-4 group">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-plum">
                    <Mail size={15} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-mauve">Email</span>
                    <span className="break-all text-sm font-semibold text-ink group-hover:text-plum">{siteInfo.email}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-plum">
                    <MapPin size={15} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-mauve">Location</span>
                    <span className="text-sm font-semibold text-ink">{siteInfo.location}</span>
                  </span>
                </div>
              </div>

              {socialLinks.length > 0 && (
                <div className="mt-6 border-t border-border pt-5">
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map(link => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 text-xs">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="rounded-[1.25rem] border border-border bg-blush/55 p-5">
              <p className="text-sm leading-relaxed text-ink/75">
                Stephanie Anne Counselling is not an emergency service. If you are in immediate
                danger or need urgent support, please call 999, contact NHS 111, or contact
                Samaritans on 116 123.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
