import React from "react";
import ProductCard from "../product card/productCard";
import "./barnrumRow.css";
import { ProductConsumer } from "../../context/productContext";

class BarnrumRow extends React.Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="component-container">
            <h1>Mönster</h1>
            <div id="latest-container">
              <div id="grid-latest">
                {product.state.allProducts.map((item) => {
                  if (item.category.includes("pattern")) {
                    return (
                      <ProductCard
                        key={item._id}
                        img={item.url}
                        brand={item.brand}
                        dimensions={item.dimensions}
                        designer={item.designer}
                        price={item.price}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default BarnrumRow;
