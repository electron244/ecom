import { Link } from 'react-router-dom'
import { MdDashboard, MdGridView, MdInventory2, MdShoppingCart, MdBarChart, MdGroup, MdSettings, MdHelp, MdSearch, MdNotifications, MdTranslate, MdAdd, MdPayments, MdShoppingBag, MdVisibility, MdAutoAwesome } from 'react-icons/md'

const sidebarMain = [
  { icon: MdGridView, label: 'Overview', active: true },
  { icon: MdInventory2, label: 'Products', active: false },
  { icon: MdShoppingCart, label: 'Orders', active: false },
  { icon: MdBarChart, label: 'Analytics', active: false },
  { icon: MdGroup, label: 'Customers', active: false },
]

const sidebarSystem = [
  { icon: MdSettings, label: 'Settings' },
  { icon: MdHelp, label: 'Support' },
]

const metrics = [
  { icon: MdPayments, label: 'Total Sales', value: '$128,430.00', change: '+12.5%', changeColor: 'text-primary bg-primary/10', iconColor: 'bg-primary/10 text-primary', vs: 'vs $114,160 last month' },
  { icon: MdShoppingBag, label: 'Total Orders', value: '1,240', change: '+8.2%', changeColor: 'text-blue-500 bg-blue-500/10', iconColor: 'bg-blue-500/10 text-blue-500', vs: 'vs 1,146 last month' },
  { icon: MdVisibility, label: 'Unique Visitors', value: '42,891', change: '-2.4%', changeColor: 'text-red-500 bg-red-500/10', iconColor: 'bg-purple-500/10 text-purple-500', vs: 'vs 43,945 last month' },
  { icon: () => <span className="text-2xl">📈</span>, label: 'Conv. Rate', value: '3.42%', change: '+0.8%', changeColor: 'text-primary bg-primary/10', iconColor: 'bg-amber-500/10 text-amber-500', vs: 'vs 2.62% last month' },
]

