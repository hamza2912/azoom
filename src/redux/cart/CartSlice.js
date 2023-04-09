import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  id: null,
  isCartSummaryOpen: false,
};

export const cartSlice = createSlice({
  name: 'cartInfo',
  initialState,
  reducers: {
    setCart: (state, action) => {
      const {
        payload: { id, items },
      } = action;
      state.id = id;
      state.items = items;
    },
    setCartSummaryOpen: (state, action) => {
      state.isCartSummaryOpen = action.payload;
    },
    addToCart: (state, action) => {
      const { payload } = action;
      state.items = payload;
    },
    addBillingAddressToCart: (state, action) => {
      const { payload } = action;
      state.billing_address = payload;
    },
    addShippingAddressToCart: (state, action) => {
      const { payload } = action;
      state.shipping_addresses = payload;
    },
    removeFromCart: (state, action) => {
      const { payload } = action;
      state.cart = payload;
    },
  },
});

export const {
  setCart,
  addToCart,
  addBillingAddressToCart,
  addShippingAddressToCart,
  setCartSummaryOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
