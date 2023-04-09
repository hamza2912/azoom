import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";
import userIcon from "../assets/images/icons/icon_user.svg";
import ordersIcon from "../assets/images/icons/icon_orders.svg";
import bronzeIcon from "../assets/images/icons/medal_bronze.svg";
import fvrtIcon from "../assets/images/icons/icon_favorite.svg";
import giftCardcon from "../assets/images/icons/icon_gift-card.svg";
import ideaIcon from "../assets/images/icon_idea.svg";
import iconHelp from "../assets/images/icons/icon_help.svg";
import recentViewIcon from "../assets/images/icons/icon_recently-viewed.svg";
import MobileMenuSidebar from "./MobileMenuSidebar";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import { signOut } from "../services/auth";
import { toast } from "react-toastify";
import { addCustomer } from "../redux/customers/customerSlice";
import { useDispatch } from "react-redux";

const Sidebar = ({ isOpen, setSideNavOpen, ...props }) => {
  const navigate = useNavigate();
  const { customer } = useSelector((state) => state.customer);
  const [isMobileSideOpen, setMobileSideOpen] = useState(false);
  const dispatch = useDispatch();
  const redirectToAuth = () => {
    if (!customer) {
      navigate("/login/email");
    } else {
      customerlogOut();
    }
  };

  const customerlogOut = async () => {
    try {
      await signOut();
      dispatch(addCustomer(null));
      toast.success("You are successfully Log Out!");
      navigate("/");
    } catch (err) {
      toast.error("Not Authroized"); //TODO
    }
  };
  return (
    <Menu
      isOpen={isOpen}
      customBurgerIcon={false}
      customCrossIcon={false}
      onClose={() => setSideNavOpen(false)}
      {...props}
    >
      <MobileMenuSidebar
        pageWrapId={'header-wrapper'}
        outerContainerId={'App'}
        isOpen={isMobileSideOpen}
        setSideNavOpen={setMobileSideOpen}
      />
      <div className="side_bar">
        {/* <div className="nav">
            <img src="./assets/images/icon_close-menu.png" alt="" />
            <img className="logo" src={logo_azoom} alt="" />
        </div> */}
        <ul>
          <li className="side_menu_header">
            {/* <img
						src={icon_close_menu}
						alt=""
						onClick={() => setSideNavOpen(false)}
					/> */}
            
            <Logo logoType="sidebarLogo" />
            <p className="closeIcon" onClick={() => setSideNavOpen(false)}>
              X
            </p>
            {/* <img className="logo" src={logo_azoom} alt="" /> */}
          </li>
          <hr />
          <li onClick={() => setMobileSideOpen(true)} className="d-block d-md-none">
            <a>
              <img src={recentViewIcon} alt="" />
              <h3>DEPARTMENTS</h3>
            </a>
          </li>
          <li className="d-block d-md-none">
            <Link to="/favourites">
              <img src={fvrtIcon} alt="" />
              <h3 className="sale">SALE</h3>
            </Link>
          </li>
          <hr className="d-block d-md-none" />
          <li className="account_li">
            <Link to="/orders">
              <img src={userIcon} />
              <h3 className="account">
                MY ACCOUNT
                <span>{customer && customer.email}</span>
              </h3>
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img src={ordersIcon} />
              <h3>MY ORDERS</h3>
              <p className='order-sign'>*</p>
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/products/review">
              <img src={bronzeIcon} />
              <h3>MY PRODUCT REVIEWS (2)</h3>
            </Link>
          </li>
          <li>
            <Link to="/favourites">
              <img src={recentViewIcon} alt="" />
              <h3>RECENTLY VIEWED</h3>
            </Link>
          </li>
          <li>
            <Link to="/favourites">
              <img src={fvrtIcon} alt="" />
              <h3>LISTS</h3>
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/">
              <img src={giftCardcon} alt="" />
              <h3>GIFT CARD</h3>
            </Link>
          </li>
          <li>
            <Link to="/about/gotanidea">
              <img src={ideaIcon} alt="" />
              <h3>Got an idea?</h3>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <img src={iconHelp} alt="" />
              <h3>HELP & CONTACT</h3>
            </Link>
          </li>
        </ul>

        <div className="action-btn-wrapper">
          <button className="signout_btn" onClick={redirectToAuth}>
            {customer ? "Sign Out" : "Login"}
          </button>
        </div>
      </div>
    </Menu>
  );
};

export default Sidebar;
