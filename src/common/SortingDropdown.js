import React from "react";
import DropDown from "../assets/images/dropdown.png";

const SortingDropdown = () => {
	return (
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
					<p>Sort By</p>
					<small>Recommended</small>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li>
						<a className="dropdown-item" href="#">
							Ascending
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Descending
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default SortingDropdown;
