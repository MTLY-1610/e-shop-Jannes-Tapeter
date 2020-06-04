import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
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
              <Link to="/">
                <div id="logo">
                  Jannes <br /> Tapeter
                </div>
              </Link>
              <div id="container-right">
                {!customer.state.loggedInCustomer ? (
                  <div id="loggin">
                    <Link to="/register">
                      <span>Registrera</span>
                    </Link>
                    <Link to="/register">
                      <span>Logga in</span>
                    </Link>
                    <span id="">
                      <Link to="/register">
                        <img className="basket" src={icon} alt="product" />
                      </Link>
                    </span>
                  </div>
                ) : (
                  <div id="loggin">
                    <p>{customer.state.loggedInCustomer}</p>
                    <p onClick={customer.logoutCustomer}> Logga ut </p>
                    <span id="">
                      <Link to="/cart">
                        <img className="basket" src={icon} alt="product" />
                      </Link>
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