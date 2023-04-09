import React from "react";
import { calculateAvg, calculateOverallReviewRatings } from "../../utils";

export const RatingProgress = ({ rating = [] }) => {
  const overallPercentage = calculateAvg(
    calculateOverallReviewRatings(rating),
    rating?.length
  );

  return (
    <div
      class="progress-bar"
      role="progressbar"
      style={{
        width: `${overallPercentage || "0"}%`,
      }}
      aria-valuenow={overallPercentage || 0}
    ></div>
  );
};
