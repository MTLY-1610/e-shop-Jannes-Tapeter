import React from "react";
import Header from "../header/header";
import DeliveryMethods from "../deliverymethods/deliveryMethods";
import ProductInCart from "../ProductInCart/ProductInCart";
import PaymentMethods from "../paymentmethods/paymentMethods";
import Footer from "../footer/footer";

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
          </section>
          <section className="delivery-payment-div">
            <div className="flexing-delivery-div">
              <h4>Leverans</h4>
              <div className="deliveryDiv">
                <DeliveryMethods />
              </div>
            </div>
            <div>
              <h4>Betalningsmetod</h4>
              <PaymentMethods />
            </div>
          </section>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
