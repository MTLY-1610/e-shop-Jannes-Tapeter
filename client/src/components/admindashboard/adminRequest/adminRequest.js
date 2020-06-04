import React from "react";
import { Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";
import "./adminRequest.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { CustomerConsumer } from "../../../context/customerContext";

//En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

class AdminRequest extends React.Component {
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div id="content-container">
              <h3>Förfrågningar om att bli administratör:</h3>
              {customer.state.allCustomers.map(
                (user) =>
                  user.role === "wantsToBeAdmin" && (
                    <div id="row-container" key={user._id}>
                      <h4>{user.firstName}</h4>
                      <h4>{user.lastName}</h4>
                      <h4>{user.email}</h4>
                      <RadioGroup row id="adminRadioGroup">
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
                      <Button
                        id="adminButton"
                        size="small"
                        variant="contained"
                      >
                        Sänd
                      </Button>
                    </div>
                  )
              )}
            </div>
            <Footer />
          </React.Fragment>
        )}
      </CustomerConsumer>
    );
  }
}

export default AdminRequest;
