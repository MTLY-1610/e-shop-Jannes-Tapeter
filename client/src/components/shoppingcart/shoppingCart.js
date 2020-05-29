import React from "react";
import Header from "../header/header";
import DeliveryMethods from "../deliverymethods/deliveryMethods";
import ProductInCart from "../ProductInCart/ProductInCart";
import PaymentMethods from "../paymentmethods/paymentMethods";
import Footer from "../footer/footer";
import Button from "@material-ui/core/Button";

import "./shoppingCart.css";

class ShoppingCart extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="shoppingcart-wrapper">
          <section className="cartrow-div">
            <h4>Din korg</h4>
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <div className="totalDiv">
              <p>Total</p>
              <p>25000</p>
            </div>
          </section>
          <section className="delivery-payment-div">
            <div className="flexing-delivery-div">
              <h4>Leverans</h4>
              <div className="divForRadioAndImg">
                <DeliveryMethods />
              </div>
            </div>
            <div className="flexing-delivery-div">
              <h4>Betalningsmetod</h4>
              <div className="divForRadioAndImg">
                <PaymentMethods />
              </div>
            </div>
            <button id="paymentBtn" variant="contained">
              Till betalning
            </button>
          </section>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
