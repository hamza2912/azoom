import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactStars from 'react-rating-stars-component';
import closeicon from '../assets/images/icon_close-menu.png';
import Specifications from '../pages/ProductDetailPage/Specifications';
import ProductViewImages from '../pages/ProductsPage/ProductViewImages';

export default function ProductViewModel({
  isModalOpen,
  setModalOpen,
  product,
}) {
  const [modelView, setModelView] = useState(false);

  useEffect(() => {
    setModelView(isModalOpen);
  }, [isModalOpen]);

  return (
    <Modal
      className="quickview-modal-wrapper border shadow-lg"
      isOpen={modelView}
      onRequestClose={() => setModalOpen(false)}
    >
      <div className="row">
        <div className="col-12 col-md-6 product-image-wrapper">
          <div className="basic-product-info">
            <div className="d-flex align-items-start">
              <p>
                Ramadan Activity Book <br />
                (Little Kids)
              </p>
              <button
                className="btn icon-mobile"
                onClick={() => setModalOpen(false)}
              >
                <img src={closeicon} />
              </button>
            </div>
            <p className="seemore">
              See more by <a href="">LearningRoots.com</a>
            </p>
            <div className="rating-stars rating-stars-wrapper">
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
              <span>4.6 / 8 reviews</span>
            </div>
          </div>
          <ProductViewImages />
        </div>
        <div className="col-12 col-md-6 product-overview-wrapper">
          <div className="flex">
            <div className="d-flex">
              <p>£21.45</p>
              <del>£26.56</del>
            </div>
            <button
              className="btn cross-icon"
              onClick={() => setModalOpen(false)}
            >
              <img src={closeicon} />
            </button>
          </div>
          <div className="collapse-wrapper">
            <p className="heading">Product Overview</p>
            <div className="wrap-collabsible">
              <h2 className="sub_heading">Description</h2>
              <input id="collapsible" className="toggle" type="checkbox" checked />
              <label for="collapsible" className="lbl-toggle"></label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <p className="desc-text">
                    We know how you feel because we’ve been there too. What we
                    really need is a way to both excite and educate our children
                    about Ramadan in a way that endears their hearts to the
                    great month and shows its blessings as a golden opportunity
                    for them to get closer to Allah. That’s exactly why we
                    designed the Learning Roots Ramadan Activity Book. The
                    Ramadan Activity Book is the culmination of years of
                    Ramadan-themed products that we’ve produced. The activities
                    build on past products that have brought joy to tens of
                    thousands of Muslim homes around the world. This book has
                    every ounce of our creative energy poured into it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Specifications />
          <div>
            <button className="seedetails-btn">See Full Details</button>
            <div className="">
              <button className="save-btn save-btn-wrapper">
                <i className="far fa-heart mr-2"></i> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
