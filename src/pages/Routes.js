import React from "react";
import { Routes, Route } from "react-router-dom";
import * as routes from "../routePaths";
import Homepage from "./Homepage/Homepage";
import HelpPage from "./HelpPage/HelpPage";
import Productsearch from "./ProductsPage/ProductsPage";
import ProductDetailPage from "./ProductDetailPage/ProductDetailPage";
import AboutPage from "./AboutPage/AboutPage";
import OrdersPage from "./OrdersPage/OrdersPage";
import AboutExpertize from "./AboutPage/about_expertize";
import AboutContact from "./AboutPage/about_contact";
import AboutIdea from "./AboutPage/about_idea";
import AboutWhyUs from "./AboutPage/about_whyus";
import Login from "./Login/login";
import Password from "./Login/password";
import CreatePass from "./Login/createPass";
import OrderSuccess from "./OrderSuccess/OrderSuccess";
import CheckoutInfo from "./checkout/CheckoutInfo";
import CheckoutReview from "./checkout/CheckoutReview";
import ReturnCenter from "./ReturnCenter/ReturnCenter";
import MyFavourites from "./MyFavourites/MyFavourites";
import ProductReview from "./ProductReview/ProductReview";

const Routing = () => {
  return (
    <Routes>
      <Route path={routes.homepage} element={<Homepage />} />
      <Route path={routes.helpPage} element={<HelpPage />} />
      <Route path={routes.productsPage} element={<Productsearch />} />
      {/* <Route
        path={routes.productsSubCategoryPage}
        element={<Productsearch />}
      /> */}
      <Route path={routes.reviewProduct} element={<ProductReview />} />
      <Route path={routes.productDetail} element={<ProductDetailPage />} />
      <Route path={routes.aboutPage} element={<AboutPage />} />
      <Route path={routes.expertisePage} element={<AboutExpertize />} />
      <Route path={routes.contactPage} element={<AboutContact />} />
      <Route path={routes.ideaPage} element={<AboutIdea />} />
      <Route path={routes.chooseUsPage} element={<AboutWhyUs />} />
      <Route path={routes.orders} element={<OrdersPage />} />
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.pass} element={<Password />} />
      <Route path={routes.c_pass} element={<CreatePass />} />
      <Route path={routes.order_success} element={<OrderSuccess />} />
      <Route path={routes.checkout_info} element={<CheckoutInfo />} />
      <Route path={routes.checkout_review} element={<CheckoutReview />} />
      <Route path={routes.returnCenter} element={<ReturnCenter />} />
      <Route path={routes.myFavourites} element={<MyFavourites />} />
    </Routes>
  );
};

export default Routing;
