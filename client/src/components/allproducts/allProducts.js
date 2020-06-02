import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../homepage/hero.jpeg";
import AllProductsCat from "../allProductsCat/allProductsCat";
import "./allProducts.css";

class regularProducts extends React.Component {
  state = {};
  render() {
    return  (
    <React.Fragment> 
    <Header />
    <img className="hero" src={Hero} alt="hero" />
    <AllProductsCat />
    <Footer />
  </React.Fragment>
    )
  }
}
      

export default regularProducts;