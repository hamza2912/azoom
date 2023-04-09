import React, { useEffect, useState } from "react";
import DefaultLayout from "../../common/DefaultLayout";
import book from "../../assets/images/book3c_2048x.png";
import OrderDetailSidebar from "../../common/OrderDetailSidebar";
import search from "../../assets/images/icon_search-white.png";
import filter from "../../assets/images/icon_filter.png";
import Modal from "react-modal";
import closeicon from "../../assets/images/icon_close-menu.png";
import itemimg from "../../assets/images/render7_2048x.png";
import AuthenticatedRoute from "../../components/hoc/AuthenticatedRoute";
import Breadcrumbs from '../../common/Breadcrumbs';
import * as routes from '../../routePaths';
import { getOrderInfo } from "../../services/order";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/orders/orderSlice";
import moment from "moment";

const orderTypes = [
  {
    id: "allOrders",
    title: "All Orders",
  },
  {
    id: "inProgress",
    title: "In-progress Items",
  },
  {
    id: "delivered",
    title: "Delivered Items",
  },
  {
    id: "cancelled",
    title: "Cancelled Items",
  },
  {
    id: "returned",
    title: "Returned Items",
  },
];

const OrdersPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState("allOrders");
  const [orderDetail, setOrderDetail] = useState([]);
  const [orderIndex, setOrderIndex] = useState("");
  const { order } = useSelector((state) => state?.order);
  const items = order?.items;
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrders = async () => {
      try {
        const { customer } = await getOrderInfo();
        dispatch(addOrder(customer.orders));
      } catch (err) {}
    };
    getOrders();
  }, [dispatch]);

  const openOrderDetail = (item, index) => {
    setIsOpen(true);
    setOrderDetail(item);
    setOrderIndex(index);
  };
  return (
    <>
      {orderIndex !== "" && (
        <OrderDetailSidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          orderDetail={orderDetail}
          orderIndex={orderIndex}
        />
      )}
      {/* Fix Me */}
      <Modal className="cancelleditems-modal-wrapper shadow-lg" isOpen={false}>
        <div className="flex border-bottom">
          <p>Order Detail</p>
          <img src={closeicon} />
        </div>
        <div className="shipment-details-wrapper border-bottom">
          <div className="item-wrapper">
            <p>Your Item</p>
            <div className="item-div">
              <div className="img-div">
                <img src={book} alt="..." />
              </div>
              <div className="item-info">
                <p className="item-name"></p>
                <span className="provider">By LearningRoots.com</span>
                <p className="quantity">Quantity: 1</p>
              </div>
            </div>
          </div>
          <div className="shipment-wrapper border-bottom">
            <p>Your Shipment</p>
            <span>Status:</span>
            <p className="status">Cancelled</p>
            <span>Delivery Method</span>
            <p className="status">Large Parcel Courier</p>
            <div className="deivery-links mb-3">
              <a>About Delivery Methods</a>
              <a>Delivery Checklist</a>
            </div>
            <span>Delivery Address</span>
            <div className="delivery-address-div mb-3">
              <p className="status">Michael Satzke</p>
              <p className="status">22 Whitehall Road</p>
              <p className="status">Birmingham, B9EJ, United Kingdom</p>
              <p className="status">+44 8947 394845</p>
            </div>
          </div>
          <div className="order-details">
            <p>Your Order</p>
            <span>Order:</span>
            <p className="order-no"> #2984939043904</p>
            <span>Total Price (1 item)</span>
            <div>
              <a>View Invoice</a>
            </div>
          </div>
        </div>
      </Modal>
      <DefaultLayout hasOptionsPartners={true}>
        <div className="container main-container pt-4">
          <div className="mb-4">
          <Breadcrumbs
            paths={[
              { url: routes.homepage, text: 'Home' },
              { url: routes.productsPage, text: 'My Account' },
              { url: routes.productDetail, text: 'My Orders' },
            ]}
          />

          </div>
          {/* dheading div --> */}
          <div className="main-heading-div row mb-5">
            <div className="col-md-8 col-12">
              <div className="heading-flex">
                <h1 className="heading ">
                  <b>My Orders</b>
                </h1>
                <button className="btn filters-btn">
                  <img src={filter} />
                  Filters
                </button>
              </div>
            </div>
            <div className="col-md-4 input-group search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Search by keyword or order"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-append btn-search border-0 flex-center">
                {/* <i className="fas fa-search"></i> */}
                <img src={search} />
              </button>
            </div>
          </div>
          {/* dul --> */}
          <ul className="tabs-div row mt-5 mb-5">
            {orderTypes?.map((type) => (
              <li
                className={orderType === type.id ? "active" : ""}
                key={type.id}
                onClick={() => setOrderType(type.id)}
              >
                {type.title}
              </li>
            ))}
          </ul>
          {/* dorder list  --> */}
          {/* <!-- 1 --> */}
          {items?.map((item, i) => {
            return (
              <div className="card card_div border-0 mb-5" key={i}>
                <div className="row top_row">
                  <div className="col-12">
                    <div className="flex-content">
                      <div className="flex order-date">
                        <div className="right-border">
                          <p className="mr-3">
                            {" "}
                            <i className="mr-1 far fa-calendar-alt"></i> Date
                            Placed:{" "}
                            {moment(item.order_date).format("MMMM Do, YYYY")}{" "}
                          </p>
                        </div>
                        <p>
                          &nbsp; &nbsp; Order #: <b> {item.number}</b>{" "}
                        </p>
                      </div>
                      <div className="flex t-price">
                        <p>
                          {" "}
                          Total Price: <b>£{item.total.grand_total.value}</b> (
                          {item.items.length} items){" "}
                        </p>
                        <p className="view_invoice">View Invoice</p>
                      </div>
                    </div>
                  </div>
                </div>
                {item.items.map((orderDetail, index) => (
                  <div
                    className="row no-gutters mt-3 bg-white"
                    key={orderDetail.id}
                  >
                    <div className="col-md-3 card_img_div ">
                      {/* <div className="block">
                    <div>
                      <p>
                        {" "}
                        Total Price: <b>£124.90</b> (2 items){" "}
                      </p>
                      <p className="view_invoice">View Invoice</p>
                    </div>
                  </div> */}
                      <img src={book} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body card_body">
                        <h5 className="card-title card_title">
                          {orderDetail.status}
                          <span>
                            <i className="mr-2 far fa-calendar-alt"></i>
                            {moment(item.order_date).format("MMMM Do, YYYY")}
                          </span>
                        </h5>
                        <p className="card-text">
                          <small>Original Item Replaced</small>
                        </p>
                        <div className="mt-3 mb-3">
                          <p className="card-text">
                            <b>{orderDetail.product_name}</b>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              <b>By LearningRoots.com</b>
                            </small>
                          </p>
                        </div>
                        <p className="card-text">
                          <small className="text-muted">
                            Quantity: {orderDetail.quantity_ordered}
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 buttons flex-center flex-column">
                      <button
                        className="rounded mb-2 b1"
                        onClick={() => openOrderDetail(item, index)}
                      >
                        <b>View Details</b>
                      </button>
                      <button className="rounded mb-2 b2">
                        <b>Write a Product Review</b>
                      </button>
                      <button className="rounded mb-2 b3">
                        <b>Buy Again</b>
                      </button>
                    </div>
                    <div className="col-md-3 resp-btn">
                      <div className="flex-btn ">
                        <button
                          className="rounded b1"
                          onClick={(item) => openOrderDetail(item)}
                        >
                          <b>View Details</b>
                        </button>
                        <button className="rounded b3">
                          <b>Buy Again</b>
                        </button>
                      </div>
                      <div className="flex-btn ">
                        <button className="rounded mb-2 b2">
                          <b>Write a Product Review</b>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}

          {/* d2 --> */}
          {/* <div className="card card_div border-0 mb-5">
            <div className="row top_row">
              <div className="col-12">
                <div className="flex-content">
                  <div className="flex order-date">
                    <p>
                      {" "}
                      <i className="mr-0 far fa-calendar-alt"></i> Date Placed:
                      March 10, 2021{" "}
                    </p>
                    <p>
                      &nbsp; &nbsp; Order #: <b> 4759304924950</b>{" "}
                    </p>
                  </div>
                  <div className="flex t-price">
                    <p>
                      {" "}
                      Total Price: <b>£124.90</b> (2 items){" "}
                    </p>
                    <p className="view_invoice">View Invoice</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters bg-white">
              <div className="col-md-3 card_img_div">
                <div className="block">
                  <div>
                    <p>
                      {" "}
                      Total Price: <b>£124.90</b> (2 items){" "}
                    </p>
                    <p className="view_invoice">View Invoice</p>
                  </div>
                </div>
                <img src={book} className="card-img" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body card_body">
                  <h5 className="card-title card_title">
                    Delivered
                    <span>
                      <i className="mr-2 far fa-calendar-alt"></i>March 12, 2021
                    </span>
                  </h5>
                  <p className="card-text">
                    <small>Original Item Replaced</small>
                  </p>
                  <div className="mt-3 mb-3">
                    <p className="card-text">
                      <b>Allah Knows All About Me</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <b>By LearningRoots.com</b>
                      </small>
                    </p>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">Quantity: 1</small>
                  </p>
                </div>
              </div>
              <div className="col-md-3 buttons flex-center flex-column">
                <button
                  className="rounded mb-2 b1"
                  onClick={() => setIsOpen(true)}
                >
                  <b>View Details</b>
                </button>
                <button className="rounded mb-2 b2">
                  <b>Write a Product Review</b>
                </button>
                <button className="rounded mb-2 b3">
                  <b>Buy Again</b>
                </button>
              </div>
              <div className="col-md-3 resp-btn">
                <div className="flex-btn ">
                  <button
                    className="rounded b1"
                    onClick={() => setIsOpen(true)}
                  >
                    <b>View Details</b>
                  </button>
                  <button className="rounded b3">
                    <b>Buy Again</b>
                  </button>
                </div>
                <div className="flex-btn ">
                  <button className="rounded mb-2 b2">
                    <b>Write a Product Review</b>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* d3 --> */}
          {/* <div className="card card_div border-0 mb-5">
            <div className="row top_row">
              <div className="col-12">
                <div className="flex-content">
                  <div className="flex order-date">
                    <p>
                      {" "}
                      <i className="mr-0 far fa-calendar-alt"></i> Date Placed:
                      March 10, 2021{" "}
                    </p>
                    <p>
                      &nbsp; &nbsp; Order #: <b> 4759304924950</b>{" "}
                    </p>
                  </div>
                  <div className="flex t-price">
                    <p>
                      {" "}
                      Total Price: <b>£124.90</b> (2 items){" "}
                    </p>
                    <p className="view_invoice">View Invoice</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters bg-white">
              <div className="col-md-3 card_img_div">
                <div className="block">
                  <div>
                    <p>
                      {" "}
                      Total Price: <b>£124.90</b> (2 items){" "}
                    </p>
                    <p className="view_invoice">View Invoice</p>
                  </div>
                </div>
                <img src={book} className="card-img" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body card_body">
                  <h5 className="card-title card_title">
                    Delivered
                    <span>
                      <i className="mr-2 far fa-calendar-alt"></i>March 12, 2021
                    </span>
                  </h5>
                  <p className="card-text">
                    <small>Original Item Replaced</small>
                  </p>
                  <div className="mt-3 mb-3">
                    <p className="card-text">
                      <b>Allah Knows All About Me</b>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <b>By LearningRoots.com</b>
                      </small>
                    </p>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">Quantity: 1</small>
                  </p>
                </div>
              </div>
              <div className="col-md-3 buttons flex-center flex-column">
                <button
                  className="rounded mb-2 b1"
                  onClick={() => setIsOpen(true)}
                >
                  <b>View Details</b>
                </button>
                <button className="rounded mb-2 b2">
                  <b>Write a Product Review</b>
                </button>
                <button className="rounded mb-2 b3">
                  <b>Buy Again</b>
                </button>
              </div>
              <div className="col-md-3 resp-btn">
                <div className="flex-btn ">
                  <button
                    className="rounded b1"
                    onClick={() => setIsOpen(true)}
                  >
                    <b>View Details</b>
                  </button>
                  <button className="rounded b3">
                    <b>Buy Again</b>
                  </button>
                </div>
                <div className="flex-btn ">
                  <button className="rounded mb-2 b2">
                    <b>Write a Product Review</b>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </DefaultLayout>
    </>
  );
};
export default AuthenticatedRoute(OrdersPage);
