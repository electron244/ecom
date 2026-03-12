const ProductCard = ({ name, category, price, imageUrl, imageAlt }) => {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] snap-start bg-background-light dark:bg-background-dark p-4 rounded-xl shadow-sm border border-primary/5 hover:shadow-xl transition-all group">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 mb-4">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imageUrl}
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-xl">favorite</span>
        </button>
      </div>
      <h4 className="font-bold text-lg mb-1">{name}</h4>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
        {category}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-black text-xl">{price}</span>
        <button className="bg-slate-900 dark:bg-slate-100 text-white dark:text-black p-2 rounded-lg hover:bg-primary transition-colors">
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
