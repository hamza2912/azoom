import React from "react";
import infoIcon from "../../assets/images/icon_info-white.svg";

const ChangeOrder = (props) => (
  <>
    <h1>How Do I Make Changes to an Order?</h1>
    <br />
    <p>
      Visit My Orders to easily make changes online. You will see available
      actions for each item you’ve ordered*, including:
    </p>
    <ul className="mb-5 ml-3">
      <li>Cancel</li>
      <li>Change Delivery Address</li>
      <li>Change Delivery Method</li>
    </ul>
    <div className="block_div d-flex align-items-center">
      <div className="box d-flex justify-content-center align-items-center">
        <img src={infoIcon} alt="info" />
      </div>

      <p className="ml-3">
        Orders can no longer be updated once they have been dispatched.
      </p>
    </div>
  </>
);
export default ChangeOrder;
