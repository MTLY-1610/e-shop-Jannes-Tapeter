import React from "react";
import "./sidebar.css" 

class Sidebar extends React.Component {
    render() {
      return (
        <div id="container-sidebar">
            <div id="container-sidebar-admin">
                <span>Admin Adminsson</span>
                <span>admin@epost.se</span>
            </div>
            <div>Produkter</div>
            <div>Beställningar</div>
            <div>Nya Administratörer</div>
        </div>
      );
    }
  }
  
  export default Sidebar;
  


