import React from "react";
import ProductCard from "../product card/productCard";
import "./barnrumRow.css";
import { ProductConsumer } from "../../context/productContext";
import { Link } from "react-router-dom";

class BarnrumRow extends React.Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="component-container">
            <h1>Mönster</h1>
            <div id="latests-container">
              <div id="grid-latests">
                {product.state.allProducts.map((item) => {
                  if (item.category.includes("pattern")) {
                    return (
                      <Link to={`${item._id}`}>
                        <ProductCard
                          key={item._id}
                          img={item.url}
                          brand={item.brand}
                          dimensions={item.dimensions}
                          designer={item.designer}
                          price={item.price}
                        />
                      </Link>
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
