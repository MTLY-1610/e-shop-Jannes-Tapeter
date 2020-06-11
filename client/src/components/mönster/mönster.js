import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MönsterRow from "./MönsterRow";
import "./mönster.css";

class Mönster extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <img className="hero" src={Hero} alt="hero" /> */}
        <MönsterRow />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Mönster;
