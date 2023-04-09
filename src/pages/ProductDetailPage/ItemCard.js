import React from "react";
import ReactStars from "react-rating-stars-component";
import { calculateAvg, calculateRatings } from "../../utils";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  let length = item.reviews?.items.length;
  let disPrice = item.price_range?.minimum_price?.regular_price?.value;
  let percentage = calculateAvg(
    calculateRatings(item.reviews?.items),
    length
  ).toFixed(1);
  const {
    azoom_product_specifications: { publisher },
  } = item;

  const { name, id, media_gallery } = item;

  return (
    <div className="item-card">
      <div className="img-div">
        <img src={media_gallery[0]?.url} alt="product-img" />
        <div className="label sale">Sale</div>
      </div>
      <div className="current-item-tag">Current Item</div>
      <div className="card-body">
        <div className="prod-name">
          <p className="name">{name}</p>
          <p className="writer">By {publisher}</p>
        </div>
        <p className="price">£{disPrice}</p>
        <div className="rating-stars rating-stars-wrapper">
          <ReactStars
            count={5}
            size={15}
            value={percentage}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
            filledIcon={<i className="fa fa-star" />}
            activeColor="#000000"
            color="black"
          />
          <span className="recently-rated">{percentage}</span>
          <span className="item-name">{name}</span>
        </div>
      </div>
      <div className="card-action">
        <button className="btn add-btn ">Add to Basket</button>
        <Link to={`/productDetail/${id}`} className="details-link">
          See Details
        </Link>
      </div>
    </div>
  );
};
export default ItemCard;
