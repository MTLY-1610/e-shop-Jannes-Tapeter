import React from "react";
import "./deliveryMethods.css";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import DB from "./db.png";
import Postnord from "./postnord.jpg";
import DHL from "./dhl.jpg";

class DeliveryMethods extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="delivery-flex">
          <div id="postnord">
            <img src={Postnord} alt="postnord"></img>
          </div>
          <div id="db">
            <img src={DB} alt="db"></img>
          </div>
          <div id="dhl">
            <img src={DHL} alt="dhl"></img>
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

export default DeliveryMethods;
