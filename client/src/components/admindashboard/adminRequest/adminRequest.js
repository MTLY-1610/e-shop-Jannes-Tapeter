import React from "react";
import { Radio, RadioGroup, FormControlLabel, Button } from "@material-ui/core";
import "./adminRequest.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { CustomerConsumer } from "../../../context/customerContext";

//En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

class AdminRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      approved: false,
    };
  }

  getRole() {
    if (this.state.approved) {
      return "admin";
    } else {
      return "regular";
    }
  }
  render() {
    return (
      <CustomerConsumer>
        {(customer) => (
          <React.Fragment>
            <Header />
            <Sidebar />
            <div id="a-content-container">
              <h3>Förfrågningar om att bli administratör:</h3>
              {customer.state.allCustomers.map(
                (user) =>
                  user.role === "wantsToBeAdmin" && (
                    <div id="a-row-container" key={user._id}>
                      <h4>{user.firstName}</h4>
                      <h4>{user.lastName}</h4>
                      <h4>{user.email}</h4>
                      <RadioGroup row id="a-adminRadioGroup">
                        <FormControlLabel
                          control={<Radio color="default" size="small" />}
                          value="approved"
                          label="Godkänd"
                          labelPlacement="start"
                          onChange={() => this.setState({ approved: true })}
                        />
                        <FormControlLabel
                          control={<Radio color="default" size="small" />}
                          value="denied"
                          label="Nekad"
                          labelPlacement="start"
                          onChange={() => this.setState({ approved: false })}
                        />
                      </RadioGroup>
                      <Button
                        id="a-adminButton"
                        size="small"
                        variant="contained"
                        onClick={() =>
                          customer.editCustomer({
                            id: user._id,
                            role: this.getRole(),
                          })
                        }
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
