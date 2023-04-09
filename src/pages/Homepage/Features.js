import React from 'react';
import  guarantee from "../../assets/images/icons/icon_price-match-guarantee.svg";
import  delivery from "../../assets/images/icons/icon_free-delivery.svg";
import  sameDayDelivery from "../../assets/images/icons/icon_same-day-delivery.svg";
import  moneyBack from "../../assets/images/icons/icon_money-back-guarantee.svg";


const Features = (props) => (
    <div className="row mt-4">
        <div className="col-md-3 col-6 features-div">
            <img src={guarantee} alt="" />
            <h6 className="mt-2">
                Price Match Guarantee
            </h6>
            <p className="features-desc">Allows you to get a lower price on an identical item.</p>
        </div>
        <div className="col-md-3 col-6 features-div">
            <img src={delivery} alt="" />
            <h6 className="mt-2">
                Free UK Delivery
            </h6>
            <p className="features-desc">Doorstep delivery & return to most of the UK.</p>
        </div>
        <div className="col-md-3 col-6 features-div">
            <img src={sameDayDelivery} alt="" />
            <h6 className="mt-2">
                Same Day Delivery
            </h6>
            <p className="features-desc">Delivery is available between select ZIP codes in cart.</p>
        </div>
        <div className="col-md-3 col-6 features-div">
            <img src={moneyBack} alt="" />
            <h6 className="mt-2">
                Money Back Guarantee
            </h6>
            <p className="features-desc">If you are not satisfied with the goods, you can return them to us within 30 days.</p>
        </div>
    </div>
);
export default Features;