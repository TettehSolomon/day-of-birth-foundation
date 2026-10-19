import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LOGO_URL } from '../constants'

const NAV_ITEMS = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Videos', to: '/videos' },
  { label: 'Contact', hash: '#contact' },
]

const SECTION_HASHES = NAV_ITEMS.filter((item) => item.hash).map((item) => item.hash)

const DESKTOP_ACTIVE = 'text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md'
const DESKTOP_INACTIVE = 'text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy for the home sections — only active while on the home page.
  useEffect(() => {
    if (!onHome) return

    const sections = SECTION_HASHES.map((hash) => document.querySelector(hash)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [onHome])

  // Mobile drawer: close on Escape, lock body scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const goToSection = (hash) => {
    close()
    if (onHome) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', hash)
    } else {
      navigate('/' + hash)
    }
  }

  const isActive = (item) => (item.to ? location.pathname === item.to : onHome && activeSection === item.hash)

  return (
    <>
      <header
        className={`bg-surface/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md py-2' : 'py-4'
        }`}
      >
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              goToSection('#home')
            }}
            className="flex items-center gap-2"
          >
            <img alt="Day of Birth Foundation Logo" className="h-10 md:h-14 object-contain" src={LOGO_URL} />
          </a>
          <div className="hidden lg:flex gap-6 items-center">
            {NAV_ITEMS.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} onClick={close} className={isActive(item) ? DESKTOP_ACTIVE : DESKTOP_INACTIVE}>
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.hash}
                  onClick={(e) => {
                    e.preventDefault()
                    goToSection(item.hash)
                  }}
                  className={isActive(item) ? DESKTOP_ACTIVE : DESKTOP_INACTIVE}
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              className="bg-secondary text-on-primary px-6 py-2.5 rounded-full font-bold hover:scale-95 transition-all duration-150 ease-in-out font-label-md text-label-md"
              href="#donate"
              onClick={(e) => {
                e.preventDefault()
                goToSection('#donate')
              }}
            >
              Donate
            </a>
          </div>

          {/* Animated hamburger → X */}
          <button
            className="lg:hidden p-2 relative w-10 h-10 flex items-center justify-center text-primary"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="relative block w-6 h-5">
              <span
                className={`absolute left-0 top-0 h-[2.5px] w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? 'translate-y-[9px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute right-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-full opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[2.5px] w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? '-translate-y-[9px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Dimmed backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-[9999] h-full w-[78%] max-w-xs bg-surface shadow-2xl transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center gap-2 px-margin-mobile py-4 border-b border-surface-variant">
          <img alt="Day of Birth Foundation Logo" className="h-10 object-contain" src={LOGO_URL} />
        </div>

        <nav className="flex flex-col px-margin-mobile py-md gap-sm">
          {NAV_ITEMS.map((item) => {
            const cls = `rounded-xl px-4 py-3 transition-colors font-label-md text-label-md ${
              isActive(item)
                ? 'text-primary font-bold bg-surface-container'
                : 'text-on-surface hover:text-primary hover:bg-surface-container'
            }`
            return item.to ? (
              <Link key={item.label} to={item.to} onClick={close} className={cls}>
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.hash}
                onClick={(e) => {
                  e.preventDefault()
                  goToSection(item.hash)
                }}
                className={cls}
              >
                {item.label}
              </a>
            )
          })}

          <a
            href="#donate"
            onClick={(e) => {
              e.preventDefault()
              goToSection('#donate')
            }}
            className="mt-md bg-secondary text-on-primary text-center px-6 py-3 rounded-full font-bold hover:bg-secondary/90 transition-all active:scale-95 shadow-lg font-label-md text-label-md"
          >
            Donate
          </a>
        </nav>
      </aside>
    </>
  )
}
