import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./registerLogin.css";
import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

class RegisterLogin extends React.Component {
  componentDidMount() {
    window.addEventListener("resize", function () {
      const width = window.innerWidth;
      if (width < 618) {
        console.log("Enter tablet mode");
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <StylesProvider injectFirst>
          <div className="registerLogin-main">
            <div
              onClick={() => {
                document.querySelector(".login-wrapper").style.opacity = "0.3";
                document.querySelector(".register-wrapper").style.opacity = "1";
              }}
              className="register-wrapper"
            >
              <h4>Registrera</h4>
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
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      margin="dense"
                    />
                  </div>
                  <div id="display-hide">
                    <p>Stad</p>
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
                    <p>Postnummer</p>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      margin="dense"
                    />
                  </div>
                  <div>
                    <p>Stad</p>
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
                    <p>Land</p>
                    <TextField
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      margin="dense"
                    />
                  </div>
                  <div id="display-hide">
                    <p>Stad</p>
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
                    <p>Lösenord</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      margin="dense"
                      type="password"
                    />
                  </div>
                  <div>
                    <p>Upprepa lösenord</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      margin="dense"
                      type="password"
                    />
                  </div>
                </div>
                <Button id="formularButton" size="small" variant="contained">
                  Registrera
                </Button>
              </div>
            </div>
            <div
              className="login-wrapper"
              onClick={() => {
                document.querySelector(".register-wrapper").style.opacity =
                  "0.3";
                document.querySelector(".login-wrapper").style.opacity = "1";
              }}
            >
              <h4>Logga in</h4>
              <div className="login-div">
                <div className="one-textfield-wrapper-login">
                  <div className="one-textfield-div">
                    <p>Epost</p>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      margin="dense"
                    />
                  </div>
                </div>

                <div className="one-textfield-wrapper-login">
                  <div className="one-textfield-div">
                    <p>Lösenord</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      margin="dense"
                      type="password"
                    />
                  </div>
                </div>
                <Button id="formularButton" size="small" variant="contained">
                  Logga in
                </Button>
              </div>
            </div>
          </div>
        </StylesProvider>
        <Footer />
      </React.Fragment>
    );
  }
}

export default RegisterLogin;
