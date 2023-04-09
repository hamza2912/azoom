import React from "react";
import ReactStars from "react-rating-stars-component";
import user from "../../assets/images/icon_user.png";
import icontime from "../../assets/images/icon_time-grey.png";
import iconlike from "../../assets/images/icon_like.png";
import moment from "moment";

export default function ClientReview({ review }) {
  const { nickname, text, created_at, average_rating } = review;
  return (
    <div className="review-row row border-bottom">
      <div className="user_div col-lg-4">
        <div className="pt-1">
          <img src={user} />
        </div>
        <div>
          <h3>{nickname}</h3>
          <pre className="text-muted">London, GB</pre>
          <p>
            <i class="fas fa-chevron-down"></i>
            Verified Buyer
          </p>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="review-desc-wrapper justify-content-between">
          <div>
            <div className="flex">
              <div className="rating-stars rating-stars-wrapper">
                <ReactStars
                  count={5}
                  size={14}
                  value={((average_rating / 100) * 5).toFixed(1)}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star" />}
                  halfIcon={<i className="fa fa-star-half-alt" />}
                  filledIcon={<i className="fa fa-star" />}
                  activeColor="#000000"
                  color="black"
                />
              </div>
              <div className="date-wrapper">
                <img src={icontime} />
                <p className="date">
                  {" "}
                  {moment(new Date(created_at)).format("dd/mm/yy")}
                </p>
              </div>
            </div>
            <div>
              <p className="review-text">{text}</p>
            </div>
          </div>
          <div className="btn">
            <button>
              <img src={iconlike} />
              Helpful
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
