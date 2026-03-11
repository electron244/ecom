/**
 * Vantage — User Profile / Account Overview
 * Fully responsive: mobile-first, all breakpoints handled.
 */

import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════

const NAV_LINKS = [
  { icon: "dashboard",   label: "Dashboard" },
  { icon: "package_2",   label: "Orders"    },
  { icon: "location_on", label: "Addresses" },
  { icon: "credit_card", label: "Payments"  },
  { icon: "settings",    label: "Settings"  },
];

const ORDERS = [
  { id: "#ORD-7721", date: "Oct 12, 2023", status: "Delivered",  statusBg: "bg-green-100",    statusColor: "text-green-700",  total: "$124.00" },
  { id: "#ORD-8832", date: "Oct 28, 2023", status: "In Transit", statusBg: "bg-[#20df60]/20", statusColor: "text-[#20df60]",  total: "$89.50"  },
  { id: "#ORD-9910", date: "Nov 05, 2023", status: "Processing", statusBg: "bg-amber-100",    statusColor: "text-amber-700",  total: "$210.00" },
];

const ADDRESSES = [
  { icon: "home", label: "Home",   isDefault: true,  lines: ["123 Madison Avenue, Suite 400", "New York, NY 10016",  "United States"] },
  { icon: "work", label: "Office", isDefault: false, lines: ["88 Tech Plaza, Floor 12",        "Brooklyn, NY 11201",  "United States"] },
];

const INFO_ITEMS = [
  { icon: "shield_person", title: "Security", desc: "2FA is enabled for your account protection."   },
  { icon: "payments",      title: "Billing",  desc: "Next payment of $19.99 scheduled for Dec 1st." },
  { icon: "mail",          title: "Support",  desc: "Chat with our 24/7 priority concierge."         },
];

const SIDEBAR_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDeDNBfdrsm5FlWuTmf7f0aE6Pr_h6VvN5GodASRljT9zY0xmEYYXHeSef2-lV4w74N6c_1KhguFq2Sdh7L15lO2SMbkwD2FzbSLtL_zF3hfWRbxQxikJIptbFKXr1edu92qNJrRvVCJ6Hm2uBjJlCtCpcR3zSfEpPtaRERg-U1NNXgS6RaywElMzHZraECWKjNHvfEktAHKaekaa3nW5vPssujYY94bDXUwf8h0qmab7AxKFdDjNPeSf6BPld7wK-HcOkEi48Erm4";
const HERO_AVATAR    = "https://lh3.googleusercontent.com/aida-public/AB6AXuAKtC29LZOl0CJHRRMR0EOZ5b3iSS8b1-s9cGP9D5MUSZJIuyG7rF3MLpJA4qhK4dEiR_1ifPGynBP1kUGhmQtRozwCB8BGzO4qOCs20jdKeLEWvW9OOO5cCDDNjo0MVLxeAEtJwsVQIWYZ-CD-MG4K4OAVppe8hR0ZwiMfRcZ8Uyhqr4e2fU_spJjwjQQeyr29kZ7Mpcz74PwqunbSDSG7OWgBq6XxWRjSeExctuyX3p_uCV66oO8fSW9idsEo0CxEUth4X6zVheM";

// ═══════════════════════════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════════════════════════

