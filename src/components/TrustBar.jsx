import { Award, Shield, CheckCircle, Lock, Laptop } from 'lucide-react'
import { trustSignals } from '../data/siteContent'

const icons = [Award, Shield, CheckCircle, Lock, Laptop]

export default function TrustBar() {
  return (
    <section className="bg-plum-700 py-5" aria-label="Trust signals">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 list-none">
          {trustSignals.map((signal, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={i} className="flex items-center gap-2 text-white/90">
                <Icon size={15} className="text-blush-300 shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm font-medium whitespace-nowrap">
                  {signal.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
