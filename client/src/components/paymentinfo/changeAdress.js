import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class ChangeAdress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: {
        street: "",
        city: "",
        zip: "",
        country: "",
      },
    };
  }

  async changeAdress() {
    try {
      const response = await fetch("http://localhost:5000/order/AddAdress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.adress),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        this.props.setAdress(responseData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h4>Ändra adress</h4>
        <div className="login-div">
          <div className="two-textfields-div">
            <div>
              <p>Adress</p>
              <TextField
                size="small"
                variant="outlined"
                margin="dense"
                value={this.state.street}
                onChange={(event) =>
                  this.setState({
                    adress: {
                      ...this.state.adress,
                      street: event.target.value,
                    },
                  })
                }
              />
            </div>
            <div>
              <p>Postnummer</p>
              <TextField
                size="small"
                variant="outlined"
                margin="dense"
                value={this.state.zip}
                onChange={(event) =>
                  this.setState({
                    adress: { ...this.state.adress, zip: event.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="two-textfields-div">
            <div>
              <p>Stad</p>
              <TextField
                size="small"
                variant="outlined"
                margin="dense"
                value={this.state.city}
                onChange={(event) =>
                  this.setState({
                    adress: { ...this.state.adress, city: event.target.value },
                  })
                }
              />
            </div>
            <div>
              <p>Land</p>
              <TextField
                size="small"
                variant="outlined"
                margin="dense"
                value={this.state.country}
                onChange={(event) =>
                  this.setState({
                    adress: {
                      ...this.state.adress,
                      country: event.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div id="Ändra-adress">
          <Button
            onClick={() => {
              this.changeAdress();
              document.querySelector(".change-adress-wrapper").style.display =
                "none";
              document.querySelector(".register-div").scrollIntoView();
            }}
            id="Ändra-adress"
            size="small"
            variant="contained"
          >
            Ändra
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default ChangeAdress;
