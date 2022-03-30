import { Fragment, useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../../store/products";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategory] = useState(null);
  const categories = useSelector((state) => state.categories.categories);
  const initialCategoryId = useSelector((state) => state.products.category);

  useEffect(() => {
    dispatch(productsAction.sortProductsByCategory(categoryId));
  }, [categoryId, dispatch]);
  useEffect(() => {
    if (initialCategoryId !== null) {
      setCategory(initialCategoryId);
    }
  }, [initialCategoryId]);

  return (
    <Fragment>
      <ul className={`nav flex-column nav-pills ${classes.categories}`}>
        {categories.map((category) => {
          return (
            <li key={category.id} className={`nav-item ${classes.category}`}>
              <span
                className={`nav-link ${classes.categoryLink} ${
                  categoryId !== null && category.id === categoryId
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  if (categoryId === category.id) {
                    setCategory(null);
                  } else {
                    setCategory(category.id);
                  }
                }}
              >
                {category.name}
              </span>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Sidebar;
