import { Fragment } from "react";
import Banner from "../../components/Banner/Banner.component";
import Categories from "../../components/Categories/Categories.component";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <Fragment>
      <div className={classes.homepage}>
        <Banner />
        <Categories />
      </div>
    </Fragment>
  );
};

export default Homepage;
