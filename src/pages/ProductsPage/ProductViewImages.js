import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import Splide from '@splidejs/splide';
import product_img from '../../assets/images/big_5000x.png';
import badge_img from '../../assets/images/badge_azoom-community.png';

let img1 = {
  image: product_img,
};
let img2 = {
  image: badge_img,
};
let dummyImgs = [
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
  img1,
  img2,
];

const ProductViewImages = ({ product }) => {
  const { media_gallery } = product;
  const [productImages, setProductImages] = useState(media_gallery);
  const bg = 'center';
  const [backgroundPosition, setBackgroundPosition] = useState(bg);

  const [largeImg, setLargeImg] = useState(0);

  const handleMouseMove = e => {
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
    let productImagesSlider = new Splide('#product-modal-images-slider', {
      cover: false,
      arrows: false,
      perPage: 3,
      // autoplay: true,
      // type: 'loop',
      // interval: 300000,
      pagination: true,
      gap: 0,
      breakpoints: {
        768: {
          perPage: 2,
        },
        992: {
          perPage: 4,
        },
      },
    }).mount();
    productImagesSlider.on('click', function (obj) {
      console.log(obj);
    });
  });

  const selectLargeImg = index => {
    // alert(index);
    setLargeImg(index);
  };
  return (
    <>
      <div className="product-modal-images-wrapper">
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
      <div
        id="product-modal-images-slider"
        className="splide product-modal-images-slider"
      >
        <div className="splide__track">
          <ul className="splide__list">
            {productImages.map((product, i) => (
              <li
                className="splide__slide"
                key={i}
                onClick={() => selectLargeImg(i)}
              >
                <div
                  className={`slider-img ${largeImg === i && 'selectedImg'}`}
                >
                  <img src={product.url} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ProductViewImages;
