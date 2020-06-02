import React from "react";
import "./welcomeAdmin.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

class WelcomeAdmin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>Välkommen Admin</h3>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default WelcomeAdmin;
