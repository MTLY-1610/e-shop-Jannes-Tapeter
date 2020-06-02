import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./registerLogin.css";
import { TextField, Checkbox } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { CustomerConsumer } from "../../context/customerContext";
import { Redirect } from "react-router-dom";

class RegisterLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      cPassword: "",
      password: "",
      city: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      street: "",
      country: "",
      zip: "",
      role: "regular",
      loginEmail: "",
      loginPassword: "",
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
    if (this.state.phone.length !== 10) {
      this.setState({
        phoneNrError: "Max/min 10 characters",
      });
      isError = true;
    }
    if (this.state.street.length < 1) {
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
    if (this.state.zip.length > 6) {
      this.setState({
        zipError: "Minimum 5 characters ",
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
      return true;
    }

    return false;
  };

  getCustomerData = () => {
    return {
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      street: this.state.street,
      city: this.state.city,
      zip: this.state.zip,
      country: this.state.country,
      phone: this.state.phone,
      email: this.state.email,
      role: this.state.role,
    };
  };

  adminChecked = (e) => {
    if (e.target.checked) {
      this.setState({ role: "wantsToBeAdmin" });
    } else {
      this.setState({ role: "regular" });
    }
  };

  clearForm = () => {
    this.setState({
      cPassword: "",
      password: "",
      city: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      street: "",
      country: "",
      zip: "",
      role: "regular",
      loginEmail: "",
      loginPassword: "",
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <React.Fragment>
        <Header />
        <StylesProvider injectFirst>
          <CustomerConsumer>
            {(customer) => (
              <div className="registerLogin-main">
                <div
                  onClick={() => {
                    document.querySelector(".login-wrapper").style.opacity =
                      "0.3";
                    document.querySelector(".register-wrapper").style.opacity =
                      "1";
                  }}
                  className="register-wrapper"
                >
                  <h4>Registrera</h4>
                  <div className="register-div">
                    <div className="two-textfields-div">
                      <div>
                        <p>Förnamn</p>
                        <TextField
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
                          size="small"
                          variant="outlined"
                          margin="dense"
                          value={this.state.phone}
                          name="phone"
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
                          variant="outlined"
                          margin="dense"
                          value={this.state.street}
                          name="street"
                          onChange={this.inputChange}
                          helperText={this.state.adressError}
                        />
                      </div>
                      <div id="display-hide">
                        <p>Stad</p>
                        <TextField
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
                          variant="outlined"
                          margin="dense"
                          value={this.state.zip}
                          name="zip"
                          helperText={this.state.zipError}
                          onChange={this.inputChange}
                        />
                      </div>
                      <div>
                        <p>Stad</p>
                        <TextField
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
                    <div className="two-textfields-div">
                      <div>
                        <p>Jag vill vara admin</p>
                        <Checkbox
                          onChange={this.adminChecked}
                          className="checkBox"
                          value="wantsToBeAdmin"
                          inputProps={{ "aria-label": "role" }}
                        />
                      </div>
                    </div>
                    {!customer.state.successfulRegister && (
                      <Button
                        onClick={
                          this.register
                            ? () => (
                                customer.registerCustomer(
                                  this.getCustomerData()
                                ),
                                this.clearForm()
                              )
                            : null
                        }
                        id="formularButton"
                        size="small"
                        variant="contained"
                      >
                        Registrera
                      </Button>
                    )}

                    {customer.state.successfulRegister && (
                      <p
                        style={{ color: "green" }}
                      >{`Användare skapad. Du kan nu logga in med ${this.state.email}`}</p>
                    )}
                    {customer.state.emailExists && (
                      <p
                        style={{ color: "red" }}
                      >{`Användare med ${this.state.email} finns redan registrerad`}</p>
                    )}
                  </div>
                </div>
                <div
                  className="login-wrapper"
                  onClick={() => {
                    document.querySelector(".register-wrapper").style.opacity =
                      "0.3";
                    document.querySelector(".login-wrapper").style.opacity =
                      "1";
                  }}
                >
                  <h4>Logga in</h4>
                  <div className="login-div">
                    <div className="one-textfield-wrapper-login">
                      <div className="one-textfield-div">
                        <p>Epost</p>
                        <TextField
                          name="loginEmail"
                          onChange={this.inputChange}
                          value={this.state.loginEmail}
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
                          name="loginPassword"
                          onChange={this.inputChange}
                          value={this.state.loginPassword}
                          variant="outlined"
                          size="small"
                          margin="dense"
                          type="password"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => (
                        customer.loginCustomer({
                          email: this.state.loginEmail,
                          password: this.state.loginPassword,
                        }),
                        this.clearForm(),
                        this.setState({ redirect: "/" })
                      )}
                      id="formularButton"
                      size="small"
                      variant="contained"
                    >
                      Logga in
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CustomerConsumer>
        </StylesProvider>
        <Footer />
      </React.Fragment>
    );
  }
}

export default RegisterLogin;
