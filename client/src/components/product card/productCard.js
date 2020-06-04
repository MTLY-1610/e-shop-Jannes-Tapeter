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
            <p id="right">{this.props.brand}</p>
            <p id="right">{this.props.dimensions}</p>
          </div>
          <div id="description-col2">
            <p id="left">{this.props.designer}</p>
            <p id="left">{`${this.props.price} kr/m`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
