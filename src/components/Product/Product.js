import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faShoppingCart,
  faStar as fasFaStar,
} from "@fortawesome/free-solid-svg-icons";

import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

import "./Product.css";
import Rating from "react-rating";
library.add(fasFaStar, farFaStar);

const Product = (props) => {
  // console.log(props);
  const { name, img, seller, price, stock, star } = props.product;
  
  // fontawesome settings
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const starEmptyIcon = <FontAwesomeIcon icon={farFaStar} />;
  const starFilledIcon = <FontAwesomeIcon icon={fasFaStar} />;

  return (
    <div className="product-container">
      {/* image holder */}
      <div className="product-img">
        <img src={img} alt="products" />
      </div>
      {/* end of image holder */}

      {/* products details holder */}
      <div className="product-details">
        {/* title of product */}
        <h2 className="product-title">{name}</h2>

        {/* seller info */}
        <p>by: {seller}</p>

        {/* price tag */}
        <p>price: $ {price}</p>

        {/* stock info */}
        <p>
          <small>Only {stock} left in stock</small>
        </p>

        {/* dynamic rating */}
        <Rating
          className="product-rating"
          readonly
          initialRating={star}
          emptySymbol={starEmptyIcon}
          fullSymbol={starFilledIcon}
        />

        <br />

        {/* button part */}
        <button
          className="btn-regular"
          // onclick function ()=> is used so that it doesn;t call the function rather it triggers when its being clicked

          onClick={() => props.addToCartBtn(props.product)}
        >
          {cartIcon} add to cart
        </button>
        {/* end of button part */}
      </div>
      {/* end of product details holder */}
    </div>
  );
};

export default Product;
