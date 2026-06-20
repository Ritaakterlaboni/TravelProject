import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#08101F] text-white">
      <div className="mx-auto w-full max-w-[1370px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8]">Travelist</p>
            <h2 className="mt-4 text-3xl font-semibold">Plan your next escape with confidence.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Get tailored recommendations, exclusive offers, and support for every step of your journey.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8]">Explore</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>Popular Destinations</li>
              <li>International Trips</li>
              <li>Local Escapes</li>
              <li>Travel Tips</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8]">Support</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8]">Stay connected</p>
            <p className="mt-6 text-sm leading-7 text-slate-300">Subscribe for travel updates, early access deals, and curated destination guides.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input className="min-w-0 flex-1 rounded-2xl border border-slate-700 bg-[#0F172A]/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#F1A501] focus:outline-none" placeholder="Your email" type="email" />
              <button className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#F1A501] px-6 text-sm font-semibold text-[#08101F] transition hover:bg-[#d18f00]">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Travelist. All rights reserved.</p>
          <p>Designed for modern explorers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
