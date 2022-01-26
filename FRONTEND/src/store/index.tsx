import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import cartReducer from "./cart";
import cartSliceReducer from "./cartSlice";

const store = configureStore({
  reducer: { auth: authReducer, cart: cartReducer, cartSlice: cartSliceReducer }
});

export default store;