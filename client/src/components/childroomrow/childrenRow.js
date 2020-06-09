import React from "react";
import "./childrenRow.css";
import ProductCard from "../product card/productCard";
import { ProductConsumer } from "../../context/productContext";
import { Link } from "react-router-dom";

class ChildrenProducts extends React.Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="child-component-container">
            <h1>Barnrum</h1>
            <div id="childrens-container">
              <div id="grid-children">
                {product.state.childrenProducts.map((item) => (
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

export default ChildrenProducts;
