import { Link } from 'react-router-dom'
import { MdShoppingBasket, MdSearch, MdShoppingCart, MdDelete, MdFavorite, MdRemove, MdAdd, MdLocalShipping, MdArrowForward, MdSend } from 'react-icons/md'

const cartItems = [
  { id: 1, name: 'Premium Wireless Headphones', variant: 'Space Gray • Bluetooth 5.0', price: '$249.00', qty: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVI0FU-CJQy0JuzaG-tzaRk7kGDCZe6LQfd5yF9RIS87L4xu6dA-Dd1cCUfzj4pdgIywIDvLghSIx1HnmmyHBIU2ecUZrwfpQ24ie2ll0z-JNXtqYhf6GH_q_hnCiPunzcUhTe43aY5KsTW9UrRCFfIqOXoi7uCac8ewLXf50qgivDBbvhBBrrQ1lKGKvpGS9SDdV-3w46WEO_I8OuUAk04u5N8OFbgHNswi7NjL2A3KT649izhwT2RXKUXVe3dBM9kYwIBOE6HKI' },
  { id: 2, name: 'Smart Watch Series 7', variant: 'Silver Aluminum • 45mm', price: '$399.00', priceEach: '$199.50 each', qty: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRd1gGx4vm8GGqr6nfQlR297xsvrgE7c7_VdTaMIWhEWBcwbF1Tj2XiewCGRq_EBcCsY9XkXaIsEEcJeaA0gU2rjDU1RmLILZ5M0vRJXWCLOYlgKmiKSS49xkUlpx4qb6IHMGzuYNU8LLZgx1ErmXd7nGiXjSqREHmdNNSIPrHzF3RHFZkdRsP3A8O2SVC1DDebshoKgi5n5I6bjfrlatENPQT3GH-1jTQ2cTEQLvi2yIByT58PvieLv9LVL6wX5AagHv1VSIoifw' },
  { id: 3, name: 'Mechanical Gaming Keyboard', variant: 'RGB Backlit • Cherry MX Blue', price: '$129.99', qty: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsmphOYuIMgRTeW-9r6CPceQ_FAqGEAZdSGaJ_XvjzDcIYqcdCkDh3_Wcm1Abq-Tk45EFuq7iRdMR3bIU0IcYDGe2IKfUYg9izdkKtgo0VSpADSxfj_4zB8V_NuM026SqeL70H63FfpEf2izTUoZ7yiOG1XW7AXBiqHlqUSIZcXjEVDOU45FFGd8a-CnZZ6EEhAf_UIHzvYCM53LRnutcm3GnwqE3A5z3XU-KVOL1Le434cJRoam4EGoI6Cwx_8VL-rxtonQ1dReA' },
]

export default function ShoppingCartPage() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="p-1.5 bg-primary rounded-lg">
                  <MdShoppingBasket className="text-background-dark text-xl" />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight">MINIMA</h2>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/">Home</Link>
                <Link className="text-sm font-semibold hover:text-primary transition-colors" to="/products">Shop</Link>
                <Link className="text-sm font-semibold hover:text-primary transition-colors text-primary" to="/cart">Cart</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input className="pl-10 pr-4 py-1.5 rounded-full bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search products..." type="text" />
              </div>
              <Link to="/cart" className="p-2 hover:bg-slate-100 rounded-full relative">
                <MdShoppingCart className="text-2xl" />
                <span className="absolute top-1 right-1 bg-primary text-background-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
              </Link>
              <Link to="/profile" className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjfvHRFiFTaqobD2D8Xng1q9521occkqas6UPrs-czSI4XGYa-SQR8hRoRz0JC6d3p35AMnJvg8vcwDi1qgmuBV8_dmP1wW6PWOZJSy4nDxVuYyoSK_OedOhEKBgMzs3JtEAlDKZ4RRdgGJWGPoinQ219GnH71WwtfduRWoSPc-kpX4wqrR9_UXSnyO97Ryc7qO4gdP7JF7DIosNDYjUT0jMX4SmDKrgKbTosN2h3wHW9N0mJCrMy9Xn-uGkyQ7gvInMO80TeHRlk" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold tracking-tight">Shopping Cart</h1>
              <span className="text-slate-500 text-sm font-medium">3 items in your bag</span>
            </div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img className="w-full h-full object-cover" src={item.image} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-snug">{item.name}</h3>
                    <p className="text-slate-500 text-sm">{item.variant}</p>
                    <div className="mt-2 flex items-center gap-4">
                      <button className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-500 transition-colors uppercase tracking-wider">
                        <MdDelete className="text-sm" /> Remove
                      </button>
                      <button className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider">
                        <MdFavorite className="text-sm" /> Save for later
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center bg-slate-100 rounded-lg p-1">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-all">
                        <MdRemove className="text-sm" />
                      </button>
                      <span className="w-10 text-center font-bold">{item.qty}</span>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-all text-primary">
                        <MdAdd className="text-sm" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-extrabold text-lg">{item.price}</p>
                      {item.priceEach && <p className="text-xs text-slate-400">{item.priceEach}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-4">
              <MdLocalShipping className="text-primary text-2xl" />
              <p className="text-sm font-medium">Standard delivery: <span className="font-bold">Estimated Wed, Oct 25</span></p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-[380px] shrink-0">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              {/* Free Shipping Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Free Shipping Progress</span>
                  <span className="text-xs font-bold text-primary">$22.01 left</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '78%' }}></div>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">Add $22.01 more to your cart to unlock free express shipping!</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-semibold">$777.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>
                  <span className="font-semibold text-primary">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Tax</span>
                  <span className="font-semibold">$62.24</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-extrabold">$840.23</span>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <input className="flex-1 rounded-lg border-slate-200 bg-slate-50 text-sm focus:ring-primary focus:border-primary" placeholder="Enter code" type="text" />
                  <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-colors">Apply</button>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-extrabold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98] group flex items-center justify-center gap-2">
                <span>Proceed to Checkout</span>
                <MdArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mt-4 p-4 rounded-xl border border-dashed border-slate-300 text-center">
              <p className="text-sm text-slate-500">Secure checkout powered by MINIMA. Your data is encrypted and safe.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-200 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 bg-primary rounded">
                  <MdShoppingBasket className="text-background-dark text-sm" />
                </div>
                <h2 className="text-lg font-bold tracking-tight">MINIMA</h2>
              </div>
              <p className="text-slate-500 text-sm">Defining the future of minimalist tech retail. Quality products, seamless experience.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="text-sm space-y-2 text-slate-500">
                <li><Link className="hover:text-primary transition-colors" to="/products">New Arrivals</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Best Sellers</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="text-sm space-y-2 text-slate-500">
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Returns</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input className="w-full rounded-lg bg-slate-50 border-none text-sm focus:ring-primary" placeholder="Email" type="email" />
                <button className="p-2 bg-primary rounded-lg text-background-dark">
                  <MdSend className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2024 MINIMA. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-slate-600" href="#">Privacy Policy</a>
              <a className="hover:text-slate-600" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
