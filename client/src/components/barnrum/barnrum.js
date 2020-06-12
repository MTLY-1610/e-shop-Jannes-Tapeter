import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BarnrumRow from "./barnrumRow";
import "./barnrum.css";

class Barnrum extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <img className="hero" src={Hero} alt="hero" /> */}
        <BarnrumRow />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Barnrum;
