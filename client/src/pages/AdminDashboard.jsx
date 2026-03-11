/**
 * Vantage Admin Dashboard
 * ─────────────────────────────────────────────────────────────────
 * Stack:  React 18 · Tailwind CSS (CDN arbitrary values) · JSX only
 * Split:  Sidebar | TopBar | MetricCard | ProductTable |
 *         RecentOrders | AIRecommendation | App
 *
 * Install:  npm install react react-dom
 * Fonts loaded via <style> @import — no extra setup needed.
 * ─────────────────────────────────────────────────────────────────
 */

import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const NAV_MAIN = [
  { icon: "grid_view",     label: "Overview"   },
  { icon: "inventory_2",   label: "Products"   },
  { icon: "shopping_cart", label: "Orders"     },
  { icon: "bar_chart",     label: "Analytics"  },
  { icon: "group",         label: "Customers"  },
];

const NAV_SYSTEM = [
  { icon: "settings", label: "Settings" },
  { icon: "help",     label: "Support"  },
];

const METRICS = [
  {
    icon: "payments", iconBg: "bg-[#20df60]/10", iconColor: "text-[#20df60]",
    badgeText: "+12.5%", badgeBg: "bg-[#20df60]/10", badgeColor: "text-[#20df60]",
    label: "Total Sales", value: "$128,430.00", sub: "vs $114,160 last month",
  },
  {
    icon: "shopping_bag", iconBg: "bg-blue-500/10", iconColor: "text-blue-500",
    badgeText: "+8.2%", badgeBg: "bg-blue-500/10", badgeColor: "text-blue-500",
    label: "Total Orders", value: "1,240", sub: "vs 1,146 last month",
  },
  {
    icon: "visibility", iconBg: "bg-purple-500/10", iconColor: "text-purple-500",
    badgeText: "-2.4%", badgeBg: "bg-red-500/10", badgeColor: "text-red-500",
    label: "Unique Visitors", value: "42,891", sub: "vs 43,945 last month",
  },
  {
    icon: "conversion_path", iconBg: "bg-amber-500/10", iconColor: "text-amber-500",
    badgeText: "+0.8%", badgeBg: "bg-[#20df60]/10", badgeColor: "text-[#20df60]",
    label: "Conv. Rate", value: "3.42%", sub: "vs 2.62% last month",
  },
];

const PRODUCTS = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_P6mVWweirC2Sh6hRIZM7HlSu2GIOYAKPcHlyRW8eqkN7fsOXWmRPyLcZqWaaNVTDAkTINKp7e0ijXw7i2FINk_6K-SP_57CB7jyIR5k_vL_oDsiyZ--aEXJPnKTIsOS5EcuA_8kl9C8hrMADO9WNHZCH4qj2VygrimMBCByTJdx9snwQvHTuU_PZI2uSZoxUNhnZ5-sj0AlcjFnCcx7sJDZZEWYBZD8e_LHdtcTENGiNnJCS1WPMmPPQ-5wbGeqqNQa7lRXHfyw",
    name: "Nike Air Max 270", category: "Footwear", price: "$149.00",
    stockPct: 70, stockNum: 42, barColor: "bg-[#20df60]",
    status: "In Stock", statusBg: "bg-green-100", statusTx: "text-green-600",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-lUnBIKwfWTPSlNY6v53Yjv9d3CRoMplBEDy8QlpGivlNmEU2pEbE_4UGn6Yr_e2EAgfOGVxRDff8lJRkMBb2V3G00jCrd7L9ZofJXXu5O1XEHM8fbuFk_WSpJMUDmeypkbESNwsm-qtxYv2KW_URgGxUFbENnQm7uEl9p1ya-JiFZFBS9R7rX9n2y7wwuf5_GRQEvgw3GkbxKMQrN5Egfdx4LxiOP7JE3k-p3TP-aMmHHR2xsSRC7MSdRUsGZYs7puFrkq8TG48",
    name: "Minimalist Chrono", category: "Accessories", price: "$89.00",
    stockPct: 15, stockNum: 5, barColor: "bg-amber-500",
    status: "Low Stock", statusBg: "bg-amber-100", statusTx: "text-amber-600",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnF4o4OeGprAIqjsQfhBi-7GnWSIIbZldz6Ege3hA4N2eViBmRPyoVUtKxPPXv4KgCOhsxGPG-ROQhBT8VY_TU94nwPseqTVS9lJuFDbdOXIs9ylWYgiVTO7BDnm8QCpt1cZ7IRDt7-7ITbcXdyC5G6v3WD_v5GBHfMOvRPtg1kH4zs4zWdg7tjHSVbxiO-ZiNIGeV1meQ9NkLGAybLHsndaSOZb9WJXqY_0cX8_Q4WVFoTnh4fvocvx0r0ms-4MDp9HUqVPZCsls",
    name: "Sony WH-1000XM4", category: "Electronics", price: "$349.99",
    stockPct: 0, stockNum: 0, barColor: "bg-red-500",
    status: "Out of Stock", statusBg: "bg-red-100", statusTx: "text-red-600",
  },
];

