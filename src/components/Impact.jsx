import Reveal from './Reveal'

const IMG_CEREMONY =
  './images/img2.jpg'
const IMG_AWARD =
  './images/img9.jpg'
const IMG_GRANT =
  './images/img7.jpg'
const IMG_AUDIENCE =
  './images/img8.jpg'
const IMG_SPEAKER =
  './images/img20.jpg'

export default function Impact() {
  return (
    <section className="pt-lg pb-xl overflow-hidden" id="impact">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
            <span className="sm:hidden">
              Our Impact
              <br />
              (2025 Recap)
            </span>
            <span className="hidden sm:inline">Our Impact: 2025 Recap</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="font-body-md text-body-md text-tertiary max-w-2xl mx-auto">
            Last year, we empowered 30 students with 100k scholarships each. Every smile represents a dream sustained
            and a future secured.
          </p>
        </Reveal>
        <div className="bento-grid">
          <Reveal
            direction="up"
            className="col-span-12 md:col-span-6 lg:col-span-8 rounded-3xl overflow-hidden shadow-md group h-[300px] relative"
          >
            <img
              alt="Student support award ceremony"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IMG_CEREMONY}
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Reveal>
          <Reveal
            direction="up"
            delay={100}
            className="col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl overflow-hidden shadow-md group h-[300px] relative"
          >
            <img
              alt="Award presentation to young boy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IMG_AWARD}
            />
            <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Reveal>
          <Reveal
            direction="up"
            delay={200}
            className="col-span-12 md:col-span-4 lg:col-span-3 rounded-3xl overflow-hidden shadow-md group h-[250px] relative"
          >
            <img
              alt="Student receiving support grant"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IMG_GRANT}
            />
          </Reveal>
          <Reveal
            direction="up"
            delay={300}
            className="col-span-12 md:col-span-8 lg:col-span-6 rounded-3xl overflow-hidden shadow-md group h-[250px] relative"
          >
            <img
              alt="The audience of students"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IMG_AUDIENCE}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl flex items-center justify-between">
              <span className="font-bold text-primary">Community Growth</span>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </div>
          </Reveal>
          <Reveal
            direction="up"
            delay={400}
            className="col-span-12 md:col-span-12 lg:col-span-3 rounded-3xl overflow-hidden shadow-md group h-[250px] relative"
          >
            <img
              alt="Audience of beneficiaries"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={IMG_SPEAKER}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
