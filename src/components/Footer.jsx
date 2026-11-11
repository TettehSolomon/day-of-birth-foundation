import { Link } from 'react-router-dom'
import { LOGO_URL, SCHOLARSHIP_URL } from '../constants'
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from './icons'
import Reveal from './Reveal'

const LINK_CLASS = 'text-surface-variant hover:text-secondary transition-colors font-label-md text-label-md'
const QUICK_LINKS = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'FAQ', to: '/faq' },
]

const SOCIAL_LINKS = [
  {
    href: 'https://www.instagram.com/dayofbirthfoundation',
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  {
    href: 'https://www.tiktok.com/@dayofbirthfoundation',
    label: 'TikTok',
    Icon: TikTokIcon,
  },
  {
    href: 'https://wa.me/2349029322866',
    label: 'WhatsApp',
    Icon: WhatsAppIcon,
  },
  {
    href: SCHOLARSHIP_URL,
    label: 'Apply for Scholarship',
    icon: 'school',
  },
]

export default function Footer() {
  return (
    <footer className="bg-inverse-surface">
      <div className="w-full py-lg px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-[1.5fr_0.9fr_1.1fr] gap-gutter max-w-7xl mx-auto items-start">
        <Reveal direction="up" className="space-y-6 md:justify-self-start">
          <img alt="Day of Birth Foundation" className="h-12 brightness-0 invert" src={LOGO_URL} />
          <p className="font-body-md text-body-md text-surface-variant text-justify">
            We are transforming lives through educational empowerment across Nigeria. Join us in building a future where every
            student has the chance to dream and learn.
          </p>
        </Reveal>
        <Reveal direction="up" delay={120} className="space-y-4 md:justify-self-center">
          <h4 className="font-title-lg text-title-lg text-surface">Quick Links</h4>
          <ul className="space-y-2">
            {QUICK_LINKS.map((item) => (
              <li key={item.label}>
                {item.to ? (
                  <Link className={LINK_CLASS} to={item.to}>
                    {item.label}
                  </Link>
                ) : (
                  <a className={LINK_CLASS} href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal direction="up" delay={240} className="space-y-4 md:justify-self-end">
          <h4 className="font-title-lg text-title-lg text-surface">Connect</h4>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-surface-variant transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10 hover:text-secondary"
              >
                {item.Icon ? (
                  <item.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <span className="material-symbols-outlined text-lg sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                )}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-white/30 text-center">
        <p className="font-label-md text-label-md text-surface-variant">
          © 2026 Day of Birth Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
