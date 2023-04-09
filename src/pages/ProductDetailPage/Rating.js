import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import * as routes from '../../routePaths';
import { calculateAvg, calculateRatings } from '../../utils';
import { groupBy } from '../../utils/index';
import { RatingProgress } from './RatingProgress';
import { useNavigate } from 'react-router-dom';

export default function Rating({ product }) {
  const navigate = useNavigate();
  const length = product?.reviews?.items.length;
  let percentage,
    accumalativeRatings = 0;
  if (length > 0) {
    percentage = calculateAvg(
      calculateRatings(product.reviews?.items),
      length
    ).toFixed(1);

    accumalativeRatings = groupBy(product.reviews?.items, 'value');
    if (accumalativeRatings[0]) {
      accumalativeRatings = accumalativeRatings[0][0];
    }
  }

  const handleClick = () => {
    navigate(routes.reviewProduct, { state: { product: product } });
  };

  return (
    <div className="container rating-wrapper ">
      <div className="row">
        <div className="col-12">
          <h3>Ratings & Reviews</h3>
        </div>
      </div>
      <div className="rating-box">
        <div className="row">
          <div className="col-lg-4 col-md-4 ratings">
            <h1>{percentage}</h1>
            <div className="rating-stars rating-stars-wrapper">
              <ReactStars
                count={5}
                size={16}
                value={percentage}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star" />}
                halfIcon={<i className="fa fa-star-half-alt" />}
                filledIcon={<i className="fa fa-star" />}
                activeColor="#000000"
                color="black"
              />
            </div>
            <pre>{length} Reviews</pre>
          </div>
          <div className="col-lg-4 col-md-4">
            {[...Array(5)].map((e, i) => (
              <div className="progress_div">
                <pre>{i + 1}</pre>
                <span className="fa fa-star unchecked"></span>

                <div class="progress">
                  <RatingProgress rating={accumalativeRatings[i + 1] || []} />
                </div>
                <pre>{accumalativeRatings[i + 1]?.length || 0}</pre>
              </div>
            ))}
          </div>
          <div className="share col-lg-4 col-md-4">
            <p>Share your thoughts with our customers</p>
            <button onClick={handleClick}>Write a Review</button>
          </div>
        </div>
      </div>
    </div>
  );
}
