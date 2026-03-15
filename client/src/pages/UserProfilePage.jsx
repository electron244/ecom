import { Link } from 'react-router-dom'
import { MdBolt, MdDashboard, MdInventory2, MdLocationOn, MdCreditCard, MdSettings, MdLogout, MdNotifications, MdEdit, MdCalendarToday, MdVerified, MdHome, MdWork, MdAdd , MdPayments, MdEmail } from 'react-icons/md'
import { IoMdPerson } from "react-icons/io";

const orders = [
  { id: '#ORD-7721', date: 'Oct 12, 2023', status: 'Delivered', statusColor: 'bg-green-100 text-green-700', total: '$124.00' },
  { id: '#ORD-8832', date: 'Oct 28, 2023', status: 'In Transit', statusColor: 'bg-primary/20 text-primary', total: '$89.50' },
  { id: '#ORD-9910', date: 'Nov 05, 2023', status: 'Processing', statusColor: 'bg-amber-100 text-amber-700', total: '$210.00' },
]

const sidebarLinks = [
  { icon: MdDashboard, label: 'Dashboard', active: true },
  { icon: MdInventory2, label: 'Orders', active: false },
  { icon: MdLocationOn, label: 'Addresses', active: false },
  { icon: MdCreditCard, label: 'Payments', active: false },
  { icon: MdSettings, label: 'Settings', active: false },
]

export default function UserProfilePage() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 bg-white hidden lg:flex flex-col sticky top-0 h-screen">
          <div className="p-6">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                <MdBolt className="text-xl font-bold" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">MINIMA</span>
            </Link>
            <nav className="space-y-1">
              {sidebarLinks.map((item) => (
                <a key={item.label} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${item.active ? 'bg-primary/10 text-primary' : 'hover:bg-slate-100 text-slate-600'} transition-colors`} href="#">
                  <item.icon className="text-[22px]" />
                  <span className={`text-sm ${item.active ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-6 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-full bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeDNBfdrsm5FlWuTmf7f0aE6Pr_h6VvN5GodASRljT9zY0xmEYYXHeSef2-lV4w74N6c_1KhguFq2Sdh7L15lO2SMbkwD2FzbSLtL_zF3hfWRbxQxikJIptbFKXr1edu92qNJrRvVCJ6Hm2uBjJlCtCpcR3zSfEpPtaRERg-U1NNXgS6RaywElMzHZraECWKjNHvfEktAHKaekaa3nW5vPssujYY94bDXUwf8h0qmab7AxKFdDjNPeSf6BPld7wK-HcOkEi48Erm4')` }}></div>
              <div className="flex flex-col">
                <span className="text-sm font-bold truncate">Electron</span>
                <span className="text-xs text-slate-500 truncate">electronshop@gmail.com</span>
              </div>
            </div>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
              <MdLogout className="text-[22px]" />
              <span className="text-sm font-semibold">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Top Header */}
          <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-sm px-8 flex items-center justify-between sticky top-0 z-10">
            <h2 className="font-bold text-lg">Account Overview</h2>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-slate-100 relative">
                <MdNotifications className="text-2xl" />
                <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
              <button className="bg-primary text-background-dark px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <MdEdit className="text-sm" /> Edit Profile
              </button>
            </div>
          </header>

          <div className="p-8 space-y-8 max-w-6xl">
            {/* Profile Hero Card */}
            <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="size-32 rounded-full border-4 border-primary/20 bg-cover bg-center shadow-lg" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKtC29LZOl0CJHRRMR0EOZ5b3iSS8b1-s9cGP9D5MUSZJIuyG7rF3MLpJA4qhK4dEiR_1ifPGynBP1kUGhmQtRozwCB8BGzO4qOCs20jdKeLEWvW9OOO5cCDDNjo0MVLxeAEtJwsVQIWYZ-CD-MG4K4OAVppe8hR0ZwiMfRcZ8Uyhqr4e2fU_spJjwjQQeyr29kZ7Mpcz74PwqunbSDSG7OWgBq6XxWRjSeExctuyX3p_uCV66oO8fSW9idsEo0CxEUth4X6zVheM')` }}></div>
                  <div className="absolute bottom-1 right-1 bg-primary text-background-dark size-8 rounded-full flex items-center justify-center border-4 border-white">
                    <MdVerified className="text-sm font-bold" />
                  </div>
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-black mb-1">Electron Singh</h1>
                  <p className="text-slate-500 mb-4 flex items-center justify-center md:justify-start gap-2">
                    <MdCalendarToday className="text-sm" /> Member since Match 2026
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">Premium Plan</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">NYC Resident</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="bg-background-light p-4 rounded-xl text-center min-w-[120px]">
                    <p className="text-2xl font-black text-primary">12</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Orders</p>
                  </div>
                  <div className="bg-background-light p-4 rounded-xl text-center min-w-[120px]">
                    <p className="text-2xl font-black text-primary">4.9</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Rating</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Orders */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Recent Orders</h3>
                  <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 font-bold">
                      <tr>
                        <th className="px-6 py-4">Order ID</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold">{order.id}</td>
                          <td className="px-6 py-4 text-slate-500">{order.date}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${order.statusColor}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-bold">{order.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Saved Addresses */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl">Saved Addresses</h3>
                  <button className="text-primary size-8 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <MdAdd className="text-sm" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="bg-white border-2 border-primary rounded-xl p-5 shadow-sm relative group">
                    <div className="absolute top-4 right-4">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <MdEdit className="text-[18px]" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdHome className="text-primary text-[20px]" />
                      <h4 className="font-bold">Home</h4>
                      <span className="text-[10px] font-black bg-primary text-background-dark px-1.5 py-0.5 rounded uppercase ml-2">Default</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Parul University, Vadodara<br />Gujarat, 391760 <br />India
                    </p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <MdWork className="text-slate-400 group-hover:text-primary text-[20px] transition-colors" />
                      <h4 className="font-bold">Office</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Parul University, Vadodara<br />Gujarat, 391760 <br />India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Summary */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {[
                { icon: IoMdPerson , title: 'Security', desc: '2FA is enabled for your account protection.' },
                { icon: MdPayments, title: 'Billing', desc: 'Next payment of $19.99 scheduled for Dec 1st.' },
                { icon: MdEmail, title: 'Support', desc: 'Chat with our 24/7 priority concierge.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{item.title}</h5>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
