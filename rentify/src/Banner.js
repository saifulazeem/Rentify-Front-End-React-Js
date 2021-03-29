import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner ">
      <div className="banner__content">
        <div className="banner__left">
          <div className="banner__detail">
            <Slider className="sliders" {...settings}>
              <div className="banner__items">
                <div className="banner">
                  <h3 className="banner__heading">
                    Reviews will protect your purchase
                  </h3>
                  <p>Buyers have no fear for quality product</p>
                </div>
              </div>
              <div className="banner__items">
                <div className="banner">
                  <h3 className="banner__heading">
                    {" "}
                    Check out ads submitted by our members and join us today
                  </h3>
                  <p>
                    Browse from more than <strong>10,000</strong> adverts
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="banner__right">
          <div className="banner__search">
            <div className="search__items">
              <h5 className="search__title">I'm interested in...</h5>
              <select className="select__category">
                <option value="one">Select Category</option>
                <option value="two">Electronics & Home Appliances</option>
                <option value="three">Furniture & Home Decor</option>
                <option value="four">Automobiles</option>
                <option value="five">Fashion & Beauty</option>
                <option value="six">Books,Sports & Hobbies</option>
                <option value="seven">Property</option>
              </select>
              <input
                className="input__Items"
                type="text"
                placeholder="Search Item"
              />
              <input
                className="input__Location"
                type="text"
                placeholder="Search Location e.g. Islamabad"
              />
              <button className="btn__submitSearch" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
