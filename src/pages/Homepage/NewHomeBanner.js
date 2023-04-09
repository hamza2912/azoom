import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import group from '../../assets/images/Group 2516.png';
import { useSelector } from 'react-redux';

const NewHomeBanner = props => {
  useEffect(() => {
    new Splide('#image-slider', {
      height: '45rem',
      cover: false,
      heightRatio: 0,
      arrows: false,
      // autoplay: true,
      type: 'loop',
      interval: 3000,
    }).mount();
  });

  const { homeSliderProducts } = useSelector(state => state.products);

  return (
    <div className="row">
      <div className="col-12 slider-wrapper">
        <div id="image-slider" className="splide">
          <div className="splide__track">
            <ul className="splide__list splide__list-style">
              {homeSliderProducts.map(product => (
                <li className="splide__slide bg-img image-slider-list-item" style={{ backgroundImage: `url("${product.home_slider_image}")`}}>
                  <img                   
                   src={product.home_slider_image}
                    className="slidimage"
                    alt="splide img"
                  />
                  {/* <img
                    src={product.home_slider_imageesticmob}
                    className="slidimage-resp"
                    alt="splide image_mobile"
                  /> */}
                  <div className="slider-textbox">
                    {/* <p className="majestic-text">{product.sku}</p> */}
                    {/* <p className="main-text">{product.name}</p> */}
                    {/* <p>
                      by <b> {product.azoom_product_specifications?.authors}</b>
                    </p> */}
                  </div>
                  <div className="slider-textbox-right">
                    <div className="best-seller-tag flex">Best Seller</div>
                    <p className="main-text">{product.name}</p>
                    {/* <p
                      className="font-bold"
                      dangerouslySetInnerHTML={{
                        __html: product.short_description.html,
                      }}
                    /> */}
                    <button className="btn btn-shop-now">Shop Now</button>
                  </div>
                  <div className="resp-btn">
                    <button className="btn btn-shop-now-resp">Shop Now</button>
                  </div>
                  <div className="tag-wrapper">
                    <img src={group} className="tag-img" alt="" />
                    <p className="tag-price">
                      NOW ONLY
                      <br />£
                      {product.price_range.minimum_price.final_price.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewHomeBanner;
