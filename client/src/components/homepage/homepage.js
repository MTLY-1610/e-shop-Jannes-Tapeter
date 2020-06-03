import React from "react";
import Header from "../header/header";
import LatestProducts from "../latestproductrow/latestProductRow";
import ChildrenProducts from "../childroomrow/childrenRow";
import BrandRow from "../brandrow/brandRow";
import Footer from "../footer/footer";
import Hero from "./hero.jpeg";

import "./homepage.css";

class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <img className="hero" src={Hero} alt="hero" />
        <LatestProducts />
        <ChildrenProducts />
        <BrandRow />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Homepage;
