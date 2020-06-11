import React from "react";
import "./deliveryMethods.css";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import DB from "./db.png";
import Postnord from "./postnord.jpg";
import DHL from "./dhl.jpg";
import { OrderConsumer } from "../../context/orderContext";

class DeliveryMethods extends React.Component {
  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <div className="delivery-choices">
              <RadioGroup
                onChange={this.props.radioOnChange}
                id="radioGroupForDeliveryAndPayment"
              >
                {order.state.deliveryMethods.map((dm) => (
                  <FormControlLabel
                    key={dm._id}
                    control={<Radio color="default" size="small" />}
                    value={dm._id}
                    name="radio"
                    label={`${dm.company} (${dm.deliveryTime} dagar) ${dm.price}kr`}
                    onChange={(event) => {
                      if (event.target.checked) {
                        order.addShippingMethodToOrder(event.target.value);
                        order.setShippingCost(dm.price);
                      }
                    }}
                  />
                ))}
              </RadioGroup>
            </div>
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default DeliveryMethods;
