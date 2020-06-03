import React from "react";
import "./header.css";
import Link from "react-router-dom";
import icon from "./shopping-basket-light.png";
import { CustomerConsumer } from "../../context/customerContext";

class Header extends React.Component {
  state = {};
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <header>
            <div id="container-header">
              <div id="logo">
                Jannes <br /> Tapeter
              </div>
              <div id="container-right">
                {!customer.state.loggedInCustomer ? (
                  <div id="loggin">
                    <span>Registrera</span>
                    <span> Logga in </span>
                    <span id="">
                      <img className="basket" src={icon} alt="product" />
                    </span>
                  </div>
                ) : (
                  <div id="loggin">
                    <span>{customer.state.loggedInCustomer}</span>
                    <span onClick={customer.logoutCustomer}> Logga ut </span>
                    <span id="">
                      <img className="basket" src={icon} alt="product" />
                    </span>
                  </div>
                )}

                <div id="menu">
                  <span>Mönster</span>
                  <span>Foto</span>
                  <span>Barnrum</span>
                </div>
              </div>
            </div>
          </header>
        )}
      </CustomerConsumer>
    );
  }
}

export default Header;
