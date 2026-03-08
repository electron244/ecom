import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {

    createOrderStart: (state) => {
      state.loading = true;
    },

    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },

    createOrderFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getOrdersSuccess: (state, action) => {
      state.orders = action.payload;
    }

  }
});

export const {
  createOrderStart,
  createOrderSuccess,
  createOrderFailure,
  getOrdersSuccess
} = orderSlice.actions;

export default orderSlice.reducer;