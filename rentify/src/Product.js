import React from "react";
import "./Product.css";
import CategoryIcon from "@material-ui/icons/Category";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import data from "./data";

function Product() {
  return (
    <div>
    <div className="container">
    <div className="product_topTitle">
      <h1 className="productlisting__heading">Product Listing</h1>

      <div className="product__top">
        {data.products.map((product) => (
          <div key={product._id} className="product">
            <a href={`/product/${product._id}`}>
              <img
                src={product.image}
                alt="product"
                className="product__image"
              />
            </a>
            <div className="iconWithTitle">
              <CategoryIcon className="category__icon" />
              <h3 className="category__name">{product.category}</h3>
            </div>
            <h3 className="product__title">{product.productTitle}</h3>
            <div className="priceWithSaved">
              <h3 className="product__price">{product.price}</h3>
              <FavoriteIcon className="product__saved" />
            </div>
            <div className="placeIconWithLocation">
              <LocationOnIcon className="location__Icon" />
              <h3 className="location__name">{product.location}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Product;
