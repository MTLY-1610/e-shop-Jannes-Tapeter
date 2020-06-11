import React from "react";
import Swish from "./swish.png";
import CreditCards from "./cc.png";
import Klarna from "./klarna.png";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import "./paymentMethods.css";
import { OrderConsumer } from "../../context/orderContext";

class PaymentMethods extends React.Component {
  state = {};
  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <div id="payment-choices">
              <div id="creditcard">
                <img src={CreditCards} alt="cc"></img>
              </div>
              <div id="swish">
                <img src={Swish} alt="swish"></img>
              </div>
              <div id="klarna">
                <img src={Klarna} alt="klarna"></img>
              </div>
            </div>
            <div>
              <RadioGroup
                onChange={this.props.radioOnChange}
                id="radioGroupForDeliveryAndPayment"
              >
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="card"
                  onChange={(event) => {
                    if (event.target.checked) {
                      order.addPaymentMethodToOrder(event.target.value);
                    }
                  }}
                />
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="swish"
                  onChange={(event) => {
                    if (event.target.checked) {
                      order.addPaymentMethodToOrder(event.target.value);
                    }
                  }}
                />
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="klarna"
                  onChange={(event) => {
                    if (event.target.checked) {
                      order.addPaymentMethodToOrder(event.target.value);
                    }
                  }}
                />
              </RadioGroup>
            </div>
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default PaymentMethods;
