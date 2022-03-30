import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { id, name, image, price, quantity, totalPrice } = props.cartItem;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title: name,
        price,
        imageURL: image,
      })
    );
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={`list-group-item ${classes.cartItem}`}>
      <div className="d-flex align-items-center">
        <div className={classes.itemImg}>
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <div className={`ml-2 ${classes.info}`}>
          <div className={classes.title}>{name}</div>
          <div className={classes.quantity}>
            <button className="btn" onClick={removeFromCartHandler}>
              -
            </button>
            <span className="ml-2 mr-2">{quantity}</span>
            <button className="btn" onClick={addToCartHandler}>
              +
            </button>
            <span className="ml-3">X {price}</span>
          </div>
        </div>
      </div>
      <div className={`align-self-end ${classes.price}`}>
        <span>{totalPrice}</span>
      </div>
    </li>
  );
};

export default CartItem;
