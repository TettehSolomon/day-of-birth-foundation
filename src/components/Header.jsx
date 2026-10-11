import { useEffect, useState } from 'react'
import { LOGO_URL } from '../constants'

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img alt="Day of Birth Foundation Logo" className="h-10 md:h-14 object-contain" src={LOGO_URL} />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={
                link.active
                  ? 'text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md'
                  : 'text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md'
              }
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="bg-secondary text-on-primary px-6 py-2.5 rounded-full font-bold hover:scale-95 transition-all duration-150 ease-in-out font-label-md text-label-md"
            href="#donate"
          >
            Donate
          </a>
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-margin-mobile pb-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="bg-secondary text-on-primary px-6 py-2.5 rounded-full font-bold text-center font-label-md text-label-md"
            href="#donate"
            onClick={() => setMenuOpen(false)}
          >
            Donate
          </a>
        </div>
      )}
    </header>
  )
}
