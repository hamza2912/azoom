import React from "react";
import { Link } from "react-router-dom";
import basketIcon from "../assets/images/icon_basket.png";
import userIcon from "../assets/images/icon_user.png";
import ticketIcon from "../assets/images/icon_label.png";
import furnitureIcon from "../assets/images/icon_furniture.png";
import { rightSidebarData } from "../constants/constant";

const BasketNotLogged = () => {
  return (
    <div className="px-4 mt-5">
      <p className="headingText">Your Shopping Basket is Empty</p>
      <p className="rollingText">Lets get it rolling</p>
      <div className="alignItems">
        <span className="mr-2">
          <img className="imgSize" src={userIcon} alt="user-icon" />
        </span>
        <p className="rollingText">
          <Link to="/login/email" className="linkColor">Signin</Link>&nbsp;to see items you added or
          saved in a previous visit
        </p>
      </div>
      <div className="alignItems">
        <span className="mr-2">
          <img className="imgSize" src={basketIcon} alt='basket-icon' />
        </span>
        <p className="rollingText mt-1">
          View your saved items in&nbsp;
          <Link to="login/email" className="linkColor">Basket</Link>
        </p>
      </div>
      <div className="alignItems">
        <span className="mr-2">
          <img className="imgSize" src={ticketIcon} alt="ticket-icon" />
        </span>
        <p className="rollingText mt-1">
          Start saving with&nbsp;
          <Link to="login/email" className="linkColor">Daily Sales</Link>
        </p>
      </div>
      <div className="alignItems">
        <span className="mr-2">
          <img className="imgSize" src={furnitureIcon} alt="furniture-icon" />
        </span>
        <p className="rollingText mt-1">
          Get inspired by our&nbsp;
          <Link to="login/email" className="linkColor">Room Ideas</Link>
        </p>
      </div>
    </div>
  );
};

export default BasketNotLogged;
