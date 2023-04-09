import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import Splide from "@splidejs/splide";
import badge_img from "../../assets/images/badge_azoom-community.png";

export default function ProductImages({ product }) {
  const { media_gallery } = product;
  const bg = "center";
  const [backgroundPosition, setBackgroundPosition] = useState(bg);

  const [largeImg, setLargeImg] = useState(0);

  const handleMouseMove = (e) => {
    // if (isMobile || isTablet)
    // 		return;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };
  const handleMouseOut = () => {
    setBackgroundPosition(`center`);
  };

  useEffect(() => {
    let productImagesSlider = new Splide("#product_images_slider", {
      cover: false,
      arrows: true,
      perPage: 3,
      // autoplay: true,
      // type: 'loop',
      // interval: 300000,
      pagination: false,
      gap: 20,
      breakpoints: {
        768: {
          perPage: 2,
        },
        992: {
          perPage: 4,
        },
      },
    }).mount();
    productImagesSlider.on("click", function (obj) {
      console.log(obj);
    });
  });

  const selectLargeImg = (index) => {
    // alert(index);
    setLargeImg(index);
  };

  return (
    <div className="product_images_wrapper">
      <div className="basic-product-info">
        <p>
          Ramadan Activity Book <br />
          (Little Kids)
        </p>
        <p className="instock">
          <i class="fas fa-chevron-down"></i>
          In Stock
        </p>
        <p className="seemore">
          See more by <a href="/">{}</a>
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
          <span>4.6</span>
          <span className="total-reviews">8 reviews</span>
        </div>
      </div>
      <div className="big-image-wrapper">
        <div
          className="main_image"
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          style={{
            backgroundImage: `url(${media_gallery[largeImg].url})`,
            backgroundPosition: backgroundPosition,
          }}
        ></div>
      </div>
      <div id="product_images_slider" className="splide product_images_slider">
        <div className="splide__track">
          <ul className="splide__list">
            {media_gallery.map((product, i) => (
              <li
                className="splide__slide"
                key={i}
                onClick={() => selectLargeImg(i)}
              >
                <div
                  className={`slider-img ${largeImg === i && "selectedImg"}`}
                >
                  <img src={product.url} alt={`${product.id}`} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="shop_at_amazon">
        <div className="">
          <img src={badge_img} alt="badge-img" />
        </div>
        <div className="shop">
          <h2>Shop at Azoom and help our community come closer.</h2>
          <p>
            We are community of people in the midlands trying to push forward a
            better collobaration of consumer purchase items that is ethically
            ‘Made’ & ‘Sourced’
          </p>
        </div>
      </div>
    </div>
  );
}
