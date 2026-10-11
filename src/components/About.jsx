import Reveal from './Reveal'

export default function About() {
  return (
    <section className="py-xl bg-surface-container/50" id="about">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface">Meet Our Visionary</h2>
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
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-variant flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                  <div>
                    <div className="font-bold text-sm">30+</div>
                    <div className="text-xs text-tertiary">Scholarships awarded</div>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-variant flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
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
          <Reveal direction="right" delay={150} className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-xl group">
              <img
                alt="CEO Elton addressing the students"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/img11.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-label-md text-label-md opacity-80 uppercase tracking-widest">Leadership in Action</p>
                <h3 className="font-title-lg text-title-lg">Energizing the Future Generation</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
