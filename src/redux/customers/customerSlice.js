import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customer: null,
  loading: false,
};

export const customerSlice = createSlice({
  name: 'customerInfo',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      const { payload } = action;
      state.customer = payload;
    },
    setCustomerFetching: (state, { payload }) => {
      state.loading = payload;
    },
    addCustomerAddress: (state, action) => {
      const { payload } = action;
      state.customer.addresses[0] = payload;
    },
    addCustomerWishlist: (state, action) => {
      const { payload } = action;
      state.customer.favourites = payload;
    },
  },
});

export const {
  addCustomer,
  setCustomerFetching,
  addCustomerAddress,
  addCustomerWishlist,
} = customerSlice.actions;

export default customerSlice.reducer;