const ORDERS = [
  { id: "#ORD-90123", customer: "Jordan Smith", items: "2 items", time: "10:24 AM", amount: "$210.50",  status: "Success", statusBg: "bg-[#20df60]/20", statusColor: "text-[#20df60]" },
  { id: "#ORD-90122", customer: "Sarah Connor",  items: "1 item",  time: "09:45 AM", amount: "$45.00",   status: "Pending", statusBg: "bg-amber-500/20", statusColor: "text-amber-600" },
  { id: "#ORD-90121", customer: "John Wick",     items: "3 items", time: "08:30 AM", amount: "$1,290.00",status: "Failed",  statusBg: "bg-red-500/20",   statusColor: "text-red-600"   },
  { id: "#ORD-90120", customer: "Ellen Ripley",  items: "1 item",  time: "07:15 AM", amount: "$320.00",  status: "Success", statusBg: "bg-[#20df60]/20", statusColor: "text-[#20df60]" },
];

// ═══════════════════════════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════════════════════════

function NavLink({ icon, label, active, onClick }) {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick?.(); }}
      className={[
        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150 cursor-pointer",
        active
          ? "bg-[#20df60]/10 text-[#20df60] font-semibold"
          : "text-slate-600 hover:bg-slate-100 font-medium",
      ].join(" ")}
    >
      <span className="material-symbols-outlined text-[20px] flex-shrink-0">{icon}</span>
      {label}
    </a>
  );
}

