import React from "react";
import "./sidebar.css" 

class Sidebar extends React.Component {
    render() {
      return (
        <div id="container-sidebar">
            <div>
                <h3>Admin namn</h3>
                <h3>Admin mail</h3>
            </div>
            <div>Produkter</div>
            <div>Beställningar</div>
            <div>Admin</div>
        </div>
      );
    }
  }
  
  export default Sidebar;
  


