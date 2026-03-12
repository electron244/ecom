const CollectionCard = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-square bg-slate-100 dark:bg-slate-900">
      <img
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={imageUrl}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
          {description}
        </p>
        <button className="bg-white text-black text-xs font-bold py-2 px-4 rounded group-hover:bg-primary transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
