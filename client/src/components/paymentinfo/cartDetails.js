import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class CardDetails extends React.Component {
  state = {
    fullname: "",
    cardnumber: "",
    mm: "",
    yy: "",
    ccv: "",
    fullnameError: "",
    mmError: "",
    cardnumberError: "",
    yyError: "",
    ccvError: "",
    redirect: null,
  };

  inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validation = () => {
    let isError = false;

    if (this.state.fullname.length < 2) {
      this.setState({
        fullnameError: "Minimum 2 characters",
      });
      isError = true;
    }
    if (this.state.cardnumber.length !== 16) {
      this.setState({
        cardnumberError: "Min/max 16 characters",
      });
      isError = true;
    }

    if (this.state.ccv.length !== 3) {
      this.setState({
        ccvError: "Min/max 3 characters",
      });
      isError = true;
    }

    return isError;
  };

  goToPayment = () => {
    this.setState({
      fullname: "",
      cardnumber: "",
      mm: "",
      yy: "",
      ccv: "",
      fullnameError: "",
      mmError: "",
      cardnumberError: "",
      yyError: "",
      ccvError: "",
    });
    const errors = this.validation();

    if (!errors) {
      console.log("Validation of payment approved");
      this.setState({ redirect: "/confirmOrder" });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
                value={this.state.fullname}
                name="fullname"
                onChange={this.inputChange}
                helperText={this.state.fullnameError}
              />
            </div>
            <div>
              <p>Kortnummer</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                margin="dense"
                value={this.state.cardnumber}
                name="cardnumber"
                onChange={this.inputChange}
                helperText={this.state.cardnumberError}
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
                  value={this.state.mm}
                  name="mm"
                  onChange={this.inputChange}
                  helperText={this.state.mmError}
                />
                <TextField
                  id="yy"
                  variant="outlined"
                  size="small"
                  margin="dense"
                  value={this.state.yy}
                  name="yy"
                  onChange={this.inputChange}
                  helperText={this.state.yyError}
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
                value={this.state.ccv}
                name="ccv"
                onChange={this.inputChange}
                helperText={this.state.ccvError}
              />
            </div>
          </div>

          <Button
            onClick={this.goToPayment}
            id="formularButton"
            size="small"
            variant="contained"
          >
            FORTSÄTT
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default CardDetails;
