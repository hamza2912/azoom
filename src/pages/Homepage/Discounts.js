import React, { useCallback } from 'react';
import outlet from '../../assets/images/banner_outlet.png';
import arrow from '../../assets/images/arrow_right-long-white.png';
import discount from '../../assets/images/banner_discount.jpg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedFiltersQuery } from '../../redux/products/productSlice';
import { addProductCategory } from '../../redux/products/productSlice';

const Discounts = props => {
  const { outletAndDiscountCategories } = useSelector(state => state.products);

  const getSource = category => {
    if (category.name === 'Outlet') {
      return outlet;
    } else if (category.name === 'Discount') {
      return discount;
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCategoryId = useCallback(
    category => {
      localStorage.setItem('category_id', category.id);
      dispatch(
        setSelectedFiltersQuery({
          key: 'category_id',
          value: {
            in: [category.id],
          },
        })
      );
    },
    [dispatch]
  );

  const addCategory = useCallback(
    async category => {
      try {
        dispatch(addProductCategory(category));
        setCategoryId(category);
        navigate(`/products/${category.name}`);
      } catch (err) {}
    },
    [dispatch, navigate, setCategoryId]
  );

  const clickHandler = category => {
    addCategory(category);
  };

  return (
    <div className="row mt-5">
      {outletAndDiscountCategories.map((category, index) => (
        <div className="col-12 col-md-6" key={index}>
          <div className="banner-div outlet-banner">
            <img src={getSource(category)} className={category.name == 'Discount' ? "main-img img2" : "main-img"} alt="" />
            <h6>{category.name}</h6>
            <p className="outlet-text">
              Deep discounts on overstock and discontinued products.
            </p>
            <img
              src={arrow}
              className="arrow"
              alt=""
              onClick={() => clickHandler(category)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Discounts;
