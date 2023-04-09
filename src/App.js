import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import "./assets/scss/style.scss";
import "../node_modules/@splidejs/splide/dist/css/splide.min.css";
import Routing from "./pages/Routes";
import { getCustomerInfo } from "./services/auth";
import { addCustomer } from "./redux/customers/customerSlice"; //TODO abosulite path
import { useDispatch } from "react-redux";
import { getCustomerCart } from "./services/cart";
import { setCart } from "./redux/cart/CartSlice";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const { customer } = await getCustomerInfo();
        dispatch(addCustomer(customer));
        if (customer) {
          const { customerCart } = await getCustomerCart();
          dispatch(setCart(customerCart));
        }
      } catch (err) {}
    };
    getCustomer();
  }, [dispatch]);

  const initialOptions = {
    "client-id":
      "AU3b5PsbfnzKoluDKYmdhCI2nhFSMjetRO2hXgYJfrIJRrx4B1PRMGufwL70lksAICLykA96b7mEIqJ7",
    currency: "GBP",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="App">
        <Routing />
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
