import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
};

export const sessionSlice = createSlice({
  name: 'sessionInfo',
  initialState,
  reducers: {
    updateSessionLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload;
    },
  },
});

export const { updateSessionLoading } = sessionSlice.actions;

export default sessionSlice.reducer;
