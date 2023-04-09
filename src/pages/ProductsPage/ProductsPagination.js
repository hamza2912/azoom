import React from "react";
import rightarrow from "../../assets/images/arrow_right-long.png";
import leftarrow from "../../assets/images/arrow_left-long.png";
import DropDown from "../../assets/images/dropdown.png";

export const ProductsPagination = () => {
  return (
    <div className="flex">
      <div class="pagination">
        <div className="arrow-div mr-3">
          <a href="#">
            <img src={leftarrow} />
          </a>
        </div>
        <a href="#">1</a>
        <a className="active-no" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <div className="arrow-div ml-3">
          <a href="#">
            <img src={rightarrow} />
          </a>
        </div>
      </div>
      <div className="items-per-page-wrapper">
        <form>
        <div className="btn_div">
            <div className="dropdown sortingDropdown">
              <button
                className="dropdowns dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="rotate180deg" src={DropDown} />
                <p>Items Per Page</p>
                <small>1</small>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <select>
            <option>Items Per Page</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select> */}
        </form>
      </div>
    </div>
  );
};
