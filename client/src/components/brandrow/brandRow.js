import React from "react";
import "./brandRow.css";
import brand1 from "./Brand-sample.png"

class BrandRow extends React.Component {
  render() {
    return (
      <div id="brand-grid">
        <img className="brand" src={brand1} alt="brand 1" />
        <img className="brand" src={brand1} alt="brand 1" />
        <img className="brand" src={brand1} alt="brand 1" />
        <img className="brand" src={brand1} alt="brand 1" />
        <img className="brand" src={brand1} alt="brand 1" />
      </div>
    );
  }
}

export default BrandRow;
