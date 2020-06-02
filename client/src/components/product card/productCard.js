import React from "react";
import "./productcard.css";
import Link from "react-router-dom";
import sample from "./product-sample.png";

class ProductCard extends React.Component {
  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <div id="container-1">
        <div id="img">
          {this.props.img && (
            <img
              className="sample"
              src={`${this.serverUrl}${this.props.img}`}
              alt="product"
            />
          )}
        </div>

        <div id="description">
          <div id="description-col1">
            <div id="right">{this.props.brand}</div>
            <div id="right">{this.props.dimensions}</div>
          </div>
          <div id="description-col2">
            <div id="left">{this.props.designer}</div>
            <div id="left">{this.props.price}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
