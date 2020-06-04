import React from "react";
import "./productAddAndDelete.css";
import { Button, Modal, FormHelperText } from "@material-ui/core";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import AddProduct from "./addProduct/addProduct";
//import DeleteProductCard from "./deleteProductCard/deleteProductCard";
import { ProductConsumer } from "../../../context/productContext";

//Administratörer ska kunna lägga till och ta bort produkter (VG)
/* category: [String],
quantity: Number,
url: String,
price: Number,
description: String,
brand: String,
designer: String,
ref: String,
dimensions: String,
date: Number, */

class ProductAddAndDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openConfirmationWindow: false,
      productBrand: "",
    };
  }
  serverUrl = "http://localhost:5000/";

  removeProduct(id, brand) {
    this.setState({ productBrand: brand, openConfirmationWindow: true });
  }

  render() {
    return (
      <ProductConsumer>
        {(products, category) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div id="content-container">
              <AddProduct />
              <h2>Alla produkter</h2>
              {products.state.allProducts.map((product) => (
                <div id="delete-product-card" key={product._id}>
                  <img
                    className="sample"
                    src={`${this.serverUrl}${product.url}`}
                    alt="product"
                  />
                  <div>
                    <span>Märke</span> {product.brand}
                  </div>
                  <div>
                    <span>Designer</span> {product.designer}
                  </div>
                  <div>
                    <span>Ref</span> {product.ref}
                  </div>
                  <div>
                    <span>Mått</span> {product.dimensions}
                  </div>
                  <div>
                    <span>Antal</span> {product.quantity} st
                  </div>
                  <div>
                    <span>Pris</span> {product.price}kr/st
                  </div>
                  <div>
                    <span>Kategori</span>
                    {product.category.map((category, index) => (
                      <div key={index}>{category}</div>
                    ))}
                  </div>
                  <div>
                    <span>Beskrivning</span> {product.description}
                  </div>
                  <Modal
                    open={this.state.openConfirmationWindow}
                    onClose={() =>
                      this.setState({ openConfirmationWindow: false })
                    }
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {
                      <div
                        style={{
                          background: "white",
                          alignItems: "center",
                          flexDirection: "column",
                          display: "flex",
                          padding: "2rem",
                        }}
                      >
                        <h1>
                          {`Är du säker på att du vill ta bort "${this.state.productBrand}" från
                  sortimentet`}
                        </h1>
                        <Button
                          id="confirmationButton"
                          size="small"
                          variant="contained"
                          onClick={() => products.deleteProduct(product._id)}
                        >
                          Ja, ta bort
                        </Button>
                      </div>
                    }
                  </Modal>
                  <Button
                    id="adminButton"
                    size="small"
                    variant="contained"
                    onClick={() =>
                      this.removeProduct(product._id, product.brand)
                    }
                  >
                    Ta bort produkt
                  </Button>
                </div>
              ))}
            </div>
            <Footer />
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default ProductAddAndDelete;
