import React from "react";
import "./ProductInCart.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";

class ProductInCart extends React.Component {
  serverUrl = "http://localhost:5000/";
  render() {
    return (
      <div className="cart-row">
        <div className="cartimg-div">
          <img
            id="product-image-cart"
            src={`${this.serverUrl}${this.props.url}`}
          ></img>
        </div>
        <div>
          <div>
            <p className="cartrow-productname">{this.props.brand}</p>
            <p className="measurements">{this.props.dimensions}</p>
          </div>
          <div className="borderbox">
            <p id="qty-span">QTY</p>
            <p id="qty-span">{this.props.quantity}</p>
          </div>
        </div>
        <div>
          <div>
            <RemoveIcon
              id="remove"
              onClick={() => this.props.remove(this.props.id)}
            />
            <AddIcon id="add" onClick={() => this.props.add(this.props.id)} />
            <ClearIcon
              id="clear"
              onClick={() => this.props.delete(this.props.id)}
            />
          </div>
          <p className="productprice">
            {this.props.price * this.props.quantity}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductInCart;
