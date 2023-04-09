export const calculateRatings = items => {
  console.log('item type', typeof items);
  return items.reduce(
    (acc, currentVal) => acc + (currentVal.average_rating / 100) * 5,
    0
  );
};

export const calculateAvg = (sum, total) => {
  return sum / total || 0;
};

export const groupBy = (reviews, key) => {
  // todo must improvise the logic
  return reviews.reduce((acc, ratings) => {
    return ratings.ratings_breakdown.map(rating => {
      const property = rating[key];
      acc[property] = acc[property] || [];
      acc[property].push(rating);
      return acc;
    });
  }, {});
};

export const calculateOverallReviewRatings = items => {
  return items.reduce(
    (acc, currentVal) => acc + (parseInt(currentVal.value) / 5) * 100,
    0
  );
};
