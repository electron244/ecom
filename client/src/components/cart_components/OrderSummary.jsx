import { useState } from "react";

const TAX_RATE        = 0.08;
const FREE_SHIP_THRESHOLD = 800;
const PAYMENT_LOGOS = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1zz9ahBhanOcBw4o4h-C3-xd0GqAIQNub6nN1zjh8ywbSzQxY76LdXCfn_WIs2d1461xaxVxXB-GzI38KeWrgimiCiHtB4rdKYJm7ISpLgKl1-z1pGr0w1eucD36a49RiEI6nJa0066ivSEtFM10dtKbhPtfg9p3-3wrcCE-VDzGMEGN6UnX95SMhSr6OSmrS4moX1Rg3I2JgHvxw82h-SFEl43CobPDxaXQugfjei_69Zwts2Vn-9LsdGkO0WtJR5NJEzpcgI6U", alt: "Visa",       h: "h-4" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC39cQR82-9lVICbVFC0Ov7CrhGs9Dfxd-7tTPuw0H1tznq7i3TWGnRADQI0g_wtrs-s9ILgn12hdaiqTbE0bXkXFeF9-eme-bClR6akaA3Rs-gNCtVh1rthuBKqA5uEgHxLd-SxsWHKqEfX2Txg6RHZsETu0ZU-sP1J2heltfSKgSD773a_CPr0ebdgVupWzylxrFBm00AIBavQaHP6OgsY2oMDLDvA6CKYRqj7U_2J6Fp94fNMkZ5XpjXHa5xNHJRi7_XZ9EIxh8", alt: "Mastercard", h: "h-5" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhEOa7qMlcZPDe7Hl_O0AXk8t8cHegsXKVYon5wcDeYC-uCLYZ46tt0opNbjnRtxZQpqyMjxhf4nhru49KrbaZoMo14efQluJrS7lobZ7kMzghd9oqHdMRQsliqRgj3YdVUezi5TcxmQfn5wifKTw5UcPafDK8wM3LQd893aMY6l2zYWzSSIn-XeDiQ-IoeFxp9IjP9uz0HPPdgfkz1S3CgYrCHqFbP94knR3773o-uGiP1E5QUrsGljn9x3eR6LhY5srMzs0xm5U", alt: "PayPal",     h: "h-4" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlyelHL7TaNkJYK38XdjywVJYWgFVF9jQ_wjYFTAaAk_onXWtCgvUZIWezTS_lU2OYiL1PgHVBM_kXoXL933omEZXswXpaLNxKVjkGA51Ne0oJpltIvio30ueRfPGnQRLp0v1sr6HhgJGg_1l7EJGYAibaZHig5Tpp3rnOMlCmmqkd1Nkjt4QnH4igVYhUqso76X0FOKro_4XlLrNmBq1W39k6H9LuN_7ARjdKuWFqLym2xrF8KmneJO6OO6ySEuY4zGSv9QY4TRU", alt: "Apple Pay",  h: "h-5" },
];

export default function OrderSummary({ subtotal }) {
  const [promo,   setPromo]   = useState("");
  const [applied, setApplied] = useState(false);

  const tax       = subtotal * TAX_RATE;
  const total     = subtotal + tax;
  const remaining = Math.max(FREE_SHIP_THRESHOLD - subtotal, 0);
  const progress  = Math.min((subtotal / FREE_SHIP_THRESHOLD) * 100, 100);

  return (
    <div className="w-full lg:w-[380px] shrink-0">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-24 space-y-5 sm:space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">Order Summary</h2>

        {/* Free shipping progress */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">Free Shipping Progress</span>
            <span className="text-xs font-bold text-[#20df60]">
              {remaining > 0 ? `$${remaining.toFixed(2)} left` : "Unlocked 🎉"}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#20df60] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          {remaining > 0 && (
            <p className="text-[10px] sm:text-[11px] text-slate-400">
              Add ${remaining.toFixed(2)} more to unlock free express shipping!
            </p>
          )}
        </div>

        {/* Line items */}
        <div className="space-y-3">
          {[
            { label: "Subtotal",  value: `$${subtotal.toFixed(2)}`,          valueClass: "font-semibold text-slate-900" },
            { label: "Shipping",  value: "Calculated at next step",           valueClass: "font-semibold text-[#20df60] text-xs sm:text-sm" },
            { label: "Tax (8%)",  value: `$${tax.toFixed(2)}`,               valueClass: "font-semibold text-slate-900" },
          ].map(({ label, value, valueClass }) => (
            <div key={label} className="flex justify-between text-sm">
              <span className="text-slate-500">{label}</span>
              <span className={valueClass}>{value}</span>
            </div>
          ))}
          <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
            <span className="text-base sm:text-lg font-bold text-slate-900">Total</span>
            <span className="text-base sm:text-lg font-extrabold text-slate-900">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Promo */}
        <div className="space-y-1.5">
          <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">Promo Code</label>
          {applied ? (
            <div className="flex items-center gap-2 p-2.5 bg-[#20df60]/10 rounded-lg border border-[#20df60]/30">
              <span className="material-symbols-outlined text-[#20df60] text-sm">check_circle</span>
              <span className="text-sm font-semibold text-[#20df60]">"{promo}" applied!</span>
            </div>
          ) : (
            <div className="flex gap-2">
              <input value={promo} onChange={(e) => setPromo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && promo.trim() && setApplied(true)}
                className="flex-1 rounded-lg border border-slate-200 bg-slate-50 text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20df60] focus:border-[#20df60] transition-all"
                placeholder="Enter code" type="text" />
              <button onClick={() => promo.trim() && setApplied(true)}
                className="px-3 sm:px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap">
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Checkout CTA */}
        <button className="w-full bg-[#20df60] hover:bg-[#1bc954] text-slate-900 font-extrabold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg shadow-[#20df60]/20 active:scale-[0.98] flex items-center justify-center gap-2 group">
          <span className="text-sm sm:text-base">Proceed to Checkout</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">arrow_forward</span>
        </button>

        {/* Payment logos */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 opacity-50 grayscale">
          {PAYMENT_LOGOS.map(({ src, alt, h }) => (
            <img key={alt} src={src} alt={alt} className={h} />
          ))}
        </div>

        {/* Security note */}
        <div className="p-3 rounded-xl border border-dashed border-slate-300 text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
            Secure checkout powered by ShopEase. Your data is encrypted and safe.
          </p>
        </div>
      </div>
    </div>
  );
}