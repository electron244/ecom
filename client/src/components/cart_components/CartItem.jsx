export default function CartItem({ item, onQtyChange, onRemove, onSave }) {
  const lineTotal = (item.unitPrice * item.qty).toFixed(2);

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
      <div className="flex gap-3 sm:gap-4">
        {/* Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
          <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
        </div>

        {/* Info + controls */}
        <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
          <div>
            <h3 className="font-bold text-sm sm:text-base leading-snug text-slate-900 line-clamp-2">{item.name}</h3>
            <p className="text-slate-500 text-xs mt-0.5">{item.variant}</p>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => onRemove(item.id)}
              className="flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">delete</span>
              <span>Remove</span>
            </button>
            <button onClick={() => onSave(item.id)}
              className="flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-slate-400 hover:text-[#20df60] transition-colors uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">favorite</span>
              <span>Save for later</span>
            </button>
          </div>
        </div>

        {/* Price + stepper — right column */}
        <div className="flex-shrink-0 flex flex-col items-end justify-between gap-2 pl-2">
          <div className="text-right">
            <p className="font-extrabold text-base sm:text-lg text-slate-900 whitespace-nowrap">${lineTotal}</p>
            {item.qty > 1 && (
              <p className="text-[10px] text-slate-400 whitespace-nowrap">${item.unitPrice.toFixed(2)} each</p>
            )}
          </div>
          {/* Qty stepper */}
          <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
            <button onClick={() => onQtyChange(item.id, item.qty - 1)} disabled={item.qty <= 1}
              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Decrease qty">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="w-7 text-center font-bold text-sm select-none tabular-nums">{item.qty}</span>
            <button onClick={() => onQtyChange(item.id, item.qty + 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-all text-[#20df60]" aria-label="Increase qty">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
