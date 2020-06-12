import React from "react";
import "./productStockBalance.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { ProductConsumer } from "../../../context/productContext";
import { Button, Modal } from "@material-ui/core";
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
            <div className="a-content-container">
        <Sidebar />
        <div className="a-child-content-container">


              <h3>Produkters Lagersaldo:</h3>
              <div className="a-quantity-card-container">
              {products.state.allProducts.map(
                (product) =>
                  product.quantity <= 10 && (
                    <div className="a-quantity-card" key={product._id}>
                      <img
                        className="a-sample"
                        src={`${this.serverUrl}${product.url}`}
                        alt="product"
                      />
                      <div className="a-quantity"><span>Namn </span>{product.ref}</div>
                      <div className="a-quantity"><span>
                        Pris </span>{product.price}kr/st
                      </div>
                      {/* <span class="quantity">Antal: {product.quantity}</span> */}
                      <div className="a-quantity">
                        <label htmlFor="quantity">Antal </label>
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
                      <Button
                      id="a-adminButton"
                      size="small"
                      variant="contained"
                        onClick={() =>
                          products.editProduct(product._id, {
                            quantity: this.state.quantity,
                          })
                        }
                      >
                        Uppdatera antal
                      </Button>
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
            </div>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default ProductStockBalance;
