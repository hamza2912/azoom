import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

export default function CheckoutSlip() {
  const { items } = useSelector((state) => state?.cart);
  const [subTotal, setSubTotal] = useState(0);

  const calculateItemPrice = useCallback(() => {
    let price = items.reduce(
      (sum, currentVal) =>
        sum +
        currentVal.product?.price_range?.minimum_price?.final_price?.value,
      0
    );

    setSubTotal(price.toFixed(2));
  }, [items]);

  useEffect(() => {
    calculateItemPrice();
  }, [calculateItemPrice]);

  return (
    <div>
      <pre>Collapse</pre>
      <h2>Basket Summary</h2>
      <small className="item_count">{items.length} items</small>

      <br />
      {items.map((item) => (
        <div className="itemss px-3 mb-3">
          <img src={item.product.image.url} alt="itempic" />
          <div className="name">
            {item.product.sku}
            <br />
            <small>{item.quantity} X</small>
          </div>
            <b className="price">
              £{item.product.price_range.minimum_price.final_price.value}
            </b>
        </div>
      ))}

      <hr />

      <div className="price_div">
        <p className="amount">£{subTotal}</p>
        <p className="amout_for">Item Subtotal:</p>
      </div>

      <div className="price_div">
        <p className="amount">FREE</p>
        <p className="amout_for">Delivery:</p>
      </div>

      <hr />
      <div className="total_price">
        <p className="amount">£{subTotal}</p>
        <p className="amout_for">Total:</p>
      </div>
    </div>
  );
}
