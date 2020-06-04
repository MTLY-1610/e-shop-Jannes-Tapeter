import React from "react";
import "./productAddAndDelete.css";
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
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div id="content-container">
              <AddProduct />
              <h2>Alla produkter</h2>
              {product.state.allProducts.map((product) => (
                <div id="row-container" key={product._id}>
                  <h4>{product.price}</h4>
                </div>
              ))}
              <DeleteProductCard />
              <DeleteProductCard />
              <DeleteProductCard />
            </div>
            <Footer />
          </React.Fragment>
        )}
      </ProductConsumer>
    );
  }
}

export default ProductAddAndDelete;
