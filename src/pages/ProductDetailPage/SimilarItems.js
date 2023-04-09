import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import ItemCard from "./ItemCard";

export default function SimilarItems({ relatedProducts }) {
  useEffect(() => {
    new Splide("#similar-items-slider", {
      height: "20rem",
      cover: false,
      heightRatio: 0,
      arrows: true,
      perPage: 5,
      type: "loop",
      interval: 3000,
      pagination: false,
      gap: 20,
      breakpoints: {
        992: {
          perPage: 3,
        },
        768: {
          perPage: 2,
          pagination: true,
        },
      },
    }).mount();
  });
  return (
    <div className="container mt-5 similar-items-wrapper">
      <h6 className="text-center shop-text mb-5">Compare Similar Items</h6>
      <div className="row">
        <div className="col-12 products-div">
          <div id="similar-items-slider" className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                {relatedProducts.map((product, i) => (
                  <li key={i} className="splide__slide">
                    <ItemCard item={product} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
