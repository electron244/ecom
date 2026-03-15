import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { MdSearch, MdFavoriteBorder, MdStar, MdStarOutline, MdChevronLeft, MdChevronRight, MdPublic, MdAlternateEmail, MdShare } from 'react-icons/md'

const products = [
  { id: 1, name: 'Classic Minimalist Tee', subtitle: 'Sustainably Sourced Cotton', price: '$45.00', badge: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANcp2fOdtDWKZ8cHWEq3Q2s6y6upgWMKVl-6bzFkK9QWmQWxnUuV3Pyde24F6zk2M7iShicKALZO3hF9X8mjGfd4g026CqdXsgmdUlabB3eJvbRer4krOTwd0r838diyaAKvGn0n2YQUSPNU5XsJ59I-kq0ONBt8ke2Yw7mHWkGr1XHXaLuDVkyrfOi3-1eMmReCjqV8__Wz4BHvQ87HAl4k66OkQDg6ovWi045cq6rVuZci5W6xw27LTepGwZlJRvFw40MMyRtws', hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7k_ieRYw9e3epQe2eJ_zLbIz7DHtOmnvGvjbo5mL_T45ssmqvWyVxKd3NA03wErGt7SD1pueZL_i9mqNuU95O_WE9nR_DUUcL2sM1rzEKCZ_xGkOTPUNY86lDWjpf2DcYENdEP_0VARAP6-B1tLveGAG5gnzoJzPzmg3bs-LqBHOisqWsTD8UCuXKFWCKAP8ADa68ZJVqwj_seFMS1_RDjH35-_whMso-Sm_viI9F0RPOaHZ9Zg9Yg2XRHLCd5Yjl6M6G-NEdTR0' },
  { id: 2, name: 'Merino Wool Pullover', subtitle: 'Ethical Wool Traceable', price: '$120.00', badge: 'New Arrival', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8jCv7WXsSIiKDSmfyAUpLYWXf7o4t7hXc5X2NWd2rWZlA7_0uQQWtrZfEeAPUZrWG9kBYvOMwwvoSysQ4gK5tGmV4qJg3Q5mXCjU1EgGBexiuFQUg6MppAoJHQE9ri8qPyjIn_Unfq5w_Hv75ZrjgAuoT07AJ_6TRTiU2eDMA5pi5k9Q59UaWookunOfK9h_itCFFOLK9atXN05jLFscFNxihFfRK3FCzWIOY59mlk0Yt89YL8kby4VdzI0N43f4R9v2VwRWsmro', hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzs6YTnbBHrJfWAcFoLzAnnK2tcH9D13GoFT5MKgixlFG_Qa3SM1EAqrd1BeTxx9pw5m-z9d6ssNE2FwvH2dpIAW0Zjv1FGy-60DYvTc-FY4VWUwOuONzsk2RPckKXa8iNWO-Goue1NOL4_1C8KpJEP4dDstggeS0anYMmBcnZPc-GtzMWtSUp_xzfWMsU3Hbq0grz-3SYs_0F1_-aMIOjm0dz4q1QRdssAKyyyrRUgYVL2qGSNU6-GpUd-dBiQ83fAbMvZFHj0BA' },
  { id: 3, name: 'EcoRunner Pro', subtitle: '100% Recycled PET', price: '$89.00', badge: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Bfofks3ynC6QLTfD6MIm2QQhq7bt-FvQsaYmbJeWu578-PkES1OOmCVqPaM4PNMEBdmulJgXb7KSN2lFAhzWE46s2zAHeMwMZhP4aiRhDBopeHHL9LnaS0YSdO5theEgI16NrbgHBNZZLohdNKDqPj5eWXMXrGVQLXWPjqsJb2NMR6Eh38593PaI1SqTRAeFGO822bta7AiG4bR286PfYJqh5Umx_NS9FND_sdhpjdmwtIsTpN6ZgRBz1Yqjyr0VhswAD34QjY4', hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj44XTbX-Ec5LMOWVqB6DSjl_D1wwJm3QCSNRTtp-ba7hJsDTWe6Cbi8--dMu0F6HB99hqKnby0xU7LVpEYubiViKwo95KEk6eB7whJKpdws-N6KNtI2tsT3J3bPnPatgMFaktcEAW1s8_K5J5vxhPZCUknToeCQJtzcSkM6WrNdqOaGEZnvuuXoDclKlHCsnRFpFFmZl3pFvVUhQLPm2x1qe7FllVWZXfcyoLopj33l4PVBvUQG_yI-wzPuA8_g3EzQm8s7bF7QY' },
  { id: 4, name: 'TideBreaker Shades', subtitle: 'Polarized UV-400', price: '$65.00', badge: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBupiFVAQaIRVz-YEkYx5zPI4pLY0xIDhnEpQ-z-6f8xeGAxGgo-TCCEHWi6JnY2nmSPGnAYfbuqe8l-JyncuvU1WP2MAtayuxYMpEdDzF66-rB4nAUiejrlrUIcq-KR-GKE-ztTNw5Znbyf0eo20yx_YstGRijhkLrLN5WgcfB3znctLmbZnGCfXz3qI3UcVJqFKzZcjpjR6y221r-8Ux0CTvvp7D0w2eQeXnA3D0tkhnUQEPLwmB78A6AXd2qTuCM5w9ljqMnIHA', hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXAZKmMY8D9g1IqNu09dZRdVnRJ-gpRCKOiPukrBoud_Z3GDGyn16n6NHA_HlhINsdLDrul7A_JEB5Pbund_7Dfnr9492HDVoW2Zl0dIFlwypzUi2Sxl-qqckxewFMHWQc56UDNr_8seSs5yNZ_Hhl-9c8Ihq3YZlxgISSSHp5YP2LqatzNbUYPhpPrdfSHgJXfQ96xuZifQu_cI0LTohqg0XYBek4tPu2GJNL_UjU-fgNy_KVomqptRo49tU7li2PUatp2uJ6sXg' },
  { id: 5, name: 'Nomad Hemp Pack', subtitle: 'Water Resistant Coating', price: '$145.00', badge: 'Best Seller', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2tJLMUrea1O_lptcF9E-h9O1vG4cuWpRctA0uIlju_gRm3BrsxxAj9sj_VLrV9G0lxn3wDZivHMfeqEpZkdIoYDlOdO3YubZDbnps9rjFgG_GHjfXXErvd1a91bMKLYuFI6vSrsyvfeZdSgFP8J6Qt_j5l44FZNQl_OG56yRKOJT0HSilVoKCd0qGK_GhepR0yQUxoofPSERBsGHy2szXfzP6-_D4MV5VFuWnl45uf8BVk4SHYqq2hVkrysjgQ7peD8247Or-GrY', hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDig3Fi9e74EjtMBY9mjw7Ag0e9aklGHvKzJGIkI6N29o6-pmGDFfEvkDlebu9yPHKIhDKMMW2eIcypEWWhuE6J4sGSL58mgZPsgZzjvi5c6FzWIGweCRVwv4ojhdYTRC3e4tbvL_uvylZRGOvaEcGKFHTW19pKp-doNPmtncZcUpURVsCyhT1-pdYZhV8HY1U0lkwtkpeMrl5Kff0Mrp3wC_qB29QeCv0nzZ-yOSQiy0-bRDuw3C-3youHZPfvjbOXMnnjx1bP6zo' },
  { id: 6, name: 'Zero-Waste Denim Jacket', subtitle: 'Low-Impact Dye Process', price: '$110.00', badge: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg1gNKgaTk3zgSHbHp116nxVhGUeAOG_njry0lfbZjxT_8gyEjcYD-kpSFrX2lNpf2ez5NuwFou3EqWgX0VKYmGVCRgJc9LUHY_sJLnj9VkWQ-tNxfujS85iliEdWF7nA55-GTsddT30DGVJJ8zcXBQGdeSqV-lAS1RVsl6ITD9gXJThZddq5lcqQcdxCn0-6X_1gYEx2P-SUY-mCwHRyVFQt5XW4JLp2R__nDGi_YwQUVMsDNXoVW8w_lbtg1w2rYw1-HMUMjR2M', hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAodSB0V99hHNswHYsgQf_dzU6kQQAq8DWmrwI168kg6ulwzaMWEJh7F5ERCZs67RsVAgXT06d-UcZ1x9ElvU3MS0__zUyAgqki30RfDW_9Izxo-KwsChc7-DvmwaM9ILbmoa8oEpoQCYz26E6YSNibKP4rJRiOmgsQ6tyUFybXNkuiWVgSrIwEYSJLtztOI8ncD6Zp0X-cUHyhhcnW_c_sAKEEywi_iAPU3_ZylZpJnwhzaxKo5G8eSCJCEqWujATRv4kycviQFXI' },
]

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export default function ProductListingPage() {
  return (
    <div className="bg-background-light text-slate-900 antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
            {/* Search */}
            <div className="relative">
              <input className="w-full bg-primary/5 border-none rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary text-sm" placeholder="Search products..." type="text" />
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            </div>

            {/* Category */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-500">Categories</h3>
              <div className="space-y-2">
                {['All Products', 'Apparel', 'Accessories', 'Footwear'].map((cat, i) => (
                  <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                    <input defaultChecked={i === 0} className="rounded border-primary/20 text-primary focus:ring-primary bg-transparent" type="checkbox" />
                    <span className="text-sm group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-500">Price Range</h3>
              <div className="px-2">
                <input className="w-full accent-primary h-1 bg-primary/20 rounded-full appearance-none cursor-pointer" type="range" />
                <div className="flex justify-between mt-2 text-xs font-medium">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-500">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((s) => (
                  <button key={s} className={`h-10 text-xs font-bold border rounded-lg transition-all ${s === 'M' ? 'bg-primary text-background-dark border-primary' : 'border-primary/20 hover:border-primary hover:bg-primary hover:text-background-dark'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-500">Rating</h3>
              <button className="flex items-center gap-1 text-primary">
                {[1, 2, 3, 4].map((i) => <MdStar key={i} className="text-sm" />)}
                <MdStarOutline className="text-sm" />
                <span className="text-xs text-slate-500 ml-2">&amp; Up</span>
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-extrabold">All Products</h1>
                <p className="text-sm text-slate-500">Showing 1-6 of 48 products</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-xs font-bold">Sort by:</span>
                  <select className="bg-transparent border-none text-xs font-bold focus:ring-0 p-0 pr-8">
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {products.map((product) => (
                <div key={product.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 transition-all duration-500">
                    <img alt={product.name} className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0" src={product.image} />
                    <img alt={`${product.name} detail`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100" src={product.hoverImage} />
                    {product.badge && (
                      <div className={`absolute top-4 left-4 px-2 py-1 text-[10px] font-black uppercase rounded-full ${product.badge === 'Best Seller' ? 'bg-primary/20 text-primary border border-primary/30 backdrop-blur-md' : 'bg-primary text-background-dark'}`}>
                        {product.badge}
                      </div>
                    )}
                    <button className="absolute top-4 right-4 p-2 rounded-full bg-white/90 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <MdFavoriteBorder className="text-xl" />
                    </button>
                    <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Link to={`/product/${product.id}`} className="block w-full py-3 bg-primary text-background-dark font-bold rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        Quick Add
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{product.name}</h3>
                      </Link>
                      <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>
                    </div>
                    <p className="text-sm font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex items-center justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary transition-colors">
                <MdChevronLeft className="text-xl" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-background-dark font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary transition-colors">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary transition-colors">8</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-primary/20 hover:border-primary transition-colors">
                <MdChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-primary/10 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-primary rounded text-background-dark">
                  <MdEco className="text-xl" />
                </div>
                <h2 className="text-lg font-bold">MINIMA</h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">Pioneering sustainable fashion for a better tomorrow. Join our circular revolution.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="text-sm space-y-2 text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Menswear</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Womenswear</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Accessories</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-sm space-y-2 text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-xs text-slate-500 mb-4">Get the latest on eco-friendly drops.</p>
              <div className="flex gap-2">
                <input className="flex-1 bg-white border-none rounded-lg text-sm focus:ring-2 focus:ring-primary px-3" placeholder="Email address" type="email" />
                <button className="bg-primary text-background-dark px-4 py-2 rounded-lg text-sm font-bold">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">© 2024 MINIMA. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary" href="#"><MdPublic className="text-xl" /></a>
              <a className="text-slate-400 hover:text-primary" href="#"><MdAlternateEmail className="text-xl" /></a>
              <a className="text-slate-400 hover:text-primary" href="#"><MdShare className="text-xl" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MdEco(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
      <path d="M6.05 8.05c-2.73 2.73-2.73 7.15-.02 9.88a6.89 6.89 0 004.18 2.01l.19.01c.52 0 .95-.43.95-.95 0-.48-.36-.88-.83-.95C8.71 17.77 7.26 16.79 6.34 15.35c-1.43-2.25-.92-5.15.99-6.76L17.25 3.59l-1.97 9.76c-.96 1.79-2.97 2.91-5.13 2.55-.52-.09-1.02.27-1.1.79-.09.52.27 1.02.79 1.1C11.83 18.15 14.02 17.23 15.31 15.5l2.16-10.7c.08-.41-.08-.84-.42-1.08-.34-.25-.78-.27-1.14-.07L6.05 8.05z"/>
    </svg>
  )
}