function NavLink({ icon, label, active, onClick }) {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); onClick?.(); }}
      className={[
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors duration-150 cursor-pointer",
        active
          ? "bg-[#20df60]/10 text-[#20df60] font-semibold"
          : "text-slate-600 hover:bg-slate-100 font-medium",
      ].join(" ")}
    >
      <span className="material-symbols-outlined text-[22px] flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function Sidebar({ mobileOpen, onClose }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Backdrop — only shown when drawer is open on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          // Layout & sizing
          "fixed inset-y-0 left-0 z-50 w-72 flex flex-col",
          // Desktop: static in flow, always visible
          "lg:relative lg:translate-x-0 lg:w-64 lg:z-auto",
          // Styling
          "bg-white border-r border-slate-200 shadow-xl lg:shadow-none",
          // Mobile slide animation
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* ── Logo ───────────────────────────────────────────────── */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#20df60] rounded-lg flex items-center justify-center text-slate-900 flex-shrink-0">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">Vantage</span>
          </div>
          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* ── Nav ────────────────────────────────────────────────── */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.label}
              {...item}
              active={active === item.label}
              onClick={() => { setActive(item.label); onClose?.(); }}
            />
          ))}
        </nav>

        {/* ── User footer ────────────────────────────────────────── */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center gap-3 px-1">
            <img
              src={SIDEBAR_AVATAR}
              alt="Alex Johnson"
              className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-[#20df60]/20"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">Alex Johnson</p>
              <p className="text-xs text-slate-500 truncate">alex.j@vantage.com</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-150 text-sm font-semibold">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════
// BOTTOM NAV — shown on mobile instead of sidebar
// ═══════════════════════════════════════════════════════════════════

function BottomNav() {
  const [active, setActive] = useState("Dashboard");
  // Show only first 5 items
  const items = NAV_LINKS.slice(0, 5);

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 flex items-stretch safe-bottom">
      {items.map(({ icon, label }) => (
        <button
          key={label}
          onClick={() => setActive(label)}
          className={[
            "flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-semibold transition-colors duration-150",
            active === label
              ? "text-[#20df60]"
              : "text-slate-400 hover:text-slate-600",
          ].join(" ")}
        >
          <span className={[
            "material-symbols-outlined text-[22px] transition-all duration-150",
            active === label ? "scale-110" : "",
          ].join(" ")}>
            {icon}
          </span>
          <span className="leading-tight">{label}</span>
        </button>
      ))}
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════
// TOP BAR
// ═══════════════════════════════════════════════════════════════════

function TopBar({ onMenuClick }) {
  return (
    <header className="h-14 md:h-16 border-b border-slate-200 bg-white/90 backdrop-blur-sm px-3 md:px-6 flex items-center justify-between sticky top-0 z-30 flex-shrink-0 gap-3">
      <div className="flex items-center gap-2 min-w-0">
        {/* Hamburger — mobile / tablet only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 flex-shrink-0"
          aria-label="Open navigation"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="font-bold text-base md:text-lg text-slate-900 truncate">Account Overview</h2>
      </div>

      <div className="flex items-center gap-1.5 md:gap-3 flex-shrink-0">
        {/* Notification bell */}
        <button className="p-2 rounded-full hover:bg-slate-100 transition-colors relative">
          <span className="material-symbols-outlined text-slate-600 text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#20df60] rounded-full border-2 border-white" />
        </button>

        {/* Edit Profile — icon-only on xs, text on sm+ */}
        <button className="bg-[#20df60] text-slate-900 px-3 md:px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1.5 hover:opacity-90 transition-opacity whitespace-nowrap">
          <span className="material-symbols-outlined text-[18px] leading-none">edit</span>
          <span className="hidden sm:inline">Edit Profile</span>
        </button>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PROFILE HERO
// ═══════════════════════════════════════════════════════════════════

function StatCard({ value, label }) {
  return (
    <div className="bg-[#f6f8f6] p-3 md:p-4 rounded-xl text-center flex-1">
      <p className="text-xl md:text-2xl font-black text-[#20df60]">{value}</p>
      <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{label}</p>
    </div>
  );
}

function ProfileHero() {
  return (
    <section className="bg-white rounded-xl border border-slate-200 p-5 md:p-8 shadow-sm">

      {/* Mobile layout: stacked centred */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-8">

        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={HERO_AVATAR}
            alt="Alex Johnson"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#20df60]/20 shadow-lg object-cover"
          />
          <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 bg-[#20df60] text-slate-900 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
            <span className="material-symbols-outlined text-xs md:text-sm leading-none">verified</span>
          </div>
        </div>

        {/* Name / tags / stats — takes remaining width on sm+ */}
        <div className="flex-1 w-full min-w-0 flex flex-col items-center sm:items-start gap-4">

          {/* Text block */}
          <div className="text-center sm:text-left w-full">
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">Alex Johnson</h1>
            <p className="text-slate-500 mb-3 flex items-center justify-center sm:justify-start gap-1.5 text-xs md:text-sm">
              <span className="material-symbols-outlined text-sm leading-none flex-shrink-0">calendar_today</span>
              Member since October 2022
            </p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="px-2.5 py-1 bg-[#20df60]/10 text-[#20df60] text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
                Premium Plan
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
                NYC Resident
              </span>
            </div>
          </div>

          {/* Stats — full width row on mobile, natural width on sm+ */}
          <div className="flex gap-3 w-full sm:w-auto">
            <StatCard value="12"  label="Orders" />
            <StatCard value="4.9" label="Rating" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ORDERS TABLE
// On very small screens, replaces the table with stacked order cards
// ═══════════════════════════════════════════════════════════════════

function OrderCardMobile({ id, date, status, statusBg, statusColor, total }) {
  return (
    <div className="p-4 hover:bg-slate-50/60 transition-colors duration-150 border-b border-slate-100 last:border-b-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-bold text-slate-900 text-sm">{id}</span>
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusBg} ${statusColor}`}>
          {status}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">{date}</span>
        <span className="font-bold text-sm text-slate-900">{total}</span>
      </div>
    </div>
  );
}

function OrdersTable() {
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg md:text-xl text-slate-900">Recent Orders</h3>
        <a href="#" className="text-[#20df60] text-sm font-bold hover:underline">View All</a>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        {/* Card view — xs to sm */}
        <div className="sm:hidden divide-y divide-slate-100">
          {ORDERS.map((order) => (
            <OrderCardMobile key={order.id} {...order} />
          ))}
        </div>

        {/* Table view — sm and up */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                {["Order ID", "Date", "Status", "Total"].map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 md:px-6 py-3 md:py-4 text-xs uppercase tracking-wide font-semibold whitespace-nowrap ${i === 3 ? "text-right" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ORDERS.map(({ id, date, status, statusBg, statusColor, total }) => (
                <tr key={id} className="hover:bg-slate-50/50 transition-colors duration-150">
                  <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-slate-900 whitespace-nowrap">{id}</td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-slate-500 whitespace-nowrap">{date}</td>
                  <td className="px-4 md:px-6 py-3 md:py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap ${statusBg} ${statusColor}`}>
                      {status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-right font-bold text-slate-900 whitespace-nowrap">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SAVED ADDRESSES
// ═══════════════════════════════════════════════════════════════════

function AddressCard({ icon, label, isDefault, lines }) {
  return (
    <div
      className={[
        "bg-white rounded-xl p-4 md:p-5 shadow-sm relative group transition-all duration-150",
        isDefault
          ? "border-2 border-[#20df60]"
          : "border border-slate-200 hover:border-[#20df60]/50 cursor-pointer",
      ].join(" ")}
    >
      {/* Edit button — tappable size on mobile */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4">
        <button className="text-slate-400 hover:text-[#20df60] transition-colors duration-150 p-1 rounded-md hover:bg-slate-100">
          <span className="material-symbols-outlined text-[18px]">edit</span>
        </button>
      </div>

      {/* Header row */}
      <div className="flex items-center gap-2 mb-2 pr-8">
        <span
          className={[
            "material-symbols-outlined text-[20px] transition-colors duration-150 flex-shrink-0",
            isDefault ? "text-[#20df60]" : "text-slate-400 group-hover:text-[#20df60]",
          ].join(" ")}
        >
          {icon}
        </span>
        <h4 className="font-bold text-slate-900 text-sm">{label}</h4>
        {isDefault && (
          <span className="text-[10px] font-black bg-[#20df60] text-slate-900 px-1.5 py-0.5 rounded uppercase ml-1 flex-shrink-0">
            Default
          </span>
        )}
      </div>

      {/* Address lines */}
      <p className="text-sm text-slate-600 leading-relaxed">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}

function SavedAddresses() {
  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg md:text-xl text-slate-900">Saved Addresses</h3>
        <button
          className="text-[#20df60] w-8 h-8 rounded-full border border-[#20df60]/30 flex items-center justify-center hover:bg-[#20df60]/10 transition-colors duration-150"
          aria-label="Add address"
        >
          <span className="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
      {/* On mobile, addresses flow side by side if both fit; else stack */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
        {ADDRESSES.map((addr) => (
          <AddressCard key={addr.label} {...addr} />
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// INFO FOOTER
// ═══════════════════════════════════════════════════════════════════

function InfoItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 md:gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm md:border-none md:shadow-none md:bg-transparent md:p-0">
      <div className="p-2.5 md:p-3 rounded-lg bg-[#20df60]/10 text-[#20df60] flex-shrink-0">
        <span className="material-symbols-outlined text-[20px] md:text-[24px]">{icon}</span>
      </div>
      <div className="min-w-0">
        <h5 className="font-bold text-sm text-slate-900">{title}</h5>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function InfoFooter() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 pb-20 lg:pb-4">
      {INFO_ITEMS.map((item) => (
        <InfoItem key={item.title} {...item} />
      ))}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// APP (ROOT)
// ═══════════════════════════════════════════════════════════════════

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f6f8f6] font-[Manrope] text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
        }
        /* Prevent body scroll when sidebar drawer is open */
        body.sidebar-open { overflow: hidden; }
      `}</style>

      {/* Desktop sidebar — hidden on mobile via CSS, visible lg+ */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar mobileOpen={false} onClose={() => {}} />
      </div>

      {/* Mobile/tablet sidebar drawer */}
      <Sidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content column */}
      <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page content — extra bottom padding on mobile for bottom nav */}
        <div className="p-3 sm:p-5 md:p-8 space-y-4 md:space-y-8 w-full max-w-6xl mx-auto">
          <ProfileHero />

          {/* Orders + Addresses — single column on mobile, 3-col grid on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="lg:col-span-2">
              <OrdersTable />
            </div>
            <div>
              <SavedAddresses />
            </div>
          </div>

          <InfoFooter />
        </div>
      </main>

      {/* Bottom tab bar — mobile / tablet only */}
      <BottomNav />
    </div>
  );
}
