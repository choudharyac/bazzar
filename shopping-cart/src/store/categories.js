import { createSlice } from "@reduxjs/toolkit";

const initialCategoriesSlice = { categories: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesSlice,
  reducers: {
    getCategoriesHandler(state, action) {
      state.categories = action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
