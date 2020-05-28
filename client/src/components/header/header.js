import React from "react";
import "./header.css";
import Link from "react-router-dom";
import icon from './shopping-basket-light.png';

class Header extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <div id="container-header">
          <div id="logo"> 
            Jannes <br /> Tapeter
          </div>
          <div id="container-right">
            <div id="loggin"> 
              
            <span >Registrera</span><span > Logga in </span><span id=""><img className="basket" src={icon} alt="product" /></span>
              
            </div>
            <div id="menu"> 
              <span>Tapeter</span>
              <span>Barnrum</span>
              <span>Tillbehör</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
