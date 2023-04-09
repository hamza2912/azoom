import React from "react";
import Logo from "../assets/images/logo_azoom-symbol-colorful.png";
import Lock from "../assets/images/icon_lock.png";
import Cart from "../assets/images/icon_basket.png";
import Rightarrow from "../assets/images/arrow-right-short.png";
import Tick from "../assets/images/RepeatGrid1.png";
import Check from "../assets/images/icon_check.png";

export default function CheckoutNav() {
  return (
    <div className="container-fluid bg-light py-3">
      <div className="container nav_banner">
        <div className="row">
          <div className="logo_div col-lg-2 col-sm-5">
            <img src={Logo} />
            <h2>Checkout</h2>
          </div>
          <ul className="col">
            <li className="">
              <img className="icon_before" src={Check} />
              Delivery Address
            </li>
            <li className="">
              <img className="icon_before" src={Tick} />
              <b>Payment Info</b>
              <img className="icon_after" src={Rightarrow} />
            </li>
            <li className="">Delivery Method</li>
          </ul>

          <div className="col-lg-3 right_div">
            <a>
              <p>Secure Checkout</p>
              <img src={Lock} className="lock_img" />
            </a>
            <a>
              <p>
                <u>Back to Basket</u>
              </p>
              <img src={Cart} className="cart_img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
