import React, { Fragment } from 'react';

const HelpSearchContact = (props) => (
    <Fragment>
        <div className="input-group input_div_help mb-5 mt-5">
            <div className="input-group-prepend">
                <span className="input-group-text border-0" id="basic-addon1">
                    <i className="fas fa-search"></i>
                </span>
            </div>
            <input type="text" className="border-0 form-control" placeholder="Search help topics (e.g. returns) " aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="grey_div_help px-5 mt-5 py-5 mb-3">
            <p className="">Need further assistance? We’re here to help</p>
            <button className="contact-us-btn">Contact Us</button>
        </div>
    </Fragment>
);
export default HelpSearchContact;