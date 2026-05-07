import { Sprout } from 'lucide-react'
import { siteInfo } from '../data/siteContent'

export function Monogram({ className = '' }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-blush text-ink ${className}`}
      aria-hidden="true"
    >
      <span className="font-serif text-xl font-semibold leading-none">SA</span>
    </span>
  )
}

export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-cream text-plum shadow-[0_10px_28px_rgba(66,55,61,0.06)]">
        <Sprout size={18} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span className="grid">
        <span className="font-serif text-[1.45rem] font-semibold leading-none tracking-normal text-ink sm:text-[1.6rem]">
          Stephanie Anne
        </span>
        {!compact && (
          <span className="mt-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.18em] text-mauve">
            {siteInfo.tagline}
          </span>
        )}
      </span>
    </span>
  )
}
