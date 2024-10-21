import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartIsVisible: 'false',
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

// Export the actions to use in components
export const { toggle, showNotification } = uiSlice.actions;

// Export the reducer to use in the store
export default uiSlice.reducer;
