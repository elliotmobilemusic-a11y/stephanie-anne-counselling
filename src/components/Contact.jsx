import { useState } from 'react'
import { Calendar, CheckCircle, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { contactContent, siteInfo } from '../data/siteContent'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

function FormSuccess({ onReset }) {
  return (
    <div className="card flex min-h-[28rem] flex-col items-center justify-center bg-white/60 p-10 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blush text-plum">
        <CheckCircle size={28} strokeWidth={1.6} aria-hidden="true" />
      </div>
      <h3 className="mb-2 font-serif text-3xl font-semibold text-ink">Message received</h3>
      <p className="max-w-sm text-sm leading-relaxed text-mauve">
        Thank you for reaching out. I aim to respond within 24-48 hours. Your message will be
        handled confidentially.
      </p>
      <button type="button" onClick={onReset} className="btn-secondary mt-7">
        Send another message
      </button>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = event => {
    setForm(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setError('')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', message: '' })
      })
      .catch(() => {
        setError('Something went wrong while sending your message. Please email or call instead.')
      })
  }

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
          {submitted ? (
            <FormSuccess onReset={() => setSubmitted(false)} />
          ) : (
            <div className="card bg-cream p-7 sm:p-9">
              <h3 className="mb-7 font-serif text-3xl font-semibold text-ink">Send a message</h3>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="name" className="input-label">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="input-label">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="input-label">
                    Phone <span className="font-normal text-mauve">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="07700 000000"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="input-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me a little about what has brought you here, or any questions you have."
                    className="input-field resize-none"
                  />
                </div>

                <p className="text-xs leading-relaxed text-mauve">
                  Your message is confidential. Please avoid sharing urgent crisis information
                  through this form, as replies are not immediate.
                </p>

                {error && <p className="text-sm font-semibold text-plum">{error}</p>}

                <button type="submit" className="btn-primary w-full">
                  Send message
                </button>
              </form>
            </div>
          )}

          <div className="flex flex-col gap-5">
            <div className="rounded-[1.5rem] bg-ink p-7 text-white shadow-[0_24px_70px_rgba(66,55,61,0.16)] sm:p-8">
              <h3 className="mb-2 font-serif text-3xl font-semibold text-white">Book a first conversation</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/70">
                A free telephone consultation is a gentle way to ask questions and see whether
                counselling with Stephanie feels right for you.
              </p>
              <a
                href={siteInfo.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-blush"
              >
                <Calendar size={15} aria-hidden="true" />
                Book a first conversation
                <ExternalLink size={13} aria-hidden="true" />
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
