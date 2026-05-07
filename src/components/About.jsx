import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { aboutContent } from '../data/siteContent'
import stephaniePortrait from '../assets/stephanie-portrait.jpg'
import FloralAccent from './FloralAccent'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <FloralAccent className="absolute left-[-3rem] top-14 opacity-[0.12]" size={240} />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -right-4 h-48 w-48 rounded-full bg-blush/70" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-white/50 p-3 shadow-[0_28px_70px_rgba(66,55,61,0.09)]">
              <div className="overflow-hidden rounded-[1.1rem] bg-blush">
                {imgError ? (
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-blush to-lavender text-center">
                    <span className="font-serif text-5xl text-plum">SA</span>
                  </div>
                ) : (
                  <img
                    src={stephaniePortrait}
                    alt="Stephanie, counsellor based in Brighouse"
                    className="aspect-[4/5] w-full object-cover object-center"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>

            <div className="absolute -bottom-5 left-5 rounded-[1.25rem] border border-border bg-cream/95 px-5 py-4 shadow-[0_18px_50px_rgba(66,55,61,0.1)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-mauve">Registered member</p>
              <p className="mt-1 font-serif text-2xl font-semibold leading-none text-ink">BACP</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="section-label mb-3">About Stephanie</p>
            <h2 className="section-heading mb-6">{aboutContent.heading}</h2>
            <p className="mb-7 font-serif text-2xl italic leading-snug text-plum">
              “{aboutContent.intro}”
            </p>

            <div className="space-y-4">
              {aboutContent.body.map(paragraph => (
                <p key={paragraph} className="text-base leading-relaxed text-mauve">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-[1.35rem] border border-border bg-white/45 p-5">
              <div className="flex flex-wrap gap-2.5">
                {aboutContent.credentials.map(credential => (
                  <span
                    key={credential}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-2 text-sm font-semibold text-ink/80"
                  >
                    <CheckCircle size={14} className="text-plum" aria-hidden="true" />
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
