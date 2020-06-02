import React from "react";
import "./orderExport.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//Administratörer ska kunna se en lista på alla gjorda beställningar (G)
//Administratörer ska kunna markera beställningar som skickade (VG)

class OrderExport extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>
            Här ska man kunna se alla ordrar och markera dom som är skickade
          </h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default OrderExport;
