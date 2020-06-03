import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Button
} from "@material-ui/core";
import "./adminRequest.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";


//En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

class AdminRequest extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>Förfrågningar om att bli administratör:</h3>
          <div id="row-container">
            <h4>firstName</h4>
            <h4>lastName</h4>
            <h4>email</h4>
            <RadioGroup row id="radioGroup">
              <FormControlLabel
                control={<Radio color="default" size="small" />}
                value="Godkänn" label="Godkänd" labelPlacement="start"
              />
              <FormControlLabel
                control={<Radio color="default" size="small" />}
                value="Denied"  label="Nekad" labelPlacement="start"
              />
            </RadioGroup>
            <Button id="formularButton" size="small" variant="contained">
              Sänd
            </Button>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdminRequest;
