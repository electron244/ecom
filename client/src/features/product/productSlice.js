import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/axios'

export const fetchProducts = createAsyncThunk('products/fetchAll', async (params = {}) => {
  const res = await api.get('/products', { params })
  return res.data
})

export const fetchProductById = createAsyncThunk('products/fetchOne', async (id) => {
  const res = await api.get(`/products/${id}`)
  return res.data
})

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], currentProduct: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false; state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false; state.error = action.error.message
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload
      })
  },
})

export default productSlice.reducer