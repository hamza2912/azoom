import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import DefaultLayout from '../../common/DefaultLayout';
import Ratings from './Rating';
import CustomerPhotos from './CustomerPhotos';
import ProductImages from './ProductImages';
import ProductDetail from './ProductDetail';
import Delivery from './DeliveryAndReturns';
import Reviews from './Reviews';
import ViewedItems from './ViewedItems';
import SimilarItems from './SimilarItems';
import FrequentlyBought from './FrequentlyBought';
import Breadcrumbs from '../../common/Breadcrumbs';
import Modal from 'react-modal';

import closeicon from '../../assets/images/icon_close-menu.png';
import product_img from '../../assets/images/big_5000x.png';
import search from '../../assets/images/icon_search.png';
import DropDown from '../../assets/images/dropdown.png';
import icontime from '../../assets/images/icon_time-grey.png';
import user from '../../assets/images/icon_user.png';
import iconlike from '../../assets/images/icon_like.png';
import deliveryicon from '../../assets/images/icon_free-delivery.png';
import Flag from '../../assets/images/Group 2738.png';
import time from '../../assets/images/icon_same-day-delivery.png';
import card from '../../assets/images/icon_money-back-guarantee.png';
import * as routes from '../../routePaths';
import { useLocation } from 'react-router-dom';
import { setRecentlyViewedProducts } from '../../services/product';
import { useSelector } from 'react-redux';

