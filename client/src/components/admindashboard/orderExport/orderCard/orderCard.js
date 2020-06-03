import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./orderCard.css";

//Administratörer ska kunna se en lista på alla gjorda beställningar (G)
//Administratörer ska kunna markera beställningar som skickade (VG)

class OrderCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="order-card">
          <div>order-ObjectId</div>
          <div>orderNumber</div>
          <div>customer-ObjectId</div>
          <div>firstName</div>
          <div>lastName</div>
          <FormControlLabel

            control={<Checkbox name="orderSend" color="default" />}
            label="Skickad"
            labelPlacement="start"
          />
        </div>

        <div id="order-card">
          <div>order-ObjectId</div>
          <div>orderNumber</div>
          <div>customer-ObjectId</div>
          <div>firstName</div>
          <div>lastName</div>
          <FormControlLabel
            control={<Checkbox name="orderSend" color="default" />}
            label="Skickad"
            labelPlacement="start"
          />
        </div>
        <div id="order-card">
          <div>order-ObjectId</div>
          <div>orderNumber</div>
          <div>customer-ObjectId</div>
          <div>firstName</div>
          <div>lastName</div>
          <FormControlLabel
            control={<Checkbox name="orderSend" color="default" />}
            label="Skickad"
            labelPlacement="start"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default OrderCard;
