import React from "react";
import "./sidebar.css"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('test')
  }

  render() {
    return (
      <div id="container-sidebar">
        <div id="container-sidebar-admin">
          <span>Admin Adminsson</span>
          <span>admin@epost.se</span>
        </div>
        <div class="products" onClick={this.handleClick}>Produkter</div>
        <div>Beställningar</div>
        <div>Nya Administratörer</div>
      </div>
    );
  }
}

export default Sidebar;



