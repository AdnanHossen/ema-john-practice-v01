import React from "react";
import "./Cart.css";

const Cart = (props) => {
  /* destructuring */
  const { carts } = props;

  /* ileterate for in  */
  let totalQuantity = 0;
  for (const cart of carts) {
    if (!cart.quantity) {
      cart.quantity = 1;
    }
    totalQuantity = totalQuantity + cart.quantity;
  }

  /* total count */
  const totalReducer = (previous, product) =>
    previous + product.price * product.quantity;
  // total value
  const total = carts.reduce(totalReducer, 0);

  /* shipping count */
  const shippingCost = total > 0 ? 15 : 0;

  /* tax count */
  const taxCost = (total + shippingCost) * 0.1;

  /* grand total count */
  const grandTotal = total + taxCost + shippingCost;

  /* return value */
  return (
    <div>

      {/* order title */}
      <h2 className="order-title">Order Summary</h2>

      {/* order description */}
      <div className="order-description">
        {/* total item ordered */}
        <h3>Total Item Ordered: {totalQuantity}</h3>

        {/* total price */}
        <h3>Total Price: {total.toFixed(2)}</h3>

        {/* shipping total cost */}
        <h3>Shipping: {shippingCost.toFixed(2)}</h3>

        {/* total tax */}
        <h3>Tax: {taxCost.toFixed(2)}</h3>

        {/* grand total */}
        <h3 className="grand-total-title">Grand Total: {grandTotal.toFixed(2)}</h3>
      </div>
      {/* end of order description */}

    </div>
  );
};

export default Cart;
