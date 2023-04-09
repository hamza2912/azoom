import React, { useState, useCallback } from 'react';
import BookCategory from './Categories/BookCategory';
import ChildrenCategory from './Categories/ChildrenCategory';
import ClothCategory from './Categories/ClothCategory';
import PerfumeCategory from './Categories/PerfumeCategory';
import SaleCategory from './Categories/SaleCategory';
import { useSelector, useDispatch } from 'react-redux';
import { addProductCategory } from '../../redux/products/productSlice';
import { setSelectedFiltersQuery } from '../../redux/products/productSlice';
import { useNavigate } from 'react-router-dom';

const ShopCategories = props => {
  const [category, setCategory] = useState(null);

  const { categories } = useSelector(state => state.products);
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

  const clickHandler = categoryName => {
    const selectedCategory = categories.find(
      c => c.name.toLowerCase() === categoryName.toLowerCase()
    );
    setCategory(selectedCategory);
    addCategory(selectedCategory);
  };

  return (
    <div class="row mt-5 shopbycategory-wrapper">
      <div class="col-12">
        <h6 class="text-center shop-text mb-5">Shop by Category</h6>
        <div class="container">
          <div class="row flex">
            <div
              class="col-md-2 col-6 category-div"
              onClick={() => clickHandler('Books')}
            >
              <div>
                {/* <img src={books} alt="" /> */}
                <BookCategory category-name />
                <p class="mt-3 category-name megamenus">Books</p>
              </div>
            </div>
            <div
              class="col-md-2 col-6 category-div"
              onClick={() => clickHandler('Children')}
            >
              <div>
                <ChildrenCategory />
                <p class="mt-3 category-name megamen">Children</p>
              </div>
            </div>
            <div
              class="col-md-2 col-6 category-div"
              onClick={() => clickHandler('Eduction')}
            >
              <div>
                <PerfumeCategory />
                <p class="mt-3 category-name megamen">Perfume</p>
              </div>
            </div>
            <div
              class="col-md-2 col-6 category-div"
              onClick={() => clickHandler('Food Inspired')}
            >
              <div>
                <ClothCategory />
                <p class="mt-3 category-name megamen">Clothing</p>
              </div>
            </div>
            <div
              class="col-md-2 col-12 category-div sale-category"
              onClick={() => clickHandler('Sale')}
            >
              <div>
                <SaleCategory />
                <p class="mt-3 category-name sale  mamenus">Sale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopCategories;
