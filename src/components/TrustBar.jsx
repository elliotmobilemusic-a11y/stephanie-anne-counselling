import { Fragment } from 'react'
import { Award, Shield, CheckCircle, Lock, Laptop } from 'lucide-react'
import { trustSignals } from '../data/siteContent'

const icons = [Award, Shield, CheckCircle, Lock, Laptop]

export default function TrustBar() {
  return (
    <section
      className="py-4"
      aria-label="Trust signals"
      style={{ background: 'linear-gradient(90deg, #4A2555 0%, #5C3A7E 50%, #4A2555 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 list-none">
          {trustSignals.map((signal, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Fragment key={i}>
                <li className="flex items-center gap-2 text-white/90">
                  <Icon size={14} className="text-blush-300 shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm font-medium whitespace-nowrap">
                    {signal.label}
                  </span>
                </li>
                {i < trustSignals.length - 1 && (
                  <li aria-hidden="true" className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                )}
              </Fragment>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
