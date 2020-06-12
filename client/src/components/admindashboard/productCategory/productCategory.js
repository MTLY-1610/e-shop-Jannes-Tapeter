import React from "react";
import "./productCategory.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { Button, Modal, Checkbox, FormControlLabel } from "@material-ui/core";
import { ProductConsumer } from "../../../context/productContext";

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
//Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)

class ProductCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openConfirmationWindow: false,
      productBrand: "",
      patternChecked: false,
      photoChecked: false,
      childrenChecked: false,
      id: "",
    };
  }
  serverUrl = "http://localhost:5000/";

  removeProduct(id, brand) {
    this.setState({ productBrand: brand, openConfirmationWindow: true });
  }

  setId(id) {
    this.setState({ id: id });
  }

  getCategories(productCategory) {
    for (const product of productCategory) {
      if (product === "pattern") {
        this.setState({ patternChecked: true });
      }
      if (product === "photo") {
        this.setState({ photoChecked: true });
      }
      if (product === "children") {
        this.setState({ childrenChecked: true });
      }
    }
  }

  getCategoryList() {
    let categories = [];
    if (this.state.patternChecked) {
      categories.push("pattern");
    }
    if (this.state.photoChecked) {
      categories.push("photo");
    }
    if (this.state.childrenChecked) {
      categories.push("children");
    }
    return categories;
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
                <h3>Redigera kategorier:</h3>
                <div className="a-product-card-container">
                {products.state.allProducts.map((product) => (
                  <div id="a-product-card" key={product._id}>
                    <div className="a-product-info">
                      <img
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
                        <span>
                          Beskrivning<br></br>
                        </span>{" "}
                        {product.description}
                      </div>
                      <div className="a-category-inline">
                        <span>Kategori</span>
                        {product.category.map((category, index) => (
                          <div key={index}>
                            {category === "pattern" && <>Mönster</>}
                            {category === "photo" && <>Foto</>}
                            {category === "children" && <>Barnrum</>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="a-edit-category-container">
                      <Modal
                        open={this.state.openConfirmationWindow}
                        onClose={() =>
                          this.setState({
                            openConfirmationWindow: false,
                            patternChecked: false,
                            childrenChecked: false,
                            photoChecked: false,
                          })
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
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.patternChecked}
                                  name="patternCheckbox"
                                  color="default"
                                  onChange={() =>
                                    this.setState({
                                      patternChecked: !this.state
                                        .patternChecked,
                                    })
                                  }
                                />
                              }
                              label="Mönster"
                              labelPlacement="start"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="photoCheckbox"
                                  color="default"
                                  checked={this.state.photoChecked}
                                  onChange={() =>
                                    this.setState({
                                      photoChecked: !this.state.photoChecked,
                                    })
                                  }
                                />
                              }
                              checked={this.state.photoChecked}
                              label="Foto"
                              labelPlacement="start"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name="childCheckbox"
                                  color="default"
                                  checked={this.state.childrenChecked}
                                  onChange={() =>
                                    this.setState({
                                      childrenChecked: !this.state
                                        .childrenChecked,
                                    })
                                  }
                                />
                              }
                              label="Barnrum"
                              labelPlacement="start"
                            />
                            <div>
                              <Button
                                id="a-confirmationButton"
                                size="small"
                                variant="contained"
                                onClick={() => {
                                  products.editProduct(this.state.id, {
                                    category: this.getCategoryList(),
                                  });
                                  this.setState({
                                    openConfirmationWindow: false,
                                  });
                                }}
                              >
                                Spara
                              </Button>
                            </div>
                          </div>
                        }
                      </Modal>
                      <Button
                        id="a-adminButton"
                        size="small"
                        variant="contained"
                        onClick={() => {
                          this.removeProduct(product._id, product.brand);
                          this.getCategories(product.category);
                          this.setId(product._id);
                        }}
                      >
                        Redigera kategori
                      </Button>
                    </div>
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
export default ProductCategory;
