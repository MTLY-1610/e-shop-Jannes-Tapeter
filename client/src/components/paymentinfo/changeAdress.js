import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class ChangeAdress extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {" "}
        <h4>Ändra adress</h4>
        <div className="login-div">
          <div className="two-textfields-div">
            <div>
              <p>Adress</p>
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
              <p>Stad</p>
              <TextField
                size="small"
                id="outlined-basic"
                variant="outlined"
                margin="dense"
              />
            </div>
            <div>
              <p>Land</p>
              <TextField
                id="outlined-basic"
                size="small"
                variant="outlined"
                margin="dense"
              />
            </div>
          </div>
        </div>
        <div id="Ändra-adress">
          <Button
            onClick={() => {
              document.querySelector(".change-adress-wrapper").style.transiton =
                "all 0.5s";
              document.querySelector(".change-adress-wrapper").style.display =
                "none";
              document.querySelector(".change-adress-wrapper").style.opacity =
                "0.3";
              document.querySelector(".register-wrapper").style.opacity = "1";
              document.querySelector(".register-wrapper").style.pointerEvents =
                "auto";
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
