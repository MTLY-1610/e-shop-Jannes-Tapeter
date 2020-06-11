import React from "react";
import "./productStockBalance.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { ProductConsumer } from "../../../context/productContext";

//Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)

class ProductStockBalance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <ProductConsumer>
        {(products) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div className="a-quantity-container">
              <h3>Lager saldo:</h3>
              {products.state.allProducts.map(
                (product) =>
                  product.quantity <= 10 && (
                    <div className="a-card-container" key={product._id}>
                      <img
                        className="a-sample"
                        src={`${this.serverUrl}${product.url}`}
                        alt="product"
                      />
                      <span className="a-quantity">Namn: {product.ref}</span>
                      <span className="a-quantity">
                        Pris: {product.price}kr/st
                      </span>
                      {/* <span class="quantity">Antal: {product.quantity}</span> */}
                      <div>
                        <label htmlFor="quantity">Antal: </label>
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          placeholder={product.quantity}
                          min={product.quantity}
                          max="1000"
                          onChange={(event) =>
                            this.setState({ quantity: event.target.value })
                          }
                        ></input>
                      </div>
                      <button
                        onClick={() =>
                          products.editProduct(product._id, {
                            quantity: this.state.quantity,
                          })
                        }
                      >
                        Uppdatera antal
                      </button>
                      {products.state.updateQuantity.success &&
                        product.quantity <= 10 &&
                        product._id === products.state.updateQuantity.id && (
                          <p
                            style={{ color: "green", fontSize: "0.9rem" }}
                          >{`Antalet uppdaterat till ${product.quantity}`}</p>
                        )}
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
