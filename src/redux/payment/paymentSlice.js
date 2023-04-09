import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethod: "stripe",
};

export const paymentSlice = createSlice({
  name: "paymentInfo",
  initialState,
  reducers: {
    updatePaymentMethod: (state, action) => {
      const { payload } = action;
      state.paymentMethod = payload;
    },
  },
});

export const { updatePaymentMethod } = paymentSlice.actions;

export default paymentSlice.reducer;
