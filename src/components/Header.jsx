import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { siteInfo } from '../data/siteContent'

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Fees',     href: '#fees'     },
  { label: 'Location', href: '#location' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-200'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <a href="#home" onClick={closeMenu} className="flex-shrink-0 group">
            <span className="font-serif text-lg sm:text-xl font-semibold text-plum-700 leading-none block">
              Stephanie Anne
            </span>
            <span className="font-sans text-xs font-medium text-plum-400 tracking-widest uppercase">
              Counselling
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-sans text-sm font-medium text-plum-500 hover:text-plum-800 transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blush-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 font-sans text-sm text-plum-400 hover:text-plum-700 transition-colors"
            >
              <Phone size={14} />
              {siteInfo.phone}
            </a>
            <a
              href={siteInfo.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
              className="text-plum-400 hover:text-plum-700 transition-colors p-1"
              aria-label={`Call ${siteInfo.phone}`}
            >
              <Phone size={19} />
            </a>
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="p-1.5 rounded-lg text-plum-700 hover:bg-cream-100 transition-colors"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — smooth height transition */}
      <div
        className={`lg:hidden bg-white border-t border-cream-200 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[24rem] shadow-lg' : 'max-h-0'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-sans text-base font-medium text-plum-700 hover:text-plum-900 hover:bg-cream-100 px-4 py-3 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-4 border-t border-cream-200">
            <a
              href={siteInfo.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary w-full justify-center"
            >
              Book Free Consultation
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
