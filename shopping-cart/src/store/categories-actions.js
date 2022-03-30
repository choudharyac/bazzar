import { categoriesActions } from "./categories";
import { productsAction } from "./products";

export const fetchCategories = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/categories");
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const categoriesData = await fetchData();
      dispatch(categoriesActions.getCategoriesHandler(categoriesData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();

      return data;
    };

    try {
      const productsData = await fetchData();

      dispatch(
        productsAction.getProducts({
          products: productsData,
          category: null,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
