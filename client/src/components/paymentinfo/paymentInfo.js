import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./paymentInfo.css";
import { StylesProvider } from "@material-ui/styles";
import ChangeAdressFormular from "./changeAdress";
import CardDetails from "./cartDetails";
import CustomerInfo from "./customerInformation";

class PaymentInfo extends React.Component {
  state = {
    changeAdress: false,
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <StylesProvider injectFirst>
          <div className="registerLogin-main">
            <div className="register-wrapper">
              <CustomerInfo />
              <CardDetails />
            </div>

            <div className="change-adress-wrapper">
              <ChangeAdressFormular />
            </div>
          </div>
        </StylesProvider>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PaymentInfo;
