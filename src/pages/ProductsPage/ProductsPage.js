import React, { useEffect, useCallback, useState } from 'react';
import DefaultLayout from '../../common/DefaultLayout';
import FiltersSidebar from './FiltersSidebar';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { DefaultLayoutChildren } from './DefaultLayoutChildren';
import { ProductModal } from './ProductModal';
import { getProductsInfo } from '../../services/product';
import {
  addProducts,
  setfetchingProducts,
} from '../../redux/products/productSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addFilters } from '../../redux/products/productSlice';
import { setSelectedFiltersQuery } from '../../redux/products/productSlice';

const ProductsPage = () => {
  let [isSideNavOpen, setSideNavOpen] = useState(false);
  let [isModalOpen, setModalOpen] = useState(false);
  let [product, setProduct] = useState('');

  const { selectedSubHeading, categories } = useSelector(
    state => state.products
  );

  const dispatch = useDispatch();
  const location = useLocation();

  const { state } = location;

  const selectedFiltersQuery = useSelector(
    state => state?.products.selectedFiltersQuery
  );

  const getProducts = useCallback(async () => {
    dispatch(setfetchingProducts(true));
    try {
      let { products } = await getProductsInfo(selectedFiltersQuery);
      dispatch(addFilters(products.aggregations));
      dispatch(addProducts(products));
    } catch (err) {
      toast.error(err.message);
    } finally {
      dispatch(setfetchingProducts(false));
    }
  }, [dispatch, selectedFiltersQuery]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (!localStorage.getItem('category_id') && categories.length > 0) {
      const categoryName = location.pathname.split('/')[2];
      const selectedCategory = categories.filter(
        category =>
          category.name.replace("'", '').toLowerCase() ===
          categoryName.toLowerCase()
      );
      if (selectedCategory) {
        dispatch(
          setSelectedFiltersQuery({
            key: 'category_id',
            value: {
              in: [selectedCategory[0].id],
            },
          })
        );
      }
    }
  }, [categories, location.pathname, dispatch]);

  const getData = (isOpen, product) => {
    setModalOpen(isOpen);
    setProduct(product);
  };

  return (
    <>
      {product && (
        <ProductModal
          product={product}
          setModalOpen={setModalOpen}
          isModalOpen={isModalOpen}
        />
      )}
      <FiltersSidebar
        pageWrapId={'header-wrapper'}
        outerContainerId={'App'}
        isOpen={isSideNavOpen}
        setSideNavOpen={setSideNavOpen}
        filterProducts={getProducts}
      />
      <DefaultLayout hasMoneyBack={true} hasOptionsPartners={true}>
        <DefaultLayoutChildren
          setSideNavOpen={setSideNavOpen}
          selectedSubHeading={selectedSubHeading}
          getData={getData}
        />
      </DefaultLayout>
    </>
  );
};

export default ProductsPage;
