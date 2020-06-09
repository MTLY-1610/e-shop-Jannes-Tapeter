import React from "react";
import ProductCard from "../product card/productCard";
import "./latestProductRow.css";
import { ProductConsumer } from "../../context/productContext";

class LatestProducts extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="components-container">
            <h1>Senaste produkter</h1>
            <div id="latests-container">
              <div id="grid-latests">
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
