import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import DefaultLayout from '../../common/DefaultLayout';
import prodimg from '../../assets/images/touch-and-feel_5000x.png';
import SortingDropdown from '../../common/SortingDropdown';
import { useSelector } from 'react-redux';
import { calculateRatings, calculateAvg } from '../../utils/index';
import AuthenticatedRoute from '../../components/hoc/AuthenticatedRoute';
import Breadcrumbs from '../../common/Breadcrumbs';
import * as routes from '../../routePaths';


const MyFavourites = () => {
  const { customer } = useSelector(state => state.customer);
  const favourites = customer?.favourites || [];

  const favouriteProducts = favourites[0]?.items_v2?.items;
  return (
    <DefaultLayout hasOptionsPartners={true}>
      <div class="container container_fav pt-3">
        <div className="mb-3">
          <Breadcrumbs
            paths={[
              { url: routes.homepage, text: 'Home' },
              { url: routes.productsPage, text: 'My Account' },
              { url: routes.productDetail, text: 'My Orders' },
            ]}
          />

          </div>
        <div className="row mt-5 heading-row">
          <div className="col-12 col-md-8">
            <h1 class="heading_fav">My Favourites</h1>
            <p class="result">{favouriteProducts.length || 0} Results</p>
          </div>
          <div className="col-12 col-md-4">
            <div class="inp_div_fav">
              <button class="share_btn">
                <i className="fa fa-share mr-2"></i>
                Share
              </button>
              <SortingDropdown />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row fav_card_div">
            {favouriteProducts.map(item => {
              const product = item.product;
              let reviewPoints = calculateAvg(
                calculateRatings(product.reviews?.items),
                product.reviews?.items.length
              ).toFixed(1);
              return (
                <div className='col-sm-12 col-md-6 col-lg-3'> 
                <div class="cards">
                  <div className='img-div'>
                    <img
                      src={product.image.url}
                      alt=""
                      width={100}
                      height={150}
                    />
                  </div>
                  <div className='content-div'>
                  <p class="mt name">
                    {product.name}
                    <br />
                    <br />
                  </p>
                  <p>By {product.azoom_product_specifications.authors}</p>
                  <h3 class="price">
                    £{product.price_range.minimum_price.final_price.value}
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
                    <span>{reviewPoints}</span>
                  </div>
                  <pre>FREE DELIVERY</pre>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default AuthenticatedRoute(MyFavourites);
