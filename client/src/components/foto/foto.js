import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import FotoRow from "./FotoRow";
import "./foto.css";

class Foto extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <img className="hero" src={Hero} alt="hero" /> */}
        <FotoRow />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Foto;
