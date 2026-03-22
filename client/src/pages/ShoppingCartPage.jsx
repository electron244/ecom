import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdShoppingBasket, MdSearch, MdShoppingCart, MdDelete,
  MdRemove, MdAdd, MdLocalShipping,
  MdArrowForward, MdSend, MdFavoriteBorder, MdCheckCircle,
  MdClose, MdErrorOutline
} from 'react-icons/md'

const initialCartItems = [
  { id: 1, name: 'Premium Wireless Headphones', variant: 'Space Gray • Bluetooth 5.0', price: 249.00, qty: 1, stock: 5, savedForLater: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVI0FU-CJQy0JuzaG-tzaRk7kGDCZe6LQfd5yF9RIS87L4xu6dA-Dd1cCUfzj4pdgIywIDvLghSIx1HnmmyHBIU2ecUZrwfpQ24ie2ll0z-JNXtqYhf6GH_q_hnCiPunzcUhTe43aY5KsTW9UrRCFfIqOXoi7uCac8ewLXf50qgivDBbvhBBrrQ1lKGKvpGS9SDdV-3w46WEO_I8OuUAk04u5N8OFbgHNswi7NjL2A3KT649izhwT2RXKUXVe3dBM9kYwIBOE6HKI' },
  { id: 2, name: 'Smart Watch Series 7', variant: 'Silver Aluminum • 45mm', price: 199.50, qty: 2, stock: 3, savedForLater: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRd1gGx4vm8GGqr6nfQlR297xsvrgE7c7_VdTaMIWhEWBcwbF1Tj2XiewCGRq_EBcCsY9XkXaIsEEcJeaA0gU2rjDU1RmLILZ5M0vRJXWCLOYlgKmiKSS49xkUlpx4qb6IHMGzuYNU8LLZgx1ErmXd7nGiXjSqREHmdNNSIPrHzF3RHFZkdRsP3A8O2SVC1DDebshoKgi5n5I6bjfrlatENPQT3GH-1jTQ2cTEQLvi2yIByT58PvieLv9LVL6wX5AagHv1VSIoifw' },
  { id: 3, name: 'Mechanical Gaming Keyboard', variant: 'RGB Backlit • Cherry MX Blue', price: 129.99, qty: 1, stock: 8, savedForLater: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsmphOYuIMgRTeW-9r6CPceQ_FAqGEAZdSGaJ_XvjzDcIYqcdCkDh3_Wcm1Abq-Tk45EFuq7iRdMR3bIU0IcYDGe2IKfUYg9izdkKtgo0VSpADSxfj_4zB8V_NuM026SqeL70H63FfpEf2izTUoZ7yiOG1XW7AXBiqHlqUSIZcXjEVDOU45FFGd8a-CnZZ6EEhAf_UIHzvYCM53LRnutcm3GnwqE3A5z3XU-KVOL1Le434cJRoam4EGoI6Cwx_8VL-rxtonQ1dReA' },
]

const TAX_RATE = 0.08
const FREE_SHIPPING_THRESHOLD = 800
const SHIPPING_COST = 9.99

const PROMO_CODES = {
  'SAVE10': { type: 'percent', value: 10, label: '10% off' },
  'FLAT20': { type: 'flat', value: 20, label: '$20 off' },
  'MINIMA': { type: 'percent', value: 15, label: '15% off' },
}

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [savedItems, setSavedItems] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')
  const [promoSuccess, setPromoSuccess] = useState('')
  const [toast, setToast] = useState(null)

  // ─── Toast helper ────────────────────────────────────────────
  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  // ─── Cart item operations ────────────────────────────────────
  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id !== id) return item
        const newQty = item.qty + delta
        if (newQty < 1) return item
        if (newQty > item.stock) {
          showToast(`Only ${item.stock} in stock!`, 'error')
          return item
        }
        return { ...item, qty: newQty }
      })
    )
  }

  const removeItem = (id) => {
    const item = cartItems.find(i => i.id === id)
    setCartItems(prev => prev.filter(i => i.id !== id))
    showToast(`"${item.name}" removed from cart`)
  }

  const saveForLater = (id) => {
    const item = cartItems.find(i => i.id === id)
    setSavedItems(prev => [...prev, item])
    setCartItems(prev => prev.filter(i => i.id !== id))
    showToast(`"${item.name}" saved for later`)
  }

  const moveToCart = (id) => {
    const item = savedItems.find(i => i.id === id)
    setCartItems(prev => [...prev, { ...item, qty: 1 }])
    setSavedItems(prev => prev.filter(i => i.id !== id))
    showToast(`"${item.name}" moved back to cart`)
  }

  const removeSaved = (id) => {
    setSavedItems(prev => prev.filter(i => i.id !== id))
    showToast('Item removed from saved list')
  }

  // ─── Promo code ──────────────────────────────────────────────
  const applyPromo = () => {
    setPromoError('')
    setPromoSuccess('')
    const code = promoCode.trim().toUpperCase()
    if (!code) { setPromoError('Please enter a promo code.'); return }
    if (PROMO_CODES[code]) {
      setAppliedPromo({ code, ...PROMO_CODES[code] })
      setPromoSuccess(`Code applied: ${PROMO_CODES[code].label}`)
      showToast(`Promo code "${code}" applied!`)
    } else {
      setPromoError('Invalid promo code. Try SAVE10, FLAT20 or MINIMA.')
    }
  }

  const removePromo = () => {
    setAppliedPromo(null)
    setPromoCode('')
    setPromoSuccess('')
    showToast('Promo code removed')
  }

  // ─── Calculations ────────────────────────────────────────────
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discount = appliedPromo
    ? appliedPromo.type === 'percent'
      ? subtotal * (appliedPromo.value / 100)
      : Math.min(appliedPromo.value, subtotal)
    : 0
  const discountedSubtotal = subtotal - discount
  const shipping = discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : cartItems.length === 0 ? 0 : SHIPPING_COST
  const tax = discountedSubtotal * TAX_RATE
  const total = discountedSubtotal + shipping + tax
  const progressPct = Math.min((discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)
  const leftForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - discountedSubtotal, 0)
  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">

      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl text-sm font-semibold transition-all
          ${toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-slate-900 text-white'}`}>
          {toast.type === 'error' ? <MdErrorOutline className="text-lg" /> : <MdCheckCircle className="text-lg" />}
          {toast.msg}
          <button onClick={() => setToast(null)}><MdClose className="text-base ml-1 opacity-70 hover:opacity-100" /></button>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="p-1.5 bg-primary rounded-lg">
                  <MdShoppingBasket className="text-white text-xl" />
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
                <input className="pl-10 pr-4 py-1.5 rounded-full bg-slate-100 border-none text-sm focus:ring-2 focus:ring-primary w-64 outline-none" placeholder="Search products..." type="text" />
              </div>
              <Link to="/cart" className="p-2 hover:bg-slate-100 rounded-full relative">
                <MdShoppingCart className="text-2xl" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link to="/profile" className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
                <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjfvHRFiFTaqobD2D8Xng1q9521occkqas6UPrs-czSI4XGYa-SQR8hRoRz0JC6d3p35AMnJvg8vcwDi1qgmuBV8_dmP1wW6PWOZJSy4nDxVuYyoSK_OedOhEKBgMzs3JtEAlDKZ4RRdgGJWGPoinQ219GnH71WwtfduRWoSPc-kpX4wqrR9_UXSnyO97Ryc7qO4gdP7JF7DIosNDYjUT0jMX4SmDKrgKbTosN2h3wHW9N0mJCrMy9Xn-uGkyQ7gvInMO80TeHRlk" alt="profile" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left: Cart Items */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-extrabold tracking-tight">Shopping Cart</h1>
              <span className="text-slate-500 text-sm font-medium">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in your bag
              </span>
            </div>

            {/* Empty state */}
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-16 flex flex-col items-center gap-4 text-center">
                <MdShoppingCart className="text-6xl text-slate-200" />
                <h3 className="text-xl font-bold text-slate-400">Your cart is empty</h3>
                <p className="text-slate-400 text-sm">Looks like you haven't added anything yet.</p>
                <Link to="/products" className="mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all hover:shadow-sm">
                    <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg leading-snug">{item.name}</h3>
                      <p className="text-slate-500 text-sm">{item.variant}</p>
                      {/* Stock badge */}
                      {item.stock <= 3 && (
                        <span className="inline-block mt-1 text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                          Only {item.stock} left!
                        </span>
                      )}
                      <div className="mt-2 flex items-center gap-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-500 transition-colors uppercase tracking-wider"
                        >
                          <MdDelete className="text-sm" /> Remove
                        </button>
                        <button
                          onClick={() => saveForLater(item.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-pink-500 transition-colors uppercase tracking-wider"
                        >
                          <MdFavoriteBorder className="text-sm" /> Save for later
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      {/* Qty controls */}
                      <div className="flex items-center bg-slate-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          disabled={item.qty <= 1}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <MdRemove className="text-sm" />
                        </button>
                        <span className="w-10 text-center font-bold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          disabled={item.qty >= item.stock}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-all text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <MdAdd className="text-sm" />
                        </button>
                      </div>
                      {/* Price */}
                      <div className="text-right min-w-[80px]">
                        <p className="font-extrabold text-lg">${(item.price * item.qty).toFixed(2)}</p>
                        {item.qty > 1 && (
                          <p className="text-xs text-slate-400">${item.price.toFixed(2)} each</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Shipping notice */}
            {cartItems.length > 0 && (
              <div className="flex items-center gap-2 pt-2">
                <MdLocalShipping className="text-primary text-2xl" />
                <p className="text-sm font-medium">
                  {shipping === 0
                    ? <span>🎉 You've unlocked <span className="font-bold text-primary">free shipping!</span></span>
                    : <>Standard delivery: <span className="font-bold">Estimated Wed, Oct 25</span></>
                  }
                </p>
              </div>
            )}

            {/* Saved for Later */}
            {savedItems.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4 text-slate-700">
                  Saved for Later <span className="text-slate-400 font-normal text-base">({savedItems.length})</span>
                </h2>
                <div className="space-y-3">
                  {savedItems.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-xl border border-dashed border-slate-200 flex gap-4 items-center opacity-80 hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                        <p className="text-slate-400 text-xs">{item.variant}</p>
                        <p className="font-bold text-sm mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => moveToCart(item.id)}
                          className="text-xs font-bold px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          Move to Cart
                        </button>
                        <button
                          onClick={() => removeSaved(item.id)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <MdDelete className="text-base" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:w-[380px] shrink-0">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              {/* Free Shipping Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Free Shipping Progress</span>
                  {leftForFreeShipping > 0
                    ? <span className="text-xs font-bold text-primary">${leftForFreeShipping.toFixed(2)} left</span>
                    : <span className="text-xs font-bold text-green-500">Unlocked!</span>
                  }
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  {leftForFreeShipping > 0
                    ? `Add $${leftForFreeShipping.toFixed(2)} more to unlock free express shipping!`
                    : 'Free shipping applied to your order!'}
                </p>
              </div>

              {/* Price breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal ({totalItems} items)</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600 font-medium">Discount ({appliedPromo.code})</span>
                    <span className="font-semibold text-green-600">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-green-500' : ''}`}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Tax (8%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-extrabold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Promo Code</label>
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <MdCheckCircle className="text-green-500 text-lg" />
                      <span className="text-sm font-bold text-green-700">{appliedPromo.code}</span>
                      <span className="text-xs text-green-600">({appliedPromo.label})</span>
                    </div>
                    <button onClick={removePromo} className="text-green-400 hover:text-red-500 transition-colors">
                      <MdClose className="text-base" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex gap-2">
                      <input
                        className="flex-1 rounded-lg border border-slate-200 bg-slate-50 text-sm px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary outline-none uppercase placeholder:normal-case placeholder:text-slate-400"
                        placeholder="Enter code"
                        type="text"
                        value={promoCode}
                        onChange={e => { setPromoCode(e.target.value); setPromoError('') }}
                        onKeyDown={e => e.key === 'Enter' && applyPromo()}
                      />
                      <button
                        onClick={applyPromo}
                        className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoError && <p className="mt-1.5 text-xs text-red-500 font-medium">{promoError}</p>}
                    {promoSuccess && <p className="mt-1.5 text-xs text-green-600 font-medium">{promoSuccess}</p>}
                    <p className="mt-1.5 text-[10px] text-slate-400">Try: SAVE10, FLAT20, MINIMA</p>
                  </>
                )}
              </div>

              {/* Checkout button */}
              <Link
                to={cartItems.length > 0 ? '/checkout' : '#'}
                onClick={e => cartItems.length === 0 && e.preventDefault()}
                className={`w-full font-extrabold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] group flex items-center justify-center gap-2
                  ${cartItems.length === 0
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-slate-900 hover:bg-slate-700 text-white shadow-slate-900/20'
                  }`}
              >
                <span>Proceed to Checkout</span>
                <MdArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
              </Link>

              {cartItems.length === 0 && (
                <p className="text-center text-xs text-slate-400 mt-3">Add items to your cart to checkout</p>
              )}
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
                  <MdShoppingBasket className="text-white text-sm" />
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
                <input className="w-full rounded-lg bg-slate-50 border border-slate-200 text-sm px-3 py-2 focus:ring-2 focus:ring-primary outline-none" placeholder="Email" type="email" />
                <button className="p-2 bg-slate-900 rounded-lg text-white hover:bg-slate-700 transition-colors">
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