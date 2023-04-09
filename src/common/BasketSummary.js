import React from 'react';
import { push as Menu } from 'react-burger-menu';
import bus from '../assets/images/icons/icon_free-delivery.svg';
import Down from '../assets/images/dropdown.png';
import Badge from '../assets/images/icon_protect.png';
import Del from '../assets/images/icons/icon_trash.svg';
import Ticked from '../assets/images/ok.png';
import Cartadd from '../assets/images/addd.png';
import Gift from '../assets/images/icons/icon_gift-card.svg';
import ShipItemIcon from '../pages/ReturnCenter/ShipItemIcon';
import { useSelector } from 'react-redux';
import BasketNotLogged from './BasketNotLogged';
import { useNavigate } from 'react-router-dom';
import { setCartSummaryOpen } from '../redux/cart/CartSlice';
import { useDispatch } from 'react-redux';

const BasketSummary = ({ isOpen, setSideNavOpen, subTotal, ...props }) => {
  const { customer } = useSelector(state => state.customer);
  const { items } = useSelector(state => state?.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Menu
      className="bg-primary"
      isOpen={isOpen}
      customBurgerIcon={false}
      onClose={() => dispatch(setCartSummaryOpen(false))}
      {...props}
      right
    >
      {customer ? (
        <div className="basket-summary bg-menu-2 bg-light px-3 ">
          <div className="progress_status">
            <img src={bus} alt="bus" />
            <div className="progress_div">
              <p>You’re £10.50 away from </p>
              <h3 className="free_delivery">FREE DELIVERY</h3>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: '50%' }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <button className="secondary_btn">
            <i class="fa fa-shopping-cart mr-2"></i>
            Review Basket
          </button>
          <button
            className="secondary_btn ml-3"
            onClick={() => navigate('/checkout/info')}
          >
            Check Out Now
          </button>

          <div className="subtotal">
            <pre>Basket Summary</pre>
            <span>
              Subtotal: <b> £{subTotal}</b>
            </span>
          </div>

          <div className='min-itemss'>
          <div className="itemsss pb-3 pt-3">
            {items.map(item => (
              <div className="itemss_up px-3 mb-3">
                <img src={item.product.image.url} alt="itempic" />
                <div className="item_name">
                  <p className='itemss-close'>X</p>
                  <b>
                    £{item.product.price_range.minimum_price.final_price.value}
                  </b>
                  {item.product.sku}
                  <br />
                  <small>{item.quantity} X</small>
                </div>
              </div>
            ))}
            {/* <div className="collapse-wrapper py-1 px-3">
              <div className="wrap-collabsible">
                <div className="heading-wrapper">
                  <img src={Badge} alt="badge" />
                  <h2 className="sub_heading">Protect Your Purchase</h2>
                </div>
                <input id="collapsible1" className="toggle" type="checkbox" />
                <label for="collapsible1" className="lbl-toggle"></label>
                <div className="collapsible-content">
                  <div className="content-inner">
                    <div className="ul_div">
                      <ul className="tick_ul bg-light">
                        <li>
                          <img src={Ticked} alt="ticked" />
                          <p>
                            Accidental damage that manufacturers don’t usually
                            cover (spills, stains, cracks, etc.){' '}
                          </p>
                        </li>
                        <li>
                          <img src={Ticked} alt="ticked" />
                          <p>
                            Malfunctions & defects (split seams, broken
                            frame/hardware etc.)
                          </p>
                        </li>
                      </ul>

                      <div className="select_protection">
                        <p>Select Protection Plan</p>
                        <img src={Down} />
                        <pre>3 years - £1.06</pre>
                      </div>

                      <button className="cart_add">
                        <img src={Cartadd} />
                        Add Protection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          </div>
          {/* <div className="quite_plz_div bg-white p-3 mb-4 shadow-sm">
            <div className="quite_top">
              <div className="d-block mr-3">
                <p>Quiet Please! Pack of 4 Do Not Disturb</p>
                <small>1 x</small>
              </div>
              <div className="items-per-page-wrapper">
                <form>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </form>
              </div>
              <img className="del_icon" src={Del} />
            </div>
            <div className="collapse-wrapper py-1 px-3">
              <div className="wrap-collabsible">
                <div className="heading-wrapper">
                  <img src={Badge} />
                  <h2 className="sub_heading">Protect Your Purchase</h2>
                </div>
                <input id="collapsible1" className="toggle" type="checkbox" />
                <label for="collapsible1" className="lbl-toggle"></label>
                <div className="collapsible-content">
                  <div className="content-inner">
                    <div className="ul_div">
                      <ul className="tick_ul bg-light">
                        <li>
                          <img src={Ticked} />
                          <p>
                            Accidental damage that manufacturers don’t usually
                            cover (spills, stains, cracks, etc.){' '}
                          </p>
                        </li>
                        <li>
                          <img src={Ticked} />
                          <p>
                            Malfunctions & defects (split seams, broken
                            frame/hardware etc.)
                          </p>
                        </li>
                      </ul>

                      <div className="select_protection">
                        <p>Select Protection Plan</p>
                        <img src={Down} />
                        <pre>3 years - £1.06</pre>
                      </div>
                      <button className="cart_add">
                        <img src={Cartadd} />
                        Add Protection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className='free_gift_div'>
            <div className="gift_div mt-3 mb-4">
              <img src={Gift} />
              <p>
                <b>FREE GIFT </b>included
              </p>
            </div>

            <div className="free_uk_delivery px-3">
              <ShipItemIcon elemId="basketSummaryShipIcon" />
              <pre>Free UK Delivery</pre>
              <p>
                All deliveries take between 3-5 working days. Due to Covid
                delivery disruptions may occur.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <BasketNotLogged />
      )}
    </Menu>
  );
};
export default BasketSummary;
