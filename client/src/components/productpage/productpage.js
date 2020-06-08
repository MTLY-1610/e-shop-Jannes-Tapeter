import React from "react";
import "./productpage.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import SpecifikProduct from "./specifikProduct";

class ProductPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SpecifikProduct productId={this.props.match.params.ref} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductPage;
