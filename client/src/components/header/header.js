import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CustomerConsumer } from "../../context/customerContext";
import { OrderConsumer } from "../../context/orderContext";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
class Header extends React.Component {
  state = {};
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <OrderConsumer>
            {(order) => (
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
                        <span id="myAccountIcon">
                          <Link to="/myaccount">
                          <AccountCircleOutlinedIcon />
                          </Link>
                        </span>
                        <span id="">
                          <Link to="/cart">
                          <ShoppingBasketOutlinedIcon />
                            {order.state.cart.length > 0 && (
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
                            )}
                          </Link>
                        </span>
                      </div>
                    ) : (
                      <div id="loggin">
                        <p>{customer.state.loggedInCustomer}</p>
                        <p
                          onClick={() => (
                            customer.logoutCustomer(), order.clearCart()
                          )}
                        >
                          Logga ut
                        </p>
                        <span id="">
                          <Link to="/cart">
                          <ShoppingBasketOutlinedIcon />
                            {order.state.cart.length > 0 && (
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
                            )}
                          </Link>
                        </span>
                      </div>
                    )}

                    <div id="menu">
                      <Link to="/mönster">
                        <span>Mönster</span>
                      </Link>
                      <Link to="/foto">
                        <span>Foto</span>
                      </Link>
                      <Link to="/barnrum">
                        <span>Barnrum</span>
                      </Link>
                    </div>
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
