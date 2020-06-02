import React from "react";
import "./productCategory.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)

class ProductCategory extends React.Component {

  async componentDidMount() {
    const response = await fetch("http://localhost:5000/product");
    const responseData = await response.json();
    console.log(responseData)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>
            Här ska man kunna redigera vilka kategorier en produkt tillhör
          </h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductCategory;
