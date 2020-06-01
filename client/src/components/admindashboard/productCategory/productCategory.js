import React from "react";
import "./productCategory.css"

//Administratörer ska kunna redigera vilka kategorier en produkt tillhör (VG)

class ProductCategory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: [{
        category: [],
        quantity: 0,
        url: "",
        price: 0,
        description: "",
        brand: "",
        designer: "",
        ref: "",
        dimensions: ""
      }]
    }
  }

  render() {
    return (
      <div id="content-container">
        <h3>Här ska man kunna redigera vilka kategorier en produkt tillhör</h3>
      </div>
    );
  }
}

export default ProductCategory;