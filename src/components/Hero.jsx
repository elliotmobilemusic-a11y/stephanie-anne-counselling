import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { heroContent, siteInfo } from '../data/siteContent'

// Place your portrait photo at: src/assets/stephanie-portrait.jpg
// Supported formats: .jpg .jpeg .png .webp
const portraitModules = import.meta.glob(
  '../assets/stephanie-portrait.{jpg,jpeg,png,webp}',
  { eager: true }
)
const portraitSrc = Object.values(portraitModules)[0]?.default ?? null

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const showPhoto = portraitSrc && !imgError

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FAF7F2 0%, #F0EAF8 55%, #FDF2F5 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-0 w-[36rem] h-[36rem] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D8D0EC 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F0C8CE 0%, transparent 70%)' }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text column ── */}
          <div className="space-y-8">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-lavender-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blush-400 shrink-0" aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-plum-500">
                Brighouse &amp; Online · West Yorkshire
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-plum-800 leading-[1.1]">
              {heroContent.headline}
            </h1>

            <p className="font-sans text-lg sm:text-xl text-plum-400 leading-relaxed max-w-lg">
              {heroContent.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteInfo.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                {heroContent.ctaPrimary}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
              <a href="#about" className="btn-secondary">
                {heroContent.ctaSecondary}
              </a>
            </div>

            {/* Quick trust dots */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-sans text-plum-400 pt-2">
              {['BACP Registered', 'Free Initial Consultation', 'Fully Confidential'].map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="relative hidden sm:block">
            {/* Offset frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4"
              style={{ background: 'linear-gradient(135deg, #D8D0EC 0%, #F0C8CE 100%)' }}
            />
            {/* Portrait container */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-lavender-200/60 bg-gradient-to-br from-lavender-100 to-blush-100 flex items-center justify-center">
              {showPhoto ? (
                <img
                  src={portraitSrc}
                  alt="Stephanie, Person-Centred Counsellor in Brighouse"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="text-center px-8 py-12 select-none">
                  <div className="w-24 h-24 rounded-full bg-white/60 mx-auto mb-4 flex items-center justify-center shadow-sm">
                    <span className="font-serif text-4xl text-plum-500" aria-hidden="true">S</span>
                  </div>
                  <p className="font-sans text-sm text-plum-400 leading-relaxed">
                    Place photo at
                    <br />
                    <span className="text-xs text-plum-300 font-mono">src/assets/stephanie-portrait.jpg</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-plum-300"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-plum-300 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
