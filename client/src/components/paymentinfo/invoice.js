import React from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

class InvoiceDetails extends React.Component {
  state = {
    redirect: null,
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <React.Fragment>
        <h4 id="paymentheader">
          Faktura kommer till din email efter lagd order.
        </h4>
        <div className="register-div">
          <Button
            onClick={() => this.setState({ redirect: "/confirmOrder" })}
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

export default InvoiceDetails;
