import { CalendarHeart, MessageCircleHeart, HeartHandshake, Flower2 } from 'lucide-react'

const steps = [
  {
    title: 'Book a free telephone consultation',
    text: 'Choose a time for a gentle first conversation, with no pressure to commit.',
    icon: CalendarHeart,
  },
  {
    title: 'Talk through what brings you here',
    text: 'We can explore what you are hoping for and any questions you may have.',
    icon: MessageCircleHeart,
  },
  {
    title: 'Decide whether counselling feels right',
    text: 'You can take time to decide if Stephanie’s approach feels like a good fit.',
    icon: HeartHandshake,
  },
  {
    title: 'Begin sessions at a pace that suits you',
    text: 'If you choose to continue, sessions unfold with care and at your pace.',
    icon: Flower2,
  },
]

export default function WhatToExpect() {
  return (
    <section className="bg-cream py-20 sm:py-28" id="what-to-expect">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-label mb-3">First steps</p>
          <h2 className="section-heading mb-4">What to expect</h2>
          <p className="section-subheading">
            Starting counselling can feel daunting, so the first step is gentle and pressure-free.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.title} className="card bg-white/55">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-blush text-plum">
                    <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="font-serif text-3xl font-semibold text-lavender">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-[1.45rem] font-semibold leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-mauve">{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
