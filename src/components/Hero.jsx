const CEO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB32FacZpnz-XxgZRKQNNW4LdJWUTVEjboN3ieJzcE4EIBlsYMtztxHWFLqo2dzYYzQrxErIh61motfyxswd2ywAbnHiypR3cCkD8_TXf4frEs0ONfAJTXqncrtA_efA065Cgv9yFRP4RSazA7sLecEG-NIN1lHr_V_ooI9dMv7i23FK6IcITSqJRbphKr2WZRyvZhD-PwEQSWjPBzQarVZttwU_i7RSO01-es4x-ymNaxJ2TjLAXUlMS17Pt1b175Gpq2kRPiUeYCD'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32 hero-pattern" id="home">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            Grounded Optimism
          </div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
            One Future <br />
            <span className="text-secondary italic">at a Time.</span>
          </h1>
          <p className="font-body-md text-body-md text-tertiary max-w-lg">
            We are a community-driven foundation dedicated to bridging the educational gap in Nigeria. By providing
            scholarships and academic support, we empower the next generation of leaders.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] transition-all"
              href="#donate"
            >
              Support a Student
            </a>
            <a
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all"
              href="#impact"
            >
              View Our Impact
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img alt="CEO Elton" className="w-full h-[500px] object-cover" src={CEO_IMAGE} />
          </div>
        </div>
      </div>
    </section>
  )
}
