import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">ShopEasy</h2>
          <p className="text-gray-400 mt-2">
            Your one stop destination for amazing products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">Cart</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white">Login</Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-white">Register</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Vadodara, Gujarat</p>
          <p className="text-gray-400">support@shopeasy.com</p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} ShopEasy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;