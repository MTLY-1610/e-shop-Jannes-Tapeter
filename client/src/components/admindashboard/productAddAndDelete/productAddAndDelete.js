import React from "react";
import "./productAddAndDelete.css";
import { Button, Modal } from "@material-ui/core";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import AddProduct from "./addProduct/addProduct";
import { ProductConsumer } from "../../../context/productContext";

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
            <div className="a-content-container">
              <Sidebar />
              <div className="a-child-content-container">
                <h3>Lägg till en produkt:</h3>
                <AddProduct />
                <h3>Alla produkter:</h3>
                <div className="a-delete-product-card-container">
                  {products.state.allProducts.map((product) => (
                    <div id="a-delete-product-card" key={product._id}>
                      <div><img
                        className="a-sample"
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
                          <div key={index}>
                            {category === "pattern" && <>Mönster</>}
                            {category === "photo" && <>Foto</>}
                            {category === "children" && <>Barnrum</>}
                          </div>
                        ))}
                      </div>
                      <div>
                        <span>
                          Beskrivning<br></br>
                        </span>{" "}
                        {product.description}
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
                              id="a-confirmationButton"
                              size="small"
                              variant="contained"
                              onClick={() =>
                                products.deleteProduct(product._id)
                              }
                            >
                              Ja, ta bort
                            </Button>
                          </div>
                        }
                      </Modal></div>
                      <div><Button
                        id="a-adminButton"
                        size="small"
                        variant="contained"
                        onClick={() =>
                          this.removeProduct(product._id, product.brand)
                        }
                      >
                        Ta bort produkt
                      </Button></div>
                    </div>
                  ))}
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

export default ProductAddAndDelete;
