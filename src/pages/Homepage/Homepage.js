import React, { useState, useCallback } from 'react';
import DefaultLayout from '../../common/DefaultLayout';
import Features from './Features';
import Suggestions from './Suggestions';
import ShopCategories from './ShopCategories';
import Discounts from './Discounts';
import RecommendedProducts from './RecommendedProducts';
import Brands from './Brands';
import JoinCourses from './JoinCourses';
import NewHomeBanner from './NewHomeBanner';
import { useEffect } from 'react';
import { getSliderAndRecommendedProducts } from '../../services/product';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateSessionLoading } from '../../redux/session/sessionSlice';
import {
  addRecommendedProducts,
  addSliderProducts,
} from '../../redux/products/productSlice';
import { useSelector } from 'react-redux';
import { setCartSummaryOpen } from '../../redux/cart/CartSlice';
import RegisterModal from './RegisterModal';

const Homepage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [requestType, setRequestType] = useState('Book Reviewer');
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

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

  useEffect(() => {
    fetchSliderProducts();
  }, []);

  const fetchSliderProducts = async () => {
    dispatch(updateSessionLoading(true));
    try {
      const { home_slider_products, recommended_products } =
        await getSliderAndRecommendedProducts();
      dispatch(addRecommendedProducts(recommended_products.items));
      dispatch(addSliderProducts(home_slider_products.items));
    } catch (e) {
      toast.error('Unable to fetch slider products');
    } finally {
      dispatch(updateSessionLoading(false));
    }
  };

  const registerForCourse = type => {
    setRequestType(type);
    setIsOpen(true);
  };

  return (
    <DefaultLayout
      hasMoneyBack={true}
      hasOptionsPartners={true}
      items={items}
      subTotal={subTotal}
    >
      <section class="container home-wrapper">
        <NewHomeBanner />
        <Features />
        <Suggestions
          items={items}
          subTotal={subTotal}
          setCartSummaryOpen={setCartSummaryOpen}
        />
        <ShopCategories />
        <Discounts />
        <RecommendedProducts />
        <JoinCourses registerForCourse={registerForCourse} />
        <Brands />
        <RegisterModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          requestType={requestType}
        />
      </section>
    </DefaultLayout>
  );
};
export default Homepage;
