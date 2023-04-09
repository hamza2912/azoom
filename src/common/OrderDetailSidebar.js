import React from "react";
import { slide as Menu } from "react-burger-menu";
import Img from "../assets/images/render7_2048x.png";
import book from "../assets/images/book3c_2048x.png";

const OrderDetailSidebar = ({ isOpen, setIsOpen, orderDetail, orderIndex }) => {
  const { firstname, lastname, city, postcode, region, telephone, street } = orderDetail?.shipping_address;
  const { product_name, quantity_ordered,status } = orderDetail?.items[orderIndex]
  const { number } = orderDetail
  const { value } = orderDetail?.total?.grand_total
  return (
    <Menu
      isOpen={isOpen}
      customBurgerIcon={false}
      onClose={() => setIsOpen(false)}
      right
    >
      <div className="order-detail-sidebar bg-light">
        <hr />
        <h2>Your Item</h2>

        <div className="pro_div shadow-sm">
          <img src={book} />
          <div className="text_div">
            <pre>{product_name}</pre>
            <p>By LearningRoots.com</p>
            <small>
              Quantity: {quantity_ordered}
            </small>
          </div>
        </div>

        <h2>Your Shipment</h2>

        <h4>Status:</h4>
        <p>{status}</p>
        <h4>Delivery Method</h4>
        <p>Large Parcel Courier</p>

        <pre className="org">About Delivery Methods</pre>
        <pre className="org">Delivery Checklist</pre>

        <h4>Delivery Address</h4>
        <p>
          {firstname} {lastname}
          <br />
          {street[0]}
          <br />
          {city}, {postcode}, {region}
          <br />
          {telephone}
        </p>
        <hr />
        <h2>Your Order</h2>
        <h4>Order:</h4>
        <p> {number}</p>

        <h4>Total Price: £{value} (1 item)</h4>
        <pre className="org orglast">View Invoice</pre>
      </div>
    </Menu>
  );
};
export default OrderDetailSidebar;
