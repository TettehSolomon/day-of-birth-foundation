import { Link } from 'react-router-dom'
import { LOGO_URL } from '../constants'
import Reveal from './Reveal'

const LINK_CLASS = 'text-surface-variant hover:text-secondary transition-colors font-label-md text-label-md'
const QUICK_LINKS = [
  { label: 'Contact Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'FAQ', to: '/faq' },
]

export default function Footer() {
  return (
    <footer className="bg-inverse-surface">
      <div className="w-full py-lg px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-7xl mx-auto">
        <Reveal direction="up" className="space-y-6">
          <img alt="Day of Birth Foundation" className="h-12 brightness-0 invert" src={LOGO_URL} />
          <p className="font-body-md text-body-md text-surface-variant">
            Transforming lives through educational empowerment across Nigeria. Join us in building a future where every
            student has the chance to dream and learn.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-surface-variant">face_nod</span>
            <span className="material-symbols-outlined text-surface-variant">public</span>
            <span className="material-symbols-outlined text-surface-variant">alternate_email</span>
          </div>
        </Reveal>
        <Reveal direction="up" delay={120} className="space-y-4">
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
        <Reveal direction="up" delay={240} className="space-y-4">
          <h4 className="font-title-lg text-title-lg text-surface">Newsletter</h4>
          <p className="font-body-md text-body-md text-surface-variant">
            Stay updated with our latest impact stories and donation goals.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-white/10 border border-white/25 text-white placeholder:text-white/50 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your email"
              type="email"
            />
            <button className="bg-secondary text-white px-4 py-2 rounded-xl font-bold">Join</button>
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
