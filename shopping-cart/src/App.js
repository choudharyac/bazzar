import { Fragment, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "./store/categories-actions";
import AlertPopup from "./components/Notification/AlertPopup.module";
import MiniCartModal from "./components/Cart/MiniCartModal.component";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.notification);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <MiniCartModal />
      {notification !== null && <AlertPopup />}

      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
