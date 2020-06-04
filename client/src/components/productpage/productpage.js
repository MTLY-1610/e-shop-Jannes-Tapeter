import React from "react";
import "./productpage.css"
import Link from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import sample from "./product-sample.png";



class ProductPage extends React.Component {
  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <React.Fragment> 
      <Header />
      <div id="pp-container">
          <div id="img-container">
            <img
                  className="sample"
                  src={sample}
                  alt="product"
                />
            
          </div>
          <div id="desc-container">
            <div id="brand-row"></div>
            <div id="basics-row"></div>
            <div id="specs-row"></div>
            <div id="descr-row"></div>
            <div id="action-row"></div>
          </div>
      </div>
     

      <Footer />
    </React.Fragment>
      );
  }
}

export default ProductPage;
