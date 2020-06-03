import React from "react";
import "./productStockBalance.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { ProductConsumer } from "../../../context/productContext";

//Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)

class ProductStockBalance extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div id="content-container">
              <h3>Lager saldo:</h3>
              {product.state.allProducts.map(
                (product) =>
                  (
                    <div key={product._id}>
                      <img></img>
                      <h4>Namn: {product.ref}</h4>
                      <h5>Antal: {product.quantity}</h5>
                    </div>
                  )
              )}
            </div>
            <Footer />
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default ProductStockBalance;
