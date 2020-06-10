import React from "react";
import ProductCard from "../product card/productCard";
import "./FotoRow.css";
import { ProductConsumer } from "../../context/productContext";
import { Link } from "react-router-dom";

class FotoRow extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="component-container">
            <h1>Foto</h1>
            <div id="latests-container">
              <div id="grid-latests">
                {product.state.allProducts.map(
                  (item) =>
                    item.category.includes("photo") && (
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

export default FotoRow;
