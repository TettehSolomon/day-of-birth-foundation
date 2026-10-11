const FLYER_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCu-5BG6mc69zCBW4-0NxXzzAeTMawQVh_4ShYzfi0aGb6ccyRbLfjv60ablL2tSZU8jVfhTZ-FJD9cIfrwc5LGQBqYbtazkHBvnJk3FJWh3uruJsmbfEw9iaJplk4u5teeV8kmiL8iKXV0__moSbyX6UsOqYZk850ny75oc1UogpM0JelxogjdxcQYQSPDk_LFW4cdauF0U6zcn3_5m3pBkzknKlEKtJQtVTpkakAToKc8VnJPD4JRRAVap-zipVXjcBDIiJz3OyEt'

export default function Donate() {
  return (
    <section className="py-xl bg-primary text-white relative" id="donate">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 skew-x-[-15deg] transform origin-right"></div>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 font-label-md text-label-md">
                2024 ROADMAP
              </span>
              <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-headline-md md:text-headline-md">
                Empowering the Future: <br />2024 Goals
              </h2>
              <div className="space-y-8 mt-10">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg">Academic Support</h4>
                    <p className="font-body-md text-body-md text-white/80">
                      30 students will receive 120,000 academic support each for their tuition and materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-secondary rounded-2xl">
                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-title-lg text-title-lg">Scholarship Grant</h4>
                    <p className="font-body-md text-body-md text-white/80">
                      1 beneficiary will receive a life-changing 1,000,000 scholarship grant for higher education.
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-white text-primary px-10 py-5 rounded-2xl font-extrabold shadow-xl hover:scale-105 hover:bg-surface transition-all flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  volunteer_activism
                </span>
                Donate Now
              </button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative bg-white rounded-[2rem] p-4 md:p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-lg z-20 font-bold">
                ₦5M GOAL
              </div>
              <img
                alt="2024 Foundation Flyer"
                className="w-full rounded-2xl border border-surface-variant"
                src={FLYER_IMAGE}
              />
              <div className="mt-8 flex flex-col md:flex-row gap-6 items-center border-t border-surface-variant pt-8">
                <div className="text-on-surface">
                  <p className="font-label-md text-label-md opacity-60">SCAN FOR RECAP</p>
                  <p className="font-bold text-sm">Last Year's Event</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex gap-4">
                  <a
                    className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">share</span>
                  </a>
                  <a
                    className="p-3 bg-surface-container rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
