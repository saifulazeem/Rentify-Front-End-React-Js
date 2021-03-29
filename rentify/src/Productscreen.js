import React from "react";
import data from "./data";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Shirt.css";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Productscreen(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const product = data.products.find((x) => x._id === props.match.params.id);

  return (
    <div className="shirt">
      <div className="shirt__left">
        <div className="left__componnent">
          <h4 className="price">PKR 1,000 per month</h4>
          <div className="seller__detail">
            <h4 className="seller">Seller Contact Details</h4>
            <div className="name">
              <AccountCircleIcon className="name__icon" />
              <h5>Ali Hassan</h5>
            </div>
            <div className="phone">
              <PhoneIcon className="phone__icon" />
              <h3>03345232456</h3>
            </div>
            <button className="email">
              <MailOutlineIcon className="email__icon" />
              <h3>Send an Email</h3>
            </button>
            <div className="tips__detail">
              <h4 className="seller">Tips</h4>
              <Slider className="slider" {...settings}>
                <div className="tips__items">
                  <div className="tips">
                    <h3 className="tipsno">Tip#1</h3>
                    <p>Always inspect items before paying.</p>
                  </div>
                </div>
                <div className="tips__items">
                  <div className="tips">
                    <h3 className="tipsno">Tip#2</h3>
                    <p>Beware of unpriced offers.</p>
                  </div>
                </div>
                <div className="tips__items">
                  <div className="tips">
                    <h3 className="tipsno">Tip#3</h3>
                    <p>Be careful when renting out items.</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="shirt__right">
        <h1>new half sleves tshirt</h1>
        <div className="right__components">
          <h1>{product._id}</h1>
          <img src={product.image} alt="product_photo" className="image" />
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Productscreen;
