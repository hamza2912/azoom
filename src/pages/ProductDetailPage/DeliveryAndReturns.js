import React from 'react';
import Busimg from '../../assets/images/icon_free-delivery.png'
import Flag from '../../assets/images/Group\ 2738.png'
import time from '../../assets/images/icon_same-day-delivery.png'
import card from '../../assets/images/icon_money-back-guarantee.png'

export default function DeliveryAndReturns() {
    return (
        <div className="delivery_wrapper container">
            <h2>Delivery & Returns</h2>
            <div className="row">
                <div className="free_Del col-lg-4 col-md-4">
                    <div>
                        <img src={Busimg} />
                        <h3>FREE DELIVERY on orders over £30.00</h3>
                    </div>
                 <div className="mt-3">
                 <p>Dispatched to: <img src={Flag} /></p>
                    <p>Dispatched via:<span>1-Day Delivery</span></p>
                    <p>Deliver To:<span>EC1A 7ES - London</span><i class="fas fa-chevron-down"></i></p>
                 </div>
                    {/* <h4>1-Day Delivery</h4> */}
                    {/* <p>Estimated delivery: 11/07/2021</p> */}
                </div>
                <div className="Del col-lg-4 col-md-4">
                    <div className="flex">
                        <img className="t_img" src={time} />
                        <div className="ml-4">
                            <h3>Delivery</h3>
                            <p>Your order means a lot to us. That’s why we offer fast, safe and reliable delivery options for every item</p>
                            <span>Delivery Policy</span>
                        </div>
                    </div>

                </div>
                <div className="money_back col-lg-4 col-md-4">
                    <div className="flex">
                        <img className="c_img" src={card} />
                        <div className="ml-4">
                            <h3>Money Back Guarantee</h3>
                            <p>Not loving it? We offer return of most items within 3é days of delivery for a refund or store credit</p>
                            <span>Return Policy</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
