import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'

// Candidate image paths. Any that don't exist are dropped automatically on load,
// so removing a file from /images simply removes it from the gallery.
const GALLERY_IMAGES = Array.from({ length: 30 }, (_, i) => `/images/img${i + 1}.jpg`)

const DRIVE_URL = ''

export default function Gallery() {
  const [broken, setBroken] = useState(() => new Set())

  // Start at the top when landing on the page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const visibleImages = GALLERY_IMAGES.filter((src) => !broken.has(src))

  return (
    <main>
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">photo_library</span>
              Our Moments
            </span>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h1 className="mt-4 font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
              Gallery
            </h1>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p className="mt-4 font-body-md text-body-md text-tertiary max-w-2xl mx-auto">
              A glimpse into the lives we've touched — the smiles, the milestones, and the moments that make our mission
              worth it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {visibleImages.map((src, i) => (
              <Reveal key={src} direction="up" delay={(i % 3) * 90} className="mb-6 break-inside-avoid">
                <img
                  src={src}
                  alt={`Day of Birth Foundation moment ${i + 1}`}
                  loading="lazy"
                  onError={() => setBroken((prev) => new Set(prev).add(src))}
                  className="w-full rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                />
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" className="mt-12 flex justify-center">
            <a
              href={DRIVE_URL}
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:translate-y-[-2px] transition-all"
            >
              View All
              <span className="material-symbols-outlined">arrow_outward</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
