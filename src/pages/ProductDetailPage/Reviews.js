import React, { useState } from "react";
import search from "../../assets/images/icon_search.png";
import SortingDropdown from "../../common/SortingDropdown";
import ClientReview from "./ClientReview";

const Reviews = ({ reviews }) => {
  const [productReviews] = useState(reviews.items);
  return (
    <>
      <div className="container reviews-wrapper">
        <div className="row">
          <div className="col-12">
            <p>Show reviews that mention</p>
            <div className="reviews-header">
              <div className="search-wrapper">
                <div class="input-groups">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search Reviews"
                  />
                  <div class="input-group-append">
                    <img src={search} />
                  </div>
                </div>
              </div>
              <SortingDropdown />
            </div>
            <p>Showing 1-2 of {productReviews?.length || 0} reviews.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="client-reviews-wrapper shadow-sm">
          {productReviews?.map((review) => (
            <ClientReview review={review} />
          ))}
        </div>
      </div>
      <p className="review-show_more_filters">Show 10 More Reviews</p>
      <div className="more-reviews">
        {productReviews.length > 10 && (
          <p className="show_reviews">
            Show 10 More Reviews
            <i class="fas fa-chevron-down"></i>
          </p>
        )}
      </div>
    </>
  );
};
export default Reviews;
