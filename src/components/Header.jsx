import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteInfo } from '../data/siteContent'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How I Help', href: '#services' },
  { label: 'Fees', href: '#fees' },
  { label: 'Online Counselling', href: '#online-counselling' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-cream/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#home" onClick={closeMenu} className="shrink-0" aria-label={`${siteInfo.businessName} home`}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/75 transition-colors hover:text-plum"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={siteInfo.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden px-5 py-3 text-xs lg:inline-flex"
          >
            Book a first conversation
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-blush lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border bg-cream transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-blush hover:text-plum"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteInfo.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-primary mt-3 w-full"
          >
            Book a first conversation
          </a>
        </nav>
      </div>
    </header>
  )
}
