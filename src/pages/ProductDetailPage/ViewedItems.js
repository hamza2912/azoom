import React from 'react';
import ReactStars from "react-rating-stars-component";
import prodimg from '../../assets/images/touch-and-feel_5000x.png';

export default function ViewedItems() {
    return (
        <div className="container viewed-items-wrapper">
            <h2>Customers Also Viewed</h2>
            <div class="row product-card">
                <div class="card">
                    <div class="img_div">
                        <img src={prodimg} />
                        <div className="product-action">
                            <button class="basket_btn">Add to Basket</button>
                            <button class="quickview_btn">Quick view</button>
                        </div>
                    </div>
                    <div className="pl-3 pt-2 pr-1">
                        <p class="product_name">My Touch and Feel Alif Baa</p>
                        <p className="text-muted">By Azizah Orin</p>
                        <h3 class="price">£17.53</h3>
                        <div className="rating-stars rating-stars-wrapper">
                            <ReactStars
                                count={5}
                                size={15}
                                value={4.5}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" />}
                                filledIcon={<i className="fa fa-star" />}
                                activeColor="#000000"
                                color="black"
                            />
                            <span className="products-rating-avg">4.5</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="img_div img_div1">
                        <img src={prodimg} />
                        <div className="product-action">
                            <button class="basket_btn">Add to Basket</button>
                            <button class="quickview_btn">Quick view</button>
                        </div>
                    </div>
                    <div className="pl-3 pt-2 pr-1">
                        <p class="product_name">My Touch and Feel Alif Baa</p>
                        <p className="text-muted">By Azizah Orin</p>
                        <h3 class="price">£17.53</h3>
                        <div className="rating-stars rating-stars-wrapper">
                            <ReactStars
                                count={5}
                                size={15}
                                value={4.5}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" />}
                                filledIcon={<i className="fa fa-star" />}
                                activeColor="#000000"
                                color="black"
                            />
                            <span className="products-rating-avg">4.5</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="img_div img_div1">
                        <img src={prodimg} />
                        <div className="product-action">
                            <button class="basket_btn">Add to Basket</button>
                            <button class="quickview_btn">Quick view</button>
                        </div>
                    </div>
                    <div className="pl-3 pt-2 pr-1">
                        <p class="product_name">My Touch and Feel Alif Baa</p>
                        <p className="text-muted">By Azizah Orin</p>
                        <h3 class="price">£17.53</h3>
                        <div className="rating-stars rating-stars-wrapper">
                            <ReactStars
                                count={5}
                                size={15}
                                value={4.5}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" />}
                                filledIcon={<i className="fa fa-star" />}
                                activeColor="#000000"
                                color="black"
                            />
                            <span className="products-rating-avg">4.5</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="img_div img_div1">
                        <img src={prodimg} />
                        <div className="product-action">
                            <button class="basket_btn">Add to Basket</button>
                            <button class="quickview_btn">Quick view</button>
                        </div>
                    </div>
                    <div className="pl-3 pt-2 pr-1">
                        <p class="product_name">My Touch and Feel Alif Baa</p>
                        <p className="text-muted">By Azizah Orin</p>
                        <h3 class="price">£17.53</h3>
                        <div className="rating-stars rating-stars-wrapper">
                            <ReactStars
                                count={5}
                                size={15}
                                value={4.5}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" />}
                                filledIcon={<i className="fa fa-star" />}
                                activeColor="#000000"
                                color="black"
                            />
                            <span className="products-rating-avg">4.5</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="img_div img_div1">
                        <img src={prodimg} />
                        <div className="product-action">
                            <button class="basket_btn">Add to Basket</button>
                            <button class="quickview_btn">Quick view</button>
                        </div>
                    </div>
                    <div className="pl-3 pt-2 pr-1">
                        <p class="product_name">My Touch and Feel Alif Baa</p>
                        <p className="text-muted">By Azizah Orin</p>
                        <h3 class="price">£17.53</h3>
                        <div className="rating-stars rating-stars-wrapper">
                            <ReactStars
                                count={5}
                                size={15}
                                value={4.5}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star" />}
                                halfIcon={<i className="fa fa-star-half-alt" />}
                                filledIcon={<i className="fa fa-star" />}
                                activeColor="#000000"
                                color="black"
                            />
                            <span className="products-rating-avg">4.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
