import React, { useCallback, useEffect, useState } from 'react';
import Splide from '@splidejs/splide';
import Best from '../assets/images/icons/icon_bestseller.svg';
import Arival from '../assets/images/icons/icon_new-arrivals.svg';
import Offer from '../assets/images/icons/icon_offers.svg';
import Quran from '../assets/images/icons/icon_book-quaran-hadith.svg';
import historyIcon from '../assets/images/icons/icon_book-history-society.svg';
import child from '../assets/images/icons/icon_children-teen.svg';
import Book from '../assets/images/icons/icon_book-islam-life.svg';
import productImg from '../assets/images/small_2048x.png';
import bgShapeLeft from '../assets/images/bg_shape-left.svg';
import bgShapeBottom from '../assets/images/bg_shape-bottom.svg';
import bgShapeRight from '../assets/images/bg_shape-right.png';
import fvrtIcon from '../assets/images/icons/icon_favorite.svg';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductCategory,
  addSubHeading,
  setSelectedFiltersQuery,
} from '../redux/products/productSlice';

export default function MegaMenu({ category }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    new Splide('#megamenu-slider', {
      height: '23rem',
      cover: false,
      heightRatio: 0,
      arrows: false,
      perPage: 1,
      autoplay: true,
      type: 'loop',
      interval: 300000,
      pagination: true,
    }).mount();
  }, []);

  const setCategoryId = useCallback(() => {
    localStorage.setItem('category_id', category.id);
    dispatch(
      setSelectedFiltersQuery({
        key: 'category_id',
        value: {
          in: [category.id],
        },
      })
    );
  }, [category, dispatch]);

  const addCategory = useCallback(
    async heading => {
      try {
        dispatch(addProductCategory(category));
        dispatch(addSubHeading(heading));
        setCategoryId();
        navigate(`/products/${heading.url_path}`);
      } catch (err) {}
    },
    [dispatch, navigate, category, setCategoryId]
  );

  const getHeadingIcons = useCallback(title => {
    switch (title) {
      case 'islam-life':
        return Book;
      case 'children-teen':
        return child;
      case 'qur-an-hadith':
        return Quran;
      case 'history-society':
        return historyIcon;
      default:
        return Book;
    }
  }, []);

  const renderCategoryList = useCallback(() => {
    return category.children.map((heading, key) => {
      return (
        <div class="col-lg-4 col-md-6 col-sm-12 quran" key={key}>
          <p class="sub_heading">
            <img src={getHeadingIcons(heading.url_key)} alt="" />
            <span class="" onClick={() => addCategory(heading)}>
              {heading.name}
            </span>
          </p>
          <ul>
            {heading.children.map((subHeading, index) => (
              <li key={index} onClick={() => addCategory(subHeading)}>
                {subHeading.name}
              </li>
            ))}
          </ul>
          {heading.url_key === 'qur-an-hadith' && (
            <ul>
              <li>
                <img src={Best} alt="" />
                Bestsellers
              </li>
              <li className="cyan">
                <img src={Arival} alt="" /> Arrivals
              </li>
              <li className="ornage">
                <img src={Offer} alt="" />
                Offers
              </li>
            </ul>
          )}
        </div>
      );
    });
  }, [category, addCategory]);

  return (
    <div class="mega-menu-wrapper">
      <div class="row mega-menu-row">
        <div className="col-9 mega-col-9">
          <div className="row links-row">{renderCategoryList()}</div>
          <button className='view_products'>View All Products</button>
          <img src={bgShapeLeft} className='bg-shape bg-shape-left' alt="" />
          <img src={bgShapeBottom} className='bg-shape bg-shape-bottom' alt="" />
          <img src={bgShapeRight} className='bg-shape bg-shape-right' alt="" />
        </div>

        {/* <!-- //slider --> */}
        <div class="col-lg-3 col-md-6 col-sm-12 offers-wrapper">
          <div className="offers-div">
            <h2 class="heading text-center">HOT OFFER</h2>
            <div className="products-div megamenu-products-div">
              <div id="megamenu-slider" className="splide splide-dimen">
                <div className="splide__track">
                  <ul className="splide__list">
                    <li className="splide__slide">
                      <div className="prod-description">
                        <div className="img-div">
                          <img src={productImg} />
                        </div>
                        <div className="prod-name-mega-menu">
                          <p className="name">What to Say When</p>
                          <p className="writer">By Imam Ibn Jawzi</p>
                        </div>
                        <div className="ml-3 d-flex">
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
                          <span className="ml-1">8</span>
                        </div>

                        <p className="price">£21.45</p>
                        <div className="free-delivery">
                          <p>FREE DELIVERY</p>
                          <img src={fvrtIcon} alt="" />
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="prod-description">
                        <div className="img-div">
                          <img src={productImg} />
                        </div>
                        <div className="prod-name-mega-menu">
                          <p className="name">What to Say When</p>
                          <p className="writer">By Imam Ibn Jawzi</p>
                        </div>
                        <p className="price">£21.45</p>
                        <div className="free-delivery">
                          <p>FREE DELIVERY</p>
                          <img src={fvrtIcon} alt="" />
                        </div>
                      </div>
                    </li>
                    <li className="splide__slide">
                      <div className="prod-description">
                        <div className="img-div">
                          <img src={productImg} />
                        </div>
                        <div className="prod-name-mega-menu">
                          <p className="name">What to Say When</p>
                          <p className="writer">By Imam Ibn Jawzi</p>
                        </div>
                        <p className="price">£21.45</p>
                        <div className="free-delivery">
                          <p>FREE DELIVERY</p>
                          <img src={fvrtIcon} alt="" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="action-div">
              <button className="primary_btn">View All Offers</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
