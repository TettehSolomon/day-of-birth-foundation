import { useState } from 'react'
import { WhatsAppIcon } from './icons'

const PHONE_TEL = '+2349029322866'
const WHATSAPP_URL = 'https://wa.me/2349029322866'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed right-5 bottom-6 z-[60] flex flex-col items-center gap-3">
      <div
        className={`flex flex-col gap-2 p-2 rounded-2xl border border-surface-variant bg-white/95 backdrop-blur shadow-xl origin-bottom transition-all duration-200 ${
          open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-11 h-11 grid place-items-center rounded-full bg-[#25D366] text-white hover:-translate-y-0.5 transition-transform"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="Call us"
          className="w-11 h-11 grid place-items-center rounded-full bg-primary text-white hover:-translate-y-0.5 transition-transform"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle contact options"
        aria-expanded={open}
        className="w-14 h-14 grid place-items-center rounded-full bg-inverse-surface text-white shadow-lg hover:scale-105 transition-transform"
      >
        <span className="material-symbols-outlined text-[26px]">{open ? 'close' : 'forum'}</span>
      </button>
    </div>
  )
}
