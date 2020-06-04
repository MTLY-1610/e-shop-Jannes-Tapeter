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
                      <span class="quantity">Namn: {product.ref}</span>
                      <span class="quantity">Pris: {product.price}kr/st</span>
                      {/* <span class="quantity">Antal: {product.quantity}</span> */}
                      <div>
                        <label for="quantity">Antal: </label>
                        <input type="number" id="quantity" name="quantity" value={product.quantity} min="1" max="1000"></input>
                      </div>
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