function Sidebar({ mobileOpen, onClose }) {
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className={[
        "fixed lg:static inset-y-0 left-0 z-30 w-64 border-r border-slate-200 bg-white flex flex-col",
        "transition-transform duration-300 ease-in-out",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      ].join(" ")}>

        {/* Logo */}
        <div className="p-6 flex items-center gap-3 flex-shrink-0">
          <div className="bg-[#20df60] p-2 rounded-lg text-slate-900 flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">Vantage</h1>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-400 px-3 py-3 uppercase tracking-wider">Main Menu</p>
          {NAV_MAIN.map((item) => (
            <NavLink
              key={item.label} {...item}
              active={activeNav === item.label}
              onClick={() => { setActiveNav(item.label); onClose?.(); }}
            />
          ))}
          <p className="text-xs font-semibold text-slate-400 px-3 py-3 uppercase tracking-wider mt-2">System</p>
          {NAV_SYSTEM.map((item) => (
            <NavLink
              key={item.label} {...item}
              active={activeNav === item.label}
              onClick={() => { setActiveNav(item.label); onClose?.(); }}
            />
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-slate-200 flex-shrink-0">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW4tobK3xezj-luT60UfjWbaEOtKIGaW6Lx54gjz4V6QTpVXmDYAf9u8-G0uM05mwtY7ncvAlTX3uU2TPa_Pa-VZfUKT8nsp-0VjiQIbQscmp0ceL2jOv3Iur1hX-QUkOawVx7kAUH-Nz0kxbmmRAwoJMBEyfTK2wCcUm5HIFWQityze03rHNXFSdx1agmVELbm7pQWO9ppFVMmwOsxqIi3mUAHYZ_z2_b06zVSqa4Xw6r00Nu7Ben3Awzgw5pDXzqmhSNBjJGYAQ"
                alt="Alex Rivers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">Alex Rivers</p>
              <p className="text-xs text-slate-500">Store Manager</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════
// TOP BAR
// ═══════════════════════════════════════════════════════════════════

function TopBar({ onMenuClick }) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-4 md:px-8 gap-4 flex-shrink-0">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 w-full max-w-sm md:max-w-md">
          <span className="material-symbols-outlined text-slate-400 text-xl flex-shrink-0">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 outline-none text-sm w-full placeholder:text-slate-500 ml-2"
            placeholder="Search orders, products, or customers..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#20df60] rounded-full ring-2 ring-white" />
        </button>
        <button className="hidden sm:flex p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="material-symbols-outlined">translate</span>
        </button>
        <div className="hidden sm:block h-6 w-px bg-slate-200" />
        <button className="flex items-center gap-1.5 bg-[#20df60] text-slate-900 px-3 md:px-4 py-2 rounded-lg font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap">
          <span className="material-symbols-outlined text-lg leading-none">add</span>
          <span className="hidden sm:inline">New Product</span>
        </button>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════
// METRIC CARD
// ═══════════════════════════════════════════════════════════════════

function MetricCard({ icon, iconBg, iconColor, badgeText, badgeBg, badgeColor, label, value, sub }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 ${iconBg} ${iconColor} rounded-lg`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span className={`text-xs font-bold ${badgeColor} ${badgeBg} px-2 py-1 rounded`}>{badgeText}</span>
      </div>
      <p className="text-slate-500 text-sm font-medium">{label}</p>
      <h3 className="text-2xl font-extrabold mt-1 text-slate-900">{value}</h3>
      <p className="text-xs text-slate-400 mt-4">{sub}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PRODUCT TABLE
// ═══════════════════════════════════════════════════════════════════

function ProductTable() {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Product Management</h3>
        <button className="text-sm font-semibold text-[#20df60] hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
            <tr>
              {["Product", "Category", "Price", "Stock", "Status"].map((h) => (
                <th key={h} className="px-6 py-4 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {PRODUCTS.map((p) => (
              <tr key={p.name} className="hover:bg-slate-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-100 flex-shrink-0 overflow-hidden">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-slate-900 whitespace-nowrap">{p.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{p.category}</td>
                <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">{p.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 w-5 text-right">{p.stockNum}</span>
                    <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`${p.barColor} h-full rounded-full`} style={{ width: `${p.stockPct}%` }} />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase whitespace-nowrap ${p.statusBg} ${p.statusTx}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// RECENT ORDERS
// ═══════════════════════════════════════════════════════════════════

function RecentOrders() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-lg font-bold text-slate-900">Recent History</h3>
      </div>
      <ul className="divide-y divide-slate-200">
        {ORDERS.map(({ id, customer, items, time, amount, status, statusBg, statusColor }) => (
          <li key={id} className="p-6 hover:bg-slate-50 transition-colors duration-150">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 font-medium">{id}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${statusBg} ${statusColor}`}>{status}</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900 text-sm">{customer}</p>
                <p className="text-xs text-slate-500">{items} • {time}</p>
              </div>
              <p className="font-extrabold text-lg text-slate-900">{amount}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-slate-50 text-center">
        <button className="text-sm font-bold text-slate-600 hover:text-[#20df60] transition-colors duration-150">
          Download All Records
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// AI RECOMMENDATION BANNER
// ═══════════════════════════════════════════════════════════════════

function AIRecommendation() {
  return (
    <div className="bg-[#20df60]/5 border border-[#20df60]/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#20df60] flex items-center justify-center text-slate-900 flex-shrink-0">
          <span className="material-symbols-outlined">auto_awesome</span>
        </div>
        <div>
          <h4 className="font-bold text-lg text-slate-900">AI Recommendation</h4>
          <p className="text-slate-600 text-sm">
            "Sony WH-1000XM4" is trending. Consider restock soon to capitalise on search volume.
          </p>
        </div>
      </div>
      <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-xl shadow-[#20df60]/10 hover:scale-105 transition-transform duration-150 whitespace-nowrap flex-shrink-0">
        Optimize Inventory
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// APP (ROOT)
// ═══════════════════════════════════════════════════════════════════

export default function AdminDashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f8f6] font-[Manrope] text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block; line-height: 1;
        }
      `}</style>

      <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <div className="p-4 md:p-8 space-y-8">
          {/* Page title */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Dashboard Overview</h2>
            <p className="text-slate-500 mt-1 text-sm">
              Welcome back, here's what's happening with your store today.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((m) => <MetricCard key={m.label} {...m} />)}
          </div>

          {/* Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProductTable />
            <RecentOrders />
          </div>

          {/* AI banner */}
          <AIRecommendation />
        </div>

        <footer className="p-8 mt-auto border-t border-slate-200 text-center text-slate-500 text-xs">
          © 2024 Vantage Analytics Dashboard. All rights reserved. Professional Admin Interface.
        </footer>
      </main>
    </div>
  );
}