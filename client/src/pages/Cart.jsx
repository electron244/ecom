/**
 * ShopEase — Shopping Cart
 * ─────────────────────────────────────────────────────────────────
 * Stack : React 18 · Tailwind CSS (arbitrary values) · JSX only
 * State : fully interactive — qty stepper, remove, promo code,
 *         live subtotal / tax / total, free-shipping progress bar,
 *         mobile search expand, mobile nav drawer
 *
 * Components:
 *   Navbar        — sticky header, mobile menu + search drawer
 *   CartItem      — single product card with qty stepper
 *   CartList      — renders all items + empty state + delivery note
 *   OrderSummary  — sticky sidebar: totals, promo, checkout, logos
 *   Footer        — brand, links, newsletter
 *   App           — root with shared cart state
 * ─────────────────────────────────────────────────────────────────
 */

import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const INITIAL_CART = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    variant: "Space Gray • Bluetooth 5.0",
    unitPrice: 249.0,
    qty: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVI0FU-CJQy0JuzaG-tzaRk7kGDCZe6LQfd5yF9RIS87L4xu6dA-Dd1cCUfzj4pdgIywIDvLghSIx1HnmmyHBIU2ecUZrwfpQ24ie2ll0z-JNXtqYhf6GH_q_hnCiPunzcUhTe43aY5KsTW9UrRCFfIqOXoi7uCac8ewLXf50qgivDBbvhBBrrQ1lKGKvpGS9SDdV-3w46WEO_I8OuUAk04u5N8OFbgHNswi7NjL2A3KT649izhwT2RXKUXVe3dBM9kYwIBOE6HKI",
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    variant: "Silver Aluminum • 45mm",
    unitPrice: 199.5,
    qty: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRd1gGx4vm8GGqr6nfQlR297xsvrgE7c7_VdTaMIWhEWBcwbF1Tj2XiewCGRq_EBcCsY9XkXaIsEEcJeaA0gU2rjDU1RmLILZ5M0vRJXWCLOYlgKmiKSS49xkUlpx4qb6IHMGzuYNU8LLZgx1ErmXd7nGiXjSqREHmdNNSIPrHzF3RHFZkdRsP3A8O2SVC1DDebshoKgi5n5I6bjfrlatENPQT3GH-1jTQ2cTEQLvi2yIByT58PvieLv9LVL6wX5AagHv1VSIoifw",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    variant: "RGB Backlit • Cherry MX Blue",
    unitPrice: 129.99,
    qty: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsmphOYuIMgRTeW-9r6CPceQ_FAqGEAZdSGaJ_XvjzDcIYqcdCkDh3_Wcm1Abq-Tk45EFuq7iRdMR3bIU0IcYDGe2IKfUYg9izdkKtgo0VSpADSxfj_4zB8V_NuM026SqeL70H63FfpEf2izTUoZ7yiOG1XW7AXBiqHlqUSIZcXjEVDOU45FFGd8a-CnZZ6EEhAf_UIHzvYCM53LRnutcm3GnwqE3A5z3XU-KVOL1Le434cJRoam4EGoI6Cwx_8VL-rxtonQ1dReA",
  },
];

