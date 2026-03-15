import { MdFavoriteBorder, MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] snap-start bg-background-light p-4 rounded-xl shadow-sm border border-primary/5 hover:shadow-xl transition-all group">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200 mb-4">
        <img
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={product.image}
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
          <MdFavoriteBorder className="text-xl" />
        </button>
      </div>
      <Link to={`/product/${product.id || 1}`}>
        <h4 className="font-bold text-lg mb-1 hover:text-primary transition-colors">{product.name}</h4>
      </Link>
      <p className="text-slate-500 text-sm mb-3">{product.category}</p>
      <div className="flex items-center justify-between">
        <span className="font-black text-xl">${product.price}</span>
        <button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-primary transition-colors">
          <MdAddShoppingCart className="text-xl" />
        </button>
      </div>
    </div>
  )
}
