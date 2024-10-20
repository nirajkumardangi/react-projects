import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsVisible: 'false',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

// Export the actions to use in components
export const { toggle } = uiSlice.actions;

// Export the reducer to use in the store
export default uiSlice.reducer;
