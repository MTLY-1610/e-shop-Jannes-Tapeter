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
              <h2>Kategori Mönster tapet</h2>
              <h2>Kategori Foto tapet</h2>
            <h2>Kategori Barnrum tapet</h2>
            <h2>Tapeter tillhörande flera kategorier</h2>
              {products.state.allProducts.map((product) => (
                <div id="product-card" key={product._id}>
                 <div className="product-info" edit-category-container> <img
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
                    <span>Beskrivning</span> {product.description}
                  </div>
                  <div>
                    <span>Kategori</span>
                    {product.category.map((category, index) => (
                      <div className="category-inline" key={index}>
                        {category === "pattern" && <>Mönster</>}
                        {category === "photo" && <>Foto</>}
                        {category === "children" && <>Barnrum</>}
                      </div>
                    ))}
                  </div>
                  </div>
                  <div className="edit-category-container">
                    <h4>Redigera denna produkts kategori</h4>
                    <FormControlLabel

control={<Checkbox name="patternCheckbox" color="default" />}
label="Mönster"
labelPlacement="start"
/>
<FormControlLabel

control={<Checkbox name="photoCheckbox" color="default" />}
label="Foto"
labelPlacement="start"
/>
<FormControlLabel

control={<Checkbox name="childCheckbox" color="default" />}
label="Barnrum"
labelPlacement="start"
/>
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
                            {`Är du säker på att du vill redigera "${this.state.productBrand}s" kategori?
              `}
                          </h1>
                          <Button
                            id="confirmationButton"
                            size="small"
                            variant="contained"
                            onClick={() => products.deleteProduct(product._id)}
                          >
                            Ja, redigera
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
                      Redigera kategori
                    </Button>
                  </div>
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
export default ProductCategory;
