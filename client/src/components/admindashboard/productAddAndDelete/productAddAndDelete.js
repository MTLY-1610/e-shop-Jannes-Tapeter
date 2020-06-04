import React from "react";
import "./productAddAndDelete.css";
import { Button } from "@material-ui/core";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import AddProduct from "./addProduct/addProduct";
import DeleteProductCard from "./deleteProductCard/deleteProductCard";
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
  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <ProductConsumer>
        {(product, category) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div id="content-container">
              <AddProduct />
              <h2>Alla produkter</h2>
              {product.state.allProducts.map((product) => (
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
                    {product.category.map((category) => (
                    <div>{category}</div>))}
                  </div>
                  <div>
                    <span>Beskrivning</span> {product.description}
                  </div>
                  <Button id="adminButton" size="small" variant="contained">
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
