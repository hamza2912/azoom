import React, { useState, useCallback, useEffect, useMemo } from 'react';
import Nav from '../../common/CheckoutReviewNav';
import Foot from '../../common/CheckoutFoot';
import B_PayPal from '../../assets/images/PayPal-Logo.wine.svg';
import CreditCard from '../../assets/images/icon_credit-card.png';
import ClearPay from '../../assets/images/logo_clearpay.png';
import Address from './CheckoutAddress';
import Slip from './CheckoutSlip';
import Shelter from '../../assets/images/Image1.png';
import Cart from '../../assets/images/icon_cart-add.png';
import DropDown from '../../assets/images/dropdown.png';
import Modal from 'react-modal';
import Logo from '../../assets/images/logo_azoom-symbol-colorful.png';
import stripe from '../../assets/images/stripe-logo-blue.png';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getClientSecret } from '../../services/payment';
import { Card } from './Card';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import PaypalModal from './PaypalModal';
import bgShapeLeft from '../../assets/images/bg_shape-left.svg';
import bgShapeBottom from '../../assets/images/bg_shape-bottom.svg';
import bgShapeRight from '../../assets/images/bg_shape-right.png';

export default function CheckoutReview() {
  const { customer } = useSelector(state => state.customer);
  const { items } = useSelector(state => state?.cart);
  const [loading, setLoading] = useState(false);
  const [modals, setmodals] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [clientSecret, setClientSecret] = useState('');
  const stripePromise = loadStripe('pk_test_tJcuq2S9Y7Cc9ipnd0GJwMXf');
  const { paymentMethod } = useSelector(state => state.payment);

  console.log('payment method', paymentMethod, 'primary model', paymentModal);

  const calculateItemPrice = useCallback(() => {
    let price = items.reduce(
      (sum, currentVal) =>
        sum +
        currentVal.product?.price_range?.minimum_price?.final_price?.value,
      0
    );

    setSubTotal(price.toFixed(2));
  }, [items]);

  useEffect(() => {
    calculateItemPrice();
  }, [calculateItemPrice]);

  const handleOrderPlaceClick = async () => {
    setLoading(true);
    try {
      const { stripe_client_secret } = await getClientSecret({
        amount: subTotal,
        currency: 'gbp',
        payment_type: 'card',
      });
      const { clientSecret } = stripe_client_secret;
      setClientSecret(clientSecret);
      setPaymentModal(true);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaypalOrderClick = () => {
    setLoading(true);
    setPaymentModal(true);
  };

  const getImageSrc = useMemo(() => {
    switch (paymentMethod) {
      case 'stripe':
        return stripe;
      case 'paypal':
        return B_PayPal;
      case 'clearpay':
        return ClearPay;
      default:
        return CreditCard;
    }
  }, [paymentMethod]);

  return (
    <>
      <Nav />
      <Modal
        className="thanks_popup border px-3 py-4 shadow-lg"
        onRequestClose={() => setmodals(false)}
        isOpen={modals}
      >
        <h1>Thanks for shopping with us!</h1>
        <img src={Logo} alt="logo" />
        <p>
          Please wait while we process your order (do <br />
          not refresh your browser window). This may take up to a minute.
        </p>
      </Modal>
      {paymentMethod === 'stripe' ? (
        <Elements stripe={stripePromise}>
          <Card
            paymentModal={paymentModal}
            setPaymentModal={setPaymentModal}
            clientSecret={clientSecret}
            setmodals={setmodals}
            subTotal={subTotal}
          />
        </Elements>
      ) : (
        <PaypalModal
          paymentModal={paymentModal}
          setPaymentModal={setPaymentModal}
          subTotal={subTotal}
        />
      )}
      <div className="container-fluid bg-white checkout-sku">
        <img src={bgShapeLeft} className='bg-shape bg-shape-left' alt="" />
        <img src={bgShapeBottom} className='bg-shape bg-shape-bottom' alt="" />
        <img src={bgShapeRight} className='bg-shape bg-shape-right' alt="" />
        <div className="container">
          <div className="row">
            {/* //left */}
            <div className="col-lg-8 left_div pt-3">
              <Address />
              <h3>Payment Info</h3>
              <div className="paypal_divs">
                <img src={getImageSrc} width="80px" alt="stripe" />
                <h6>{paymentMethod}</h6>
                <p>{customer?.email}</p>
              </div>

              <hr />
              <h3>Delivery Method</h3>
              {items.map((item, index) => (
                <>
                  <p className="parcel_pageno">
                    Parcel {index} of {items.length}
                  </p>
                  <div className="row pro_div shadow-sm">
                    <img
                      className="col-lg-3"
                      src={item.product.image.url}
                      alt="item-img"
                    />
                    <p className="col-lg-3">{item.product.sku}</p>
                    <p className="col-lg-5">
                      Get it Tomorrow - <span>FREE 1-Day Delivery</span>
                    </p>
                  </div>
                </>
                
              ))}

              <div className="shelter_div p-3">
                <p>Want to Give donation</p>
                <div className="shelter_div_inner mx-1 row">
                  <img src={Shelter} className="my-3 col-lg-2 col-sm-12" />
                  <div className="btn_div col row">
                    <div class="dropdown px-0 mb-2 col-lg-5">
                      <button class="dropdowns">
                        <img src={DropDown} />
                        <p>Select a donation amount</p>
                        <small>£5</small>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">£1</a>
                        <a href="#">£5</a>
                        <a href="#">£10</a>
                        <a href="#">£25</a>
                        <a href="#">£100</a>
                      </div>
                    </div>
                    <br />

                    <button className="col-lg-5 add_btn">
                      <img src={Cart} />
                      <b>Add</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* //right/ */}
            <div className=" border-0 col-lg-4 p-3 ">
              <div className="summary-wrapper shadow-sm">
                <Slip />
                <button
                  className="place_order_btn"
                  onClick={
                    paymentMethod === 'stripe'
                      ? handleOrderPlaceClick
                      : handlePaypalOrderClick
                  }
                >
                  {loading ? 'Placing the Order' : 'Place Your Order'}
                </button>
                <p className="last_para">
                  By ordering, you agree to our <span>Privacy Policy</span> and{' '}
                  <span>Terms & Conditions.</span>
                  You will receive product offers from us via email, you can{' '}
                  <span>unsubscribe here</span> or via a link in the email at
                  any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
}
