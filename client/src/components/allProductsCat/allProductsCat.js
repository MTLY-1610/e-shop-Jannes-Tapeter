import React from "react";
import ProductCard from "../product card/productCard";
import "./allProductsCat.css";

class AllProductsCat extends React.Component {
  state = {};
  render() {
    return (
      <div id="component-container">
        <h1>Category</h1>
        <div id="latest-container">
          <div id="grid-latest">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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

export default AllProductsCat;