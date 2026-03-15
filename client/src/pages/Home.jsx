import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { MdTrendingFlat, MdChevronLeft, MdChevronRight } from 'react-icons/md'

const collections = [
  {
    title: 'Living Room',
    description: 'Soft textures and warm wood tones.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDtuCL94_T5yysoKty4n1UdguAZGMDplfeKeCbzYg7PecWr_xrxOSKIsW4S8vceWNMYuc96dAvgiCgHRPbxnHfzgJ5JbKU40Rgp1VxaA7-DxRylxDhje_E6Nwaxb3wXa9PkRlO0eMMUWEdB1IT94Fd62fK1AW_oI20T0e4ti5QdSYEm_JgcDnw4FAPyE3XkfOX5PpTw2mJH6_C8ID7bBIiT9JdcOczSukAWsmw-ejoXYIkeKkS1ALntO1gY42YP1gTJDJb234R4WI',
  },
  {
    title: 'Workspace',
    description: 'Clutter-free tools for deep focus.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq7P4M25iTwAtT6RjpVA7nCMt2Ay4FTCPHukx1lolh0x4hsGaJmxLDeMHnhDut3akKjDZpGvj1_OhM5sGwzzu_6IM9ZIqyKFsqKs9aXHpRxSjy0c5MPDKebiM4bevyv2rVHFxKFmLEK5szxOCHvM_2oRd25WSi55xoMwJfZ262SzF4QuGROVGb8qkU4_CCsuz1LuDp-9fB9CO_xlu1iB_IdDDteDVFa3ZNJormyO_S8jBbEoJkPi27969WZpCpetQbqYOMagHP1YQ',
  },
  {
    title: 'Bedroom',
    description: 'Linen and light for restful sleep.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgZjTtE4l8Ow6oaQnE1TVRXxhBzoJOvAC6HQ4_7LMi0k0GUn5Jkd7ih2SmoDbMigF55MmpLlvEu1fCaxK5KxNhE13hami8gLFnvfW1Aa_-WGpQThNzi92VIBNkMLzk3A8td17fgunZJEzKnpX5jMQdjFeJKJcmUueLlgxNDM-XPEqmnx_xYefx4UGN-ZoZLYLk8lSY2cnmpIDBp8Ao6IQ2Y159DakBAUfEDCNwKaFaFvwNgKqMntf43fK9c3Bm60BDHh1sCYASXR4',
  },
]

