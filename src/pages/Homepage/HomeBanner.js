import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import majestic from '../../assets/images/slider_majestic-quran-desktop.jpg';
import majesticmob from '../../assets/images/slider_majestic-quran-mobile.jpg';
import group from '../../assets/images/Group 2516.png';
import nectar from '../../assets/images/slider_sealed-nectar-desktop.jpg';
import nectarmob from '../../assets/images/slider_sealed-nectar-mobile.jpg';
import tajweed from '../../assets/images/slider_tajweed-quran-desktop.jpg';
import tajweedmob from '../../assets/images/slider_tajweed-quran-mobile.jpg';
import desidoll from '../../assets/images/slider_desidoll-desktop.jpg';
import desidollmob from '../../assets/images/slider_desidoll-mobile.jpg';
import children from '../../assets/images/slider_children-desktop.jpg';
import childrenmob from '../../assets/images/slider_children-mobile.jpg';
import products from '../../assets/images/slider_new-products-desktop.jpg';
import productsmob from '../../assets/images/slider_new-products-mobile.jpg';
import sunnah from '../../assets/images/slider_sunnah-desktop.jpg';
import sunnahmob from '../../assets/images/slider_sunnah-mobile.jpg';
import badge from '../../assets/images/badge_muslim-world-league.png';

const HomeBanner = props => {
  useEffect(() => {
    new Splide('#image-slider', {
      height: '45rem',
      cover: false,
      heightRatio: 0,
      arrows: false,
      autoplay: false,
      type: 'loop',
      interval: 3000,
    }).mount();
  });

  return (
    <div className="row">
      <div className="col-12 slider-wrapper">
        <div id="image-slider" className="splide">
          <div className="splide__track">
            <ul className="splide__list splide__list-style">
              <li className="splide__slide">
                <img src={majestic} className="slidimage" alt="splide image" />
                <img
                  src={majesticmob}
                  className="slidimage-resp"
                  alt="splide image"
                />
                <div className="slider-textbox2">
                  <p className="majestic-text">The Majestic</p>
                  <p className="main-text">Quran</p>
                  <p>A Plain English Translation</p>
                  <p>
                    by <b>Musharraf Hussain</b>
                  </p>
                </div>
                <div className="slider-textbox-right">
                  <div className="best-seller-tag flex">Best Seller</div>
                  <p>
                    <b>
                      A beautiful and rich English language work with new
                      aspects and comments
                    </b>
                  </p>
                  <button className="btn btn-shop-now">Shop Now</button>
                </div>
                <div className="resp-btn">
                  <button className="btn btn-shop-now-resp">Shop Now</button>
                </div>
                <div className="tag-wrapper">
                  <img src={group} className="tag-img" alt="" />
                  <p className="tag-price">
                    NOW ONLY
                    <br />
                    £19.99
                  </p>
                </div>
              </li>
              {/* <li className="splide__slide">
                <img src={nectar} className="slidimage" alt="splide image" />
                <img
                  src={nectarmob}
                  className="slidimage-resp"
                  alt="splide image"
                />
                <div className="slider-textbox-nectar">
                  <h1>THE </h1>
                  <h1>SEALED </h1>
                  <h1>NECTAR</h1>
                  <p>
                    by <b>Safiur Rahman Mubarkpuri</b>
                  </p>
                </div>
                <div className="slider-textbox-right">
                  <p>
                    <b>5 star rating by our AZoom readers</b>
                  </p>
                  <p>
                    <b>
                      One of the best Biography Books of the Prophet (Peace be
                      upon him)
                    </b>
                  </p>
                  <button className="btn btn-shop-now">Shop Now</button>
                </div>
                <div className="resp-btn">
                  <button className="btn btn-shop-now-resp">Shop Now</button>
                </div>
                <div className="slider-badge">
                  <img src={badge} alt="" />
                </div>
                <div className="slider-badge-resp">
                  <img src={badge} alt="" />
                </div>
                <div className="tag-wrapper nectar-tag">
                  <img src={group} className="tag-img" alt="" />
                  <p className="tag-price">
                    NOW ONLY
                    <br />
                    £19.99
                  </p>
                </div>
              </li>
              <li className="splide__slide">
                <img src={tajweed} className="slidimage" alt="splide image" />
                <img
                  src={tajweedmob}
                  className="slidimage-resp"
                  alt="splide image"
                />
                <div className="slider-textbox-tajweed">
                  <h5>Colour Coded</h5>
                  <h5>Tajweed Quran</h5>
                  <h5>Collection</h5>
                  <button className="btn btn-see-more">Shop Now</button>
                </div>
              </li>
              <li className="splide__slide">
                <img src={desidoll} alt="splide image" className="slidimage" />
                <img
                  src={desidollmob}
                  alt="splide image"
                  className="slidimage-resp"
                />
                <div className="slider-textbox-right slider-textbox-desidoll">
                  <div className="best-seller-tag flex">NEW</div>
                  <div className="text">
                    <h5 className="mb">Desi Dolls</h5>
                    <h5 className="mb">It was the perfect Eid Gift</h5>
                    <p>
                      by<b>Razia Begum</b>
                    </p>
                  </div>
                  <button className="btn btn-shop-now">Shop Now</button>
                </div>
                <div className="resp-btn">
                  <button className="btn btn-shop-now-resp">Shop Now</button>
                </div>
              </li>
              <li className="splide__slide">
                <img src={children} alt="splide image" className="slidimage" />
                <img
                  src={childrenmob}
                  alt="splide image"
                  className="slidimage-resp"
                />
                <div className="slider-textbox-right slider-textbox-right-resp">
                  <div className="best-seller-tag flex">NEW</div>
                  <h5>Azoom children section</h5>
                  <button className="btn btn-shop-now">See Offers</button>
                </div>
                <div className="resp-btn">
                  <button className="btn btn-shop-now-resp">See Offers</button>
                </div>
              </li>
              <li className="splide__slide">
                <img src={products} alt="splide image" className="slidimage" />
                <img
                  src={productsmob}
                  alt="splide image"
                  className="slidimage-resp"
                />
                <div className="slider-textbox-right slider-textbox-right-resp">
                  <div className="new-prod-tag flex">NEW Products</div>
                  <h5>Daily essentials for your family </h5>
                  <button className="btn btn-shop-now">See More</button>
                </div>
                <div className="resp-btn">
                  <button className="btn btn-shop-now-resp">See more</button>
                </div>
              </li>
              <li className="splide__slide">
                <img src={sunnah} alt="splide image" className="slidimage" />
                <img
                  src={sunnahmob}
                  alt="splide image"
                  className="slidimage-resp"
                />
                <div className="slider-textbox-right slider-textbox-right-resp">
                  <div className="new-prod-tag">
                    <p>NEW Products</p>
                  </div>
                  <h5>The Dar As-Sunnah Classical Collection </h5>
                  <button className="btn btn-shop-now">See More</button>
                </div>
                <div className="resp-btn">
                  <button className="btn btn-shop-now-resp">See more</button>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
