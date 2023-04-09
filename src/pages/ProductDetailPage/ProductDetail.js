import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Specifications from "./Specifications";
import eye from "../../assets/images/icon_view.png";
import gift from "../../assets/images/icon_gift-card.png";
import Bus_img from "../../assets/images/icon_free-delivery.png";
import badge_img from "../../assets/images/badge_azoom-community.png";
import call from "../../assets/images/Group-2388.png";
import { calculateAvg, calculateRatings } from "../../utils";
import { useSelector } from "react-redux";
import AddToCart from "../../common/AddToCart";

export default function ProductDetail({
  setShowOverviewModal,
  setShowReviewModal,
  setShowDnRModal,
  product,
}) {
  const { customer } = useSelector((state) => state.customer);

  const [productCount, setProductCount] = useState(1);
  const [freeGift, setFreeGift] = useState(false);

  const length = product?.reviews?.items.length;
  const percentage = calculateAvg(
    calculateRatings(product.reviews?.items),
    length
  ).toFixed(1); // TODO can be optimised
  const disPrice = product?.price_range?.minimum_price?.regular_price?.value;
  const finalPrice = product?.price_range?.minimum_price?.final_price?.value;
  const description = product?.short_description?.html;

  const {
    azoom_product_specifications: { publisher },
  } = product;

  const handleProductCounter = (opertor) => {
    if (opertor === "plus") {
      setProductCount(productCount + 1);
    } else {
      setProductCount(productCount - 1);
    }
  };

  return (
    <div className="product_details_div">
      <div className="basic-product-info">
        <p>{product.name}</p>
        <p className="instock">
          <i class="fas fa-chevron-down"></i>
          {product.stock_status?.replace("_", " ") || "Out of Stock"}
        </p>
        {publisher && (
          <p className="seemore">
            See more by <a href="/">{publisher}</a>
          </p>
        )}
        <div className="rating-stars rating-stars-wrapper mt-4">
          <ReactStars
            count={5}
            size={14}
            value={percentage}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
            activeColor="#000000"
            color="black"
          />
          <span>{percentage}</span>
          <span className="total-reviews">{length} reviews</span>
        </div>
      </div>
      <p className="price">
        £{finalPrice}
        <del>£{disPrice}</del>
      </p>
      {customer && (
        <div className="delivery-div ">
          <img src={Bus_img} alt="bus" />
          <div className="flex">
            <div>
              <p className="free_del">FREE DELIVERY</p>
              <p className="same_day">Same Day Delivery to</p>
            </div>
            <div>
              <span>
                EC1A 7ES - London
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      )}
      <button class="view">
        <img src={eye} alt="eye" />
        View Synopsis Preview
      </button>
      <div className="container-fluid">
        <div className="row flex prod-deatils-buttons-wrapper">
          <div className="col-md-3 col-3 border counter_div">
            <button
              className="minus"
              disabled={productCount === 1}
              onClick={() => handleProductCounter("minus")}
            >
              <i class="fas fa-minus"></i>
            </button>
            <p>{productCount}</p>
            <button
              className="plus"
              onClick={() => handleProductCounter("plus")}
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
          {/* <div className="col-3 save-btn-resp-wrapper">
            <div className="">
              <i className="far fa-heart"></i>
              <button className="save-btn"></button>
            </div>
          </div> */}
          <div className="col-md-5 col-5 basket-btn">
            <AddToCart item={product} quantity={productCount} />
          </div>
          <div className="col-md-4 col-4 save-btn-pd">
            <button className="save-btn save-btn-wrapper">
              <i className="far fa-heart mr-2"></i> Save
            </button>
          </div>
        </div>
      </div>
      <div className="gift">
        <div class="round">
          <input
            type="checkbox"
            id="checkbox1"
            checked={freeGift}
            onChange={() => setFreeGift(!freeGift)}
          />
          <label for="checkbox1"></label>
        </div>
        <div className="flex">
          <img src={gift} alt="gift" />
          <p>
            I want a <b>FREE GIFT</b>
          </p>
        </div>
      </div>
      <div className="shop_at_amazon">
        <div className="">
          <img src={badge_img} alt="badge-img" />
        </div>
        <div className="shop">
          <h2>Shop at Azoom and help our community come closer.</h2>
          <p>
            We are community of people in the midlands trying to push forward a
            better collobaration of consumer purchase items that is ethically
            ‘Made’ & ‘Sourced’
          </p>
        </div>
      </div>
      <div className="product-overview-wrapper collapse-wrapper">
        <p className="heading">Product Overview</p>
        <div className="wrap-collabsible border-bottom">
          <h2 className="sub_heading">Description</h2>
          <input id="collapsible" className="toggle" type="checkbox" />
          <label for="collapsible" className="lbl-toggle"></label>
          <div className="collapsible-content">
            <div className="content-inner">
              <p
                className="para"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </div>
      <Specifications product={product} />
      <ul className="mobile-modal-wrapper">
        <li onClick={() => setShowOverviewModal(true)}>
          <div className="div-wrapper">Product Overview</div>
        </li>
        <li onClick={() => setShowDnRModal(true)}>
          <div className="div-wrapper">Delivery & Returns</div>
        </li>
        <li onClick={() => setShowReviewModal(true)}>
          <div className="div-wrapper flex-center">
            Reviews
            <div className="rating-stars rating-stars-wrapper ml-1">
              <ReactStars
                count={5}
                size={14}
                value={4.6}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star" />}
                halfIcon={<i className="fa fa-star-half-alt" />}
                filledIcon={<i className="fa fa-star" />}
                activeColor="#000000"
                color="black"
              />
              <span>4.6</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="help-wrapper">
        <div>
          <h2 className="heading">Have a questions?</h2>
          <span>We are here to help</span>
        </div>
        <button className="btn">
          <img src={call} alt="call" />
          Call Us
        </button>
      </div>
    </div>
  );
}
