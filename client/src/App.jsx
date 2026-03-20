import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ShoppingCartPage from './pages/ShoppingCartPage'
import AdminDashboard from './pages/AdminDashboard'
import ProductListingPage from './pages/ProductListingPage'
// import ProductDetailPage from './pages/ProductDetailPage'
// import UserProfilePage from './pages/UserProfilePage'
// import CheckoutPage from './pages/CheckoutPage'
// import OrderConfirmationPage from './pages/OrderConfirmationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductListingPage />} />
        {/* <Route path="/product/:id" element={<ProductDetailPage />} /> */}

        {/* Protected (logged in) */}
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<ShoppingCartPage />} />
          {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
          {/* <Route path="/order-confirmation" element={<OrderConfirmationPage />} /> */}
          {/* <Route path="/profile" element={<UserProfilePage />} /> */}
        </Route>

        {/* Admin only */}
        <Route element={<PrivateRoute adminOnly />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App