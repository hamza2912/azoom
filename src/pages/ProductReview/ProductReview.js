import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Breadcrumbs from '../../common/Breadcrumbs';
import DefaultLayout from '../../common/DefaultLayout';
import book from '../../assets/images/book3c_2048x.png';
import impacticon from '../../assets/images/Group 3167.png';
import * as routes from '../../routePaths';
import AuthenticatedRoute from '../../components/hoc/AuthenticatedRoute';
import { useLocation } from 'react-router-dom';
import { setProductReview } from '../../services/product';
import { toast } from 'react-toastify';

const ProductReview = props => {
  const { state } = useLocation();
  const { product } = state;
  const [loading, setLoading] = useState(false);
  const [ratingState, setRatingState] = useState({
    rating: 0,
    quality: 0,
    price: 0,
    value: 0,
    input: '',
    name: '',
    title: '',
  });

  const handleChange = (name, value) => {
    setRatingState({ ...ratingState, [name]: value });
  };
  console.log('state', ratingState);

  const handleClick = () => {
    const { rating, quality, value, price, input, name, title } = ratingState;
    try {
      setProductReview({
        product_id: product.id,
        nick_name: name,
        review_title: title,
        review_detail: input,
        rating: {
          quality: quality,
          value: value,
          price: price,
          rating: rating,
        },
      });
    } catch (err) {
      toast.error('Unable to submit your review');
    }
  };

  return (
    <DefaultLayout>
      <div className="container products-review-wrapper">
        <div className="row">
          <div className="col-12">
            <Breadcrumbs
              paths={[
                { url: routes.homepage, text: 'Home' },
                { url: routes.productsPage, text: 'Products ' },
                { url: routes.productsPage, text: 'Product Review' },
              ]}
            />
            <div className="border-bottom">
              <div>
                <h1 className="main-heading">My Reviews</h1>
                <p className="sec-desc">
                  Review for a chance to win a £500 shopping spree. The more
                  reviews, the better the odds <a>Terms & Conditions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="border-bottom">
              <div className="mt-4">
                <p className="review-heading">Write Reviews</p>
              </div>
              <div className="review-wrapper mb-5">
                <div className="prod-img-div">
                  <img src={product.image.url} alt="..." />
                </div>
                <div className="prod-review">
                  <div className="prod-name-wrapper">
                    <p className="prod-name">{product.name}</p>
                    <p className="cancel-btn">Cancel</p>
                  </div>
                  <div className="rating-stars rating-stars-wrapper d-flex align-items-center">
                    <p>Quality</p>
                    <ReactStars
                      count={5}
                      size={14}
                      onChange={value => handleChange('quality', value)}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      filledIcon={<i className="fa fa-star" />}
                      activeColor="#000000"
                      color="black"
                    />
                  </div>
                  <hr />
                  <div className="rating-stars rating-stars-wrapper d-flex align-items-center">
                    <p>Price</p>
                    <ReactStars
                      count={5}
                      size={14}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      filledIcon={<i className="fa fa-star" />}
                      activeColor="#000000"
                      color="black"
                      onChange={value => handleChange('price', value)}
                    />
                  </div>
                  <hr />
                  <div className="rating-stars rating-stars-wrapper d-flex align-items-center">
                    <p>Value</p>
                    <ReactStars
                      count={5}
                      size={14}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      filledIcon={<i className="fa fa-star" />}
                      activeColor="#000000"
                      color="black"
                      onChange={value => handleChange('value', value)}
                    />
                  </div>
                  <hr />
                  <div className="rating-stars rating-stars-wrapper d-flex align-items-center">
                    <p>Rating</p>
                    <ReactStars
                      count={5}
                      size={14}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      filledIcon={<i className="fa fa-star" />}
                      activeColor="#000000"
                      color="black"
                      onChange={value => handleChange('rating', value)}
                    />
                  </div>
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="nameInput"
                      placeholder="Nick Name"
                      onChange={e => handleChange('name', e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="titleInput" className="form-label">
                      Review Title
                    </label>
                    <input
                      className="form-control"
                      id="titleInput"
                      placeholder="Good Quality Product"
                      onChange={e => handleChange('title', e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reviewInput" className="form-label">
                      Your Review
                    </label>
                    <textarea
                      placeholder="Tell us what you think!"
                      onChange={e => handleChange('input', e.target.value)}
                      id="reviewInput"
                    ></textarea>
                  </div>
                  <div className="d-flex mb-2">
                    <button
                      type="button"
                      className="btn btn-outline-success mr-1"
                      onClick={handleClick}
                    >
                      {loading ? 'Submitting ...' : 'Submit'}
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-success ml-1"
                    >
                      Add Photos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 mt-2">
            <div className="mt-4">
              <p className="impact-heading">Your Impact</p>
            </div>
            <div className="impact-wrapper ">
              <div className="impact-detail">
                <div>
                  <img src={impacticon} alt="..." />
                </div>
                <div className="d-flex align-items-center">
                  <p className="impacts-number mr-2">2</p>
                  <p>review(s) need stars</p>
                </div>
              </div>
              <div className="impact-detail">
                <div>
                  <img src={impacticon} alt="..." />
                </div>
                <div className="d-flex align-items-center">
                  <p className="impacts-number mr-2">2</p>
                  <p>review(s) need stars</p>
                </div>
              </div>
              <div className="impact-detail">
                <div>
                  <img src={impacticon} alt="..." />
                </div>
                <div className="d-flex align-items-center">
                  <p className="impacts-number mr-2">2</p>
                  <p>review(s) need stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <p className="sec-desc">
              * Multiple entries will increase your chances of winning. This
              promotion is only applicable to customers with an account on
              AZoom.co.uk. Promotion starts on Friday 20. August 2021 and ends
              on Sunday 19. September 2021. See <a>Terms & Conditions</a> for
              details.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default AuthenticatedRoute(ProductReview);
