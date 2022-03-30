import { Fragment } from "react";
import classes from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { productsAction } from "../../store/products";

const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories.categories);
  return (
    <Fragment>
      <div className="mt-4">
        {categories.map(
          ({ id, name, description, imageUrl, key }, categoryIndex) => {
            return (
              <div className={classes.row} key={id}>
                <div className={`col-md-12 `}>
                  {categoryIndex % 2 === 0 ? (
                    <div className={classes.categories}>
                      <img src={imageUrl} alt={name} className="img-fluid" />
                      <div className={classes.category}>
                        <div className={classes.title}>{name}</div>
                        <div className={classes.description}>{description}</div>
                        <button
                          className={`text-capitalize ${classes.btn}`}
                          onClick={() => {
                            dispatch(productsAction.sortProductsByCategory(id));
                            history.push("/products");
                          }}
                        >
                          Explore {key}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={classes.categories}>
                      <div className={classes.category}>
                        <div className={classes.title}>{name}</div>
                        <div className={classes.description}>{description}</div>
                        <button
                          className={`text-capitalize ${classes.btn}`}
                          onClick={() => {
                            dispatch(productsAction.sortProductsByCategory(id));
                            history.push("/products");
                          }}
                        >
                          Explore {key}
                        </button>
                      </div>
                      <img src={imageUrl} alt={name} className="img-fluid" />
                    </div>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </Fragment>
  );
};

export default Categories;
