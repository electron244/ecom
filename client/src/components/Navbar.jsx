import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          MyStore
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>

          <Link to="/cart" className="relative hover:text-gray-300">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>

          <Link to="/register" className="hover:text-gray-300">
            Register
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart ({cartCount})
          </Link>

          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>

          <Link to="/register" onClick={() => setMenuOpen(false)}>
            Register
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;