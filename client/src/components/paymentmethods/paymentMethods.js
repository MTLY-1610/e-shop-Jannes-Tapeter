import React from "react";
import Swish from "./swish.png";
import CreditCards from "./cc.png";
import Klarna from "./klarna.png";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

class PaymentMethods extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={CreditCards} alt="swish"></img>
          <img src={Swish} alt="swish"></img>
          <img src={Klarna} alt="swish"></img>
        </div>
        <div>
          <RadioGroup>
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
