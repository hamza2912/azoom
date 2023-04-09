import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../common/Breadcrumbs';
import Filters from './Filters';
import Products from './Products';
import * as routes from '../../routePaths';
import { useSelector } from 'react-redux';
import { ProductHeader } from './ProductHeader';
import { ProductsPagination } from './ProductsPagination';
import { RecentlyViewed } from './RecentlyViewed';
import { getRecentlyViewedProducts } from '../../services/product';

export const DefaultLayoutChildren = ({
  selectedSubHeading,
  setSideNavOpen,
  getData,
}) => {
  const { products } = useSelector(state => state?.products);
  const { customer } = useSelector(state => state.customer);

  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    if (customer) {
      getRecommendedProducts();
    }
  }, [customer]);

  const getRecommendedProducts = async () => {
    try {
      const { recentViewedProducts } = await getRecentlyViewedProducts();
      setRecentProducts(recentViewedProducts);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <div className="container products-page-wrapper">
      <div className="row">
        <div className="col-lg-3 col-md-4 d-none d-md-block">
          <Filters customId="desktop" />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <Breadcrumbs
            paths={[
              { url: routes.homepage, text: 'Home' },
              { url: routes.productsPage, text: 'Products' },
            ]}
          />
          <ProductHeader
            selectedSubHeading={selectedSubHeading}
            totalProducts={products?.items?.length || 0}
            setSideNavOpen={setSideNavOpen}
          />
          <Products getData={getData} />
          <ProductsPagination />
          {recentProducts?.items?.length > 0 && (
            <RecentlyViewed recentProducts={recentProducts.items} />
          )}
        </div>
      </div>
    </div>
  );
};
