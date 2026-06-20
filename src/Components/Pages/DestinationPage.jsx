import React from 'react'
import Navber from '../Layout/Navber'
import Footer from '../Layout/Footer'
import { FiMapPin, FiStar, FiSend, FiHeart } from 'react-icons/fi'

const popularDestinations = [
  {
    title: 'Santorini, Greece',
    subtitle: 'Aegean Sea Retreat',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    price: '$1,280',
    rating: 4.9,
    duration: '5 days',
  },
  {
    title: 'Kyoto, Japan',
    subtitle: 'Zen Garden Tour',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
    price: '$1,150',
    rating: 4.8,
    duration: '6 days',
  },
  {
    title: 'Bali, Indonesia',
    subtitle: 'Jungle & Beach',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    price: '$980',
    rating: 4.7,
    duration: '4 days',
  },
  {
    title: 'Paris, France',
    subtitle: 'City of Lights',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    price: '$1,450',
    rating: 4.9,
    duration: '7 days',
  },
]

const internationalDestinations = [
  {
    title: 'Europe',
    description: 'Historic cities, coastal escapes, and cultural journeys.',
    image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Asia',
    description: 'Vibrant traditions, serene resorts, and culinary discovery.',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Caribbean',
    description: 'Beachfront luxury, turquoise waters, and calm island days.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
]

const localDestinations = [
  { title: 'Cedar Hills', description: 'Mountain cabins and forest trails', badge: 'Mountain', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80' },
  { title: 'Sunset Cove', description: 'Coastal sunsets and private beaches', badge: 'Coast', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
  { title: 'City Lights', description: 'Luxury downtown escapes and nightlife', badge: 'Urban', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Lakeside Lodge', description: 'Quiet retreats with scenic views', badge: 'Nature', image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=900&q=80' },
]

const categories = [
  { title: 'Hotels', description: 'Handpicked stays for every budget', icon: FiMapPin },
  { title: 'Flights', description: 'Flexible routes and premium cabins', icon: FiSend },
  { title: 'Tours', description: 'Guided experiences and local experts', icon: FiStar },
  { title: 'Wellness', description: 'Relaxing escapes and spa retreats', icon: FiHeart },
]

const travelTips = [
  { title: 'Pack Light, Travel Far', description: 'Bring versatile pieces and essentials only for a smoother journey.' },
  { title: 'Book Early for Savings', description: 'Lock in flights and hotels ahead to secure the best rates.' },
  { title: 'Experience Local Culture', description: 'Try neighborhood cuisine and guided city tours for authentic memories.' },
]

const DestinationPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F7] text-slate-950">
      <Navber />

      <main className="space-y-24 pb-16">
        <section id="hero" className="relative overflow-hidden bg-[#F8F7F7] pt-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_right,_rgba(241,165,1,0.22),_transparent_45%)]" />
          <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-[#DF6951]/20 blur-3xl" />
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-[#FEF3C7] px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B45309]">Top travel experiences</span>
                <h1 className="mt-8 text-5xl font-semibold tracking-tight text-[#08101F] sm:text-6xl">Discover destinations crafted for every kind of traveler</h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Explore curated international and local journeys, premium stays, and insider tips for a seamless travel experience.</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F1A501] px-8 text-base font-semibold text-white shadow-[0_20px_40px_rgba(241,165,1,0.24)] transition hover:bg-[#d18f00]">Book Now</button>
                  <button className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 text-base font-semibold text-slate-950 transition hover:bg-slate-50">Learn More</button>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[28px] bg-white p-5 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Destinations</p>
                    <p className="mt-4 text-3xl font-semibold text-[#08101F]">120+</p>
                  </div>
                  <div className="rounded-[28px] bg-white p-5 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Happy travelers</p>
                    <p className="mt-4 text-3xl font-semibold text-[#08101F]">5.8k</p>
                  </div>
                  <div className="rounded-[28px] bg-white p-5 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Expert guides</p>
                    <p className="mt-4 text-3xl font-semibold text-[#08101F]">320+</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-6 h-40 w-40 rounded-full bg-[#F1A501]/15 blur-3xl" />
                <div className="relative space-y-6 rounded-[40px] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <article className="overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-lg">
                      <img className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80" alt="Maldives" />
                      <div className="p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#F1A501]">Beach</p>
                        <h2 className="mt-4 text-xl font-semibold">Maldives Coastal Stay</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-300">Oceanfront villas with private decks and sunset views.</p>
                      </div>
                    </article>
                    <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center justify-between text-slate-500">
                        <span className="uppercase tracking-[0.25em]">Popular</span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-semibold text-[#065F46]">+24%</span>
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold text-[#08101F]">Istanbul Adventures</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-600">Historic city tours, luxury stays, and local cuisine guides.</p>
                    </article>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <article className="rounded-[32px] bg-[#F8FAFC] p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-[#08101F]">Custom travel plans</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-600">Tailored itineraries for couples, families, and solo explorers.</p>
                    </article>
                    <article className="rounded-[32px] bg-slate-950 p-6 text-white shadow-lg">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Limited offer</p>
                      <h3 className="mt-4 text-2xl font-semibold">Summer escape packages</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-300">Save up to 30% on curated stays and experiences.</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="popular" className="bg-white py-16">
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#5E6282]">Popular Destinations</p>
                <h2 className="mt-4 text-4xl font-semibold text-[#08101F]">Most booked destinations this season</h2>
              </div>
              <button className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">View all destinations</button>
            </div>
            <div className="mt-12 grid gap-8 xl:grid-cols-4 lg:grid-cols-2">
              {popularDestinations.map((destination) => (
                <article key={destination.title} className="group overflow-hidden rounded-[32px] bg-white shadow-[0_24px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
                  <img className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.02]" src={destination.image} alt={destination.title} />
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                      <span>{destination.duration}</span>
                      <span className="inline-flex items-center gap-1 text-[#F1A501]"><FiStar /> {destination.rating}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-[#08101F]">{destination.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{destination.subtitle}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-lg font-semibold text-[#08101F]">{destination.price}</span>
                      <button className="inline-flex h-11 items-center justify-center rounded-2xl bg-[#F1A501] px-5 text-sm font-semibold text-white transition hover:bg-[#d18f00]">Book</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="international" className="bg-[#F8F7F7] py-16">
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#5E6282]">International Destinations</p>
                <h2 className="mt-4 text-4xl font-semibold text-[#08101F]">See the world with premium guidance</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Choose from immersive international routes with tailored last-mile services and destination experiences.</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {internationalDestinations.map((item) => (
                    <article key={item.title} className="rounded-[32px] bg-white p-6 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
                      <div className="overflow-hidden rounded-[26px]">
                        <img className="h-52 w-full object-cover" src={item.image} alt={item.title} />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold text-[#08101F]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                      <button className="mt-6 inline-flex items-center rounded-2xl bg-[#F1A501] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d18f00]">Explore {item.title}</button>
                    </article>
                  ))}
                </div>
              </div>
              <div className="rounded-[40px] bg-[#08101F] p-10 text-white shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
                <div className="flex items-center justify-between rounded-3xl bg-[#0f172a]/10 px-6 py-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Traveler score</p>
                    <p className="mt-3 text-4xl font-semibold">4.9/5</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Trusted</p>
                    <p className="mt-3 text-2xl font-semibold">Global</p>
                  </div>
                </div>
                <div className="mt-10 space-y-5">
                  <div className="rounded-[28px] bg-white/8 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Every trip</p>
                    <p className="mt-3 text-xl font-semibold">Personalized support, 24/7.</p>
                  </div>
                  <div className="rounded-[28px] bg-white/8 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Why travelers love us</p>
                    <p className="mt-3 text-xl font-semibold">Seamless planning for unique journeys.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="local" className="bg-white py-16">
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#5E6282]">Local Destinations</p>
                <h2 className="mt-4 text-4xl font-semibold text-[#08101F]">Discover close-to-home escapes</h2>
              </div>
              <button className="inline-flex h-14 items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">Browse local stays</button>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {localDestinations.map((item) => (
                <article key={item.title} className="group overflow-hidden rounded-[32px] bg-white shadow-[0_24px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
                  <div className="relative h-64 overflow-hidden">
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={item.image} alt={item.title} />
                    <span className="absolute left-4 top-4 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900">{item.badge}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#08101F]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                    <button className="mt-6 inline-flex items-center rounded-2xl bg-[#F1A501] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d18f00]">View details</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F7F7] py-16">
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5E6282]">Categories</p>
              <h2 className="mt-4 text-4xl font-semibold text-[#08101F]">Travel services that match your journey</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_50px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)]">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F1A501]/10 text-[#F1A501]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-[#08101F]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="tips" className="bg-white py-16">
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_0.25fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#5E6282]">Travel Tips</p>
                <h2 className="mt-4 text-4xl font-semibold text-[#08101F]">Smart tips for every trip</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Stay prepared with expert planning advice, packing guidance, and planning strategies for memorable travel.</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {travelTips.map((tip) => (
                    <article key={tip.title} className="rounded-[32px] bg-[#F8F7F7] p-8 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
                      <h3 className="text-2xl font-semibold text-[#08101F]">{tip.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-600">{tip.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="rounded-[40px] bg-[#08101F] p-10 text-white shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Need help planning?</p>
                <h3 className="mt-4 text-3xl font-semibold">Our travel experts are ready to help.</h3>
                <p className="mt-5 text-sm leading-7 text-slate-300">Book a planning call, ask for custom routes, or get help building your itinerary.</p>
                <div className="mt-10 space-y-5">
                  <div className="rounded-[28px] bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Support</p>
                    <p className="mt-3 text-lg font-semibold">Fast response within 24 hours</p>
                  </div>
                  <div className="rounded-[28px] bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Flexible packages</p>
                    <p className="mt-3 text-lg font-semibold">Adaptable itineraries for families and couples</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08101F] py-20">
          <div className="mx-auto max-w-[1370px] px-6 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_0.22fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#94A3B8]">Ready to plan?</p>
                <h2 className="mt-4 text-4xl font-semibold text-white">Start your next adventure with a trusted travel partner.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">From international escapes to local staycations, our team is here to build the perfect trip.</p>
              </div>
              <div className="flex items-center justify-end">
                <button className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#F1A501] px-8 text-base font-semibold text-[#08101F] transition hover:bg-[#d18f00]">Start planning</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default DestinationPage
