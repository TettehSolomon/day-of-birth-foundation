import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import { TEAM, TEAM_HEADING } from '../data/team'

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">groups</span>
              {TEAM_HEADING.badge}
            </span>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h1 className="mt-4 font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
              Our Team
            </h1>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p className="mt-4 font-body-md text-body-md text-tertiary max-w-2xl mx-auto">{TEAM_HEADING.subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.img} direction="up" delay={(i % 4) * 80} className="mb-4 break-inside-avoid">
                <img
                  src={member.img}
                  alt="Team member"
                  loading="lazy"
                  className="w-full rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
