import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { aboutContent } from '../data/siteContent'
import stephaniePortrait from '../assets/stephanie-portrait.jpg'

export default function About() {
  const [imgError, setImgError] = useState(false)
  const showPhoto = !imgError

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Portrait ── */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative soft circles */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-blush-100/80 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-lavender-100/60 pointer-events-none"
            />

            {/* Image frame */}
            <div
              className="relative rounded-3xl overflow-hidden aspect-[3/4] z-10"
              style={{
                boxShadow: '0 20px 60px -10px rgba(74, 37, 85, 0.18), 0 4px 16px -4px rgba(74, 37, 85, 0.08)',
              }}
            >
              {showPhoto ? (
                <img
                  src={stephaniePortrait}
                  alt="Stephanie in her therapy room in Brighouse"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-cream-200 to-lavender-100 flex items-center justify-center border border-cream-200">
                  <div className="text-center px-8 py-12 select-none">
                    <div className="w-24 h-24 rounded-full bg-white/60 mx-auto mb-4 flex items-center justify-center shadow-sm">
                      <span className="font-serif text-4xl text-plum-400" aria-hidden="true">S</span>
                    </div>
                    <p className="font-sans text-sm text-plum-400 leading-relaxed">
                      Add photo at<br />
                      <span className="text-xs text-plum-300 font-mono">src/assets/stephanie-portrait.jpg</span>
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom warmth gradient */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(250,247,242,0.15), transparent)' }}
                aria-hidden="true"
              />
            </div>

            {/* BACP floating badge */}
            <div className="absolute -bottom-5 right-4 sm:right-6 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 border border-cream-200">
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
