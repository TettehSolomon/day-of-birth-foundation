import Reveal from './Reveal'
import { WhatsAppIcon } from './icons'

const CONTACT_PERSON = 'Ofe'
const PHONE_DISPLAY = '+234 (902) 932 2866'
const PHONE_E164 = '2349029322866'
const EMAIL = 'info@dayofbirthfoundation.org'
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`

const INVOLVEMENT = [
  { icon: 'volunteer_activism', label: 'Donate', desc: 'Fund a student’s tuition and learning materials.' },
  { icon: 'share', label: 'Share', desc: 'Spread the word and grow our community of givers.' },
  { icon: 'diversity_3', label: 'Volunteer', desc: 'Give your time, skills, and mentorship.' },
  { icon: 'handshake', label: 'Partner', desc: 'Collaborate with us on bigger impact.' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-xl bg-surface-container/50">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal direction="up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
            <span className="material-symbols-outlined text-[18px]">connect_without_contact</span>
            Get Involved
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface mt-4 mb-4">
            Donation, Volunteering &amp; Partnership
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="font-body-md text-body-md text-tertiary max-w-2xl mx-auto">
            Every student deserves the chance to learn and dream. Reach out to support, collaborate, or simply learn
            more about our mission — your support makes it possible.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Direct contact details */}
          <Reveal
            direction="left"
            className="lg:col-span-5 bg-primary text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/5 rounded-full"></div>
            <h3 className="font-title-lg text-title-lg mb-8 relative text-center lg:text-left">Reach Out Directly</h3>
            <div className="space-y-6 relative">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur shrink-0">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-white/70">Contact Person</p>
                  <p className="font-bold text-sm">{CONTACT_PERSON}</p>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur shrink-0 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-white/70">Call / WhatsApp</p>
                  <p className="font-bold text-sm">{PHONE_DISPLAY}</p>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur shrink-0 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-white/70">Email Us</p>
                  <p className="font-bold text-sm break-all">{EMAIL}</p>
                </div>
              </a>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex w-fit mx-auto lg:mx-0 items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-surface transition-colors relative"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Reveal>

          {/* Ways to get involved */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter h-full">
              {INVOLVEMENT.map((item, i) => (
                <Reveal key={item.label} direction="up" delay={i * 120} className="h-full">
                  <div className="h-full bg-white rounded-3xl p-6 shadow-sm border border-surface-variant hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-2xl">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {item.icon}
                      </span>
                    </div>
                    <h4 className="font-title-lg text-title-lg text-on-surface">{item.label}</h4>
                    <p className="font-body-md text-body-md text-tertiary">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
