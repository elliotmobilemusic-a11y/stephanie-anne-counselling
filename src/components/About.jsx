import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { aboutContent } from '../data/siteContent'

const portraitModules = import.meta.glob(
  '../assets/stephanie-portrait.{jpg,jpeg,png,webp}',
  { eager: true }
)
const portraitSrc = Object.values(portraitModules)[0]?.default ?? null

export default function About() {
  const [imgError, setImgError] = useState(false)
  const showPhoto = portraitSrc && !imgError

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Portrait ── */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative circles behind the image */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full bg-blush-100 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-lavender-100/70 pointer-events-none"
            />

            {/* Image frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-cream-200 to-lavender-100 flex items-center justify-center border border-cream-200 z-10 shadow-lg">
              {showPhoto ? (
                <img
                  src={portraitSrc}
                  alt="Stephanie in her therapy room in Brighouse"
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

            {/* Floating BACP badge */}
            <div className="absolute -bottom-5 right-5 sm:right-8 z-20 bg-white rounded-2xl shadow-lg px-5 py-4 border border-cream-200">
              <p className="font-sans text-[10px] font-semibold text-plum-300 uppercase tracking-widest mb-0.5">
                Registered with
              </p>
              <p className="font-serif text-base font-bold text-plum-700 leading-none">BACP</p>
              <p className="font-sans text-[10px] text-plum-400 mt-0.5">
                British Association for Counselling
              </p>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="order-1 lg:order-2 space-y-7">
            <div>
              <p className="section-label mb-3">About Me</p>
              <h2 className="section-heading mb-5">{aboutContent.heading}</h2>
              <p className="font-serif text-xl italic text-plum-500 leading-relaxed">
                &ldquo;{aboutContent.intro}&rdquo;
              </p>
            </div>

            <div className="space-y-4">
              {aboutContent.body.map((para, i) => (
                <p key={i} className="font-sans text-base text-plum-500 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Credential pills */}
            <div className="pt-6 border-t border-cream-200">
              <div className="flex flex-wrap gap-2.5">
                {aboutContent.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-cream-200 shadow-sm"
                  >
                    <CheckCircle size={13} className="text-blush-400 shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm font-medium text-plum-600">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
