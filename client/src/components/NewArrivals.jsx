import { useRef } from "react";
import ProductCard from "../pages/Home/ProductCard";
import { products } from "../data/products";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-primary/5 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">New Arrivals</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-primary transition-colors"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-primary transition-colors"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar snap-x"
      >
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
