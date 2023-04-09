import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: null,
};

export const orderSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { payload } = action;
      state.order = payload;
    },
    setOrderId: (state, action) => {
      const { payload } = action;
      state.order_id = payload;
    },
  },
});

export const { addOrder, setOrderId } = orderSlice.actions;

export default orderSlice.reducer;
