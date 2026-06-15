import { Mail, MapPin, Phone } from 'lucide-react'
import { siteInfo } from '../data/siteContent'
import Logo from './Logo'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'How I Help', href: '#services' },
  { label: 'Fees', href: '#fees' },
  { label: 'Online Counselling', href: '#online-counselling' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 sm:px-8">
        <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-mauve">
              Person-centred counselling in Brighouse and online, with a particular focus on
              grief, bereavement, loss and life’s difficult moments.
            </p>
            <a
              href={siteInfo.enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              Make an enquiry
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-mauve">Explore</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-semibold text-ink/75 transition-colors hover:text-plum">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-mauve">Contact</h3>
            <div className="space-y-3">
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-semibold text-ink/75 hover:text-plum">
                <Phone size={15} className="text-plum" aria-hidden="true" />
                {siteInfo.phone}
              </a>
              <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-3 break-all text-sm font-semibold text-ink/75 hover:text-plum">
                <Mail size={15} className="shrink-0 text-plum" aria-hidden="true" />
                {siteInfo.email}
              </a>
              <p className="flex items-center gap-3 text-sm font-semibold text-ink/75">
                <MapPin size={15} className="text-plum" aria-hidden="true" />
                {siteInfo.location}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-mauve sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Stephanie Anne Counselling. All rights reserved.</p>
          <p>Built Better Digital</p>
        </div>
      </div>
    </footer>
  )
}
