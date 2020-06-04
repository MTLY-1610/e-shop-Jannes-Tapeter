import React from "react";
import "./sidebar.css";
import { CustomerConsumer } from "../../../context/customerContext";

//<div id="container-sidebar-admin">  path="/admin/welcome"
//<h5>Uppdatera lagersaldon</h5> path="/admin/productStockbalance"
//<h5>Redigera kategorier</h5> path="/admin/productCategory"
//<h5>Lägg till / Ta bort</h5> path="/admin/productEdit"
//<h5>Uppdatera exporter</h5> path="/admin/orderExport"
//<h5>Nya förfrågningar</h5> path="admin/adminRequest"

class Sidebar extends React.Component {
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <div id="container-sidebar">
            <div id="container-sidebar-admin">
              <h5>{customer.state.loggedInCustomer}</h5>
              <h5>{customer.state.customerRole}</h5>
            </div>
            <div>
              <h4>Produkter</h4>
              <h5>Uppdatera lagersaldon</h5>
              <h5>Redigera kategorier</h5>
              <h5>Lägg till / Ta bort</h5>
            </div>
            <div>
              <h4>Beställningar</h4>
              <h5>Uppdatera exporter</h5>
            </div>
            <div>
              <h4>Administratörer</h4>
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
        )}
      </CustomerConsumer>
    );
  }
}

export default Sidebar;
