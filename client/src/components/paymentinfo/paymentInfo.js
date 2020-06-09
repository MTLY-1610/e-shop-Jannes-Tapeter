import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./paymentInfo.css";
import { StylesProvider } from "@material-ui/styles";
import CardDetails from "./cartDetails";
import InvoiceDetails from "./invoice";
import SwishDetails from "./swishDetails";
import CustomerInfo from "./customerInformation";
import { OrderConsumer } from "../../context/orderContext";

class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeAdress: false,
      showPayment: false,
    };
    this.setShowPayment = this.setShowPayment.bind(this);
  }

  setShowPayment() {
    this.setState({ showPayment: true });
  }

  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <Header />
            <StylesProvider injectFirst>
              <div className="registerLogin-main">
                <div className="register-wrapper">
                  {order.state.order.customer && (
                    <CustomerInfo
                      customer={order.state.order.customer}
                      showPayment={this.setShowPayment}
                    />
                  )}
                  {order.state.order.paymentMethod === "card" &&
                    this.state.showPayment && <CardDetails />}
                  {order.state.order.paymentMethod === "swish" &&
                    this.state.showPayment && <SwishDetails />}
                  {order.state.order.paymentMethod === "klarna" &&
                    this.state.showPayment && <InvoiceDetails />}
                </div>
              </div>
            </StylesProvider>
            <Footer />
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default PaymentInfo;
