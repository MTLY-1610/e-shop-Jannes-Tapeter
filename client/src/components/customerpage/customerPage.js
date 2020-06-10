import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./customerPage.css";

import { CustomerConsumer } from "../../context/customerContext";
import { OrderConsumer } from "../../context/orderContext";
class CustomerPage extends React.Component {
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <OrderConsumer>
            {(order) => (
              <React.Fragment>
                <Header />
                <div className="customerPage-main">
                  <h2>Hej {customer.state.loggedInCustomer}!</h2>
                  <h5>
                    Här kan du se order information på alla dina produkter som
                    du har beställt hos oss på Jannes Tapeter.{" "}
                  </h5>
                  <h3>Min orderhistorik</h3>
                  <div>
                    {order.state.allOrders.map(
                      (order) =>
                        order.customer._id ===
                          customer.state.loggedInCustomerId && (
                          <Card key={order._id} style={{ margin: "0.6rem" }}>
                            <CardContent>
                              <Typography color="textSecondary" gutterBottom>
                                {order.date}
                              </Typography>
                              <Typography variant="h5" component="h2">
                                {order.totalPrice + "kr"}
                              </Typography>

                              {order.products.map((product, index) => (
                                <p key={index} style={{ fontSize: "0.8rem" }}>
                                  {product.brand}
                                </p>
                              ))}

                              <Typography style={{ marginTop: "0.5rem" }}>
                                {order.shippingMethod.deliveryTime +
                                  " dagar leveranstid"}
                              </Typography>
                              {order.shipped ? (
                                <p style={{ color: "green" }}>Skickad</p>
                              ) : (
                                <p style={{ color: "red" }}>Ej skickad</p>
                              )}
                            </CardContent>
                          </Card>
                        )
                    )}
                  </div>
                </div>
                <Footer />
              </React.Fragment>
            )}
          </OrderConsumer>
        )}
      </CustomerConsumer>
    );
  }
}

export default CustomerPage;
