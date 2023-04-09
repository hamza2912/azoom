import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({
  children,
  hasMoneyBack,
  hasOptionsPartners,
  items,
  subTotal,
  ...props
}) => (
  <Fragment>
    <Header />
    {children}
    <Footer
      hasMoneyBack={hasMoneyBack}
      hasOptionsPartners={hasOptionsPartners}
    />
  </Fragment>
);
export default DefaultLayout;
