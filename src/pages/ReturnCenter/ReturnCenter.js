import React from "react";
import returnicon from "../../assets/images/icon_return.png";
import DefaultLayout from "../../common/DefaultLayout";
import ChooseItemIcon from "./ChooseItemIcon";
import ReturnLabelIcon from "./ReturnLabelIcon";
import ShipItemIcon from "./ShipItemIcon";

const ReturnCenter = () => {
  return (
    <DefaultLayout hasOptionsPartners={true}>
      <div className="container-fluid">
        <div className="row">
          <div class="col-12 return-center-header">
            <h1>Returns Centre </h1>
            <img src={returnicon} alt="icon" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 online-returns-wrapper">
            <div className="container">
              <div className="online-returns-heading mt-5">
                <h1>Easy Online Returns</h1>
                <p class="view-policy-link">View Return Policy</p>
              </div>
              <div class="row return-center-body">
                <div className="col-12 col-md-4">
                  <div className="text-center">
                    <ChooseItemIcon />
                    <p>Choose the item(s) you’d like to return</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="text-center">
                    <ReturnLabelIcon />
                    <p>Print and attach your return label</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="text-center">
                    <ShipItemIcon elemId="returnCenterShipIcon" />
                    <p>Ship your item(s) back for a refund</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="container FAQ-wrapper">
              <div className="FAQ-heading mb-3">
                <h1>FAQs</h1>
                <a>Help Center</a>
              </div>
              <div className="collapse-wrapper">
                <div className="wrap-collabsible">
                  <h2 className="sub_heading">How do I return an item?</h2>
                  <input id="collapsible" className="toggle" type="checkbox" />
                  <label for="collapsible" className="lbl-toggle"></label>
                  <div className="collapsible-content">
                    <div className="content-inner pl-4">
                      <p>
                        Arranging a return is easy - visit <a>My Account</a> and
                        follow the simple instructions.
                      </p>
                      <p>
                        {" "}
                        We will provide you with a return label to print and
                        instructions on how to send your item back to us.
                      </p>
                      <p>
                        {" "}
                        Once we have received and inspected your item, we will
                        issue a refund to your card or original payment
                        method.Please note that depending on your bank, it may
                        take an additional 5-10 business days after your credit
                        is applied for it to appear in your account.
                      </p>
                      <p>
                        Want to return an unwanted gift?Click<a> here</a> to
                        setup a return.
                      </p>

                      <a>Read our full returns policy</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-wrapper">
                <div className="wrap-collabsible">
                  <h2 className="sub_heading">
                    What do I do if my item arrived damaged/defective?
                  </h2>
                  <input id="collapsible1" className="toggle" type="checkbox" />
                  <label for="collapsible1" className="lbl-toggle"></label>
                  <div className="collapsible-content">
                    <div className="content-inner pl-4">
                      <p>
                        Arranging a return is easy - visit <a>My Account</a> and
                        follow the simple instructions.
                      </p>
                      <p>
                        {" "}
                        We will provide you with a return label to print and
                        instructions on how to send your item back to us.
                      </p>
                      <p>
                        {" "}
                        Once we have received and inspected your item, we will
                        issue a refund to your card or original payment
                        method.Please note that depending on your bank, it may
                        take an additional 5-10 business days after your credit
                        is applied for it to appear in your account.
                      </p>
                      <p>
                        Want to return an unwanted gift?Click<a> here</a> to
                        setup a return.
                      </p>

                      <a>Read our full returns policy</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-wrapper">
                <div className="wrap-collabsible">
                  <h2 className="sub_heading">
                    What do I do if I’m missing items from my order?
                  </h2>
                  <input id="collapsible2" className="toggle" type="checkbox" />
                  <label for="collapsible2" className="lbl-toggle"></label>
                  <div className="collapsible-content">
                    <div className="content-inner pl-4">
                      <p>
                        Arranging a return is easy - visit <a>My Account</a> and
                        follow the simple instructions.
                      </p>
                      <p>
                        {" "}
                        We will provide you with a return label to print and
                        instructions on how to send your item back to us.
                      </p>
                      <p>
                        {" "}
                        Once we have received and inspected your item, we will
                        issue a refund to your card or original payment
                        method.Please note that depending on your bank, it may
                        take an additional 5-10 business days after your credit
                        is applied for it to appear in your account.
                      </p>
                      <p>
                        Want to return an unwanted gift?Click<a> here</a> to
                        setup a return.
                      </p>

                      <a>Read our full returns policy</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="collapse-wrapper">
                <div className="wrap-collabsible">
                  <h2 className="sub_heading">
                    What do I do if I recieved the wrong item?
                  </h2>
                  <input id="collapsible3" className="toggle" type="checkbox" />
                  <label for="collapsible3" className="lbl-toggle"></label>
                  <div className="collapsible-content">
                    <div className="content-inner pl-4">
                      <p>
                        Arranging a return is easy - visit <a>My Account</a> and
                        follow the simple instructions.
                      </p>
                      <p>
                        {" "}
                        We will provide you with a return label to print and
                        instructions on how to send your item back to us.
                      </p>
                      <p>
                        {" "}
                        Once we have received and inspected your item, we will
                        issue a refund to your card or original payment
                        method.Please note that depending on your bank, it may
                        take an additional 5-10 business days after your credit
                        is applied for it to appear in your account.
                      </p>
                      <p>
                        Want to return an unwanted gift?Click<a> here</a> to
                        setup a return.
                      </p>

                      <a>Read our full returns policy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default ReturnCenter;
