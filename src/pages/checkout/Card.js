import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { palceOrder } from "../../services/order";
import { setOrderId } from "../../redux/orders/orderSlice";

export const Card = ({
  paymentModal,
  setPaymentModal,
  clientSecret,
  setmodals,
  subTotal,
}) => {
  const [loading, setLoading] = useState(false);
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
    if (paymentIntent.id) {
      const { placeOrder: order } = await palceOrder({
        cart_id: cart.id,
      });
      setOrderId(order.order?.order_number);
      setPaymentModal(false);
      setmodals(true);
      setTimeout(() => {
        navigate("/orders/success");
      }, 3000);
      toast.success(
        `You have Successfully Paid ${paymentIntent.amount / 100} GBP`
      );
    }
    if (stripeError) {
      toast.error("Unable to Pay with your card");
    }
  };
  return (
    <Modal
      className="thanks_popup border px-3 py-4 shadow-lg"
      onRequestClose={() => setPaymentModal(false)}
      isOpen={paymentModal}
    >
      <form id="payment-form" onSubmit={handleSubmit} className="card-form">
        <label htmlFor="card-element" className="mb-3">
          Enter your Card Details
        </label>
        <CardElement options={{ hidePostalCode: true }} />
        <div className="d-flex justify-content-center my-3">
          <button className="pay-btn px-4" disabled={!stripe}>
            {loading ? "Paying" : `Pay ${subTotal} GBP`}
          </button>
        </div>
      </form>
    </Modal>
  );
};
