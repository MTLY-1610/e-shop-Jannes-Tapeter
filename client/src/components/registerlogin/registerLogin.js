import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./registerLogin.css";
import { TextField } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

class RegisterLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cPassword: "",
      password: "",
      city: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      adress: "",
      country: "",
      postnr: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      adressError: "",
      phoneNrError: "",
      countryError: "",
      cityError: "",
      passError: "",
    };
  }

  inputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logIn = () => {
    // check if user and password is correct
    // if correct go to payment tunnel
    // if not correct, render 'wrond username or pass.. try again'
  };

  validation = () => {
    let isError = false;

    if (this.state.firstName.length < 2) {
      this.setState({
        firstNameError: "Minimum 2 characters",
      });
      isError = true;
    }
    if (this.state.lastName.length < 2) {
      this.setState({
        lastNameError: "Minimum 2 characters",
      });
      isError = true;
    }
    if (this.state.phoneNumber.length !== 10) {
      this.setState({
        phoneNrError: "Max/min 10 characters",
      });
      isError = true;
    }
    if (this.state.adress.length < 1) {
      this.setState({
        adressError: "Adress is required",
      });
      isError = true;
    }
    if (this.state.city.length < 1) {
      this.setState({
        cityError: "City is required",
      });
      isError = true;
    }
    if (this.state.country.length < 4) {
      this.setState({
        countryError: "Minimum 4 characters ",
      });
      isError = true;
    }
    if (this.state.postnr.length > 6) {
      this.setState({
        postnrError: "Minimum 5 characters ",
      });
      isError = true;
    }
    if (this.state.password.length < 6 || this.state.cPassword.length < 6) {
      this.setState({
        passError: "Minimum 6 characters",
      });
      isError = true;
    }
    if (this.state.password !== this.state.cPassword) {
      this.setState({
        passError: "Passwords doesnt match ",
      });
      isError = true;
    }
    if (
      this.state.email.indexOf("@") === -1 ||
      this.state.email.indexOf(".") === -1
    ) {
      this.setState({
        emailError: "Must contain '@' and '.'",
      });
      isError = true;
    }

    return isError;
  };

  register = () => {
    this.setState({
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      adressError: "",
      phoneNrError: "",
      countryError: "",
      cityError: "",
      passError: "",
    });
    const checkErrors = this.validation();

    if (!checkErrors) {
      console.log("Validation approved");
    }
  };

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
                      value={this.state.firstName}
                      name="firstName"
                      onChange={this.inputChange}
                      helperText={this.state.firstNameError}
                    />
                  </div>
                  <div>
                    <p>Efternamn</p>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      margin="dense"
                      value={this.state.lastName}
                      name="lastName"
                      onChange={this.inputChange}
                      helperText={this.state.lastNameError}
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
                      value={this.state.email}
                      name="email"
                      onChange={this.inputChange}
                      helperText={this.state.emailError}
                    />
                  </div>
                  <div>
                    <p>Telefon</p>
                    <TextField
                      type="tel"
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      margin="dense"
                      value={this.state.phoneNumber}
                      name="phoneNumber"
                      helperText={this.state.phoneNrError}
                      onChange={this.inputChange}
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
                      value={this.state.adress}
                      name="adress"
                      onChange={this.inputChange}
                      helperText={this.state.adressError}
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
                      type="tel"
                      size="small"
                      id="outlined-basic"
                      variant="outlined"
                      margin="dense"
                      value={this.state.postnr}
                      name="postnr"
                      helperText={this.state.postnrError}
                      onChange={this.inputChange}
                    />
                  </div>
                  <div>
                    <p>Stad</p>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      margin="dense"
                      value={this.state.city}
                      name="city"
                      helperText={this.state.cityError}
                      onChange={this.inputChange}
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
                      value={this.state.country}
                      name="country"
                      helperText={this.state.countryError}
                      onChange={this.inputChange}
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
                      value={this.state.password}
                      name="password"
                      helperText={this.state.passError}
                      onChange={this.inputChange}
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
                      value={this.state.cPassword}
                      name="cPassword"
                      onChange={this.inputChange}
                      helperText={this.state.passError}
                    />
                  </div>
                </div>
                <Button
                  onClick={this.register}
                  id="formularButton"
                  size="small"
                  variant="contained"
                >
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
                <Button
                  onClick={this.logIn}
                  id="formularButton"
                  size="small"
                  variant="contained"
                >
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
