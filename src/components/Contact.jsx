import { useState } from 'react'
import { Phone, Mail, ExternalLink, Calendar, CheckCircle } from 'lucide-react'
import { siteInfo, contactContent } from '../data/siteContent'

function FormSuccess({ onReset }) {
  return (
    <div className="bg-white rounded-3xl border border-cream-200 shadow-sm p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[420px]">
      <div className="w-16 h-16 rounded-full bg-lavender-100 flex items-center justify-center">
        <CheckCircle size={28} className="text-plum-500" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-semibold text-plum-800 mb-2">Message Received</h3>
        <p className="font-sans text-sm text-plum-400 max-w-xs leading-relaxed">
          Thank you for reaching out. I aim to respond within 24–48 hours. All messages are
          handled with complete confidentiality.
        </p>
      </div>
      <button onClick={onReset} className="btn-secondary text-sm">
        Send Another Message
      </button>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: Connect to a form service (Netlify Forms, Formspree, EmailJS, etc.)
    // For Netlify Forms, add: data-netlify="true" name="contact" to the <form> element
    // and add a hidden input: <input type="hidden" name="form-name" value="contact" />
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-3">Ready to Talk?</p>
          <h2 className="section-heading mb-4">{contactContent.heading}</h2>
          <p className="section-subheading">{contactContent.intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* ── Contact form ── */}
          {submitted ? (
            <FormSuccess onReset={() => setSubmitted(false)} />
          ) : (
            <div className="bg-white rounded-3xl border border-cream-200 shadow-sm p-8 sm:p-10">
              <h3 className="font-serif text-2xl font-semibold text-plum-800 mb-7">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="input-label">Your Name</label>
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
                  <label htmlFor="email" className="input-label">Email Address</label>
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
                    Phone{' '}
                    <span className="font-normal text-plum-300">(optional)</span>
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
                    placeholder="Tell me a little about what's brought you here, or any questions you have…"
                    className="input-field resize-none"
                  />
                </div>

                <p className="font-sans text-xs text-plum-300">
                  Your message is completely confidential. I aim to respond within 24–48 hours.
                </p>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>
          )}

          {/* ── Contact details ── */}
          <div className="flex flex-col gap-6">

            {/* Book directly CTA */}
            <div className="rounded-3xl bg-plum-700 p-8 text-white">
              <h3 className="font-serif text-2xl font-semibold mb-2">Book a Free Call</h3>
              <p className="font-sans text-sm text-white/70 mb-6 leading-relaxed">
                The easiest way to get started. Book a free, no-obligation telephone consultation
                directly into my diary — at a time that suits you.
              </p>
              <a
                href={siteInfo.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-plum-700 font-sans font-semibold text-sm px-6 py-3 rounded-full hover:bg-cream-100 transition-colors"
              >
                <Calendar size={15} aria-hidden="true" />
                Book My Free Consultation
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>

            {/* Contact details card */}
            <div className="bg-white rounded-3xl border border-cream-200 p-8 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-plum-800">Contact Details</h3>

              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center shrink-0 group-hover:bg-plum-100 transition-colors">
                  <Phone size={15} className="text-plum-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-xs text-plum-300 mb-0.5 uppercase tracking-wider">Phone</p>
                  <p className="font-sans text-sm font-medium text-plum-700 group-hover:text-plum-900 transition-colors">
                    {siteInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center shrink-0 group-hover:bg-plum-100 transition-colors">
                  <Mail size={15} className="text-plum-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-xs text-plum-300 mb-0.5 uppercase tracking-wider">Email</p>
                  <p className="font-sans text-sm font-medium text-plum-700 group-hover:text-plum-900 transition-colors break-all">
                    {siteInfo.email}
                  </p>
                </div>
              </a>

              {/* Social links */}
              <div className="pt-4 border-t border-cream-200">
                <p className="font-sans text-xs font-semibold text-plum-300 uppercase tracking-widest mb-3">
                  Follow Stephanie
                </p>
                <div className="flex gap-3 flex-wrap">
                  {/* TODO: Replace href="#" with the real Facebook page URL */}
                  <a
                    href={siteInfo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cream-200 font-sans text-sm font-medium text-plum-500 hover:text-plum-700 hover:border-lavender-200 hover:bg-lavender-50 transition-all"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    Facebook
                  </a>
                  {/* TODO: Replace href="#" with the real Instagram profile URL */}
                  <a
                    href={siteInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cream-200 font-sans text-sm font-medium text-plum-500 hover:text-plum-700 hover:border-lavender-200 hover:bg-lavender-50 transition-all"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
