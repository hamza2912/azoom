import React from 'react';
import basket from '../../assets/images/icons/icon_basket.svg';
import user from '../../assets/images/icons/icon_user.svg';
import orders from '../../assets/images/icons/icon_orders.svg';
import help from '../../assets/images/icons/icon_help.svg';
import book3c from '../../assets/images/book3c_2048x.png';
import girlBoyReciting from '../../assets/images/girl-boy-reciting_2048x.png';
import sayings from '../../assets/images/1_fc1508ca-d837-4f3c-8fde-07f39931440c_2048x.png';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as routes from '../../routePaths';
import { useNavigate } from 'react-router-dom';

const Suggestions = ({ items, subTotal, setCartSummaryOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer } = useSelector(state => state.customer);
  return (
    <div className={customer ? 'row mt-5' : 'd-none'}>
      <div className="col-12 col-md-4 ">
        <div className="suggestions-div">
          <div className="heading-div">
            <p className="heading pl-1">Account & Basket</p>
          </div>
          <div className="main-div">
            <div>
              <div
                className="icon-div"
                onClick={() => dispatch(setCartSummaryOpen(true))}
              >
                <img src={basket} className="icon" alt="" />
                <p className="text">MY BASKET</p>
                <p className="num">{`(${items?.length || 0})`}</p>
              </div>
              <p className="price-text">
                Total:<b>£{subTotal}</b>
              </p>
              <button
                className="btn chkout-btn"
                onClick={() => navigate('/checkout/info')}
              >
                Check Out Now
              </button>
            </div>
            <div className="header-wrapper">
              <div className="icon-div">
                <Link
                  to={!customer ? routes.login : routes.orders}
                  className="flex"
                >
                  <img src={user} className="icon" alt="" />
                  <p className="text acc-text mt-0">MY ACCOUNT</p>
                </Link>
              </div>
              <div className="icon-div">
                <Link
                  to={!customer ? routes.login : routes.orders}
                  className="flex"
                >
                  <img src={orders} className="icon" alt="" />
                  <p className="text acc-text mt-0">MY ORDERS</p>
                </Link>
              </div>
              <div className="icon-div">
                <img src={help} className="icon" alt="" />
                <p className="text">HELP CENTER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 ">
        <div className="suggestions-div">
          <div className="heading-div">
            <p className="heading">Recently Viewed</p>
            <a className="link">See all</a>
          </div>
          <div className="flex px-2">
            <div className="img-div">
              <img src={book3c} alt="" />
            </div>
            <div className="img-div">
              <img src={girlBoyReciting} alt="" />
            </div>
            <div className="img-div">
              <img src={sayings} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 ">
        <div className="suggestions-div">
          <div className="heading-div">
            <p className="heading">Suggested Searches</p>
            <a className="link">See all</a>
          </div>
          <div className="flex px-2">
            <div className="img-div">
              <img src={book3c} alt="" />
            </div>
            <div className="img-div">
              <img src={girlBoyReciting} alt="" />
            </div>
            <div className="img-div">
              <img src={sayings} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Suggestions;
