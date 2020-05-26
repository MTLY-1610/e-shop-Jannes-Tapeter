import React from "react";
import Header from "../header/header";
import LatestProducts from "../latestproductrow/latestProductRow";
import ChildrenProducts from "../childroomrow/childrenRow";
import BrandRow from "../brandrow/brandRow";
import Footer from "../footer/footer";

class Homepage extends React.Component {
  state = {};
  render() {
    return (
      <h1>
        <Header />
        <LatestProducts />
        <ChildrenProducts />
        <BrandRow />
        <Footer />
      </h1>
    );
  }
}

export default Homepage;
