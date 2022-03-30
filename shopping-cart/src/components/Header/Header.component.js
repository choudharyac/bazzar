import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton.component";
import classes from "./Header.module.css";
import { useState, useEffect } from "react";
const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dataToggle = "data-toggle";
  const dataTarget = "data-target";
  const ariaControls = "aria-controls";
  const ariaExpanded = "aria-expanded";
  const ariaLabel = "aria-label";
  const mobileConfig = {
    [dataToggle]: "collapse",
    [dataTarget]: "#sabziBazarNav",
    [ariaControls]: "sabziBazarNav",
    [ariaExpanded]: "false",
    [ariaLabel]: "Toggle navigation",
  };
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <nav className={`${classes.navbar} navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        {width < 900 && (
          <span className="navbar-brand" {...mobileConfig}>
            <img src={Logo} className="navbar-brand" alt="sabzi" />
          </span>
        )}

        {width > 900 && (
          <span className="navbar-brand">
            <img src={Logo} className="navbar-brand" alt="sabzi" />
          </span>
        )}
        <button className="navbar-toggler" type="button">
          {/* <span className="navbar-toggler-icon"></span> */}
          <CartButton show={true} />
        </button>

        <div className="collapse navbar-collapse" id="sabziBazarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                activeClassName={classes.active}
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName={classes.active}
                to="/products"
                className="nav-link"
              >
                Products
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Sign-In
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            {width > 900 && (
              <li className="nav-item">
                <CartButton show={true} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
