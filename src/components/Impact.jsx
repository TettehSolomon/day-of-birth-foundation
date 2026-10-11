import Reveal from './Reveal'

const IMG_CEREMONY =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDGQifbGFIF6KGcVsfpJe0CY1A0mIIVoq1_VDsJ6CtoPoyxQt2PKOPRf6kKPwiE4of6MSnqF7ul5V1i-RiLVzmNnTiVrrIDcWnooKpBXPUKqoyMObE10JiOc0tHPI00wnv9atoyiKwEyXsrYxpdtejfcthYc4JHuOJSFn1c8lCX5N2Ut4DkC7-467fQyUMMrPqs0bWUo20h2O2IhFM0q4XKeLf3kISdTJu-Txb5EtpNINWMsBIplfpYB1tWODMQJ8FU4Nyc_6SL1fcM'
const IMG_AWARD =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDpX23rrRGczB_NsrtxqtDPFP4-1dlzv29nCBoEV5YKJUWpRCEdIRG7_BCCP71rL7ABH6eW5g-UMKWV2JJ2Av9bOFisP5irI-634NS9irwlZo0RruJp7TOp2HwHoKbqziUoXmInrxPeDgm--39SUqs0TCZ3OfSgzGpI8kOXGsPFzh6NUaexqfjek1F1Uk-BytfIRK6zVP4NIplSyuZhailVy3bLLCqzeRUBKZNms6jOrK5OgP-OrM1xqXhWfD_RojCJ21RzW9yLfMiO'
const IMG_GRANT =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCaHq3Qmyleu2OCd6JvPVczrhFJ-J328slMEkdvD_YHo69C6jmDdGqaODyLk5Wrs7cAVAp0EDWfg_5SnkaPoDR4jHhbo1k4KqUphG879TBEEWvZhJ73EZYkR4KDMX3CUVj-tmvzEq7ASdsFMA6elhssUOxZ6FddTM7UemC7ezeKF881Oo1mWG0_Gebe9PRMy7LHqbA-pBzaaqak1LPFobHXx7hii1uywgpXTebc_ZFQHFjNOiIb-mmiteW7MFB2zwl8FqALNWeR6x19'
const IMG_AUDIENCE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAzVU-Gpcbt9JPPgWYXbvlyXMf7Suh-Uw-uEN3NUpMZ4bO2K3UkUgPhNNAqon2faupQAaQUb6vrYSseRbvJPDAr4KR2JdMgJtq8egF1yjD7CjQ0gi9z8Rxo8DXgoNt5jcbtiLgOfnmFo7a4ASPPuGd1BRdy6SDPIsAWGBJhl-mTt3Y7I6UJcTrvV8IphgRnfXH_di970lpTpZdfdkykld4bjpKgcwEV46SQ8C-u-J8ekUGllP1t6w-_HdUi6EYL785ZRKcUiUVtk1p5'

export default function Impact() {
  return (
    <section className="py-xl overflow-hidden" id="impact">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Our Impact: 2025 Recap</h2>
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
              src={IMG_AUDIENCE}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
