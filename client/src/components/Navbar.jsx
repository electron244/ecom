import { Link } from "react-router-dom";
import {
  MdFilterVintage,
  MdSearch,
  MdShoppingBag,
  MdPerson,
} from "react-icons/md";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-primary">
              <MdFilterVintage className="text-3xl" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tighter text-slate-900">
              MINIMA
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              to="/products"
            >
              Shop
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              to="/products"
            >
              Collections
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              to="/products"
            >
              New
            </Link>
            <Link
              className="text-sm font-semibold hover:text-primary transition-colors"
              to="/"
            >
              About
            </Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="relative hidden sm:block w-full max-w-xs">
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input
                className="w-full bg-slate-200/50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Search essentials..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <Link
                to="/cart"
                className="p-2 rounded-lg bg-slate-200/50 hover:bg-primary/20 text-slate-700 transition-colors"
              >
                <MdShoppingBag className="text-2xl" />
              </Link>
              <Link
                to="/profile"
                className="p-2 rounded-lg bg-slate-200/50 hover:bg-primary/20 text-slate-700 transition-colors"
              >
                <MdPerson className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
