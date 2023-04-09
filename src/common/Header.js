import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as routes from '../routePaths';
import arrowRightLong from '../assets/images/icons/arrow_right-long-white.svg';
import hamburger from '../assets/images/icons/icon_hamburger-menu.svg';
import searchIcon from '../assets/images/icon_search.svg';
import iconFvrt from '../assets/images/icons/icon_favorite.svg';
import cartIcon from '../assets/images/icons/icon_basket.svg';
import usericon from '../assets/images/icons/icon_user.svg';
import Sidebar from './Sidebar';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import BasketSummary from './BasketSummary';
import MobileMenuSidebar from './MobileMenuSidebar';
import { useSelector } from 'react-redux';
import { getCategoriesInfo } from '../services/category';
import { toast } from 'react-toastify';
import {
  addCategories,
  addOutletAndDiscountCategories,
} from '../redux/products/productSlice';
import { useDispatch } from 'react-redux';
import { setCartSummaryOpen } from '../redux/cart/CartSlice';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  const [isMobileSideOpen, setMobileSideOpen] = useState(false);
  const { customer } = useSelector(state => state.customer);
  const [subTotal, setSubTotal] = useState(0);

  const [searchInput, setSearchInput] = useState('');

  const { items, isCartSummaryOpen } = useSelector(state => state.cart);

  const calculateItemPrice = useCallback(() => {
    let price = items.reduce(
      (sum, currentVal) =>
        sum +
        currentVal.product?.price_range?.minimum_price?.final_price?.value,
      0
    );

    setSubTotal(price.toFixed(2));
  }, [items]);

  useEffect(() => {
    calculateItemPrice();
  }, [calculateItemPrice]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategory = async () => {
      try {
        let { categories } = await getCategoriesInfo();
        const outletandDiscoutCategories = categories.items.filter(category => {
          if (category.name === 'Outlet' || category.name === 'Discount') {
            return category.id;
          }
        });
        dispatch(addOutletAndDiscountCategories(outletandDiscoutCategories));
        categories = categories.items.filter(
          category => category.name !== 'Outlet' && category.name !== 'Discount'
        );
        setCategories(categories);
        dispatch(addCategories(categories));
        console.log('check all categories', categories);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getCategory();
  }, []);

  let navigate = useNavigate();

  const handleSearch = e => {
    debugger;
    e.preventDefault();
    navigate(routes.productsPage);
  };

  return (
    <div>
      <Sidebar
        pageWrapId={'header-wrapper'}
        outerContainerId={'App'}
        isOpen={isSideNavOpen}
        setSideNavOpen={setSideNavOpen}
      />
      <MobileMenuSidebar
        pageWrapId={'header-wrapper'}
        outerContainerId={'App'}
        isOpen={isMobileSideOpen}
        setSideNavOpen={setMobileSideOpen}
      />
      <BasketSummary
        pageWrapId={'App'}
        outerContainerId={'root'}
        isOpen={isCartSummaryOpen}
        setSideNavOpen={setCartSummaryOpen}
        subTotal={subTotal}
      />
      <div id="header-wrapper" className="header-wrapper">
        <div className="container-fluid">
          <div className="row upper-header">
            <div className="col-12 ">
              <div className="container flex-container">
                <div className="flex block">
                  <div className="header-text">
                    <p className="text1">Ramadan Essentials</p>
                  </div>
                  <div className="flex shop-now-text">
                    <p className="text2">SHOP NOW</p>
                    <img className="arrow-right" src={arrowRightLong} alt="" />
                  </div>
                </div>
                <div>
                  <p className="text3">Free Delivery & returns to most of UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row border-bottom">
            <div className="col-12 bg">
              <div className="container">
                <div className="header">
                  <div className="logo-div">
                    <button
                      className="flex menu-button d-block d-md-flex"
                      onClick={() => setSideNavOpen(true)}
                    >
                      <img className="header-icon" src={hamburger} alt="" />
                      <p className="text">Menu</p>
                      <div className='notification d-block d-md-none'></div>
                    </button>
                    {/* <button
                      className="flex menu-button d-block d-md-none"
                      onClick={() => setMobileSideOpen(true)}
                    >
                      <img
                        className="header-icon"
                        onClick={() => setMobileSideOpen(true)}
                        src={hamburger}
                        alt=""
                      />
                      <p className="text">Menu</p>
                    </button> */}
                    <Link to={routes.homepage} className="flex">
                      <Logo logoType="headerLogo" />
                    </Link>
                  </div>
                  <div className="flex search-input">
                    <img src={searchIcon} className="search-icon" alt="" />
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        placeholder="Find anything home.."
                        onChange={e => setSearchInput(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="icons">
                    <div className="flex">
                      <img
                        src={iconFvrt}
                        className="acc-icons"
                        alt=""
                        onClick={() =>
                          (window.location.href = `${routes.myFavourites}`)
                        }
                      />
                    </div>
                    <div>
                      <Link
                        to={!customer ? routes.login : routes.orders}
                        className="flex"
                      >
                        <img src={usericon} className="acc-icons" alt="" />
                        <p className="acc-text mobile-hidden">MY ACCOUNT</p>
                      </Link>
                    </div>
                    <div className="flex">
                      <div
                        className="basket-item"
                        onClick={() => dispatch(setCartSummaryOpen(true))}
                      >
                        <img src={cartIcon} className="acc-icons" alt="" />
                        <span className="quantity">{'' || items?.length}</span>
                      </div>
                      <p className={customer ? 'acc-text-basket' : 'd-none'}>
                        £{subTotal}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex search-input-resp">
                  <img src={searchIcon} className="search-icon" alt="" />
                  <input type="text" placeholder="Find anything home.." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row center bg nav-small">
            <nav className="navbar">
              {categories.map(category => (
                <div class="dropdown" key={category.id}>
                  <a
                    className={`dropbtn navbar-brand ${
                      category.name === 'Sale' ? 'active' : 'nav-item'
                    }`}
                    alt={category.name}
                  >
                    {category.name}
                  </a>
                  <ul class="dropdown-content">
                    <MegaMenu category={category} />
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
