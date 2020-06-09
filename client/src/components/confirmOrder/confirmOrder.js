import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import { OrderConsumer } from "../../context/orderContext";

class ConfirmOrder extends React.Component {
  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <Header />
            {console.log(order.state.order)}
            <StylesProvider injectFirst>
              <div>
                <h1>Bekräfta Order</h1>
                <p>
                  Dina betalningsuppgifter ser ut att stämma och vi är redo att
                  skicka din order!
                </p>
                {!order.state.orderPlaced ? (
                  <Button
                    onClick={() => {
                      order.placeOrder();
                      order.clearCart();
                    }}
                    id="formularButton"
                    size="small"
                    variant="contained"
                  >
                    LÄGG ORDER
                  </Button>
                ) : (
                  <p>
                    {`Order inskickad. Här är ditt ordernummer: ${order.state.orderNumber}`}
                  </p>
                )}
              </div>
            </StylesProvider>
            <Footer />
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default ConfirmOrder;