const PAYMENT_LOGOS = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1zz9ahBhanOcBw4o4h-C3-xd0GqAIQNub6nN1zjh8ywbSzQxY76LdXCfn_WIs2d1461xaxVxXB-GzI38KeWrgimiCiHtB4rdKYJm7ISpLgKl1-z1pGr0w1eucD36a49RiEI6nJa0066ivSEtFM10dtKbhPtfg9p3-3wrcCE-VDzGMEGN6UnX95SMhSr6OSmrS4moX1Rg3I2JgHvxw82h-SFEl43CobPDxaXQugfjei_69Zwts2Vn-9LsdGkO0WtJR5NJEzpcgI6U", alt: "Visa",       h: "h-4" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC39cQR82-9lVICbVFC0Ov7CrhGs9Dfxd-7tTPuw0H1tznq7i3TWGnRADQI0g_wtrs-s9ILgn12hdaiqTbE0bXkXFeF9-eme-bClR6akaA3Rs-gNCtVh1rthuBKqA5uEgHxLd-SxsWHKqEfX2Txg6RHZsETu0ZU-sP1J2heltfSKgSD773a_CPr0ebdgVupWzylxrFBm00AIBavQaHP6OgsY2oMDLDvA6CKYRqj7U_2J6Fp94fNMkZ5XpjXHa5xNHJRi7_XZ9EIxh8", alt: "Mastercard", h: "h-5" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhEOa7qMlcZPDe7Hl_O0AXk8t8cHegsXKVYon5wcDeYC-uCLYZ46tt0opNbjnRtxZQpqyMjxhf4nhru49KrbaZoMo14efQluJrS7lobZ7kMzghd9oqHdMRQsliqRgj3YdVUezi5TcxmQfn5wifKTw5UcPafDK8wM3LQd893aMY6l2zYWzSSIn-XeDiQ-IoeFxp9IjP9uz0HPPdgfkz1S3CgYrCHqFbP94knR3773o-uGiP1E5QUrsGljn9x3eR6LhY5srMzs0xm5U", alt: "PayPal",     h: "h-4" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlyelHL7TaNkJYK38XdjywVJYWgFVF9jQ_wjYFTAaAk_onXWtCgvUZIWezTS_lU2OYiL1PgHVBM_kXoXL933omEZXswXpaLNxKVjkGA51Ne0oJpltIvio30ueRfPGnQRLp0v1sr6HhgJGg_1l7EJGYAibaZHig5Tpp3rnOMlCmmqkd1Nkjt4QnH4igVYhUqso76X0FOKro_4XlLrNmBq1W39k6H9LuN_7ARjdKuWFqLym2xrF8KmneJO6OO6ySEuY4zGSv9QY4TRU", alt: "Apple Pay",  h: "h-5" },
];

const FOOTER_PRODUCT = ["New Arrivals", "Best Sellers", "Sale"];
const FOOTER_SUPPORT  = ["Help Center", "Returns", "Contact"];
const TAX_RATE        = 0.08;
const FREE_SHIP_THRESHOLD = 800;
const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDjfvHRFiFTaqobD2D8Xng1q9521occkqas6UPrs-czSI4XGYa-SQR8hRoRz0JC6d3p35AMnJvg8vcwDi1qgmuBV8_dmP1wW6PWOZJSy4nDxVuYyoSK_OedOhEKBgMzs3JtEAlDKZ4RRdgGJWGPoinQ219GnH71WwtfduRWoSPc-kpX4wqrR9_UXSnyO97Ryc7qO4gdP7JF7DIosNDYjUT0jMX4SmDKrgKbTosN2h3wHW9N0mJCrMy9Xn-uGkyQ7gvInMO80TeHRlk";

// ═══════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════

