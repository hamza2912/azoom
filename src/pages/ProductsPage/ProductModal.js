import React from "react";
import { calculateAvg, calculateRatings } from "../../utils";
import ProductViewImages from "../ProductsPage/ProductViewImages";
import Modal from "react-modal";
import closeicon from "../../assets/images/icon_close-menu.png";
import Specifications from "../ProductDetailPage/Specifications";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export const ProductModal = ({ product, setModalOpen, isModalOpen }) => {
  let length = product.reviews?.items.length;
  let percentage = calculateAvg(
    calculateRatings(product.reviews?.items),
    length
  ).toFixed(1);
  let disPrice = product.price_range?.minimum_price?.regular_price?.value;
  let finalPrice = product.price_range?.minimum_price?.final_price?.value;
  let description = product.short_description?.html;
  const {
    azoom_product_specifications: { publisher },
  } = product;

  return (
    <Modal
      className="quickview-modal-wrapper border shadow-lg"
      isOpen={isModalOpen}
      onRequestClose={() => setModalOpen(false)}
    >
      <div className="row">
        <div className="col-12 col-md-6 product-image-wrapper">
          <div className="basic-product-info">
            <div className="d-flex align-items-start">
              <p>{product.name}</p>
              <button
                className="btn icon-mobile"
                onClick={() => setModalOpen(false)}
              >
                <img src={closeicon} alt="closeicon" />
              </button>
            </div>
            <p className="seemore">
              See more by <a href="/">{publisher}</a>
            </p>
            <div className="rating-stars rating-stars-wrapper">
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
              <span>
                {percentage} / {length} reviews
              </span>
            </div>
          </div>
          <ProductViewImages product={product} />
        </div>
        <div className="col-12 col-md-6 product-overview-wrapper">
          <div className="flex">
            <div className="d-flex">
              <p>£{finalPrice}</p>
              <del>£{disPrice}</del>
            </div>
            <button
              className="btn cross-icon"
              onClick={() => setModalOpen(false)}
            >
              <img src={closeicon} alt="close-icon" />
            </button>
          </div>
          <div className="collapse-wrapper">
            <p className="heading">Product Overview</p>
            <div className="wrap-collabsible desc-dropdown">
              <h2 className="sub_heading">Description</h2>
              <input id="collapsible1" className="toggle" type="checkbox" />
              <label for="collapsible1" className="lbl-toggle"></label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <p
                    className="desc-text"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Specifications product={product} />
          <div>
            <Link to={`/productDetail/${product.id}`} state={{ product }}>
              {" "}
              <button className="seedetails-btn">See Full Details</button>
            </Link>
            <button className="save-btn save-btn-wrapper">
              <i className="far fa-heart mr-2"></i> Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
