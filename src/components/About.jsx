import Reveal from './Reveal'

export default function About() {
  return (
    <section className="pt-lg pb-xl bg-surface-container/50" id="about">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal direction="left" className="lg:col-span-6 order-1">
            <div className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface text-center lg:text-left">Meet Our Visionary</h2>
              <p className="font-body-md text-body-md text-justify text-tertiary">
                Elton Oshodipe is the founder of the Day of Birth Foundation, which gives students in Nigeria the micro-scholarships they need to stay in school.
                In 2025, the foundation covered back-to-school costs for 30 students, and Elton is now raising a larger round to reach the next group, including a bigger scholarship for one standout student.
                By day, Elton is a management consultant who has spent his career solving problems, enough of them to earn the nickname “the Assistant Chief Problem Solver.”
              </p>
              <p className="font-body-md text-body-md text-justify text-tertiary">
                His work has ranged across the financial and investment world and the EV and mobility industry, among others.
                Beyond the foundation, Elton is a well-known host and compere in Africa’s tech and venture community, with a knack for turning conferences into rooms where people actually connect.
                Off-stage, he is usually found with a guitar in hand. It is the same instinct that runs through his giving: a belief that the right support, at the right moment, can change the shape of someone’s life.
              </p>
              <div className="pt-4 flex gap-2 sm:gap-4">
                <a
                  href="https://www.eltonpiriye.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-0 p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-surface-variant flex items-center gap-2 sm:gap-3 transition-colors hover:bg-surface-container/50"
                >
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    person
                  </span>
                  <div>
                    <div className="font-bold text-sm">My Portfolio</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/elton-oshodipe-840641176?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-0 p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-surface-variant flex items-center gap-2 sm:gap-3 transition-colors hover:bg-surface-container/50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-secondary w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                    fill="currentColor"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1Zm-1.3 1.2h2.6v7.3H5.64v-7.3Zm4.34 0h2.49v1h.03c.35-.66 1.2-1.36 2.48-1.36 2.65 0 3.14 1.74 3.14 4v4.7h-2.6v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32v4.48h-2.6v-7.3Z" />
                  </svg>
                  <div>
                    <div className="font-bold text-sm">My LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150} className="lg:col-span-6 order-2">
            <div className="relative mx-auto max-w-[520px]">
              <div className="absolute -top-12 -left-10 h-52 w-52 rounded-full bg-secondary/45 blur-[120px] -z-10"></div>
              <div className="absolute -bottom-12 -right-6 h-56 w-56 rounded-full bg-primary/45 blur-[130px] -z-10"></div>
              <div className="rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(34,35,52,0.18)] border border-white/60 bg-white/20 transition-transform duration-500">
                <img
                  alt="CEO Elton, Founder of Day of Birth Foundation"
                  className="w-full h-[500px] object-cover object-top"
                  src="/images/ceo.jpg"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
