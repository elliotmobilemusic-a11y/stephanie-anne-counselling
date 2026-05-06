import { Heart, Phone, Mail } from 'lucide-react'
import { siteInfo } from '../data/siteContent'

const quickLinks = [
  { label: 'About Stephanie', href: '#about'    },
  { label: 'Services',        href: '#services' },
  { label: 'Session Fees',    href: '#fees'     },
  { label: 'Location',        href: '#location' },
  { label: 'Contact',         href: '#contact'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'linear-gradient(160deg, #2A1530 0%, #3A1D43 100%)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-white mb-1">
              Stephanie Anne
            </h2>
            <p className="font-sans text-xs font-medium text-blush-300/80 uppercase tracking-widest mb-4">
              Counselling
            </p>
            <p className="font-sans text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              A warm, confidential space for person-centred counselling in Brighouse and online.
            </p>
            <span className="inline-block font-sans text-xs font-semibold text-blush-300/70 uppercase tracking-widest border border-blush-300/20 rounded-full px-3 py-1">
              {siteInfo.bacp}
            </span>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Get in Touch
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 font-sans text-sm text-white/55 hover:text-white transition-colors group"
              >
                <Phone size={13} className="text-blush-300/60 shrink-0 group-hover:text-blush-300" aria-hidden="true" />
                {siteInfo.phone}
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-2.5 font-sans text-sm text-white/55 hover:text-white transition-colors group break-all"
              >
                <Mail size={13} className="text-blush-300/60 shrink-0 group-hover:text-blush-300" aria-hidden="true" />
                {siteInfo.email}
              </a>
              <p className="font-sans text-sm text-white/40 pl-5">{siteInfo.location}</p>
            </div>
            <a
              href={siteInfo.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-sans text-sm font-semibold text-blush-300 hover:text-blush-200 transition-colors"
            >
              Book Free Consultation →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30 text-center sm:text-left">
            © {year} Stephanie Anne Counselling. All rights reserved.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
            <a href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">
              Accessibility
            </a>
            <span className="font-sans text-xs text-white/25 flex items-center gap-1">
              Made with <Heart size={10} className="text-blush-400/70" aria-hidden="true" /> by Built Better Digital
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
