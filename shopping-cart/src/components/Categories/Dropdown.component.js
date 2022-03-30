import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../../store/products";
import classes from "./Dropdown.module.css";
const Dropdown = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("Select Category");
  const categories = useSelector((state) => state.categories.categories);
  const initialCategoryId = useSelector((state) => state.products.category);

  useEffect(() => {
    dispatch(productsAction.sortProductsByCategory(categoryId));
  }, [categoryId, dispatch]);
  useEffect(() => {
    if (initialCategoryId !== null) {
      const category = categories.find((category) => {
        return category.id === initialCategoryId;
      });
      setCategory(initialCategoryId);
      setCategoryName(category.name);
    }
  }, [initialCategoryId, categories]);
  return (
    <Fragment>
      <div className={`dropdown ${classes.bazzarDropdown}`}>
        <button
          className="btn btn-block dropdown-toggle"
          type="button"
          id="sabkaBazzarDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {categoryName}
        </button>
        <div className="dropdown-menu" aria-labelledby="sabkaBazzarDropdown">
          {categories.map((category) => {
            return (
              <span
                key={category.id}
                className={`dropdown-item ${classes.dropdownItem} ${
                  categoryId !== null && category.id === categoryId
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  if (categoryId === category.id) {
                    setCategoryName("Select Category");
                    setCategory(null);
                  } else {
                    setCategory(category.id);
                    setCategoryName(category.name);
                  }
                }}
              >
                {category.name}
              </span>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Dropdown;
