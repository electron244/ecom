import { Link } from 'react-router-dom'
import { MdBolt, MdSearch, MdShoppingBag, MdFavorite, MdShare, MdStar, MdRemove, MdAdd, MdShoppingCart, MdExpandMore, MdArrowForward } from 'react-icons/md'

const thumbnails = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDqy5x7X1fGKi3jykdwEwi8o9Q8ELJ80eiPxP6hmPortanc1cP-dFX1sQU4GGIJqvZF4axd5codvMcJRYfDUaeqCCHjrGVz6NsvARGd5KYyJKeBaGwclwYFonPHsWjIah_cLDULmdch3Mgf1Nt6xvf6kkGtqIFJPWGn1tCFUSae6VOUylkTNhBor1eQk_x-NnzX-yWLKml1YCuN5KxxBInry5aTFnFKgReCKc6zl0Dq7cJrEjZVGMtx2k7BXhac9Y9Nd-LbOa1qgQM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVMPl0d31Yc7cKwX8T7eqJ_yBrX2Gh7XmHWo0a_iVp66Rd8YnwfghsCt76OXpFLWrP9ohC-aWQznck_OS28wdB-9mI1f8wwkODPqioadYVqHD2o6b-_w7LHe8SIH5pY_haQo94Mzx_kE_rmTlQZLBKhdfor2TdQrx4ecMrLvZ1yKe6oNxlCxYkcAQlPaoVIdaJVOi5rlkrQWwVwhLYN2-opVfFhdQDB1GY-207yanBPkA1821KRQe3WIEubVTQ3jkRcWDjQYQ2yi0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnug-32x_e3FanJ3WRnUyjWhc4iM3d7QsAnmv4zBcG4dUJUqq73rfk6p-TeIgvbbhq3C7PZj78kHP5l-W7xgekB3i_gbMhcHYu_j38Q-e6ZW4Vzeqqx8Z8mAPkSzOAxNXlcaUx_RJwwqEY6qEUR6TYmicIujl70IyvkzHrjnk0LuiaQoQKM9yKEAgAjUbigE8OBZbfcfRCCJ4ENbUjyRoWigQU_1cnvDUt3Qa8xip_PKCYtMM8ghfftC-N4A7UY9PHyuwNuxH6j88',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBiHfuRMJm9cQVFBRrSbIDSxFo2zc2e1arh4IiWmL5opbWqNzuJuOXoOPfPa6IBunmsqXWKQTTExsXw1PfxEie5zn2aZBC6NHXova1EKoOpHaltpGCojmEKrlxr2_J0pgXQkSQscE6vgYzQKtd1Ovrksy9HBCTPoi0U4VQlGg_ZOt7m7MzoztqaA2Klxj0CZ2BbAeDht_T5bfXMXL55zDoMwSqiU500S4tGbRLN12dqjX2_1v-1_6SwWz8lyccExLp1TK8gdVf69QU',
]

const recommended = [
  { name: 'Leather Bifold Wallet', price: '$85.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtPVoyWSY8wjoLCzKFbU3qlIZRn8_aYLfwHHFU5D5fC7cCqCWcacVLDqlBjWZ2ojl459AuEcMy1zaCXUbT1UAscEMs4TSJkQa2DAT4iinxx_ACgirQlP5D4D9E18T4kK5xWVNAphOnETnDnQFvUDxE8td9sTC9EXa_36CJgedJe0CI-aq3DZOSQ18Q2kzUGsffA0dTS_eOvd4FdK6AHSHgdoyxAtImg1izHloYsQNC-LHD8zgBGIx-RjVvZuOImfNWAVB2pgD5SuE' },
  { name: 'Midnight Aviators', price: '$120.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA971DV7pJtEbuuEekabpeeBmRpxTnspRWeteq_YyIn_3Cjv3JcOofblLgDd1fqY6fipqTP8y0qSNMStW_b1coZDH3wTiDAU8p4k35yBvoIxG9QExUbN3e88qDB_6mNGgnhfJg1X9es6tZRN2FeJpKvCCeGwAPtOrRpOOvLJVqYgIaDNeSiUU_6M_YG9O4bRu4r5SK2sEXLL-J4iNo6q7zdpkJBzqKknjIANgNVsIfTP_CQpDskc4TZ-aL-ece1LVAi-6fvLEojvhs' },
  { name: 'Concrete Desk Valet', price: '$65.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSUB44JA3g-6VOcf3iUqcsJhq8ynXsOGsi4LvSAugaApQvsDHCFO5CFxxqBtqEYoYWqWe7UxW6doSO6oY1Z6p33EI3dG204YazUOXdvnjN4r_hvppYWOVraV0ILZySUBX1qnqURDo1MOawIbAD_WMWti5j85UlFlYq6d-CDzuwvUUvhDjzn-hS5_OMVuWuIZ7_PouiMGF-ue8kLlsxjhJ35GLVnkJmpO-k1oZTPkVSl0xdgLs7KEwHPyvR637JzkT3Kuq3dA20sWc' },
  { name: 'Nomad Canvas Pack', price: '$195.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX_ThAYqh6-Pi-0CgRcZuzG_SNCWkqq2Xd4NwAK2QlcVxaNUWBHkQH6WwuSQzknw81pDbBvUc_MDb4ubEiFFYd2D-56UTXSPB5MPNvW9_gcODzEZbXLk_d9rN5SNxSpl-U5a4V0PEW9kBKjSxr-CqOEz4dNGEXYbsv-n3D6XDzKV2ORZyzuvCjKy-sGfhDLzZ2wP4-bcv5QOrs9Iv4Zn9XV1-1e7QQw3IP1IsSEVs1dIVWuhpf5p5pPyg6j31ctyoGAcrqO6Gx4dA' },
]

