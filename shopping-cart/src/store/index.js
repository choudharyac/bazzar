import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories";
import notificationReducer from "./notification";
import productsReducer from "./products";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    notification: notificationReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
