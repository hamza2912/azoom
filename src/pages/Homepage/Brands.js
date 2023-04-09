import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import seoBanner from '../../assets/images/seo_contemporary_living_banner.png';
import Splide from '@splidejs/splide';
import carFresh from '../../assets/images/icon_car-freshners.svg';
import burner from '../../assets/images/icon_incense-burners.svg';
import bookShelf from '../../assets/images/icon_book-shelfs.svg';
import alarms from '../../assets/images/icon_alarms.svg';
import calendars from '../../assets/images/icon_advent-calendars.svg';
import canvases from '../../assets/images/icon_wall-canvases_home-decoration.svg';
import rightarrow from '../../assets/images/arrow_right-long.png';
import { getBrands } from '../../services/brands';

const Brands = props => {
  const [isActive, setIsActive] = useState('All Brands');

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchBrandsData();
  }, []);

  const fetchBrandsData = async () => {
    try {
      const {
        customAttributeMetadata: { items },
      } = await getBrands();

      setBrands(items[0]?.brand_attributes);
      setSelectedBrand(items[0]?.brand_attributes[0]);
      setIsActive(items[0]?.brand_attributes[0].label);
      setProducts(items[0]?.brand_attributes[0]?.products);
    } catch (err) {}
  };
  useEffect(() => {
    new Splide('#brand-slider', {
      height: '20rem',
      cover: false,
      heightRatio: 0,
      arrows: true,
      perPage: 3,
      autoplay: false,
      type: 'loop',
      interval: 3000,
      gap: 20,
      // pagination: false,
      breakpoints: {
        768: {
          perPage: 2,
        },
        375: {
          perPage: 1,
        },
      },
    }).mount();
  });

  const clickHandler = brand => {
    if (brand === 'All Brands') {
      let allProducts = [];
      for (const i in brands) {
        allProducts = [...allProducts, ...brands[i].products];
      }
      setProducts(allProducts);
    } else {
      setSelectedBrand(brand);
      setProducts(brand.products);
      setIsActive(brand.label);
    }
  };

  console.log('branc products', products);
  return (
    <div className="row mt-5 brands-wrapper brand-courses-spacing">
      <div className="col-12 col-md-3 explore-div ">
        <div className="text-div">
          <h5>Explore Our Brands</h5>
          <p>Find Home collection that fit you style, space and budget.</p>
        </div>
        <div>
          {brands.map((brand, index) => {
            return (
              <button
                onClick={() => clickHandler(brand)}
                key={index}
                className={`btn btn-explore ${
                  isActive === brand.label && 'active'
                }`}
              >
                {brand.label}
              </button>
            );
          })}
          <button
            onClick={() => {
              clickHandler('All Brands');
              setIsActive('All Brands');
            }}
            className={`btn btn-explore ${
              isActive === 'All Brands' && 'active'
            }`}
          >
            See All Home Brands
          </button>
        </div>
      </div>
      <div className="col-12 col-md-9 mt-4 pl-4 pr-4">
        <div id="brand-slider" className="splide mt-brand">
          <div className="splide__track">
            <ul className="splide__list">
              {products.map((product, index) => {
                return (
                  <li className="splide__slide" key={index}>
                    <div className="brand-description">
                      <div className="img-div">
                        <img src={product.image} alt="product" />
                      </div>
                      <div className="brand-name">
                        <p>{product.heading}</p>
                      </div>
                      <div className="rating-stars rating-stars-wrapper ml-3">
                        <ReactStars
                          count={5}
                          size={14}
                          value={4.1}
                          a11y={true}
                          edit={false}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star" />}
                          halfIcon={<i className="fa fa-star-half-alt" />}
                          filledIcon={<i className="fa fa-star" />}
                          activeColor="#000000"
                          color="black"
                        />
                        <span>{product.rating}</span>
                      </div>
                      <div className="about-brand">
                        <p>{product.name}</p>
                      </div>
                      <div className="flex">
                        <img src={carFresh} className="brand-icon" alt="" />
                        <img src={burner} className="brand-icon" alt="" />
                        <img src={bookShelf} className="brand-icon" alt="" />
                        <img src={alarms} className="brand-icon" alt="" />
                        <img src={calendars} className="brand-icon" alt="" />
                        <img src={canvases} className="brand-icon" alt="" />
                      </div>
                      <hr />
                      <div className="view-brand">
                        <p>View Brand</p>
                        <img src={rightarrow} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Brands;
