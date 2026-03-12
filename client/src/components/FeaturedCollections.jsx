import CollectionCard from "../pages/Home/CollectionCard";
import { collections } from "../data/collections";

const FeaturedCollections = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Collections</h2>
          <p className="text-slate-500 dark:text-slate-400">
            Curated spaces for modern living
          </p>
        </div>
        <a
          className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
          href="#"
        >
          Explore all
          <span className="material-symbols-outlined">trending_flat</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <CollectionCard key={collection.title} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
