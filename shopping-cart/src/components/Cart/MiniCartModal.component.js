import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.component";
import classes from "./MiniCartModal.module.css";

const MiniCartModal = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <Fragment>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                My Cart
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body bg-light">
              {cartItems.length === 0 && (
                <div className="text-center">
                  <p className="font-weight-bolder">No Items in your cart</p>
                  <p>Your favorite items are just a click away.</p>
                </div>
              )}
              <ul className="list-group">
                {cartItems.map((cartItem) => {
                  return <CartItem key={cartItem.id} cartItem={cartItem} />;
                })}
              </ul>
            </div>
            {cartItems.length !== 0 ? (
              <div className={classes.lowestPrice}>
                <img
                  src="/static/images/lowest-price.png"
                  alt=""
                  className="img-fluid"
                />
                <span>You won't find cheaper anywhere</span>
              </div>
            ) : null}
            <div className="modal-footer border-0 bg-light">
              <button
                type="button"
                className={`btn btn-block ${classes.modalBtn}`}
                data-dismiss="modal"
              >
                {cartItems.length === 0 ? (
                  "Start Shopping"
                ) : (
                  <div className="d-flex justify-content-between">
                    <span>Proceed to checkout</span>
                    <span>Rs {totalPrice}</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MiniCartModal;
