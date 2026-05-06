import { Heart } from 'lucide-react'
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
    <footer className="bg-plum-900 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        {/* Main footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-white mb-3">
              Stephanie Anne Counselling
            </h2>
            <p className="font-sans text-sm text-white/55 leading-relaxed mb-4 max-w-xs">
              A warm, confidential space for person-centred counselling in Brighouse and online.
            </p>
            <p className="font-sans text-xs font-semibold text-blush-300 uppercase tracking-widest">
              {siteInfo.bacp}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact summary */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2 mb-5">
              <p className="font-sans text-sm text-white/60">{siteInfo.phone}</p>
              <p className="font-sans text-sm text-white/60 break-all">{siteInfo.email}</p>
              <p className="font-sans text-sm text-white/60">{siteInfo.location}</p>
            </div>
            <a
              href={siteInfo.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-semibold text-blush-300 hover:text-blush-200 transition-colors"
            >
              Book Free Consultation →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/35 text-center sm:text-left">
            © {year} Stephanie Anne Counselling. All rights reserved.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
            {/* TODO: Create a Privacy Policy page and update href */}
            <a href="#" className="font-sans text-xs text-white/35 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            {/* TODO: Create an Accessibility Statement page and update href */}
            <a href="#" className="font-sans text-xs text-white/35 hover:text-white/70 transition-colors">
              Accessibility
            </a>
            <span className="font-sans text-xs text-white/30 flex items-center gap-1">
              Made with{' '}
              <Heart size={10} className="text-blush-400" aria-hidden="true" />{' '}
              by Built Better Digital
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
