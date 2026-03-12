import { useState } from "react";
const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDjfvHRFiFTaqobD2D8Xng1q9521occkqas6UPrs-czSI4XGYa-SQR8hRoRz0JC6d3p35AMnJvg8vcwDi1qgmuBV8_dmP1wW6PWOZJSy4nDxVuYyoSK_OedOhEKBgMzs3JtEAlDKZ4RRdgGJWGPoinQ219GnH71WwtfduRWoSPc-kpX4wqrR9_UXSnyO97Ryc7qO4gdP7JF7DIosNDYjUT0jMX4SmDKrgKbTosN2h3wHW9N0mJCrMy9Xn-uGkyQ7gvInMO80TeHRlk";


export default function Navbar({ cartCount }) {
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