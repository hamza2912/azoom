import React, { useState, useMemo } from 'react';
import PayPal from '../../assets/images/logo_paypal.png';
import B_PayPal from '../../assets/images/logo_paypal-ConvertImage.png';
import B_PayPal_Wine from '../../assets/images/PayPal-Logo.wine.svg';
import Radio from '../../assets/images/radiobox.png';
import CreditCard from '../../assets/images/icon_credit-card.png';
import stripe from '../../assets/images/stripe-logo-blue.png';
import { useNavigate } from 'react-router-dom';
import ClearPay from '../../assets/images/logo_clearpay.png';
import Address from './CheckoutAddress';
import { useSelector } from 'react-redux';
import {
  setPaymentMethod,
  setShippingMethod,
} from '../../services/paymentMethod';
import { toast } from 'react-toastify';
import { updatePaymentMethod } from '../../redux/payment/paymentSlice';
import { useDispatch } from 'react-redux';

export default function Checkout_left() {
  const dispatch = useDispatch();
  const { customer } = useSelector(state => state.customer);
  const { cart } = useSelector(state => state);
  const navigate = useNavigate();
  const [paymentMethod, changePaymentMethod] = useState('paypal');

  const onClickHandler = async () => {
    dispatch(updatePaymentMethod(paymentMethod));
    try {
      await setShippingMethod({
        cart_id: cart.id,
        shipping_methods: [
          {
            carrier_code: 'flatrate',
            method_code: 'flatrate',
          },
        ],
      });
      await setPaymentMethod({
        cart_id: cart.id,
        payment_method: {
          code: `${paymentMethod}payment`,
        },
      });
      navigate('/checkout/review', {
        state: { paramPaymentMethod: paymentMethod },
      });
    } catch (err) {
      toast.error(err);
    }
  };

  const getImageSrc = useMemo(() => {
    switch (paymentMethod) {
      case 'stripe':
        return stripe;
      case 'paypal':
        return B_PayPal_Wine;
      case 'clearpay':
        return ClearPay;
      default:
        return CreditCard;
    }
  }, [paymentMethod]);

  return (
    <div className="col-lg-8 left_div pt-3">
      <Address />
      <h3>Payment Info</h3>
      <div className="row">
        <div className="pay_info col-lg-8 col-md-8 col-sm-12 px-3 py-4 ml-3 mr-3">
          <div className="row top">
            <div className="col-lg-4">
              <img src={Radio} />
              <img className={paymentMethod == 'card' ? 'debit_card' :'type'} src={getImageSrc} width="80px" />
            </div>
            <div className="col paypal_head">
              <h6>{paymentMethod} </h6>
              <p>{customer?.email}</p>
            </div>
          </div>
          <div className="middle">
            <p>
              Your {paymentMethod} account is now connected to your AZoom.co.uk
              account. You’ll be able to use {paymentMethod} without having to
              log in.
            </p>
          </div>
          <div className="last">
            <a href="">Edit Address</a>
            <button className="px-5 py-3" onClick={onClickHandler}>
              Continue
            </button>
          </div>
        </div>
      </div>

      <h4>Other Payment Methods</h4>
      <div className="radiobtn_div">
        <div className="radio">
          <label class="container">
            <img src={CreditCard} className="second_img" />
            <p>Pay by Credit or Debit Card</p>

            <input
              type="radio"
              checked={paymentMethod === 'card'}
              name="radio"
              onChange={() => changePaymentMethod('card')}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        {/* <div className="radio2">
          <label class="container">
            <img src={ClearPay} className="second_img" />
            <br />
            <p>4 interest-free payments of £12.50 every 2 weeks</p>

            <input
              type="radio"
              checked={paymentMethod === 'clearpay'}
              name="radio"
              onChange={() => changePaymentMethod('clearpay')}
            />
            <span class="checkmark"></span>
          </label>
        </div> */}
        <div className="radio2">
          <label class="container">
            <img src={paymentMethod === 'paypal' ? B_PayPal_Wine : B_PayPal} className={paymentMethod === 'paypal' ? "paypal-img" : "second_img"} />
            <br />
            <p>Add PayPal</p>

            <input
              type="radio"
              name="radio"
              checked={paymentMethod === 'paypal'}
              onChange={() => changePaymentMethod('paypal')}
            />
            <span class="checkmark"></span>
          </label>

          <br />
        </div>
        {/* <div className="radio2">
          <label class="container">
            <img
              src={stripe}
              className="second_img"
              width={'60px'}
              alt="stripe"
            />
            <br />
            <p>Add Stripe</p>

            <input
              type="radio"
              checked={paymentMethod === 'stripe'}
              name="radio"
              onChange={() => changePaymentMethod('stripe')}
            />
            <span class="checkmark"></span>
          </label>

          <br />
        </div> */}
      </div>
      <pre>Add Gift Card/Promo Code</pre>
    </div>
  );
}
