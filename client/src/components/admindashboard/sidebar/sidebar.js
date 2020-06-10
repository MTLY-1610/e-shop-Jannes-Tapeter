import React from "react";
import "./sidebar.css";
import { CustomerConsumer } from "../../../context/customerContext";
import { ProductConsumer } from "../../../context/productContext";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

//<div id="container-sidebar-admin">  path="/admin/welcome"
//<h5>Uppdatera lagersaldon</h5> path="/admin/productStockbalance"
//<h5>Redigera kategorier</h5> path="/admin/productCategory"
//<h5>Lägg till / Ta bort</h5> path="/admin/productEdit"
//<h5>Uppdatera exporter</h5> path="/admin/orderExport"
//<h5>Nya förfrågningar</h5> path="admin/adminRequest"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productClicked: false,
      orderClicked: false,
      adminClicked: false,
    };
  }
  render() {
    return (
      <ProductConsumer>
        {(product) => (
          <CustomerConsumer>
            {(customer) => (
              <div onClick={this.click} id="container-sidebar">
                <div id="container-sidebar-admin">
                  <h5>{`${customer.state.loggedInCustomer}, ${customer.state.customerRole}`}</h5>
                </div>
                <div className="products-sidebar">
                  <h4
                    className="menu-header"
                    onClick={() => {
                      if (this.state.productClicked == false) {
                        const products = document.querySelector(
                          ".dropdown-content-products"
                        );

                        products.classList.toggle("show");
                        document.getElementById("dropdown-icon").style.display =
                          "none";
                        document.getElementById("dropUp-icon").style.display =
                          "block";
                        this.setState({ productClicked: true });
                      } else {
                        const products = document.querySelector(
                          ".dropdown-content-products"
                        );
                        products.classList.toggle("show");
                        document.getElementById("dropdown-icon").style.display =
                          "block";
                        document.getElementById("dropUp-icon").style.display =
                          "none";
                        this.setState({ productClicked: false });
                      }
                    }}
                  >
                    Produkter
                    {
                      <React.Fragment>
                        <ArrowDropDownIcon id="dropdown-icon" />
                        <ArrowDropUpIcon id="dropUp-icon" />
                      </React.Fragment>
                    }
                  </h4>
                  <div className="dropdown-content-products">
                    <h5>
                      Uppdatera lagersaldo{" "}
                      <span
                        style={{
                          background: "lightgray",
                          marginLeft: "0.2rem",
                          padding: "0.2rem",
                        }}
                      >
                        {product.state.lowQuantityProducts}
                      </span>
                    </h5>
                    <h5>Redigera kategorier</h5>
                    <h5>Lägg till / Ta bort</h5>
                  </div>
                </div>
                <div className="orders-sidebar">
                  <h4
                    className="menu-header"
                    onClick={() => {
                      if (this.state.orderClicked == false) {
                        const order = document.querySelector(
                          ".dropdown-content-orders"
                        );
                        order.classList.toggle("show");
                        document.getElementById(
                          "dropdown-icon-order"
                        ).style.display = "none";
                        document.getElementById(
                          "dropUp-icon-order"
                        ).style.display = "block";
                        this.setState({ orderClicked: true });
                      } else {
                        const order = document.querySelector(
                          ".dropdown-content-orders"
                        );
                        order.classList.toggle("show");
                        document.getElementById(
                          "dropdown-icon-order"
                        ).style.display = "block";
                        document.getElementById(
                          "dropUp-icon-order"
                        ).style.display = "none";
                        this.setState({ orderClicked: false });
                      }
                    }}
                  >
                    Beställningar{" "}
                    {
                      <React.Fragment>
                        <ArrowDropDownIcon id="dropdown-icon-order" />
                        <ArrowDropUpIcon id="dropUp-icon-order" />
                      </React.Fragment>
                    }
                  </h4>
                  <div className="dropdown-content-orders">
                    <h5>Uppdatera exporter</h5>
                  </div>
                </div>
                <div className="admin-sidebar">
                  <h4
                    onClick={() => {
                      if (this.state.adminClicked == false) {
                        const admins = document.querySelector(
                          ".dropdown-content-admin"
                        );
                        admins.classList.toggle("show");
                        document.getElementById(
                          "dropdown-icon-admin"
                        ).style.display = "none";
                        document.getElementById(
                          "dropUp-icon-admin"
                        ).style.display = "block";
                        this.setState({ adminClicked: true });
                      } else {
                        const admins = document.querySelector(
                          ".dropdown-content-admin"
                        );
                        admins.classList.toggle("show");
                        document.getElementById(
                          "dropdown-icon-admin"
                        ).style.display = "block";
                        document.getElementById(
                          "dropUp-icon-admin"
                        ).style.display = "none";
                        this.setState({ adminClicked: false });
                      }
                    }}
                    className="menu-header"
                  >
                    Administratörer{" "}
                    {
                      <React.Fragment>
                        <ArrowDropDownIcon id="dropdown-icon-admin" />
                        <ArrowDropUpIcon id="dropUp-icon-admin" />
                      </React.Fragment>
                    }
                  </h4>
                  <div className="dropdown-content-admin">
                    <h5>
                      Nya förfrågningar
                      <span
                        style={{
                          background: "lightgray",
                          marginLeft: "0.5rem",
                          padding: "0.2rem",
                        }}
                      >
                        {customer.state.wantsToBeAdmin}
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            )}
          </CustomerConsumer>
        )}
      </ProductConsumer>
    );
  }
}

export default Sidebar;
