import classes from "./Banner.module.css";
import { useState, useEffect } from "react";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  const getbannersHandler = async () => {
    await fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((json) => {
        return setBanners(json);
      });
  };

  useEffect(() => {
    getbannersHandler();
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          id="bannerCarousel"
          className={`${classes.offer} carousel slide`}
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {banners.map(({ id }, slideIndex) => {
              return (
                <li
                  data-target="#bannerCarousel"
                  data-slide-to={slideIndex}
                  className={`bg-light ${slideIndex === 0 ? "active" : ""}`}
                  key={id}
                ></li>
              );
            })}
          </ol>
          <div className="carousel-inner">
            {banners.map(
              ({ id, bannerImageUrl, bannerImageAlt }, bannerIndex) => {
                return (
                  <div
                    className={`carousel-item ${
                      bannerIndex === 0 ? " active" : ""
                    }`}
                    key={id}
                  >
                    <img
                      className="d-block w-100"
                      src={bannerImageUrl}
                      alt={bannerImageAlt}
                    />
                  </div>
                );
              }
            )}
          </div>
          <a
            className="carousel-control-prev"
            href="#bannerCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#bannerCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
