import React from "react";
import DefaultLayout from "../../common/DefaultLayout";
import AuthenticatedRoute from "../../components/hoc/AuthenticatedRoute";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
  const { order_id } = useSelector((state) => state);
  const { items, shipping_addresses } = useSelector((state) => state?.cart);

  return (
    <DefaultLayout hasOptionsPartners={true}>
      <div className="container order-success-wrapper">
        <div className="row mt-5">
          <div className="col-12 col-md-8">
            <p className="thanks-heading">Thanks for Your Order!</p>
            <p className="order-no">Your order # is {order_id}</p>
            <p className="order-msg">
              We’ll email your order confirmation to michael.satzke@gmail.com
              <br></br>
              For details on your gift purchase, review the confirmation email
              we sent you or visit <a className="link">My Orders</a>
            </p>
            <div>
              <p className="parcel-heading">
                Parcel {items.length} of {items.length}
              </p>
              <p className="order-msg">
                {`Delivering To: ${shipping_addresses[0].street[0]}, ${shipping_addresses[0].city} ${shipping_addresses[0].postcode}`}
                To: Kings Place 90 York Way, London N1 9GU
                <br></br>Estimated Delivery: Get it Tomorrow
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="dropdown-wrapper">
              <form>
                <select className="dropdown">
                  <option>How did you hear about us?</option>
                  <option>Social Media</option>
                  <option>Advertisment</option>
                  <option>Other</option>
                </select>
              </form>
            </div>
            <button className="btn submit-btn">Submit</button>
          </div>
        </div>
        {items.map((item) => (
          <div className="row product-row">
            <div className="col-12 product-resp-details">
              <p className="product-name">{item.product.sku}</p>
              <p className="author">By LearningRoots.com</p>
            </div>
            <div className="col-12 col-md-3 product-img">
              <img
                src={item.product.image.url}
                alt="itempic"
                width="50px"
                height="50px"
              />
            </div>
            <div className="col-12 col-md-9 product-details">
              <p className="product-name">{item.product.sku}</p>
              <p className="author">By LearningRoots.com</p>
              <p className="price">
                £{item.product.price_range.minimum_price.final_price.value}
              </p>
              <p className="quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};
export default AuthenticatedRoute(OrderSuccess);
