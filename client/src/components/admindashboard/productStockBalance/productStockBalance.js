import React from "react";
import "./productStockBalance.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { ProductConsumer } from "../../../context/productContext";

//Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)

class ProductStockBalance extends React.Component {
  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div className="qunatity-container">
              <h3>Lager saldo:</h3>
              {product.state.allProducts.map(
                (product) =>
                  (
                    <div className="card-container" key={product._id}>
                      <img
                        className="sample"
                        src={`${this.serverUrl}${product.url}`}
                        alt="product"
                      />
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
