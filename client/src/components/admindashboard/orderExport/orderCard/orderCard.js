import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import "./orderCard.css";
import { OrderConsumer } from "../../../../context/orderContext";

//Administratörer ska kunna se en lista på alla gjorda beställningar (G)
//Administratörer ska kunna markera beställningar som skickade (VG)

class OrderCard extends React.Component {
  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <div id="a-order-card">
              <div>{this.props.orderNumber}</div>
              <div>{this.props.firstName}</div>
              <div>{this.props.lastName}</div>
              <div>{this.props.totalPrice + "kr"}</div>
              <div>
                {this.props.shipped ? (
                  <p style={{ color: "green" }}>Skickad!</p>
                ) : (
                  <p style={{ color: "red" }}>Ej skickad!</p>
                )}
              </div>
              {!this.props.shipped && (
                <FormControlLabel
                  control={<Checkbox name="orderSend" color="default" />}
                  label="Skickad"
                  labelPlacement="start"
                  onChange={() => order.editOrder(this.props.id)}
                />
              )}
            </div>
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default OrderCard;
