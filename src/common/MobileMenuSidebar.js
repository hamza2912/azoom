import React, { useEffect } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import options from "./mobileMenuOptions";
import lock from "../assets/images/icon_lock.png";

const MobileMenuSidebar = ({ isOpen, setSideNavOpen }) => {
  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  useEffect(() => {
    let sectionIcon = document.getElementById("hidden-heading");
    sectionIcon.parentElement.style.display = "none";
  }, []);

  return (
    <div>
      <MultilevelSidebar
        open={isOpen}
        onToggle={closeSideNav}
        options={options}
        header="Categories"
      />
      {isOpen ? <p className="closeSideNav" onClick={closeSideNav}>X</p>:null}
      {isOpen ? <div className="freeGift">
        <img src={lock} alt="" />
        <h1>Free Gifts <br />on all purchases</h1>
      </div>:null}
    </div>
  );
};
export default MobileMenuSidebar;