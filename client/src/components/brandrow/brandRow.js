import React from "react";
import "./brandRow.css";
import brand1 from "./Brand-sample.png"
import brand2 from "./Brand2-sample.png"
import brand3 from "./Brand3-sample.png"
import brand4 from "./Brand4-sample.png"
import brand5 from "./Brand5-sample.png"

class BrandRow extends React.Component {
  render() {
    return (
      <div id="brand-grid">
        <img className="brand" src={brand1} alt="brand 1" />
        <img className="brand" src={brand2} alt="brand 1" />
        <img className="brand" src={brand3} alt="brand 1" />
        <img className="brand" src={brand4} alt="brand 1" />
        <img className="brand" src={brand5} alt="brand 1" />
      </div>
    );
  }
}

export default BrandRow;
