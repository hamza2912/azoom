import React from "react";
import Conatct from "./contact_form";
import i1 from "../../assets/images/icon_quote-small.png";
import i2 from "../../assets/images/icon_quote-small.png";
import DefaultLayout from "../../common/DefaultLayout";

export default function about_contact() {
  return (
    <DefaultLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 help_head">
            <h1>Contact us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="route">
          Home / About / <span>Contact us</span>
        </p>

        <div className="row help_main">
          <div className="col-12 col-md-7">
            <div className="pr-4">
              <h1>Got a question about AZoom?</h1>
              <p>All you have to do is ask! </p>
              <span className="grey_span">
                Want to check a price and track an item?
              </span>
              <br />
              <span className="grey_span">
                Can’t find something and want to see if we can help?
              </span>
              <div className="gdiv_contact">
                <img className="i1" src={i1} alt="ixon" />
                <img className="i2" src={i2} alt="ixon" />
                <h1 className="h1_contact">Ask us anything </h1>
                <p className="this_is_a_contact_us">
                  With a quick message to the right people you really can put
                  the fun back into online shopping.
                </p>
              </div>
              <p className="tryit">Try it…</p>
              <hr className="tryit_hr" />
              <div className="flex">
                <div className="flex">
                  <div>
                    <img src="assets/images/icon_phone.png" alt="" />
                  </div>
                  <div className="contact-details">
                    <p className="heading">Phone</p>
                    <p className="text">
                      <b>+44 7658765876</b>
                    </p>
                  </div>
                </div>
                <div className="flex mr-5">
                  <div>
                    <img src="assets/images/icon_mail-white.png" alt="" />
                  </div>
                  <div className="contact-details">
                    <p className="heading">Email</p>
                    <p className="text">
                      <b>service@azooms.co.uk</b>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="company-details">
                <h3>Company Details</h3>
                <p>
                  AZoom LTD, 205 Kings Road, Tyseley Birmingham, West Midlands,
                  England, B11 2AA
                </p>
              </div>
            </div>
          </div>
          <Conatct />
        </div>
      </div>
    </DefaultLayout>
  );
}
