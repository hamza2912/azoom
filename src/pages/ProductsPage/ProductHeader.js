import React from "react";
import SortingDropdown from "../../common/SortingDropdown";
import filter from "../../assets/images/icon_filter.png";

export const ProductHeader = ({
  // selectedSubHeading,
  totalProducts,
  setSideNavOpen,
}) => {
  return (
    <div>
      {/* <h1 className="main-heading">{selectedSubHeading}</h1> */}
      <div className="row">
        <p className="sec-desc col-12 col-md-8">
          The books in this section have been given a primary age range of 13+.
          There comes a point in a young life when the time is right to move on
          from the books and children’s authors they enjoyed as a child to
          reading books and authors that offer greater challenges as they grow
          up into adulthood.
          <small className="d-none d-md-block text-muted ">
            {totalProducts} Results
          </small>
        </p>
        <div className="col-12 col-md-4 d-none d-md-block">
          <SortingDropdown />
        </div>
        <div className="col-12 d-md-none results-filter-wrapper">
          <div>
            <span>{totalProducts} Results</span>
          </div>
          <div>
            <button
              className="btn filters-btn"
              onClick={() => setSideNavOpen(true)}
            >
              <img src={filter} />
              Sort a Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
