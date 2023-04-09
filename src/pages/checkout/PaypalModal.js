import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { palceOrder } from '../../services/order';
import { setOrderId } from '../../redux/orders/orderSlice';

const PaypalModal = ({
  paymentModal,
  setPaymentModal,
  setmodals,
  subTotal,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { cart } = useSelector(state => state);

  return (
    <Modal
      className="thanks_popup border px-3 py-4 shadow-lg"
      onRequestClose={() => setPaymentModal(false)}
      isOpen={paymentModal}
    >
      <PayPalButtons
        createOrder={data => {
          var gqlData = `
            query {
              paypal_create_order(
                amount: "${subTotal}"
              ) {
                  id
                  intent
                  status
              }
            }`;

          var API_URL = '/graphql';
          return fetch(API_URL, {
            method: 'post',
            body: JSON.stringify({
              query: gqlData,
            }),
            headers: {
              'content-type': 'application/json',
              accept: 'application/json',
            },
          })
            .then(function (res) {
              return Promise.all([res.status, res.json()]);
            })
            .then(function ([status, data]) {
              if (status === 200 || status === 201)
                return data.data.paypal_create_order.id;
              else if (status !== 201 && data.message)
                toast.error(data.message);
              else toast.error('Something went wrong');
            })
            .catch(function (err) {
              toast.error('Something went wrong');
            });
        }}
        onApprove={data => {
          var API_URL = '/graphql';

          return fetch(API_URL, {
            method: 'post',
            headers: {
              'content-type': 'application/json',
              accept: 'application/json',
            },
            body: JSON.stringify({
              query: `query {
                      paypal_approve_order(
                        orderID:"${data.orderID}"
                      ) {
                          id
                          status
                      }
                    }`,
            }),
          })
            .then(function (res) {
              return Promise.all([res.status, res.json()]);
            })
            .then(async function ([status, data]) {
              if (status === 200 || status === 201) {
                const { placeOrder: order } = await palceOrder({
                  cart_id: cart.id,
                });
                setOrderId(order.order?.order_number);
                setPaymentModal(false);
                setmodals(true);
                setTimeout(() => {
                  navigate('/orders/success');
                }, 3000);
                toast.success(`You have Successfully Paid`);
              } else if (status !== 201 && data.message) alert(data.message);
              else toast.error('Something went wrong');
            })
            .catch(function (err) {
              toast.error('Something went wrong');
            });
        }}
      />
    </Modal>
  );
};

export default PaypalModal;