export default function ProductDetailPage() {
  return (
    <div className="bg-background-light text-slate-900">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-4 lg:px-20 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-background-dark">
                <MdBolt className="text-2xl" />
              </Link>
              <Link to="/" className="text-xl font-extrabold tracking-tight">MINIMA</Link>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <Link className="hover:text-primary transition-colors" to="/products">Shop All</Link>
              <Link className="hover:text-primary transition-colors" to="/products">New Arrivals</Link>
              <Link className="hover:text-primary transition-colors" to="/products">Collections</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <MdSearch className="text-2xl" />
              </button>
              <Link to="/cart" className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
                <MdShoppingBag className="text-2xl" />
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-background-dark">2</span>
              </Link>
              <Link to="/profile" className="h-10 w-10 rounded-full border-2 border-primary/20 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQIgWbsZtK4SjPyatJTF5ZCa4WsHUZCGT5Dp1wsB7joVPsvlkUdFExNIMUlWBUctcpKFaTTeWVyrRxbBJQW_MR7-DSMKyr5yg2vd1Zre0CT5p4ffqIVI1OBdKmYUUxYGqosWxgU7rkzMu6WXJJ6jB6ft6OZkHN0zJ7YIV3khg8H4Bf28Gj6uVlkCgmpIvSbNwy0IPp3zULJtZb7MtWLecwpQDHFR6GtqBKCswH5M7rY7H_7OswUJKWJHBggDPeq-7pH_4VB3YEm8o')` }}></Link>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Product Gallery */}
            <div className="flex flex-col gap-4">
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500">
                <img
                  alt="Product"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIQoUZ-147hBlxKjrCqT2N7zFAQRxC-WE371FIGIYkV6Gt05cfoPMbH6vJjusjOh4aJ5vGgmn0Gh6SuvMCAv7__mmlfYAvIhkntNgH3TyD6eTjrwfqGKV7bl_b8sHcH6CbE26aVW5V0Fu2KsRiZtw4ty57bvD7lIuBTue1TLU65uWG1kIOv-g4zvYCz8MdIgaRYja_uV0qpEhBKKfO4kv21gRVfKCsxV24uzJc2XgVom6omX-tNX6oh6RtMtXYnuKCXWlYIgJ1XSs"
                />
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg hover:text-primary transition-colors">
                    <MdFavorite className="text-xl" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg hover:text-primary transition-colors">
                    <MdShare className="text-xl" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {thumbnails.map((thumb, i) => (
                  <div key={i} className={`aspect-square cursor-pointer overflow-hidden rounded-xl transition-all ${i === 0 ? 'border-2 border-primary ring-2 ring-primary/20 ring-offset-2 ring-offset-background-light' : 'border border-transparent hover:border-primary/50 opacity-70 hover:opacity-100'}`}>
                    <img className="h-full w-full object-cover" src={thumb} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6 flex items-center gap-2">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">New Collection</span>
                <div className="flex items-center gap-1 text-primary">
                  <MdStar className="text-sm" />
                  <span className="text-sm font-bold text-slate-900">4.9 (128 reviews)</span>
                </div>
              </div>
              <h1 className="mb-2 text-4xl font-black tracking-tight lg:text-5xl">Titanium Edge Chrono</h1>
              <p className="mb-6 text-3xl font-light text-primary">$499.00</p>
              <p className="mb-8 text-slate-600 leading-relaxed">
                Engineered with aerospace-grade titanium and an unscratchable sapphire crystal face. This timepiece combines industrial durability with modern elegance, featuring a 72-hour power reserve and water resistance up to 100 meters.
              </p>

              {/* Color Selector */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest">Select Finish</h3>
                <div className="flex gap-3">
                  <button className="h-10 w-10 rounded-full border-2 border-primary bg-slate-900 ring-2 ring-primary/20 ring-offset-2 ring-offset-background-light"></button>
                  <button className="h-10 w-10 rounded-full border border-slate-300 bg-slate-400"></button>
                  <button className="h-10 w-10 rounded-full border border-slate-300 bg-amber-600"></button>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mb-10 flex flex-wrap gap-4">
                <div className="flex h-14 items-center rounded-xl bg-slate-100 px-4">
                  <button className="p-2 hover:text-primary"><MdRemove className="text-xl" /></button>
                  <span className="w-12 text-center font-bold">1</span>
                  <button className="p-2 hover:text-primary"><MdAdd className="text-xl" /></button>
                </div>
                <button className="flex h-14 flex-1 items-center justify-center gap-3 rounded-xl bg-primary px-8 font-black text-background-dark shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  <MdShoppingCart className="text-xl" />
                  ADD TO CART
                </button>
              </div>

              {/* Accordion Sections */}
              <div className="divide-y divide-primary/10 border-t border-primary/10">
                <details className="group py-4" open>
                  <summary className="flex cursor-pointer items-center justify-between font-bold uppercase tracking-widest list-none">
                    <span>Technical Details</span>
                    <MdExpandMore className="text-2xl transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p>• Case Size: 42mm Titanium Alloy</p>
                    <p>• Movement: Precision Swiss Quartz</p>
                    <p>• Band: Premium Italian Leather with quick-release</p>
                    <p>• Features: Luminous markers, Date window, Tachymeter</p>
                  </div>
                </details>
                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold uppercase tracking-widest list-none">
                    <span>Shipping & Returns</span>
                    <MdExpandMore className="text-2xl transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-sm text-slate-600">
                    <p>Free standard shipping on all orders over $150. Expedited shipping available at checkout. Returns accepted within 30 days of delivery for a full refund or exchange.</p>
                  </div>
                </details>
                <details className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between font-bold uppercase tracking-widest list-none">
                    <span>Warranty</span>
                    <MdExpandMore className="text-2xl transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 text-sm text-slate-600">
                    <p>Each timepiece comes with a 2-year international manufacturer&apos;s warranty covering manufacturing defects and movement accuracy.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Recommended Products */}
          <section className="mt-24">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-black">Complete the Look</h2>
                <p className="text-slate-600">Curated accessories for your new timepiece.</p>
              </div>
              <Link className="flex items-center gap-2 font-bold text-primary hover:underline" to="/products">
                View All
                <MdArrowForward className="text-sm" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommended.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={item.image} />
                    <button className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark opacity-0 transition-all group-hover:opacity-100 hover:scale-110">
                      <MdAdd className="text-xl" />
                    </button>
                  </div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-slate-500">{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t border-primary/10 bg-white py-12 px-4 lg:px-20">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-background-dark">
                  <MdBolt className="text-sm" />
                </div>
                <h2 className="text-lg font-extrabold tracking-tight">MINIMA</h2>
              </div>
              <p className="max-w-xs text-sm text-slate-500">Exceptional goods crafted with precision and purpose. For those who value details.</p>
            </div>
            <div className="grid grid-cols-2 gap-20 sm:grid-cols-3">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-black uppercase tracking-widest">Shop</h4>
                <ul className="flex flex-col gap-2 text-sm text-slate-500">
                  <li><Link className="hover:text-primary" to="/products">All Products</Link></li>
                  <li><a className="hover:text-primary" href="#">New Items</a></li>
                  <li><a className="hover:text-primary" href="#">Sale</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-black uppercase tracking-widest">Support</h4>
                <ul className="flex flex-col gap-2 text-sm text-slate-500">
                  <li><a className="hover:text-primary" href="#">Contact</a></li>
                  <li><a className="hover:text-primary" href="#">FAQ</a></li>
                  <li><a className="hover:text-primary" href="#">Track Order</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-black uppercase tracking-widest">Social</h4>
                <ul className="flex flex-col gap-2 text-sm text-slate-500">
                  <li><a className="hover:text-primary" href="#">Instagram</a></li>
                  <li><a className="hover:text-primary" href="#">Twitter</a></li>
                  <li><a className="hover:text-primary" href="#">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl border-t border-primary/5 pt-8 text-center text-xs text-slate-400">
            © 2024 MINIMA Goods. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}
