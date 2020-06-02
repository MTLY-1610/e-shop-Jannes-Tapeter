import React from "react";
import "./productAddAndDelete.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//Administratörer ska kunna lägga till och ta bort produkter (VG)

class ProductAddAndDelete extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>Här ska man kunna lägga till och ta bort produkter</h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductAddAndDelete;
