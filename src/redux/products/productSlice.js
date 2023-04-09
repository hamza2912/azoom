import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSubHeading: null,
  filters: null,
  products: null,
  selectedProduct: null,
  selectedFilters: {},
  selectedFiltersQuery: {
    category_id: {
      in: [localStorage.getItem('category_id')],
    },
  },
  homeSliderProducts: [],
  recommendedProducts: [],
  categories: [],
  outletAndDiscountCategories: [],
  loading: true,
};

export const productSlice = createSlice({
  name: 'productInfo',
  initialState,
  reducers: {
    addProductCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setfetchingProducts: (state, { payload }) => {
      state.loading = payload;
    },
    addSubHeading: (state, { payload }) => {
      state.selectedSubHeading = payload;
    },
    addCategories: (state, { payload }) => {
      state.categories = payload;
    },
    addOutletAndDiscountCategories: (state, { payload }) => {
      state.outletAndDiscountCategories = payload;
    },
    addSliderProducts: (state, { payload }) => {
      state.homeSliderProducts = payload;
    },
    addRecommendedProducts: (state, { payload }) => {
      state.recommendedProducts = payload;
    },
    addFilters: (state, { payload }) => {
      state.filters = payload;
    },
    setSelectedFilters: (state, { payload }) => {
      state.selectedFilters = { ...state.selectedFilters, ...payload };
    },
    removeSelectedFilter: (state, { payload }) => {
      delete state.selectedFilters[payload.key];
    },
    setSelectedFiltersQuery: (state, { payload: { value, key } }) => {
      state.selectedFiltersQuery[key] = {
        ...value,
      };
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    removeSelectedFilterQuery: (state, { payload }) => {
      delete state.selectedFiltersQuery[payload.key];
    },
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const {
  addProductCategory,
  addSubHeading,
  addFilters,
  addProducts,
  setSelectedFilters,
  setSelectedFiltersQuery,
  removeSelectedFilterQuery,
  removeSelectedFilter,
  setfetchingProducts,
  setSelectedProduct,
  addCategories,
  addOutletAndDiscountCategories,
  addSliderProducts,
  addRecommendedProducts,
} = productSlice.actions;

export default productSlice.reducer;
