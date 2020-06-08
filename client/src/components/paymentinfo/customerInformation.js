import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class CustomerInformation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h4 id="paymentheader">Dina Uppgifter</h4>
        {this.props.customer && (
          <div className="register-div">
            <div className="two-textfields-div">
              <div>
                <p>Förnamn</p>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  margin="dense"
                  value={this.props.customer.firstName}
                />
              </div>
              <div>
                <p>Efternamn</p>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  margin="dense"
                  value={this.props.customer.lastName}
                />
              </div>
            </div>
            <div className="two-textfields-div">
              <div>
                <p>Epost</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={this.props.customer.email}
                />
              </div>
              <div>
                <p>Telefon</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={this.props.customer.phone}
                />
              </div>
            </div>
            <div className="two-textfields-div">
              <div>
                <p>Adress</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={this.props.customer.adress.street}
                />
              </div>
              <div id="change-adress-div">
                <Button
                  id="formularButton"
                  size="small"
                  variant="contained"
                  onClick={() => {
                    document.querySelector(
                      ".change-adress-wrapper"
                    ).style.transition = "all 0.5s";
                    document.querySelector(
                      ".register-wrapper"
                    ).style.transition = "all 0.5s";

                    document.querySelector(
                      ".change-adress-wrapper"
                    ).style.display = "block";
                    document.querySelector(
                      ".change-adress-wrapper"
                    ).style.opacity = "1";
                    document.querySelector(".register-wrapper").style.opacity =
                      "0.3";
                    document.querySelector(
                      ".register-wrapper"
                    ).style.pointerEvents = "none";
                    document.querySelector(".login-div").scrollIntoView();
                  }}
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
                  id="outlined-basic"
                  variant="outlined"
                  margin="dense"
                  value={this.props.customer.adress.city}
                />
              </div>
              <div>
                <p>Postnummer</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={this.props.customer.adress.zip}
                />
              </div>
            </div>
            <div className="two-textfields-div">
              <div>
                <p>Land</p>
                <TextField
                  id="outlined-basic"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={this.props.customer.adress.country}
                />
              </div>
              <div id="change-adress-div">
                <Button id="formularButton" size="small" variant="contained">
                  Registrera
                </Button>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CustomerInformation;
