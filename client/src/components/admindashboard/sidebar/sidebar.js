import React from "react";
import "./sidebar.css";
import { CustomerConsumer } from "../../../context/customerContext";
import { ProductConsumer } from "../../../context/productContext";
import FaceIcon from "@material-ui/icons/Face";

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
              <div onClick={this.click} id="a-container-sidebar">
                <div id="a-container-sidebar-admin">
                  <h5>
                    <FaceIcon className="a-face-icon" />
                    <span className="a-admin-name">
                      Admin: {`${customer.state.loggedInCustomer}`}
                    </span>
                  </h5>
                </div>
                <div className="a-products-sidebar">
                  <h4
                    className="a-menu-header"
                    onClick={() => {
                      if (this.state.productClicked === false) {
                        const products = document.querySelector(
                          ".a-dropdown-content-products"
                        );

                        products.classList.toggle("show");

                        document.getElementById("a-menu-header");
                        this.setState({ productClicked: true });
                      } else {
                        const products = document.querySelector(
                          ".a-dropdown-content-products"
                        );
                        products.classList.toggle("show");
                        document.getElementById("a-menu-header");

                        this.setState({ productClicked: false });
                      }
                    }}
                  >
                    Produkter
                  </h4>
                  <div className="a-dropdown-content-products">
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
                <div className="a-orders-sidebar">
                  <h4
                    className="a-menu-header"
                    onClick={() => {
                      if (this.state.orderClicked === false) {
                        const order = document.querySelector(
                          ".a-dropdown-content-orders"
                        );
                        order.classList.toggle("show");

                        this.setState({ orderClicked: true });
                      } else {
                        const order = document.querySelector(
                          ".a-dropdown-content-orders"
                        );
                        order.classList.toggle("show");

                        this.setState({ orderClicked: false });
                      }
                    }}
                  >
                    Beställningar{" "}
                  </h4>
                  <div className="a-dropdown-content-orders">
                    <h5>Uppdatera exporter</h5>
                  </div>
                </div>
                <div className="a-admin-sidebar">
                  <h4
                    onClick={() => {
                      if (this.state.adminClicked === false) {
                        const admins = document.querySelector(
                          ".a-dropdown-content-admin"
                        );
                        admins.classList.toggle("show");

                        this.setState({ adminClicked: true });
                      } else {
                        const admins = document.querySelector(
                          ".a-dropdown-content-admin"
                        );
                        admins.classList.toggle("show");

                        this.setState({ adminClicked: false });
                      }
                    }}
                    className="a-menu-header"
                  >
                    Administratörer{" "}
                  </h4>
                  <div className="a-dropdown-content-admin">
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
