import CartItem from "./CartItem";

export default function CartList({ items, onQtyChange, onRemove, onSave }) {
  return (
    <div className="flex-1 min-w-0 space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Shopping Cart</h1>
        <span className="text-slate-500 text-xs sm:text-sm font-medium whitespace-nowrap">
          {items.length} {items.length === 1 ? "item" : "items"} in your bag
        </span>
      </div>

      {items.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 sm:p-16 text-center space-y-3">
          <span className="material-symbols-outlined text-4xl sm:text-5xl text-slate-300 block">shopping_cart</span>
          <p className="font-semibold text-sm text-slate-400">Your cart is empty</p>
          <a href="#" className="text-[#20df60] font-bold text-sm hover:underline">Continue shopping →</a>
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} onQtyChange={onQtyChange} onRemove={onRemove} onSave={onSave} />
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="flex items-center gap-2 pt-1">
          <span className="material-symbols-outlined text-[#20df60] text-[20px]">local_shipping</span>
          <p className="text-sm font-medium text-slate-600">
            Standard delivery: <span className="font-bold text-slate-900">Estimated Wed, Oct 25</span>
          </p>
        </div>
      )}
    </div>
  );
}
