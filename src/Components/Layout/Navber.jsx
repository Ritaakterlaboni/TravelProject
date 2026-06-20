import React from 'react'
import Container from '../../Container'
import Images from '../../Images'
import Logo from '../../assets/Logo.png'
import { IoIosArrowDown } from 'react-icons/io'

const Navber = () => {
  return (
    <div className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F1A501] via-[#DF6951] to-[#F97316] text-white shadow-lg shadow-[#F1A501]/20">
            <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/90"></div>
            <div className="absolute right-2 bottom-2 h-2.5 w-2.5 rounded-full bg-white"></div>
            <span className="text-base font-extrabold">T</span>
          </div>
          <div className="text-lg font-semibold tracking-tight text-slate-900">Travelist</div>
        </div>

        <nav className="flex flex-wrap items-center gap-8 text-sm font-medium text-slate-700">
          <a className="transition hover:text-slate-950" href="#hero">Destinations</a>
          <a className="transition hover:text-slate-950" href="#popular">Hotels</a>
          <a className="transition hover:text-slate-950" href="#international">Flights</a>
          <a className="transition hover:text-slate-950" href="#local">Bookings</a>
          <a className="transition hover:text-slate-950" href="#tips">Tips</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-slate-300 bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">Sign Up</button>
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-950">
            EN <IoIosArrowDown />
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Navber
