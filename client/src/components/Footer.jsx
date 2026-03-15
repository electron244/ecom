import { Link } from 'react-router-dom'
import { MdFilterVintage, MdPublic, MdAlternateEmail, MdMovie } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary/5 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-primary">
                <MdFilterVintage className="text-3xl" />
              </div>
              <h2 className="text-xl font-extrabold tracking-tighter">MINIMA</h2>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Crafting quiet spaces in a loud world. Our mission is to provide
              timeless, essential pieces for the modern home.
            </p>
            <div className="flex gap-4 mt-8">
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <MdPublic className="text-2xl" />
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <MdAlternateEmail className="text-2xl" />
              </a>
              <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                <MdMovie className="text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 hover:text-primary transition-colors" to="/products">Furniture</Link></li>
              <li><Link className="text-slate-500 hover:text-primary transition-colors" to="/products">Lighting</Link></li>
              <li><Link className="text-slate-500 hover:text-primary transition-colors" to="/products">Decor</Link></li>
              <li><Link className="text-slate-500 hover:text-primary transition-colors" to="/products">Textiles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Help</h4>
            <ul className="space-y-4">
              <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Shipping</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Returns</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Track Order</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Our Store</h4>
            <p className="text-slate-500 mb-4">
              123 Minimalist Way,<br />Design District, CA 90210
            </p>
            <p className="text-slate-500">
              Monday — Friday<br />9:00 AM — 6:00 PM
            </p>
          </div>
        </div>
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 MINIMA Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
