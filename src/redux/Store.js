import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './customers/customerSlice';
import orderReducer from './orders/orderSlice';
import productReducer from './products/productSlice';
import cartReducer from './cart/CartSlice';
import PaymentReducer from './payment/paymentSlice';
import SessionReducer from './session/sessionSlice';

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    order: orderReducer,
    filters: productReducer,
    products: productReducer,
    cart: cartReducer,
    payment: PaymentReducer,
    session: SessionReducer,
  },
});
