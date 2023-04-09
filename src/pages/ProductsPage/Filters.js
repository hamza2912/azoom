import React, { useState, useEffect } from 'react';
import arrow from '../../assets/images/arrow_right-long-white.png';
import { useDispatch, useSelector } from 'react-redux';
import { getFiltersInfo } from '../../services/filter';
import {
  addFilters,
  setSelectedFilters,
  setSelectedFiltersQuery,
  removeSelectedFilter,
  removeSelectedFilterQuery,
} from '../../redux/products/productSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Bars } from 'react-loader-spinner';

import { toast } from 'react-toastify';
import { filterOptions } from '../../constants/filter';

export default function Filters() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState({});

  const { filters, loading, selectedFilters, selectedFiltersQuery } =
    useSelector(state => state?.products);

  useEffect(() => {
    const getCategory = async () => {
      try {
        let { products } = await getFiltersInfo({
          category_id: {
            in: [localStorage.getItem('category_id')],
          },
        });
        dispatch(addFilters(products.aggregations));
        let toggleObj = {};
        products.aggregations.forEach(filter => {
          toggleObj[filter.attribute_code] = true;
        });
        setToggle(toggleObj);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getCategory();
  }, [dispatch]);

  const isFilterApplied = (filterName, label) => {
    if (
      selectedFilters[filterName] &&
      selectedFilters[filterName]?.label === label
    ) {
      return true;
    }
    return false;
  };

  const getFilteredProducts = async (filter, children) => {
    let { value } = children;
    if (
      selectedFilters[filter.attribute_code] &&
      selectedFilters[filter.attribute_code].label === children.label
    ) {
      dispatch(removeSelectedFilter({ key: filter.attribute_code }));
    } else {
      dispatch(
        setSelectedFilters({
          [filter.attribute_code]: {
            label: children.label,
          },
        })
      );
    }
    let queryFilter = selectedFiltersQuery[filter.attribute_code];
    switch (filter.attribute_code) {
      case filterOptions.price:
        value = value.split('_');
        if (
          queryFilter &&
          queryFilter?.from === value[1] &&
          queryFilter?.to === value[0]
        ) {
          dispatch(removeSelectedFilterQuery({ key: filter.attribute_code }));
        } else {
          dispatch(
            setSelectedFiltersQuery({
              key: filter.attribute_code,
              value: {
                from: value[0],
                to: value[1],
              },
            })
          );
        }
        break;
      case filterOptions.category:
        if (queryFilter && queryFilter?.in & ([0] === value)) {
          dispatch(removeSelectedFilterQuery({ key: filter.attribute_code }));
        } else {
          dispatch(
            setSelectedFiltersQuery({
              key: filter.attribute_code,
              value: {
                in: [value],
              },
            })
          );
        }
        break;
      default:
        if (queryFilter && queryFilter?.eq === value) {
          dispatch(removeSelectedFilterQuery({ key: filter.attribute_code }));
        } else {
          dispatch(
            setSelectedFiltersQuery({
              key: filter.attribute_code,
              value: {
                eq: value,
              },
            })
          );
        }
        break;
    }
  };
  const aggregations = filters;
  const changeToggle = attribute_code => {
    setToggle({ ...toggle, [attribute_code]: !toggle[attribute_code] });
  };

  return (
    <div className="filters-wrapper">
      <div className="inp_div">
        <div className="flex">
          <label class="switch">
            <input type="checkbox" id="togBtn"></input>
            <div class="slider round"></div>
          </label>
          <p className="delivery-text mt-1">Sales and Offers</p>
        </div>
        <div className="search-input-wrapper mt-2 mb-2">
          <form className="full-width">
            <div className="box-search">
              <input type="text"></input>
              <span>Postcode</span>
            </div>
          </form>
          <div className="box">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className='loading-box'>
        {loading && (
          <p className="d-flex">
            Filtering the Products{' '}
            <Bars
              height="20"
              width="20"
              radius="9"
              color="#53acaa"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          </p>
        )}
        </div>
        <p className="mt-2 font-weight-bold mb-0">
          <span>
            <FontAwesomeIcon icon={faFilter} style={{ color: '#53acaa' }} />{' '}
          </span>
          Filters Applied: {Object.keys(selectedFilters).length}
        </p>
        {aggregations?.map((filter, key) => {
          return (
            <div className="filters" key={key}>
              <div className="wrap-collabsible border-bottom">
                <h2>{filter.label}</h2>
                <input
                  onClick={() => changeToggle(filter.attribute_code)}
                  id={`filter-toggle-checkbox-${filter.attribute_code}`}
                  className="toggle"
                  type="checkbox"
                  checked={filter.attribute_code}
                />
                <label
                  for={`filter-toggle-checkbox-${filter.attribute_code}`}
                  className="lbl-toggle"
                ></label>
                <div className="collapsible-content">
                  <div className="content-inner categories">
                    {filter?.options?.map((children, key) => {
                      return (
                        <ul>
                          <li key={key} className="cursor-pointer">
                            <div class="round">
                              <input
                                type="checkbox"
                                id={`filter-selection-checkbox-${children.label}`}
                                checked={isFilterApplied(
                                  filter.attribute_code,
                                  children.label
                                )}
                                onClick={() =>
                                  getFilteredProducts(filter, children)
                                }
                              />
                              <label
                                for={`filter-selection-checkbox-${children.label}`}
                              ></label>
                            </div>
                            <p>{children.label}</p>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <p className='show_more_filters'>See More Filters</p>
      </div>
    </div>
  );
}
