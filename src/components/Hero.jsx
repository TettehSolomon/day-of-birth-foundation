import Reveal from './Reveal'

const CEO_IMAGE = '/images/img31.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 hero-pattern" id="home">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="space-y-4 sm:space-y-6">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Grounded Optimism
            </div>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
              One Future <br />
              <span className="text-secondary italic">at a Time.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p className="font-body-md text-body-md text-justify text-tertiary max-w-lg">
              We are a community-driven foundation dedicated to bridging the educational gap in Nigeria. By providing
              scholarships and academic support, we empower the next generation of leaders.
            </p>
          </Reveal>
          <Reveal direction="up" delay={360} className="flex gap-3 sm:gap-4">
            <a
              className="flex-1 sm:flex-none text-center bg-primary text-on-primary px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:translate-y-[-2px] transition-all"
              href="#donate"
            >
              <span className="sm:hidden">Support Us</span>
              <span className="hidden sm:inline">Support a Student</span>
            </a>
            <a
              className="flex-1 sm:flex-none text-center border-2 border-primary text-primary px-4 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-primary/5 transition-all"
              href="#impact"
            >
              <span className="sm:hidden">View Impact</span>
              <span className="hidden sm:inline">View Our Impact</span>
            </a>
          </Reveal>
        </div>
        <Reveal direction="right" delay={200} className="relative">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img alt="CEO Elton" className="w-full h-[500px] object-cover" src={CEO_IMAGE} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
