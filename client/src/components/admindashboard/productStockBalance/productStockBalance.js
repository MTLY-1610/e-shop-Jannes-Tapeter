import React from "react";
import "./productStockBalance.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//Administratörer ska kunna uppdatera antalet produkter i lager från admin delen av sidan (G)

class ProductStockBalance extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>Här ska man kunna uppdatera antalet produkter i lager</h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductStockBalance;
