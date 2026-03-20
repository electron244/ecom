import { createSlice } from '@reduxjs/toolkit'

const saved = JSON.parse(localStorage.getItem('cart') || '[]')

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: saved },
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (existing) {
        existing.qty = Math.min(existing.qty + 1, existing.stock)
      } else {
        state.items.push({ ...action.payload, qty: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    updateQty(state, action) {
      const { id, qty } = action.payload
      const item = state.items.find(i => i.id === id)
      if (item) item.qty = qty
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    clearCart(state) {
      state.items = []
      localStorage.removeItem('cart')
    },
  },
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions
export default cartSlice.reducer