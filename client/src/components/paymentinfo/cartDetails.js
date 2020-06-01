import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

class CardDetails extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h4 id="paymentheader">Kort detaljer</h4>
        <div className="register-div">
          <div className="two-textfields-div">
            <div>
              <p>Namn</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                margin="dense"
              />
            </div>
            <div>
              <p>Kortnummer</p>
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
              <p>MM / ÅÅ</p>
              <div className="ccv-div">
                <TextField
                  id="mm"
                  variant="outlined"
                  size="small"
                  margin="dense"
                />
                <TextField
                  id="yy"
                  variant="outlined"
                  size="small"
                  margin="dense"
                />
              </div>
            </div>
            <div>
              <p>CCV</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                margin="dense"
              />
            </div>
          </div>
          <Button id="formularButton" size="small" variant="contained">
            BETALA
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default CardDetails;
