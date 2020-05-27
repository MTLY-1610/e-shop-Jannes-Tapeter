import React from "react";
import ProductCard from "../product card/productCard"
import "./latestProductRow.css";

class LatestProducts extends React.Component {
  state = {};
  render() {
    return (
      <section>
        <div id="container">
        <h1>Senaste produkter</h1>
        <div id="grid-latest">
          <ProductCard />
        </div>
        </div>
      </section>
    );
  }
}

export default LatestProducts;
