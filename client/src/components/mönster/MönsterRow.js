import React from "react";
import ProductCard from "../product card/productCard";
import "./MönsterRow.css";
import { ProductConsumer } from "../../context/productContext";
import { Link } from "react-router-dom";

class MönsterRow extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="component-container">
            <h1>Mönster</h1>
            <div id="latest-container">
              <div id="grid-latests">
                {product.state.allProducts.map(
                  (item) =>
                    item.category.includes("pattern") && (
                      <Link key={item._id} to={`${item._id}`}>
                        <ProductCard
                          onClick={() => console.log("hej")}
                          img={item.url}
                          brand={item.brand}
                          dimensions={item.dimensions}
                          designer={item.designer}
                          price={item.price}
                        />
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default MönsterRow;
