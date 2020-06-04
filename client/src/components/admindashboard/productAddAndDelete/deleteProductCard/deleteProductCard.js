import React from "react";
import { Button } from "@material-ui/core";
import "./deleteProductCard.css";

class DeleteProductCard extends React.Component {
  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <div id="delete-product-container">
        <div>Category</div>
        <div>Quantity</div>
        <div>Url</div>
        <div>Price</div>
        <div>Description</div>
        <div>Brand</div>
        <div>Designer</div>
        <div>Ref</div>
        <div>Dimensions</div>
        <div>Date</div>
        <Button id="formularButton" size="small" variant="contained">
            Ta bort produkt
          </Button>
      </div>
    );
  }
}

export default DeleteProductCard;
