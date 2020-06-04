import React from "react";
import Swish from "./swish.png";
import CreditCards from "./cc.png";
import Klarna from "./klarna.png";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import "./paymentMethods.css";

class PaymentMethods extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
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
          <RadioGroup id="radioGroupForDeliveryAndPayment">
            <FormControlLabel
              control={<Radio color="default" size="small" />}
              value="1"
            />
            <FormControlLabel
              control={<Radio color="default" size="small" />}
              value="2"
            />
            <FormControlLabel
              control={<Radio color="default" size="small" />}
              value="3"
            />
          </RadioGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentMethods;
