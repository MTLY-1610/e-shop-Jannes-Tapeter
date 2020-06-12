import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { OrderConsumer } from "../../context/orderContext";
import ChangeAdressFormular from "./changeAdress";

class CustomerInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: null,
    };
    this.setAdress = this.setAdress.bind(this);
  }
  componentDidMount() {
    this.getCustomer();
  }

  async getCustomer() {
    try {
      if (this.props.customer) {
        const response = await fetch(
          `http://localhost:5000/customer/${this.props.customer}`
        );
        if (response.status === 200) {
          const responseData = await response.json();
          this.setState({ customer: responseData });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  changeAdress = () => {
    {
      const adressDiv = document.querySelector(".change-adress-wrapper");
      const registerDiv = document.querySelector(".register-wrapper");
      const registerBox = document.querySelector(".register-box");

      adressDiv.style.display = "block";

      document.querySelector(".login-div").scrollIntoView();
    }
  };

  setAdress(adress) {
    this.setState({ customer: { ...this.state.customer, adress: adress } });
    localStorage.setItem("shippingAdress", JSON.stringify(adress));
  }

  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <h4 id="paymentheader">Dina Uppgifter</h4>
            {this.state.customer && (
              <div className="register-div">
                <div className="two-textfields-div">
                  <div>
                    <p>Förnamn</p>
                    <TextField
                      variant="outlined"
                      size="small"
                      margin="dense"
                      defaultValue={this.state.customer.firstName}
                    />
                  </div>
                  <div>
                    <p>Efternamn</p>
                    <TextField
                      variant="outlined"
                      size="small"
                      margin="dense"
                      defaultValue={this.state.customer.lastName}
                    />
                  </div>
                </div>
                <div className="two-textfields-div">
                  <div>
                    <p>Epost</p>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      defaultValue={this.state.customer.email}
                    />
                  </div>
                  <div>
                    <p>Telefon</p>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      defaultValue={this.state.customer.phone}
                    />
                  </div>
                </div>
                <div className="two-textfields-div">
                  <div>
                    <p>Adress</p>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      value={this.state.customer.adress.street}
                    />
                  </div>
                  <div id="change-adress-div">
                    <Button
                      id="formularButton"
                      size="small"
                      variant="contained"
                      onClick={this.changeAdress}
                    >
                      Jag vill ändra adress
                    </Button>
                  </div>
                </div>
                <div className="two-textfields-div">
                  <div>
                    <p>Stad</p>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      value={this.state.customer.adress.city}
                    />
                  </div>
                  <div>
                    <p>Postnummer</p>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      value={this.state.customer.adress.zip}
                    />
                  </div>
                </div>
                <div className="two-textfields-div">
                  <div>
                    <p>Land</p>
                    <TextField
                      size="small"
                      variant="outlined"
                      margin="dense"
                      value={this.state.customer.adress.country}
                    />
                  </div>
                  <div id="change-adress-div">
                    <Button
                      onClick={() => {
                        order.connectAdressToOrder(
                          this.state.customer.adress._id
                        );
                        this.props.showPayment();
                      }}
                      id="formularButton"
                      size="small"
                      variant="contained"
                    >
                      Till betalning
                    </Button>
                  </div>
                </div>
                <div className="change-adress-wrapper">
                  <ChangeAdressFormular setAdress={this.setAdress} />
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default CustomerInformation;
