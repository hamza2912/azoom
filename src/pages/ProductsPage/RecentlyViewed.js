import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import card2_imgae1 from '../../assets/images/no3.png';
import { calculateRatings, calculateAvg } from '../../utils/index';
import Splide from '@splidejs/splide';

export const RecentlyViewed = ({ recentProducts }) => {
  const reviewPoints = product => {
    return calculateAvg(
      calculateRatings(product.reviews?.items),
      product.reviews?.items.length
    ).toFixed(1);
  };

  useEffect(() => {
    new Splide('#recent-items-slider', {
      height: '20rem',
      cover: false,
      heightRatio: 0,
      arrows: true,
      perPage: 5,
      autoplay: true,
      type: 'loop',
      interval: 300000,
      pagination: true,
      gap: 20,
      breakpoints: {
        768: {
          perPage: 2,
        },
      },
    }).mount();
  });

  return (
    <div>
      <div className="flex recently-viewed-heading">Recently Viewed</div>
      <div className="row recently-viewed-items">
        {recentProducts.map((product, index) => (
          <div className="viewed-product-card col-12 col-md-4" key={index}>
            <div className="img-div">
              <img src={product.image.url} alt="productimage" />
            </div>
            <div className='content-div'>
              <pre>£{product.price_range.minimum_price.final_price.value}</pre>
              <div className="rating-stars rating-stars-wrapper">
                <ReactStars
                  count={5}
                  size={14}
                  value={reviewPoints(product)}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star" />}
                  halfIcon={<i className="fa fa-star-half-alt" />}
                  filledIcon={<i className="fa fa-star" />}
                  activeColor="#000000"
                  color="black"
                />
                <span className="products-rating-avg">
                  {reviewPoints(product)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recently-viewed-slider */}
      <div className="container mt-5 recent-items-slider">
        <h6 className="text-center recently-viewed-heading mb-5">
          Recently Viewed
        </h6>
        <div className="row">
          <div className="col-12 products-div">
            <div id="recent-items-slider" className="splide">
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="viewed-product-card col-12 col-md-4">
                      <img src={card2_imgae1} />
                      <pre>£7.99</pre>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