function Navbar({ cartCount }) {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">

          {/* Logo + desktop nav */}
          <div className="flex items-center gap-5 min-w-0">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="p-1.5 bg-[#20df60] rounded-lg">
                <span className="material-symbols-outlined text-slate-900 block text-[20px]">shopping_basket</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">ShopEase</h2>
            </div>
            <nav className="hidden md:flex items-center gap-5">
              {["Home", "Shop", "Cart"].map((item) => (
                <a key={item} href="#"
                  className={`text-sm font-semibold transition-colors hover:text-[#20df60] ${item === "Cart" ? "text-[#20df60]" : "text-slate-700"}`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {/* Desktop search */}
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
              <input className="pl-9 pr-4 py-1.5 rounded-full bg-slate-100 border-none text-sm focus:outline-none focus:ring-2 focus:ring-[#20df60] w-48 lg:w-60 transition-all"
                placeholder="Search products..." type="text" />
            </div>

            {/* Mobile search toggle */}
            <button onClick={() => setSearchOpen(p => !p)}
              className="sm:hidden p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600" aria-label="Search">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>

            {/* Cart */}
            <button className="p-2 hover:bg-slate-100 rounded-full relative transition-colors" aria-label="Cart">
              <span className="material-symbols-outlined text-[22px] text-slate-700">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#20df60] text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-300 flex-shrink-0">
              <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
            </div>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(p => !p)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600" aria-label="Menu">
              <span className="material-symbols-outlined text-[22px]">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="sm:hidden pb-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
              <input autoFocus
                className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-100 border-none text-sm focus:outline-none focus:ring-2 focus:ring-[#20df60]"
                placeholder="Search products..." type="text" />
            </div>
          </div>
        )}

        {/* Mobile nav drawer */}
        {menuOpen && (
          <nav className="md:hidden border-t border-slate-100 py-2 space-y-0.5">
            {["Home", "Shop", "Cart"].map((item) => (
              <a key={item} href="#" onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${item === "Cart" ? "text-[#20df60] bg-[#20df60]/10" : "text-slate-700 hover:bg-slate-100"}`}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CART ITEM
// ═══════════════════════════════════════════════════════════════════

function CartItem({ item, onQtyChange, onRemove, onSave }) {
  const lineTotal = (item.unitPrice * item.qty).toFixed(2);

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
      <div className="flex gap-3 sm:gap-4">
        {/* Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
        </div>

        {/* Info + controls */}
        <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
          <div>
            <h3 className="font-bold text-sm sm:text-base leading-snug text-slate-900 line-clamp-2">{item.name}</h3>
            <p className="text-slate-500 text-xs mt-0.5">{item.variant}</p>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => onRemove(item.id)}
              className="flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">delete</span>
              <span>Remove</span>
            </button>
            <button onClick={() => onSave(item.id)}
              className="flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-slate-400 hover:text-[#20df60] transition-colors uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">favorite</span>
              <span>Save for later</span>
            </button>
          </div>
        </div>

        {/* Price + stepper — right column */}
        <div className="flex-shrink-0 flex flex-col items-end justify-between gap-2 pl-2">
          <div className="text-right">
            <p className="font-extrabold text-base sm:text-lg text-slate-900 whitespace-nowrap">${lineTotal}</p>
            {item.qty > 1 && (
              <p className="text-[10px] text-slate-400 whitespace-nowrap">${item.unitPrice.toFixed(2)} each</p>
            )}
          </div>
          {/* Qty stepper */}
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
            <button onClick={() => onQtyChange(item.id, item.qty - 1)} disabled={item.qty <= 1}
              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Decrease qty">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="w-7 text-center font-bold text-sm select-none tabular-nums">{item.qty}</span>
            <button onClick={() => onQtyChange(item.id, item.qty + 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-all text-[#20df60]" aria-label="Increase qty">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CART LIST
// ═══════════════════════════════════════════════════════════════════

function CartList({ items, onQtyChange, onRemove, onSave }) {
  return (
    <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Shopping Cart</h1>
        <span className="text-slate-500 text-xs sm:text-sm font-medium whitespace-nowrap">
          {items.length} {items.length === 1 ? "item" : "items"} in your bag
        </span>
      </div>

      {items.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 sm:p-16 text-center space-y-3">
          <span className="material-symbols-outlined text-4xl sm:text-5xl text-slate-300 block">shopping_cart</span>
          <p className="font-semibold text-sm text-slate-400">Your cart is empty</p>
          <a href="#" className="text-[#20df60] font-bold text-sm hover:underline">Continue shopping →</a>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} onQtyChange={onQtyChange} onRemove={onRemove} onSave={onSave} />
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="flex items-center gap-2 pt-1">
          <span className="material-symbols-outlined text-[#20df60] text-[20px]">local_shipping</span>
          <p className="text-sm font-medium text-slate-600">
            Standard delivery: <span className="font-bold text-slate-900">Estimated Wed, Oct 25</span>
          </p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ORDER SUMMARY
// ═══════════════════════════════════════════════════════════════════

function OrderSummary({ subtotal }) {
  const [promo,   setPromo]   = useState("");
  const [applied, setApplied] = useState(false);

  const tax       = subtotal * TAX_RATE;
  const total     = subtotal + tax;
  const remaining = Math.max(FREE_SHIP_THRESHOLD - subtotal, 0);
  const progress  = Math.min((subtotal / FREE_SHIP_THRESHOLD) * 100, 100);

  return (
    <div className="w-full lg:w-[380px] shrink-0">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-24 space-y-5 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">Order Summary</h2>

        {/* Free shipping progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">Free Shipping Progress</span>
            <span className="text-xs font-bold text-[#20df60]">
              {remaining > 0 ? `$${remaining.toFixed(2)} left` : "Unlocked 🎉"}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#20df60] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          {remaining > 0 && (
            <p className="text-[10px] sm:text-[11px] text-slate-400">
              Add ${remaining.toFixed(2)} more to unlock free express shipping!
            </p>
          )}
        </div>

        {/* Line items */}
        <div className="space-y-3">
          {[
            { label: "Subtotal",  value: `$${subtotal.toFixed(2)}`,          valueClass: "font-semibold text-slate-900" },
            { label: "Shipping",  value: "Calculated at next step",           valueClass: "font-semibold text-[#20df60] text-xs sm:text-sm" },
            { label: "Tax (8%)",  value: `$${tax.toFixed(2)}`,               valueClass: "font-semibold text-slate-900" },
          ].map(({ label, value, valueClass }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-slate-500">{label}</span>
              <span className={valueClass}>{value}</span>
            </div>
          ))}
          <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
            <span className="text-base sm:text-lg font-bold text-slate-900">Total</span>
            <span className="text-base sm:text-lg font-extrabold text-slate-900">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Promo */}
        <div className="space-y-1.5">
          <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">Promo Code</label>
          {applied ? (
            <div className="flex items-center gap-2 p-2.5 bg-[#20df60]/10 rounded-lg border border-[#20df60]/30">
              <span className="material-symbols-outlined text-[#20df60] text-sm">check_circle</span>
              <span className="text-sm font-semibold text-[#20df60]">"{promo}" applied!</span>
            </div>
          ) : (
            <div className="flex gap-2">
              <input value={promo} onChange={(e) => setPromo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && promo.trim() && setApplied(true)}
                className="flex-1 rounded-lg border border-slate-200 bg-slate-50 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20df60] focus:border-[#20df60] transition-all"
                placeholder="Enter code" type="text" />
              <button onClick={() => promo.trim() && setApplied(true)}
                className="px-3 sm:px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap">
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Checkout CTA */}
        <button className="w-full bg-[#20df60] hover:bg-[#1bc954] text-slate-900 font-extrabold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-[#20df60]/20 active:scale-[0.98] flex items-center justify-center gap-2 group">
          <span className="text-sm sm:text-base">Proceed to Checkout</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">arrow_forward</span>
        </button>

        {/* Payment logos */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 opacity-50 grayscale">
          {PAYMENT_LOGOS.map(({ src, alt, h }) => (
            <img key={alt} src={src} alt={alt} className={h} />
          ))}
        </div>

        {/* Security note */}
        <div className="p-3 rounded-xl border border-dashed border-slate-300 text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
            Secure checkout powered by ShopEase. Your data is encrypted and safe.
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-16 sm:mt-20 border-t border-slate-200 py-10 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1 bg-[#20df60] rounded">
                <span className="material-symbols-outlined text-slate-900 text-[16px] block">shopping_basket</span>
              </div>
              <h2 className="text-base font-bold tracking-tight text-slate-900">ShopEase</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Defining the future of minimalist tech retail. Quality products, seamless experience.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Product</h4>
            <ul className="text-sm space-y-2 text-slate-500">
              {FOOTER_PRODUCT.map((item) => (
                <li key={item}><a href="#" className="hover:text-[#20df60] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Support</h4>
            <ul className="text-sm space-y-2 text-slate-500">
              {FOOTER_SUPPORT.map((item) => (
                <li key={item}><a href="#" className="hover:text-[#20df60] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-slate-900 mb-3 text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input value={email} onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0 rounded-lg bg-slate-50 border border-slate-200 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20df60] focus:border-[#20df60] transition-all"
                placeholder="Email" type="email" />
              <button className="p-2 bg-[#20df60] rounded-lg text-slate-900 hover:bg-[#1bc954] transition-colors flex-shrink-0" aria-label="Subscribe">
                <span className="material-symbols-outlined text-[20px] block">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <p>© 2023 ShopEase. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════
// APP (ROOT)
// ═══════════════════════════════════════════════════════════════════

export default function Cart() {
  const [items, setItems] = useState(INITIAL_CART);

  const handleQtyChange = (id, newQty) => {
    if (newQty < 1) return;
    setItems((prev) => prev.map((it) => it.id === id ? { ...it, qty: newQty } : it));
  };
  const handleRemove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));
  const handleSave   = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((s, it) => s + it.unitPrice * it.qty, 0);
  const totalQty = items.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-[Manrope] text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Navbar cartCount={totalQty} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <CartList items={items} onQtyChange={handleQtyChange} onRemove={handleRemove} onSave={handleSave} />
          <OrderSummary subtotal={subtotal} />
        </div>
      </main>

      <Footer />
    </div>
  );
}