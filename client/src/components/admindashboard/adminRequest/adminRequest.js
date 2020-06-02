import React from "react";
import "./adminRequest.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

class AdminRequest extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>
            Här ska man kunna godkänna användare som har sänt in en förfrågan om
            att bli administratör
          </h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdminRequest;
