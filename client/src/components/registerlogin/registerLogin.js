import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./registerLogin.css";
import { TextField } from "@material-ui/core";

class RegisterLogin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="registerLogin-main">
          <div className="register-wrapper">
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
              <div className="one-textfield-wrapper">
                <div className="one-textfield-div">
                  <p>Adress</p>
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
              <div className="one-textfield-wrapper">
                <div className="one-textfield-div">
                  <p>Land</p>
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
                  />
                </div>
                <div>
                  <p>Upprepa lösenord</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    margin="dense"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="login-wrapper">
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
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default RegisterLogin;
