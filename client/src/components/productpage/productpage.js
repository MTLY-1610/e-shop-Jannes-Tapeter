import React from "react";
import "./productpage.css"
import Link from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import sample from "./product-sample.png";
import logo from "./brand-sample.png";



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
                  alt="product"/>
            
          </div>
          <div id="desc-container">
            <div id="brand-row">
              <div id="brand-container">
                <img
                    className="logo"
                    src={logo}
                    alt="brand"
                  />
                </div>
            </div>
            <div id="specs-row">
            
            <div id="specs-col1">
              <div id="model">B. D. 7</div>
              <div id="ref">réf: 88666</div>
            </div>
            <div id="specs-col2">
              <div id="price"> 8000 kr</div>
            </div>
            
            </div>
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
