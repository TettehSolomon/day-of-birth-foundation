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
                Elton is the ceo/founder of the Day Of Birth Foundation, a foundation that helps empower students
                across Nigeria with scholarships. He is also your go-to compere for tech events and conferences –
                energizing the crowd, creating a welcoming atmosphere, and transforming ordinary gatherings into
                unforgettable experiences.
              </p>
              <p className="font-body-md text-body-md text-justify text-tertiary">
                He has deep passion for creating deeply memorable moments that meaningfully bring people together, and
                this holds true whether I command a massive stage or lead a virtual event.
              </p>
              <div className="pt-4 flex gap-2 sm:gap-4">
                <div className="flex-1 min-w-0 p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-surface-variant flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-primary text-xl sm:text-2xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                  <div>
                    <div className="font-bold text-sm">30+</div>
                    <div className="text-xs text-tertiary">Scholarships awarded</div>
                  </div>
                </div>
                <div className="flex-1 min-w-0 p-2.5 sm:p-3 bg-white rounded-xl shadow-sm border border-surface-variant flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                    volunteer_activism
                  </span>
                  <div>
                    <div className="font-bold text-sm">5M+</div>
                    <div className="text-xs text-tertiary">Funds raised</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={150} className="lg:col-span-6 order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="CEO Elton, Founder of Day of Birth Foundation"
                className="w-full h-[500px] object-cover object-top"
                src="/images/ceo.jpg"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
