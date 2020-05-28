import React from "react";
import "./ProductInCart.css";
import DB from "./db.png";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";

class ProductInCart extends React.Component {
  state = {};
  render() {
    return (
      <div className="cart-row">
        <div className="cartimg-div">
          <img id="product-image-cart" src={DB}></img>
        </div>
        <div>
          <div>
            <p className="cartrow-productname">Tapet titeln Hejsan</p>
            <p className="measurements">250cm x 270cm</p>
          </div>
          <div className="borderbox">
            <p id="qty-span">QTY</p>
            <p id="qty-span">2</p>
          </div>
        </div>
        <div>
          <div>
            <RemoveIcon id="remove" />
            <AddIcon id="add" />
            <ClearIcon id="clear" />
          </div>
          <p className="productprice">1609 kr</p>
        </div>
      </div>
    );
  }
}

export default ProductInCart;
