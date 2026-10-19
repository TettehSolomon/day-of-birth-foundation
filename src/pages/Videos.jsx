import { useEffect } from 'react'
import Reveal from '../components/Reveal'

// Files live in /public/videos. Names keep spaces/apostrophes, so encode for the URL.
const VIDEOS = [
  { file: "Joy's Interview.mp4", title: "Joy's Interview" },
  { file: "Emmanuella's Interview.mp4", title: "Emmanuella's Interview" },
  { file: "Mario's interview.mp4", title: "Mario's Interview" },
  { file: "Last year's Event Recap.mp4", title: "Last Year's Event Recap" },
]

export default function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16 hero-pattern">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
              Watch &amp; Listen
            </span>
          </Reveal>
          <Reveal direction="up" delay={120}>
            <h1 className="mt-4 font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
              Videos
            </h1>
          </Reveal>
          <Reveal direction="up" delay={240}>
            <p className="mt-4 font-body-md text-body-md text-tertiary max-w-2xl mx-auto">
              Hear it straight from our beneficiaries — their stories, their journeys, and highlights from our events.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video, i) => (
              <Reveal key={video.file} direction="up" delay={(i % 4) * 100}>
                <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-surface-variant">
                  <div className="aspect-square bg-inverse-surface">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      preload="metadata"
                      playsInline
                      src={`/videos/${encodeURIComponent(video.file)}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0">play_circle</span>
                    <h3 className="font-title-lg text-base font-semibold text-on-surface leading-tight">{video.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
