import { Fragment } from "react";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/notification";
const ProductItem = (props) => {
  const { id, name, imageURL, description, price } = props.product;

  const dispatch = useDispatch();
  const addToCartApiHandler = async () => {
    const response = await fetch("http://localhost:5000/addToCart", {
      method: "POST",
      body: JSON.stringify({
        id,
      }),
    });
    if (!response.ok) {
      throw new Error("Could not fetch cart data!");
    }
    const data = await response.json();

    return data;
  };
  const addToCartHandler = async () => {
    const addToCart = await addToCartApiHandler();

    dispatch(
      cartActions.addItemToCart({
        id,
        title: name,
        price,
        imageURL,
      })
    );
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: addToCart.response,
        message: addToCart.responseMessage,
      })
    );
    setTimeout(() => {
      dispatch(uiActions.resetNotification(null));
    }, 3000);
  };
  return (
    <Fragment>
      <li className={`list-group-item ${classes.productItem}`}>
        <div className={classes.title}>{name}</div>
        <div className={classes.wrapper}>
          <div className="image">
            <img src={imageURL} alt={name} className={classes.productImg} />
          </div>
          <div className={classes.descriptionWrapper}>
            <div className={classes.description}>{description}</div>

            <div className={classes.price}>
              <span className="price">MRP Rs{price}</span>
              <button onClick={addToCartHandler} className="btn">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className={` ${classes.priceMob}`}>
          <button onClick={addToCartHandler} className="btn btn-block">
            Buy Now @MRP Rs{price}
          </button>
        </div>
      </li>
    </Fragment>
  );
};

export default ProductItem;
