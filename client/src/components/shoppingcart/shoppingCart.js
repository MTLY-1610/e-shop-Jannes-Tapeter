import React from "react";
import Header from "../header/header";
import DeliveryMethods from "../deliverymethods/deliveryMethods";
import ProductInCart from "../ProductInCart/ProductInCart";
import PaymentMethods from "../paymentmethods/paymentMethods";
import Footer from "../footer/footer";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { OrderConsumer } from "../../context/orderContext";

import "./shoppingCart.css";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      paymentChosen: false,
      deliveryChosen: false,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("customerId")) {
      let userId = JSON.parse(localStorage.getItem("customerId"));
      this.setState({ userId: userId });
    }
  }

  radioOnChange = (event) => {
    if (event.target.name === "radio") {
      this.setState({ deliveryChosen: true });
    }
    if (
      event.target.value === "swish" ||
      event.target.value === "klarna" ||
      event.target.value === "card"
    ) {
      this.setState({ paymentChosen: true });
    }
  };

  checkButton = () => {
    if (
      this.state.paymentChosen === true &&
      this.state.deliveryChosen === true
    ) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <Header />
            <div className="shoppingcart-wrapper">
              <section className="cartrow-div">
                <h4>Din korg</h4>
                {order.state.cart.map((product) => (
                  <ProductInCart
                    key={product.product._id}
                    id={product.product._id}
                    add={order.increaseQuantityInCart}
                    remove={order.decreaseQuantityInCart}
                    delete={order.removeProductFromCart}
                    url={product.product.url}
                    brand={product.product.brand}
                    dimensions={product.product.dimensions}
                    price={product.product.price}
                    quantity={product.quantity}
                  />
                ))}

                <div className="totalDiv">
                  <div id="total-rows">
                    <p>Pris</p>
                    <p>{order.cartTotalPrice()}</p>
                  </div>
                  <div id="total-rows">
                    <p>Frakt</p>
                    <p>{order.state.shippingCost}</p>
                  </div>
                  <div id="total-rows">
                    <p>Total</p>
                    <p id="t-total">
                      {order.cartTotalPrice() + order.state.shippingCost}
                    </p>
                  </div>
                </div>
              </section>
              <section className="delivery-payment-div">
                <div className="flexing-delivery-div">
                  <h4>Leverans</h4>
                  <div className="divForRadioAndImg">
                    <DeliveryMethods
                      radioOnChange={this.radioOnChange}
                      setShippingCost={this.setShippingCost}
                    />
                  </div>
                </div>
                <div className="flexing-delivery-div">
                  <h4>Betalningsmetod</h4>
                  <div className="divForRadioAndImg">
                    <PaymentMethods radioOnChange={this.radioOnChange} />
                  </div>
                </div>
                <Button
                  id="paymentBtn"
                  variant="contained"
                  disabled={this.checkButton()}
                  onClick={() => order.connectCartToOrder()}
                >
                  {this.state.userId ? (
                    <Link to="/payment">Till betalning</Link>
                  ) : (
                    <Link to="/register">Registrera / Logga in</Link>
                  )}
                </Button>
              </section>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default ShoppingCart;