const ProductDetailPage = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  const [showDnRModal, setShowDnRModal] = useState(false);
  const location = useLocation();
  const { product } = location.state;
  const { customer } = useSelector(state => state.customer);

  useEffect(() => {
    if (customer) {
      setRecommendedProducts();
    }
  }, []);

  const setRecommendedProducts = async () => {
    try {
      const { recentViewedProducts } = await setRecentlyViewedProducts(
        product.id
      );
      console.log(`${recentViewedProducts.message}`);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <>
      <Modal
        className="reviews-modal-wrapper border shadow-lg"
        isOpen={showReviewModal}
        onRequestClose={() => setShowReviewModal(false)}
      >
        <div>
          <div className="flex border-bottom">
            <p>Reviews</p>
            <button onClick={() => setShowReviewModal(false)}>
              <img src={closeicon} />
            </button>
          </div>
          <div className="d-flex mt-3">
            <div className="image-wrapper">
              <img src={product_img} />
            </div>
            <div className="product-info-wrapper">
              <div className="basic-product-info">
                <p>Ramadan Activity Book (Little Kids)</p>
                <p className="author">By Azizah Orin</p>
                <span className="price">£8.99</span>
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
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="addtobasket-btn">Add to Basket</button>
          </div>
          <div className="ratings mt-3">
            <h1>4.6</h1>
            <div className="rating-stars rating-stars-wrapper">
              <ReactStars
                count={5}
                size={16}
                value={4.6}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star" />}
                halfIcon={<i className="fa fa-star-half-alt" />}
                filledIcon={<i className="fa fa-star" />}
                activeColor="#000000"
                color="black"
              />
            </div>
            <pre>8 Reviews</pre>
          </div>
          <div className="">
            <div className="progress_div">
              <pre>5</pre>
              <span className="fa fa-star unchecked"></span>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '69%' }}
                  aria-valuenow="75"
                ></div>
              </div>
              <pre>24</pre>
            </div>
            <div className="progress_div">
              <pre>4</pre>
              <span className="fa fa-star unchecked"></span>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '35%' }}
                  aria-valuenow="75"
                ></div>
              </div>
              <pre>12</pre>
            </div>
            <div className="progress_div">
              <pre>3</pre>
              <span className="fa fa-star unchecked"></span>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '23%' }}
                  aria-valuenow="75"
                ></div>
              </div>
              <pre>8</pre>
            </div>
            <div className="progress_div">
              <pre>2</pre>
              <span className="fa fa-star unchecked"></span>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '12%' }}
                  aria-valuenow="75"
                ></div>
              </div>
              <pre>6</pre>
            </div>
            <div className="progress_div">
              <pre>1</pre>
              <span className="fa fa-star unchecked"></span>

              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '5%' }}
                  aria-valuenow="75"
                ></div>
              </div>
              <pre>2</pre>
            </div>
          </div>
          {/* <CustomerPhotos/> */}
          <div className="modal-reviews-wrapper mt-5">
            <p>Show reviews that mention</p>
            <div className="reviews-header">
              <div className="search-wrapper">
                <div class="input-groups">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search Reviews"
                  />
                  <div class="input-group-append">
                    <img src={search} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Showing 1-2 of 83 reviews.</p>
              <div className="btn_div">
                <div class="dropdown">
                  <button class="dropdowns">
                    <img src={DropDown} />
                    <p>Sort By</p>
                    <small>Most Relevant</small>
                  </button>
                  <div class="dropdown-content">
                    <a href="#">Ascending</a>
                    <a href="#">Descending</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="rating-stars rating-stars-wrapper">
                <ReactStars
                  count={5}
                  size={14}
                  value={4.5}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star" />}
                  halfIcon={<i className="fa fa-star-half-alt" />}
                  filledIcon={<i className="fa fa-star" />}
                  activeColor="#000000"
                  color="black"
                />
              </div>
              <div className="date-wrapper">
                <img src={icontime} />
                <p className="date">23/06/21</p>
              </div>
            </div>
            <div>
              <p className="review-text">
                My son has just started his book and is looking forward to doing
                more. We’ve had a look through the book and can’t wait To try
                the different activities. It’s such a colourful book, wish these
                were around when I was younger!
              </p>
            </div>
            <div className="flex">
              <div className="user_div">
                <div className="">
                  <img src={user} />
                </div>
                <div>
                  <h3>Michael Newman</h3>
                  <pre className="text-muted">London, GB</pre>
                  <p>
                    <i class="fas fa-chevron-down"></i>
                    Verified Buyer
                  </p>
                </div>
              </div>
              <div className="btn">
                <button>
                  <img src={iconlike} />3
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        className="products-overview-wrapper border shadow-lg"
        isOpen={showOverviewModal}
        onRequestClose={() => setShowOverviewModal(false)}
      >
        <div>
          <div className="flex border-bottom">
            <p>Product Overview</p>
            <button onClick={() => setShowOverviewModal(false)}>
              <img src={closeicon} />
            </button>
          </div>
          <div className="d-flex mt-3">
            <div className="image-wrapper">
              <img src={product_img} />
            </div>
            <div className="product-info-wrapper">
              <div className="basic-product-info">
                <p>Ramadan Activity Book (Little Kids)</p>
                <p className="author">By Azizah Orin</p>
                <span className="price">£8.99</span>
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
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="addtobasket-btn">Add to Basket</button>
          </div>
          <div className="description-wrapper">
            <h2 className="heading">Description</h2>
            <p className="desc-text">
              We know how you feel because we’ve been there too. What we really
              need is a way to both excite and educate our children about
              Ramadan in a way that endears their hearts to the great month and
              shows its blessings as a golden opportunity for them to get closer
              to Allah. That’s exactly why we designed the Learning Roots
              Ramadan Activity Book. The Ramadan Activity Book is the
              culmination of years of Ramadan-themed products that we’ve
              produced. The activities build on past products that have brought
              joy to tens of thousands of Muslim homes around the world. This
              book has every ounce of our creative energy poured into it.
            </p>
          </div>
          <div className="specifications-wrapper">
            <h2 className="heading">Specifications</h2>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td className="bg-light">ISBN-13</td>
                  <td className="bg-white">9780062975980</td>
                </tr>
                <tr>
                  <td className="bg-light">Publication date</td>
                  <td className="bg-white">06/30/2020</td>
                </tr>
                <tr>
                  <td className="bg-light">Pages</td>
                  <td className="bg-white">136</td>
                </tr>
                <tr>
                  <td className="bg-light">Product dimensions</td>
                  <td className="bg-white">50cm H x 20cm W x 3cm D</td>
                </tr>
                <tr>
                  <td className="bg-light">Recommended Age</td>
                  <td className="bg-white">13+</td>
                </tr>
                <tr>
                  <td className="bg-light">Format</td>
                  <td className="bg-white">Hardback</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
      <Modal
        className="deliverynreturns-wrapper border shadow-lg"
        isOpen={showDnRModal}
        onRequestClose={() => setShowDnRModal(false)}
      >
        <div>
          <div className="flex border-bottom">
            <p>Delivery & Returns</p>
            <button onClick={() => setShowDnRModal(false)}>
              <img src={closeicon} />
            </button>
          </div>
          <div className="d-flex mt-3">
            <div className="image-wrapper">
              <img src={product_img} />
            </div>
            <div className="product-info-wrapper">
              <div className="basic-product-info">
                <p>Ramadan Activity Book (Little Kids)</p>
                <p className="author">By Azizah Orin</p>
                <span className="price">£8.99</span>
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
                  <span>4.6</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="addtobasket-btn">Add to Basket</button>
          </div>
          <div className="delivery-div ">
            <div className="image-wrapper">
              <img src={deliveryicon} />
            </div>
            <div>
              <p className="free_del">FREE DELIVERY on orders over £30.00 </p>
            </div>
          </div>
          <div className="dispatchment-wrapper mt-3">
            <p>
              Dispatched to: <img src={Flag} />
            </p>
            <p>
              Dispatched via:<span>1-Day Delivery</span>
            </p>
            <p>
              Deliver To:<span>EC1A 7ES - London</span>
              <i class="fas fa-chevron-down"></i>
            </p>
          </div>
          <div className="estimated-delivery">
            <h4>1-Day Delivery</h4>
            <p>Estimated delivery: 11/07/2021</p>
          </div>
          <div className="delivery-feature ">
            <div className="flex">
              <div className="img-wrapper">
                <img className="delivery-img" src={time} />
              </div>
              <div>
                <h3>Delivery</h3>
                <p>
                  Your order means a lot to us. That’s why we offer fast, safe
                  and reliable delivery options for every item
                </p>
                <span>Delivery Policy</span>
              </div>
            </div>
          </div>
          <div className="delivery-feature">
            <div className="flex">
              <div className="img-wrapper">
                <img className="moneyback-img" src={card} />
              </div>
              <div>
                <h3>Money Back Guarantee</h3>
                <p>
                  Not loving it? We offer return of most items within 3é days of
                  delivery for a refund or store credit
                </p>
                <span>Return Policy</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <DefaultLayout>
        <div className="container-fluid background">
          <div className="row pb-4">
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 justify-between mt-2">
                    <Breadcrumbs
                      paths={[
                        { url: routes.homepage, text: 'Home' },
                        { url: routes.productsPage, text: 'Products' },
                        { url: routes.productDetail, text: 'Product Detail' },
                      ]}
                    />
                   <a className='back-btn-p' href="">Back to Results</a>
                  </div>
                </div>
              </div>
              <div className="container product_detail_wrapper">
                <div className="row">
                  <div className="col-12 col-md-6 ">
                    <ProductImages product={product} />
                  </div>
                  <div className="col-12 col-md-6">
                    <ProductDetail
                      setShowOverviewModal={setShowOverviewModal}
                      setShowReviewModal={setShowReviewModal}
                      setShowDnRModal={setShowDnRModal}
                      product={product}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {product.relatedProducts && (
          <SimilarItems relatedProducts={product.relatedProducts} />
        )}
        <FrequentlyBought />
        <div className="container-fluid ratings-review-wrapper mt-5 pb-4 mobile-pb-0">
          <div className="row">
            <div className="col-12">
              <Ratings product={product} />
              <CustomerPhotos />
              {product.reviews && <Reviews reviews={product.reviews} />}
            </div>
          </div>
        </div>
        <Delivery />
        <ViewedItems />

        <div className="share container">
          <div className="row">
            <div className="col-12">
              <p>Share On: </p>
              <button>
                <i class="fab fa-facebook-f"></i>Facebook
              </button>
              <button>
                <i class="fab fa-twitter"></i>Twitter
              </button>
            </div>
          </div>
        </div>
        <div className='container related-searches mt-5'>
          <h2>Related Searches</h2>
          <button>
            Back to Children
          </button>
        </div>
        
      </DefaultLayout>
    </>
  );
};
export default ProductDetailPage;
