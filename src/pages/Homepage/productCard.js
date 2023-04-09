import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import fvrtIcon from '../../assets/images/icons/icon_favorite.svg';
import AddToCart from '../../common/AddToCart';
import { calculateRatings, calculateAvg } from '../../utils/index';
import AddFavourite from '../MyFavourites/AddFavourite';

export default function ProductCard({
  isModalOpen,
  setModalOpen,
  addToBasket,
  product,
  getData,
  ...props
}) {
  let reviewPoints = calculateAvg(
    calculateRatings(product.reviews?.items),
    product.reviews?.items.length
  ).toFixed(1);

  return (
    <div className="prod-description">
      <div className="img-div">
        <img src={product.image.url} alt="product-img" />
        <div className="product-action">
          <AddToCart item={product} classNames="secondary_btn" />
          <button class="ternary_btn" onClick={() => getData(true, product)}>
            View more
          </button>
        </div>
      </div>
      <div className="prod-name">
        <p className="name">{product.name}</p>
        <p className="writer">
          By {product.azoom_product_specifications.authors}
        </p>
      </div>
      <p className="price">
        £{product.price_range.minimum_price.final_price.value}
      </p>
      <div className="rating-stars rating-stars-wrapper ml-3">
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
        <span>{reviewPoints}</span>
      </div>
      <div className="free-delivery">
        <p>FREE DELIVERY</p>
        <AddFavourite product={product} />
      </div>
    </div>
  );
}
