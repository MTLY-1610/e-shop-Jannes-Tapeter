import React from "react";
import OrderCard from "./orderCard/orderCard.js";
import "./orderExport.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//Administratörer ska kunna se en lista på alla gjorda beställningar (G)
//Administratörer ska kunna markera beställningar som skickade (VG)

//TODO. Om checkboxen är icheckad så ska OrderCard lägga sig i shipped-order-container
class OrderExport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
        <h2>Ordrar som ska sändas</h2>
          <div id="not-shipped-order-container">
            <OrderCard />
          </div>
          <h2>Utsända ordrar</h2>
          <div id="shipped-order-container">
            <OrderCard />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default OrderExport;
