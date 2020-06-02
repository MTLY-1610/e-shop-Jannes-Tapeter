import React from "react";
import "./childrenRow.css";
import ProductCard from "../product card/productCard";

class ChildrenProducts extends React.Component {
  state = {};
  render() {
    return (
      <div id="component-container">
        <h1>Barnrum</h1>
        <div id="children-container">
          <div id="grid-children">
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

export default ChildrenProducts;
