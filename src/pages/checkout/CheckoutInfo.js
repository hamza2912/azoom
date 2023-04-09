import React from "react";
import Nav from "../../common/CheckoutNav";
import Left from "./CheckoutLeft";
import Right from "./CheckoutRight";
import Foot from "../../common/CheckoutFoot";
import bgShapeLeft from '../../assets/images/bg_shape-left.svg';
import bgShapeBottom from '../../assets/images/bg_shape-bottom.svg';
import bgShapeRight from '../../assets/images/bg_shape-right.png';

export default function CheckoutInfo() {
  return (
    <>
      <Nav />
      <div className="container-fluid bg-white checkout-sku">
        <div className="container">
          <div className="row">
            <Left />
            <Right />
          </div>
        </div>
        <img src={bgShapeLeft} className='bg-shape bg-shape-left' alt="" />
        <img src={bgShapeBottom} className='bg-shape bg-shape-bottom' alt="" />
        <img src={bgShapeRight} className='bg-shape bg-shape-right' alt="" />
      </div>
      <Foot />
    </>
  );
}
