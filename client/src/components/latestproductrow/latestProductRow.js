import React from "react";
import ProductCard from "../product card/productCard";
import "./latestProductRow.css";
import { ProductConsumer } from "../../context/productContext";
import { Link } from "react-router-dom";
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
                  <Link key={item._id} to={`${item._id}`}>
                    <ProductCard
                      key={item._id}
                      img={item.url}
                      brand={item.brand}
                      dimensions={item.dimensions}
                      designer={item.designer}
                      price={item.price}
                    />
                  </Link>
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
