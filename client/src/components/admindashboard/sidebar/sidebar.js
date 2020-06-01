import React from "react";
import "./sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div id="container-sidebar">
        <div id="container-sidebar-admin">
          <h5>Admin Adminsson</h5>
          <h5>admin@epost.se</h5>
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
          <h5>Nya förfrågningar</h5>
        </div>
      </div>
    );
  }
}

export default Sidebar;
