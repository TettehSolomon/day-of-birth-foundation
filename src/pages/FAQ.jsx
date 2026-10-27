import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'

const DONATE_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSf9kuE6xPhG0oS-KoOma_6qAseMhizWSmkyr6F5x5k7KCuO7A/viewform'
const VOLUNTEER_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLScP8PtGcXygZxx68Kgq0mudGLwxBLRu6T9s4oXigVzgie7vTg/viewform'

const FAQS = [
  {
    q: 'What is Day of Birth Foundation?',
    a: (
      <>
        Day Of Birth Impact Youth Education and Empowerment Foundation is a not-for-profit and non-political
        organisation that aims to support children and youth who lack financial access to quality education through
        scholarships, empowerment programmes, and collaborative initiatives. Our purpose is to make quality education
        more accessible and help students keep moving toward their goals — one future at a time.
      </>
    ),
  },
  {
    q: 'Why was Day of Birth Foundation established?',
    a: (
      <>
        Day Of Birth Foundation was born from a simple but powerful question: how many students need just a little
        financial support to pursue their academic dreams, and what can I do to help? The foundation was established to
        help bridge the gap between students&apos; academic aspirations and the financial support they need to pursue
        them, one student at a time.
      </>
    ),
  },
  {
    q: 'Who does the foundation aim to support?',
    a: <>The foundation aims to support young people and children.</>,
  },
  {
    q: 'What impact has the foundation made so far?',
    a: (
      <>
        Through our scholarship programme, the foundation has impacted 30 students with ₦3,000,000 to support their
        educational journeys. We look forward to supporting 31 more students this year.
      </>
    ),
  },
  {
    q: 'How can I support the foundation?',
    a: (
      <>
        You can support the foundation in two ways — by{' '}
        <a href={VOLUNTEER_FORM} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-2 hover:text-secondary transition-colors">
          volunteering your time
        </a>{' '}
        or by{' '}
        <a href={DONATE_FORM} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-2 hover:text-secondary transition-colors">
          making a donation
        </a>
        . Every contribution helps another student move one step closer to their dreams.
      </>
    ),
  },
]

// Alternating brand accents — Blue (primary) and Peach (secondary), the two
// colors used throughout the Brand Guidelines deck.
const ACCENTS = [
  {
    bar: 'border-l-primary',
    chip: 'bg-primary/10 text-primary',
    icon: 'text-primary',
    openBg: 'bg-primary/[0.04]',
  },
  {
    bar: 'border-l-secondary',
    chip: 'bg-secondary/10 text-secondary',
    icon: 'text-secondary',
    openBg: 'bg-secondary/[0.05]',
  },
]

function FaqItem({ item, index, isOpen, onToggle }) {
  const accent = ACCENTS[index % ACCENTS.length]
  return (
    <div
      className={`rounded-2xl border border-surface-variant border-l-4 ${accent.bar} shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
        isOpen ? accent.openBg : 'bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 sm:gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
      >
        <span className={`shrink-0 grid place-items-center w-9 h-9 rounded-xl font-bold ${accent.chip}`}>
          {index + 1}
        </span>
        <span className="flex-1 font-title-lg text-base sm:text-lg font-semibold text-on-surface leading-snug">
          {item.q}
        </span>
        <span
          className={`material-symbols-outlined shrink-0 transition-transform duration-300 ${accent.icon} ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-[4.25rem] pr-5 pb-5 sm:pr-6 sm:pb-6 font-body-md text-body-md text-tertiary">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i))

  return (
    <main>
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">quiz</span>
              Getting to Know Us
            </span>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h1 className="mt-4 font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p className="mt-4 font-body-md text-body-md text-tertiary max-w-2xl mx-auto">
              Everything you need to know about who we are, why we exist, and how you can be part of the journey.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-xl">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} direction="up" delay={(i % 5) * 80}>
                <FaqItem item={item} index={i} isOpen={openIndex === i} onToggle={() => toggle(i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
