import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CustomerConsumer } from "../../context/customerContext";
import { OrderConsumer } from "../../context/orderContext";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
class Header extends React.Component {
  hamburgermenu = () => {
    const menu = document.getElementById("container-right");
    menu.classList.toggle("open");
    if (menu.classList.open) {
      document.getElementById("header-logo").style.display = "none";
      console.log("hej");
    }
  };
  state = {};
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <OrderConsumer>
            {(order) => (
              <header>
                <div id="container-header">
                  <div id="header-logo">
                    <Link to="/">
                      Jannes <br /> Tapeter
                    </Link>
                  </div>
                  <div onClick={this.hamburgermenu} className="hamburger">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                  </div>
                  <div id="container-right">
                    {!customer.state.loggedInCustomer ? (
                      <ul id="loggin">
                        <li>
                          <Link to="/register">Registrera</Link>
                        </li>
                        <li>
                          <Link to="/register">Logga in </Link>
                        </li>

                        <ShoppingBasketOutlinedIcon />
                        {order.state.cart.length > 0 && (
                          <Link to="/cart">
                            <span
                              style={{
                                marginLeft: "0.5rem",
                                padding: "0.2rem",
                                backgroundColor: "#3F51B5",
                                color: "white",
                              }}
                            >
                              {order.state.cart.length}
                            </span>
                          </Link>
                        )}
                      </ul>
                    ) : (
                      <ul id="loggin">
                        {customer.state.customerRole === "admin" && (
                          <li>
                            <Link to="/admin/welcome">Admin</Link>
                          </li>
                        )}
                        <li id="myAccountIcon">
                          <Link to="/myaccount">
                            <AccountCircleOutlinedIcon />
                          </Link>
                        </li>
                        <li>{customer.state.loggedInCustomer}</li>
                        <li
                          onClick={() => (
                            customer.logoutCustomer(), order.clearCart()
                          )}
                        >
                          Logga ut
                        </li>

                        <ShoppingBasketOutlinedIcon />
                        {order.state.cart.length > 0 && (
                          <Link to="/cart">
                            <span
                              style={{
                                marginLeft: "0.5rem",
                                padding: "0.2rem",
                                backgroundColor: "#3F51B5",
                                color: "white",
                              }}
                            >
                              {order.state.cart.length}
                            </span>
                          </Link>
                        )}
                      </ul>
                    )}

                    <div className="line"></div>

                    <ul id="menu">
                      <li>
                        <Link to="/mönster">Mönster</Link>
                      </li>
                      <li>
                        <Link to="/foto">Foto</Link>
                      </li>
                      <li>
                        <Link to="/barnrum">Barnrum</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            )}
          </OrderConsumer>
        )}
      </CustomerConsumer>
    );
  }
}

export default Header;
