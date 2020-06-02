import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class CustomerInformation extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h4 id="paymentheader">Dina Uppgifter</h4>
        <div className="register-div">
          <div className="two-textfields-div">
            <div>
              <p>Förnamn</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                margin="dense"
              />
            </div>
            <div>
              <p>Efternamn</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                margin="dense"
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
              />
            </div>
            <div>
              <p>Telefon</p>
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                margin="dense"
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
                  document.querySelector(".register-wrapper").style.transition =
                    "all 0.5s";

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
              />
            </div>
            <div>
              <p>Postnummer</p>
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                margin="dense"
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
              />
            </div>
            <div id="change-adress-div">
              <Button id="formularButton" size="small" variant="contained">
                Registrera
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerInformation;
