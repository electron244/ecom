import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import UserProfilePage from "./pages/UserProfilePage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<ShoppingCartPage />} />

        <Route path="profile" element={<UserProfilePage />} />

        <Route path="/products" element={<ProductListingPage />} />

        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
