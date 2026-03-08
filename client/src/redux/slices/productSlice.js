import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    fetchProductsStart: (state) => {
      state.loading = true;
    },

    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },

    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchSingleProduct: (state, action) => {
      state.product = action.payload;
    }

  }
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchSingleProduct
} = productSlice.actions;

export default productSlice.reducer;