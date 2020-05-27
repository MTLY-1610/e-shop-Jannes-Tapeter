import React from "react";
import ProductCard from "../product card/productCard"
import "./latestProductRow.css";

class LatestProducts extends React.Component {
  state = {};
  render() {
    return (
      <div id="component-container">
        
        <h1>Senaste produkter</h1>
      <div id="container">
        <div id="grid-latest">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </div>
     </div>
    );
  }
}

export default LatestProducts;
