import React from "react";

export default function Specifications({ product }) {
  const { azoom_product_specifications } = product;
  const {
    isbn_13,
    publication_date,
    pages,
    dimensions,
    recommended_age,
    format,
  } = azoom_product_specifications;
  return (
    <div className="pro_specify_div collapse-wrapper">
      <div className="wrap-collabsible">
        <h2 className="sub_heading">Specifications</h2>
        <input id="specs-collapse" className="toggle" type="checkbox" />
        <label for="specs-collapse" className="lbl-toggle"></label>
        <div className="collapsible-content">
          <div className="content-inner">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td className="bg-light">ISBN-13</td>
                  <td className="bg-white">{isbn_13}</td>
                </tr>
                <tr>
                  <td className="bg-light">Publication date</td>
                  <td className="bg-white">{publication_date}</td>
                </tr>
                <tr>
                  <td className="bg-light">Pages</td>
                  <td className="bg-white">{pages}</td>
                </tr>
                <tr>
                  <td className="bg-light">Product dimensions</td>
                  <td className="bg-white">{dimensions}</td>
                </tr>
                <tr>
                  <td className="bg-light">Recommended Age</td>
                  <td className="bg-white">{recommended_age}</td>
                </tr>
                <tr>
                  <td className="bg-light">Format</td>
                  <td className="bg-white">{format}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
