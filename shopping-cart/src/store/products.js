import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  products: [],
  filteredProducts: [],
  category: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload.products;
      state.filteredProducts = action.payload.products;
      state.category = action.payload.category;
    },
    sortProductsByCategory(state, action) {
      if (action.payload === null) {
        state.filteredProducts = state.products;
      } else {
        state.category = action.payload;
        state.filteredProducts = state.products.filter((product) => {
          return product.category === state.category;
        });
      }
    },
  },
});

export const productsAction = productsSlice.actions;

export default productsSlice.reducer;
