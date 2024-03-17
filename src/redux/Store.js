import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import viewProductSlice from "./Slices/viewProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    viewproduct:viewProductSlice
  },
});