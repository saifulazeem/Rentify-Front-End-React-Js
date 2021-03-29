import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Shirt.css";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Shirt() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Header />
      <Navbar />
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
            <img
              src="https://rentable.pk/_next/image?url=https%3A%2F%2Fassets-rentable.sgp1.digitaloceanspaces.com%2Frentablepk%2Fimages%2Fo6cXOOfuA0Sn0o2OTqno9SuZoOag8bL4wgLkpkCG.jpeg&w=1024&q=75"
              alt="product_photo"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shirt;
