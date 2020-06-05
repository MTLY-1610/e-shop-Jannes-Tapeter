import React from "react";
import "./productpage.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import SpecifikProduct from "./specifikProduct";
import { ProductConsumer } from "../../context/productContext";

class ProductPage extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(product) => {
          const correctItem = product.state.allProducts.filter(
            (item) => item._id === this.props.match.params.ref
          );
          return (
            <React.Fragment>
              <Header />
              <SpecifikProduct item={correctItem} />
              <Footer />
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductPage;
