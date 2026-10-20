import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Impact from '../components/Impact'
import Donate from '../components/Donate'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  // When arriving with a hash (e.g. navigating "/#about" from the Gallery page),
  // scroll to that section once the page has rendered.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [hash])

  return (
    <main>
      <Hero />
      <Impact />
      <Donate />
      <Contact />
    </main>
  )
}
