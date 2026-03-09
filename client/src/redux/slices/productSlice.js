import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/products");
      return data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error fetching products");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    fetchSingleProduct: (state, action) => {
      state.product = action.payload;
    }

  },

  extraReducers: (builder) => {

    builder

      // LOADING
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // SUCCESS
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      // ERROR
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  }

});

export const { fetchSingleProduct } = productSlice.actions;

export default productSlice.reducer;