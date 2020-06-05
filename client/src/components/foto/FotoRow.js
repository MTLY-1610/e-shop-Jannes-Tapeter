import React from "react";
import ProductCard from "../product card/productCard";
import "./FotoRow.css";
import { ProductConsumer } from "../../context/productContext";

class FotoRow extends React.Component {
  state = {
    fotoProducts: [],
  };
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <div id="component-container">
            <h1>Foto</h1>
            <div id="latests-container">
              <div id="grid-latests">
                {product.state.allProducts.map((item) => {
                  console.log(item.category.includes("photo"));

                  if (item.category.includes("photo")) {
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

export default FotoRow;