const newArrivals = [
  { id: 1, name: 'Luna Table Lamp', category: 'Lighting', price: '129.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6TOZAKbXv9vvqNxKPnQ3aFfGqtUP6cA44uuVRa2oSz08QLjiJvGoxkfNzUEZ5kn9ttYpHGgdlJTCbAqv_ct20anOawrIx4XSrFvbkd8LQJoiPDnlPbAj1NDweri1h2DHj4Ur8wV0DSt6yTq5FLTNPDE1jD8LdvcJEwYFi2CFhilswgB7k-JQz2NSCJjyEpoCioUbw_c_n_ZveKE_apkcuJ5Z_4K95d2kVueY3Yx3bMYpNemvuVXIRalI6ei4khZkvyVQQO1CZk-Y' },
  { id: 2, name: 'Oia Ceramic Trio', category: 'Decor', price: '85.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzpZo1ElyK1VL-PjQJZlmmN1UmiUow5er51yC8mJzTxZkNxRWktUdALl3e__J6C-1P-c3JMJB0ChRegeGswx1CGcImkNyKmsOVMMO296i_M-SX6-tQT1DCWT1KwAN0DM2YQefY7fPlHVs4c4yc8Qf0hZRfqDwagpzM9BfyX-WjXPGp01617x3TRZzp5DsCVog0fn2O0rS8pM6pOLLCzc3wZX3uqzOxLBBZYJ33jLMeUWYRYvQQNosrr2ERgCZ27gw2fz-Ffe3SIfE' },
  { id: 3, name: 'Stockholm Oak Side', category: 'Furniture', price: '450.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAquqHRTeaIm3js1EQPsG1F3kTjZe2WMyPlDXjdqIkux7Ha5GHz4NrRgHfoOlNzu_cmeVowDbI7LftfVLDiD8WocCXtvr8iMoWS0poMWw2cJBfKAGgd0q4RQu2sg9HVRCvMeebI8Az-LV0O30FIiBaZCT8LIcyK5DIuI0t_vMSdTF6NGhn_SB636jgf0mIXnndJkfTxtMSkXxFuKjUyX3qxJ_BlmKYdXObUsWJfNPpBE6zkALRw2JXHlaywbrzzbWl_BewvTOvg3UY' },
  { id: 4, name: 'Cloud Accent Chair', category: 'Furniture', price: '320.00', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnd1kc4_lF0uqkQOEEM9SE9rzn3dFmCdF08zU8Qcik7ZQOkxNVX876gSrKaocKo73I6j5uz4hd9cSJVAD14Ody1gikipDJeU1yqoEMLrQQygiEqLb-27dJOyY-V9WHLe8_vWk1G34GhU2S7_jfJvJW0Ht4C11idsNFNc5O7-30smfVNiGkOGbiuiINJ18-J9QH4ubEbDKHqjO6zUQNj7R9-04B1dlGxFVbtvZumxb-DwTqL3IsnS3ru5sV16OH397GXy039gsB_Dk' },
]

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-xl bg-slate-200 aspect-[16/9] md:aspect-[21/9] flex items-center">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Minimalist sunlit living room with natural textures"
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAWR1ZkJQJ1hKbmSUoprdedYsVrbdn3PrE9UQ0fVCfRp0hhSJ5nYhzdaRDP9QxJUHwFWA_cfLJRGXgvfW6HsPEdOP-aFUx-0g3dWNGP4jCu8xx8WB6Uj2xk7C6jxjAYXdKRjNrnA-LWsv4k2fX4-fowJxSbo0y86GzGGvHjbUGk55O_oVMrXZ4s_hHa92Y14Er1DQw_O_pM2dPkvWEUYvTIBfkItmG_AgUBHv9eYXTPdq6ki5upHBxwnygk0RVSZbexTV03Wkkhg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-light/80 to-transparent"></div>
              </div>
              <div className="relative z-10 w-full max-w-2xl p-8 sm:p-16">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-primary text-background-dark rounded-full">
                  New Season
                </span>
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                  Aesthetic Minimalist Living
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Experience the harmony of form and function with our new season
                  essentials. Lightly Animated and Responsive.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-8 rounded-lg transition-transform active:scale-95"
                  >
                    Shop the Collection
                  </Link>
                  <button className="bg-white/10 backdrop-blur-md border border-slate-300 font-bold py-3 px-8 rounded-lg hover:bg-white/20 transition-all">
                    View Lookbook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Collections</h2>
              <p className="text-slate-500">Curated spaces for modern living</p>
            </div>
            <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" to="/products">
              Explore all
              <MdTrendingFlat className="text-2xl" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-square bg-slate-100">
                <img
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={col.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{col.title}</h3>
                  <p className="text-white/80 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {col.description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-block bg-white text-black text-xs font-bold py-2 px-4 rounded group-hover:bg-primary transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Arrivals Slider */}
        <section className="bg-primary/5 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-300 rounded-full hover:bg-primary transition-colors">
                <MdChevronLeft className="text-2xl" />
              </button>
              <button className="p-2 border border-slate-300 rounded-full hover:bg-primary transition-colors">
                <MdChevronRight className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar snap-x">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="bg-background-dark rounded-3xl p-10 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 relative z-10">
              Join the Minimalist Movement
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg relative z-10">
              Get curated design tips and exclusive early access to our seasonal drops.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <input
                className="flex-1 rounded-xl bg-white/10 border-white/20 text-white px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your email address"
                type="email"
              />
              <button className="bg-primary text-background-dark font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
