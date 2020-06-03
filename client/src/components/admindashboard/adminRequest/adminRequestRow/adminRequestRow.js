import React from "react";
import { Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";
import "./adminRequestRow.css";

//En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

class AdminRequestRow extends React.Component {
    serverUrl = "http://localhost:5000/";

  render() {
    return (
      <React.Fragment>
        <div id="row-container">
          <h4>{this.props.firstName}</h4>
          <h4>{this.props.lastName}</h4>
          <h4>{this.props.email}</h4>
          <RadioGroup row id="radioGroup">
            <FormControlLabel
              control={<Radio color="default" size="small" />}
              value="Godkänn"
              label="Godkänd"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Radio color="default" size="small" />}
              value="Denied"
              label="Nekad"
              labelPlacement="start"
            />
          </RadioGroup>
          <Button id="formularButton" size="small" variant="contained">
            Sänd
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminRequestRow;
