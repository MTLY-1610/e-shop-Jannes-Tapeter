import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import { OrderConsumer } from "../../context/orderContext";
import { CustomerConsumer } from "../../context/customerContext";
import "./confirmOrder.css";

class ConfirmOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: {},
      showSummary: true,
    };
  }

  componentDidMount() {
    this.getAdress();
  }

  getAdress() {
    this.setState({
      adress: JSON.parse(localStorage.getItem("shippingAdress")),
    });
  }

  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <CustomerConsumer>
            {(customer) => (
              <React.Fragment>
                <Header />
                <StylesProvider injectFirst>
                  <div id="confirm-order-container">
                    <h1>Bekräfta Order</h1>
                    {this.state.showSummary && (
                      <p>
                        Dina betalningsuppgifter ser ut att stämma och vi är
                        redo att skicka din order!
                      </p>
                    )}
                    {this.state.showSummary && order.state.order && (
                      <div className="orderSummary">
                        <h5>Namn:</h5>
                        <p>
                          {customer.state.customer.firstName +
                            " " +
                            customer.state.customer.lastName}
                        </p>
                        <h5>Leveransadress:</h5>
                        {this.state.adress ? (
                          <p>{this.state.adress.street}</p>
                        ) : (
                          <p>{customer.state.customer.adress.street}</p>
                        )}
                        {this.state.adress ? (
                          <p>{this.state.adress.city}</p>
                        ) : (
                          <p>{customer.state.customer.adress.city}</p>
                        )}
                        {this.state.adress ? (
                          <p>{this.state.adress.zip}</p>
                        ) : (
                          <p>{customer.state.customer.adress.zip}</p>
                        )}
                        {this.state.adress ? (
                          <p>{this.state.adress.country}</p>
                        ) : (
                          <p>{customer.state.customer.adress.country}</p>
                        )}

                        <h5>Produkter:</h5>
                        {order.state.cart.map((product, index) => (
                          <p key={index}>
                            {product.product.brand}
                            <span> x{product.quantity}</span>
                          </p>
                        ))}
                        <h5>Pris ink frakt:</h5>
                        <p>
                          {order.state.order.totalPrice +
                            order.state.shippingCost +
                            "kr"}
                        </p>
                      </div>
                    )}

                    {!order.state.orderPlaced ? (
                      <Button
                        onClick={() => {
                          order.placeOrder();
                          order.clearCart();
                          this.setState({ showSummary: false });
                        }}
                        id="formularButton"
                        size="small"
                        variant="contained"
                      >
                        LÄGG ORDER
                      </Button>
                    ) : (
                      <p>
                        {`Order inskickad. Spara ditt ordernummer som är bra att ha vid kontakt med oss. 
                        Ordernummer:`}{" "}
                        <span style={{ fontSize: "1.5rem", color: "gray" }}>
                          {order.state.orderNumber}
                        </span>
                      </p>
                    )}
                  </div>
                </StylesProvider>
                <Footer />
              </React.Fragment>
            )}
          </CustomerConsumer>
        )}
      </OrderConsumer>
    );
  }
}

export default ConfirmOrder;
