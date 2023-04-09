import React from 'react';
import ReactStars from 'react-rating-stars-component';
import favicon_mobile from '../../assets/images/button_favorite-mobile.png';
import viewicon_mobile from '../../assets/images/button_quickview-mobile.png';
import { useSelector } from 'react-redux';

import { calculateRatings, calculateAvg } from '../../utils/index';
import AddToCart from '../../common/AddToCart';
import AddFavourite from '../MyFavourites/AddFavourite';

export default function AllProducts({ getData }) {
  const { products } = useSelector(state => state?.products);
  const items = products?.items;

  return (
    <div className="products-wrapper">
      <div class="row product-card">
        {items?.map((item, key) => {
          let reviewPoints = calculateAvg(
            calculateRatings(item.reviews?.items),
            item.reviews?.items.length
          ).toFixed(1);
          return (
            <div class="card col-6 col-md-3" key={key}>
              <div class="img_div">
                <img
                  src={item.image.url}
                  className="h-full w-full"
                  alt="product-img"
                />
                <img
                  className="favicon-mobile"
                  src={favicon_mobile}
                  alt="favicon-mobile"
                />
                <img
                  className="viewicon-mobile"
                  src={viewicon_mobile}
                  alt="view-icon"
                />
                <div className="product-action">
                  <AddToCart item={item} classNames="secondary_btn" />
                  <button
                    class="ternary_btn"
                    onClick={() => getData(true, item)}
                  >
                    Quick view
                  </button>
                </div>
              </div>
              <div className="pl-3 pt-3 card-desc">
                <p class="product_name">{item.name}</p>
                <p className="text-muted">
                  By {item.azoom_product_specifications.authors}
                </p>
                <h3 class="price">
                  £{item.price_range.minimum_price.final_price.value}
                </h3>
                <div className="rating-stars rating-stars-wrapper">
                  <ReactStars
                    count={5}
                    size={15}
                    value={reviewPoints}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    filledIcon={<i className="fa fa-star" />}
                    activeColor="#000000"
                    color="black"
                  />
                  <span className="products-rating-avg">{reviewPoints}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center pr-2">
                  <pre>FREE DELIVERY</pre>
                  <AddFavourite product={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
