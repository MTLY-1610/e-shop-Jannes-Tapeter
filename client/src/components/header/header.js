import React from "react";
import "./header.css";
import Link from "react-router-dom";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <header>
          <h1 id="header">
            Jannes
            <br /> Tapeter
          </h1>
          <div id="navbar">
            <h5>
              Registrera / Logga in <span id="shoppingbag-logo">X</span>
            </h5>
            <ul>
              <li>Tapeter</li>
              <li>Barnrum</li>
              <li>Tillbehör</li>
            </ul>
          </div>
      </header>
    );
  }
}

export default Header;
