import Reveal from './Reveal'
import { SCHOLARSHIP_URL } from '../constants'

const SCHOLARSHIP_IMAGE = '/images/scholarship.jpeg'

export default function Apply() {
  return (
    <section className="pt-lg pb-xl bg-primary text-white relative overflow-hidden" id="apply">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary/15 skew-x-[-15deg] transform origin-left"></div>
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image on the left */}
          <Reveal direction="left" delay={150} className="lg:col-span-6">
            <div className="relative bg-white rounded-[2rem] p-4 md:p-8 shadow-2xl">
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-secondary text-white p-3 sm:p-4 rounded-2xl shadow-lg z-20 font-bold text-sm sm:text-base">
                OPEN NOW
              </div>
              <img
                alt="Scholarship applications open"
                className="w-full rounded-2xl border border-surface-variant"
                src={SCHOLARSHIP_IMAGE}
              />
            </div>
          </Reveal>

          {/* Copy on the right */}
          <Reveal direction="right" className="lg:col-span-6">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 font-label-md text-label-md">
                APPLICATION ONGOING
              </span>
              <h2 className="hidden sm:block font-display-lg text-3xl sm:text-display-lg-mobile md:font-headline-md md:text-headline-md">
                Your Future Begins Here: <br />Apply Now
              </h2>
              <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-10">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="shrink-0 p-3 sm:p-4 bg-white/10 rounded-2xl backdrop-blur">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">school</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg">Academic Support Grant</h4>
                    <p className="font-body-md text-body-md text-white/80">
                      Apply for ₦120,000(≃$90) toward your tuition and learning materials — 30 students selected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="shrink-0 p-3 sm:p-4 bg-secondary rounded-2xl">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg">Full Scholarship Award</h4>
                    <p className="font-body-md text-body-md text-white/80">
                      One outstanding applicant wins a ₦1,000,000(≃$750) scholarship for higher education.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="hidden lg:inline-flex bg-white text-primary px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-extrabold shadow-xl hover:scale-105 hover:bg-surface transition-all items-center gap-3"
                href={SCHOLARSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  edit_document
                </span>
                Apply Now
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" className="lg:hidden flex justify-center">
            <a
              className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-extrabold shadow-xl hover:scale-105 hover:bg-surface transition-all"
              href={SCHOLARSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                edit_document
              </span>
              Apply Now
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
