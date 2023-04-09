import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import productImg from "../../assets/images/small_2048x.png";
import { toast } from "react-toastify";
import { getProductsInfo } from "../../services/product";
import AddToCart from "../../common/AddToCart";

export default function FrequentlyBought() {
  const [recommendedProducts, setReceommendedProducts] = useState([]);

  useEffect(() => {
    new Splide("#frequently-bought-slider", {
      height: "20rem",
      cover: false,
      heightRatio: 0,
      arrows: true,
      perPage: 5,
      autoplay: true,
      type: "loop",
      interval: 300000,
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

  useEffect(() => {
    getRecommendedProducts();
  }, []);

  const getRecommendedProducts = async () => {
    try {
      let {
        products: { items },
      } = await getProductsInfo({
        recommended: { eq: 1 }, //todo the id should be dynamic
      });
      setReceommendedProducts(items);
      console.log("items", items);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="container mt-5 frequently-bought-wrapper">
      <h6 className="text-center shop-text mb-5 heading-text">
        Frequently Bought Together{" "}
      </h6>
      <div className="row">
        <div className="col-12">
          <div id="frequently-bought-slider" className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                {recommendedProducts.map((product) => (
                  <li className="splide__slide" key={product.id}>
                    <div className="product">
                      <div className="img-div">
                        <img
                          src={product.media_gallery[0]?.url || productImg}
                          alt={`product-img-${product.id}`}
                        />
                      </div>
                      <div className="text-center">
                        <AddToCart classNames={"btn add-btn"} item={product} />
                      </div>
                    </div>
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
