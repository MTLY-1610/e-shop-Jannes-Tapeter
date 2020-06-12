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
            <div className="a-order-card">
              <div>
                <span>Ordernummer </span>
                {this.props.orderNumber}
              </div>
              <div>
                {" "}
                <span>Kund </span>
                {this.props.firstName} {this.props.lastName}
              </div>
              <div>
                <span>Summa </span>
                {this.props.totalPrice + "kr"}
              </div>
              <div>
                {" "}
                <span>Status </span>
                {this.props.shipped ? (
                  <span style={{ color: "darkgreen" }}> Utsänd</span>
                ) : (
                  <span style={{ color: "darkred" }}> Ej utsänd</span>
                )}
              </div>
              {!this.props.shipped && (
                <FormControlLabel
                  control={<Checkbox name="orderSend" color="default" />}
                  label="Utsänd"
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
