import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../redux/ui-slice';
import cartSlice from '../redux/cart-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice, // We add our ui reducer here
    cart: cartSlice, // We add our cart reducer here
  },
});

export default store;
