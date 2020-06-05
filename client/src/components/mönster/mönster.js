import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Hero from "../homepage/hero.jpeg";
import MönsterRow from "./MönsterRow";
import "./mönster.css";

class Mönster extends React.Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:5000/product");
    const responseData = await response.json();
    console.log(responseData);
  }
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
