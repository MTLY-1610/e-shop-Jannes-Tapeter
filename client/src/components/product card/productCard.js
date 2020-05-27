import React from "react";
import "./productcard.css";
import Link from "react-router-dom";
import sample from "./product-sample.png"

class ProductCard extends React.Component {
  state = {};
  render() {
    return (
      
      <div id="container-1">
          <div id="img">
          <img className="sample" src={sample} alt="product" />
          </div>
          
          <div id="description">
              <div id="description-col1" >
              <div id="right">NEW DAWN ROSE</div>
              <div id="right">300 cm</div>
              </div>
              <div id="description-col2">
              <div id="left">Borås Tapeter</div>
              <div id="left">5300 kr</div>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductCard;