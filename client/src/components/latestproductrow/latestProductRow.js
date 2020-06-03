import React from "react";
import ProductCard from "../product card/productCard";
import "./latestProductRow.css";
import { ProductConsumer } from "../../context/productContext";

class LatestProducts extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="component-container">
            <h1>Senaste produkter</h1>
            <div id="latest-container">
              <div id="grid-latest">
                {product.state.latestProducts.map((item) => (
                  <ProductCard
                    key={item._id}
                    img={item.url}
                    brand={item.brand}
                    dimensions={item.dimensions}
                    designer={item.designer}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default LatestProducts;
