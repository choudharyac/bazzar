import { ReactComponent as CartIcon } from "../../assets/images/cart.svg";
import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dataToggle = "data-toggle";
  const dataTarget = "data-target";
  const modalShow = props.show
    ? { [dataToggle]: "modal", [dataTarget]: "#exampleModal" }
    : "";
  const quantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button type="button" className={classes.btn} {...modalShow}>
      <CartIcon />
      <span className="ml-2">{quantity} Items</span>
    </button>
  );
};

export default CartButton;
