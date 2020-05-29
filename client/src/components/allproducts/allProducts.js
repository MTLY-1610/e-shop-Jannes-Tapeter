import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../homepage/hero.jpeg";
import "./allProducts.css";

class regularProducts extends React.Component {
  state = {};
  render() {
    return  (
    <React.Fragment> 
    <Header />
    <img className="hero" src={Hero} alt="hero" />
    
    <Footer />
  </React.Fragment>
    )
  }
}
      

export default regularProducts;