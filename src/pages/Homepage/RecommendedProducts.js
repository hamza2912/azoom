import React, { useEffect, useState } from 'react';
import ProductViewModel from '../../common/ProductViewModel';
import ProductCard from './productCard';
import Splide from '@splidejs/splide';
import { useSelector } from 'react-redux';
import { ProductModal } from '../ProductsPage/ProductModal';

const RecommendedProducts = props => {
  let [isModalOpen, setModalOpen] = useState(false);
  let [product, setProduct] = useState('');

  const products = useSelector(state => state.products?.recommendedProducts);

  useEffect(() => {
    new Splide('#card-slider', {
      height: '28rem',
      cover: false,
      heightRatio: 0,
      arrows: true,
      perPage: 5,
      autoplay: true,
      interval: 300000,
      pagination: true,
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
  });

  const getData = (isOpen, product) => {
    setModalOpen(isOpen);
    setProduct(product);
  };

  return (
    <>
      {product && (
        <ProductModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          product={product}
        />
      )}
      <div className="row">
        <div className="col-12 products-div mt-fix">
          <h6 className="text-center heading mb-5">Recommended Products</h6>
          <div className="container">
            <div className="row">
              <div className="col-12 pl-0 pr-0">
                <div id="card-slider" className="splide">
                  <div className="splide__track">
                    <ul className="splide__list">
                      {products.map(product => (
                        <li key={product.id} className="splide__slide">
                          <ProductCard
                            product={product}
                            isModalOpen={isModalOpen}
                            setModalOpen={setModalOpen}
                            getData={getData}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecommendedProducts;
