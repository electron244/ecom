import { useState } from "react";
import OrderSummary from "../components/cart_components/OrderSummary";
import Navbar from "../components/Navbar";
import CartList from "../components/cart_components/CartList";


const INITIAL_CART = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    variant: "Space Gray • Bluetooth 5.0",
    unitPrice: 249.0,
    qty: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVI0FU-CJQy0JuzaG-tzaRk7kGDCZe6LQfd5yF9RIS87L4xu6dA-Dd1cCUfzj4pdgIywIDvLghSIx1HnmmyHBIU2ecUZrwfpQ24ie2ll0z-JNXtqYhf6GH_q_hnCiPunzcUhTe43aY5KsTW9UrRCFfIqOXoi7uCac8ewLXf50qgivDBbvhBBrrQ1lKGKvpGS9SDdV-3w46WEO_I8OuUAk04u5N8OFbgHNswi7NjL2A3KT649izhwT2RXKUXVe3dBM9kYwIBOE6HKI",
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    variant: "Silver Aluminum • 45mm",
    unitPrice: 199.5,
    qty: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRd1gGx4vm8GGqr6nfQlR297xsvrgE7c7_VdTaMIWhEWBcwbF1Tj2XiewCGRq_EBcCsY9XkXaIsEEcJeaA0gU2rjDU1RmLILZ5M0vRJXWCLOYlgKmiKSS49xkUlpx4qb6IHMGzuYNU8LLZgx1ErmXd7nGiXjSqREHmdNNSIPrHzF3RHFZkdRsP3A8O2SVC1DDebshoKgi5n5I6bjfrlatENPQT3GH-1jTQ2cTEQLvi2yIByT58PvieLv9LVL6wX5AagHv1VSIoifw",
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard",
    variant: "RGB Backlit • Cherry MX Blue",
    unitPrice: 129.99,
    qty: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsmphOYuIMgRTeW-9r6CPceQ_FAqGEAZdSGaJ_XvjzDcIYqcdCkDh3_Wcm1Abq-Tk45EFuq7iRdMR3bIU0IcYDGe2IKfUYg9izdkKtgo0VSpADSxfj_4zB8V_NuM026SqeL70H63FfpEf2izTUoZ7yiOG1XW7AXBiqHlqUSIZcXjEVDOU45FFGd8a-CnZZ6EEhAf_UIHzvYCM53LRnutcm3GnwqE3A5z3XU-KVOL1Le434cJRoam4EGoI6Cwx_8VL-rxtonQ1dReA",
  },
];


export default function Cart() {
  const [items, setItems] = useState(INITIAL_CART);

  const handleQtyChange = (id, newQty) => {
    if (newQty < 1) return;
    setItems((prev) => prev.map((it) => it.id === id ? { ...it, qty: newQty } : it));
  };
  const handleRemove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));
  const handleSave   = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((s, it) => s + it.unitPrice * it.qty, 0);
  const totalQty = items.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="min-h-screen bg-[#f6f8f6] font-[Manrope] text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <Navbar cartCount={totalQty} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <CartList items={items} onQtyChange={handleQtyChange} onRemove={handleRemove} onSave={handleSave} />
          <OrderSummary subtotal={subtotal} />
        </div>
      </main>
    </div>
  );
}