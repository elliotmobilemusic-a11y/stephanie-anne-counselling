import { useState } from 'react'
import { ArrowRight, Check, MapPin, Monitor, ShieldCheck } from 'lucide-react'
import { heroContent, siteInfo } from '../data/siteContent'
import stephaniePortrait from '../assets/stephanie-portrait.jpg'
import FloralAccent from './FloralAccent'

const trustItems = [
  { label: 'In-person in Brighouse', icon: MapPin },
  { label: 'Online sessions available', icon: Monitor },
  { label: 'Confidential and supportive', icon: ShieldCheck },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-cream pt-28 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_78%_12%,rgba(243,228,230,0.9),transparent_34%),linear-gradient(145deg,rgba(250,246,243,1),rgba(216,207,221,0.28)_52%,rgba(250,246,243,1))]"
      />
      <FloralAccent className="absolute right-[-2rem] top-24 -z-10 opacity-[0.18]" size={230} />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pb-24 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Person-Centred Counselling</p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-ink sm:text-6xl lg:text-[4.7rem]">
              {heroContent.headline}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-mauve">
              {heroContent.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteInfo.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                {heroContent.ctaPrimary}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#services" className="btn-secondary">
                {heroContent.ctaSecondary}
              </a>
            </div>

            <div className="mt-9 grid gap-3 text-sm font-semibold text-ink/75 sm:grid-cols-3">
              {trustItems.map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blush text-plum">
                      <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
            <div className="absolute -left-5 top-10 h-28 w-28 rounded-full border border-border bg-blush/70" aria-hidden="true" />
            <div className="absolute -right-5 bottom-12 h-36 w-36 rounded-full bg-lavender/45" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-white/50 p-3 shadow-[0_28px_80px_rgba(66,55,61,0.11)]">
              <div className="relative overflow-hidden rounded-[1.15rem] bg-blush">
                {imgError ? (
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-blush to-lavender px-8 text-center">
                    <div>
                      <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cream text-2xl font-serif text-plum">
                        SA
                      </span>
                      <p className="text-sm text-ink/70">Stephanie Anne Counselling</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={stephaniePortrait}
                    alt="Stephanie, person-centred counsellor in Brighouse"
                    className="aspect-[4/5] w-full object-cover object-center"
                    onError={() => setImgError(true)}
                  />
                )}
                <FloralAccent className="absolute -right-10 -top-8 opacity-20" size={150} />
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 max-w-[18rem] rounded-[1.25rem] border border-border bg-cream/95 px-5 py-4 shadow-[0_20px_55px_rgba(66,55,61,0.12)] backdrop-blur">
              <p className="font-serif text-xl font-semibold leading-snug text-ink">
                Support that moves at your pace.
              </p>
              <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-mauve">
                <Check size={14} className="text-plum" aria-hidden="true" />
                Warm, confidential and non-judgemental
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
