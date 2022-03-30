import Sidebar from "../../components/Categories/Sidebar.component";
import ProductItem from "../../components/Products/ProductItem";

import classes from "./Products.module.css";
import { useSelector } from "react-redux";
import Dropdown from "../../components/Categories/Dropdown.component";

const Products = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    <div className={classes.products}>
      <div className="row">
        <div className="col-md-4 bg-light">
          <div className={classes.dropdown}>
            <Dropdown />
          </div>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
        </div>
        <div className="col-md-8">
          <ul className={`list-group ${classes.productsList}`}>
            {products.map((product) => {
              return (
                <ProductItem
                  data-testid="listitem"
                  key={product.id}
                  product={product}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