const products = [
  { name: 'Nike Air Max 270', category: 'Footwear', price: '$149.00', stock: 42, stockPct: 70, status: 'In Stock', statusColor: 'bg-green-100 text-green-600', barColor: 'bg-primary', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_P6mVWweirC2Sh6hRIZM7HlSu2GIOYAKPcHlyRW8eqkN7fsOXWmRPyLcZqWaaNVTDAkTINKp7e0ijXw7i2FINk_6K-SP_57CB7jyIR5k_vL_oDsiyZ--aEXJPnKTIsOS5EcuA_8kl9C8hrMADO9WNHZCH4qj2VygrimMBCByTJdx9snwQvHTuU_PZI2uSZoxUNhnZ5-sj0AlcjFnCcx7sJDZZEWYBZD8e_LHdtcTENGiNnJCS1WPMmPPQ-5wbGeqqNQa7lRXHfyw' },
  { name: 'Minimalist Chrono', category: 'Accessories', price: '$89.00', stock: 5, stockPct: 15, status: 'Low Stock', statusColor: 'bg-amber-100 text-amber-600', barColor: 'bg-amber-500', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-lUnBIKwfWTPSlNY6v53Yjv9d3CRoMplBEDy8QlpGivlNmEU2pEbE_4UGn6Yr_e2EAgfOGVxRDff8lJRkMBb2V3G00jCrd7L9ZofJXXu5O1XEHM8fbuFk_WSpJMUDmeypkbESNwsm-qtxYv2KW_URgGxUFbENnQm7uEl9p1ya-JiFZFBS9R7rX9n2y7wwuf5_GRQEvgw3GkbxKMQrN5Egfdx4LxiOP7JE3k-p3TP-aMmHHR2xsSRC7MSdRUsGZYs7puFrkq8TG48' },
  { name: 'Sony WH-1000XM4', category: 'Electronics', price: '$349.99', stock: 0, stockPct: 0, status: 'Out of Stock', statusColor: 'bg-red-100 text-red-600', barColor: 'bg-red-500', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnF4o4OeGprAIqjsQfhBi-7GnWSIIbZldz6Ege3hA4N2eViBmRPyoVUtKxPPXv4KgCOhsxGPG-ROQhBT8VY_TU94nwPseqTVS9lJuFDbdOXIs9ylWYgiVTO7BDnm8QCpt1cZ7IRDt7-7ITbcXdyC5G6v3WD_v5GBHfMOvRPtg1kH4zs4zWdg7tjHSVbxiO-ZiNIGeV1meQ9NkLGAybLHsndaSOZb9WJXqY_0cX8_Q4WVFoTnh4fvocvx0r0ms-4MDp9HUqVPZCsls' },
]

const recentOrders = [
  { id: '#ORD-90123', name: 'Jordan Smith', items: '2 items • 10:24 AM', amount: '$210.50', status: 'Success', statusColor: 'bg-primary/20 text-primary' },
  { id: '#ORD-90122', name: 'Sarah Connor', items: '1 item • 09:45 AM', amount: '$45.00', status: 'Pending', statusColor: 'bg-amber-500/20 text-amber-600' },
  { id: '#ORD-90121', name: 'John Wick', items: '3 items • 08:30 AM', amount: '$1,290.00', status: 'Failed', statusColor: 'bg-red-500/20 text-red-600' },
  { id: '#ORD-90120', name: 'Ellen Ripley', items: '1 item • 07:15 AM', amount: '$320.00', status: 'Success', statusColor: 'bg-primary/20 text-primary' },
]

export default function AdminDashboardPage() {
  return (
    <div className="bg-background-light text-slate-900 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-200 bg-white flex flex-col">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-slate-900">
              <MdDashboard className="text-2xl" />
            </div>
            <Link to="/" className="text-xl font-extrabold tracking-tight">MINIMA</Link>
          </div>
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            <p className="text-xs font-semibold text-slate-400 px-3 py-4 uppercase tracking-wider">Main Menu</p>
            {sidebarMain.map((item) => (
              <a key={item.label} className={`flex items-center gap-3 px-3 py-2 rounded-lg ${item.active ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-600 hover:bg-slate-100 transition-colors'}`} href="#">
                <item.icon className="text-2xl" /> {item.label}
              </a>
            ))}
            <p className="text-xs font-semibold text-slate-400 px-3 py-4 uppercase tracking-wider">System</p>
            {sidebarSystem.map((item) => (
              <a key={item.label} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" href="#">
                <item.icon className="text-2xl" /> {item.label}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-3 p-2">
              <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW4tobK3xezj-luT60UfjWbaEOtKIGaW6Lx54gjz4V6QTpVXmDYAf9u8-G0uM05mwtY7ncvAlTX3uU2TPa_Pa-VZfUKT8nsp-0VjiQIbQscmp0ceL2jOv3Iur1hX-QUkOawVx7kAUH-Nz0kxbmmRAwoJMBEyfTK2wCcUm5HIFWQityze03rHNXFSdx1agmVELbm7pQWO9ppFVMmwOsxqIi3mUAHYZ_z2_b06zVSqa4Xw6r00Nu7Ben3Awzgw5pDXzqmhSNBjJGYAQ" />
              </div>
              <div>
                <p className="text-sm font-bold">Alex Rivers</p>
                <p className="text-xs text-slate-500">Store Manager</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
            <div className="flex items-center bg-slate-100 px-3 py-1.5 rounded-lg w-96 border border-slate-200">
              <MdSearch className="text-slate-400 text-xl" />
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500" placeholder="Search orders, products, or customers..." type="text" />
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <MdNotifications className="text-2xl" />
                <span className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-white"></span>
              </button>
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <MdTranslate className="text-2xl" />
              </button>
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              <button className="flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-lg font-bold text-sm hover:brightness-110 transition-all">
                <MdAdd className="text-lg" /> New Product
              </button>
            </div>
          </header>

          <div className="p-8 space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Dashboard Overview</h2>
              <p className="text-slate-500">Welcome back, here&apos;s what&apos;s happening with your store today.</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${m.iconColor}`}>
                      {typeof m.icon === 'function' ? <m.icon className="text-2xl" /> : <m.icon className="text-2xl" />}
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${m.changeColor}`}>{m.change}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{m.label}</p>
                  <h3 className="text-2xl font-extrabold mt-1">{m.value}</h3>
                  <p className="text-xs text-slate-400 mt-4">{m.vs}</p>
                </div>
              ))}
            </div>

            {/* Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Management Table */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-lg font-bold">Product Management</h3>
                  <button className="text-sm font-semibold text-primary hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Product</th>
                        <th className="px-6 py-4">Category</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Stock</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm">
                      {products.map((p) => (
                        <tr key={p.name} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-3">
                            <div className="size-10 rounded bg-slate-100 flex-shrink-0">
                              <img className="w-full h-full object-cover rounded" src={p.image} />
                            </div>
                            <span className="font-bold">{p.name}</span>
                          </td>
                          <td className="px-6 py-4 text-slate-500">{p.category}</td>
                          <td className="px-6 py-4 font-medium">{p.price}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{p.stock}</span>
                              <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                <div className={`${p.barColor} h-full`} style={{ width: `${p.stockPct}%` }}></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${p.statusColor}`}>{p.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent History */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                  <h3 className="text-lg font-bold">Recent History</h3>
                </div>
                <ul className="divide-y divide-slate-200">
                  {recentOrders.map((o) => (
                    <li key={o.id} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-400 font-medium">{o.id}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${o.statusColor}`}>{o.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold">{o.name}</p>
                          <p className="text-xs text-slate-500">{o.items}</p>
                        </div>
                        <p className="font-extrabold text-lg">{o.amount}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-slate-50 text-center">
                  <button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Download All Records</button>
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary flex items-center justify-center text-slate-900">
                  <MdAutoAwesome className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">AI Recommendation</h4>
                  <p className="text-slate-600 text-sm">&quot;Sony WH-1000XM4&quot; is trending. Consider restock soon to capitalize on search volume.</p>
                </div>
              </div>
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-xl shadow-primary/10 hover:scale-105 transition-transform whitespace-nowrap">
                Optimize Inventory
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="p-8 mt-auto border-t border-slate-200 text-center text-slate-500 text-xs">
            © 2024 MINIMA Analytics Dashboard. All rights reserved. Professional Admin Interface.
          </footer>
        </main>
      </div>
    </div>
  )
}
