import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { heroContent, siteInfo } from '../data/siteContent'
import stephaniePortrait from '../assets/stephanie-portrait.jpg'

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const showPhoto = !imgError

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #FAF7F2 0%, #F0EAF8 52%, #FDF2F5 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute top-16 right-0 w-[40rem] h-[40rem] rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D8D0EC 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F0C8CE 0%, transparent 70%)' }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text column ── */}
          <div className="space-y-7">

            {/* Mobile circular portrait — shown only on small screens */}
            {showPhoto && (
              <div className="lg:hidden flex justify-center pt-2">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #D8D0EC, #F0C8CE)',
                      transform: 'translate(4px, 4px)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={stephaniePortrait}
                      alt="Stephanie, Person-Centred Counsellor in Brighouse"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-lavender-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blush-400 shrink-0" aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-plum-500">
                Brighouse &amp; Online · West Yorkshire
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-plum-800 leading-[1.1]">
              {heroContent.headline}
            </h1>

            <p className="font-sans text-lg text-plum-400 leading-relaxed max-w-lg">
              {heroContent.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5">
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

            {/* Quick trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-sans text-plum-400 pt-1">
              {['BACP Registered', 'Free Initial Consultation', 'Fully Confidential'].map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blush-400 shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── Desktop image column ── */}
          <div className="relative hidden lg:block">
            {/* Offset decorative frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] translate-x-5 translate-y-5"
              style={{ background: 'linear-gradient(145deg, #D8D0EC 0%, #F0C8CE 100%)' }}
            />
            {/* Portrait frame */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/60 shadow-2xl bg-gradient-to-br from-lavender-100 to-blush-100">
              {showPhoto ? (
                <img
                  src={stephaniePortrait}
                  alt="Stephanie, Person-Centred Counsellor in Brighouse"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-center px-8 select-none">
                  <div>
                    <div className="w-24 h-24 rounded-full bg-white/60 mx-auto mb-4 flex items-center justify-center shadow-sm">
                      <span className="font-serif text-4xl text-plum-400" aria-hidden="true">S</span>
                    </div>
                    <p className="font-sans text-sm text-plum-400">Add photo to<br />
                      <span className="text-xs text-plum-300 font-mono">src/assets/stephanie-portrait.jpg</span>
                    </p>
                  </div>
                </div>
              )}

              {/* Subtle warm overlay at base of photo */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(250,247,242,0.25), transparent)' }}
                aria-hidden="true"
              />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-5 border border-cream-200 max-w-[220px]">
              <p className="font-serif text-sm italic text-plum-600 leading-relaxed mb-2">
                &ldquo;You are the expert on your own life.&rdquo;
              </p>
              <p className="font-sans text-xs text-plum-300 font-medium">— Stephanie</p>
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
