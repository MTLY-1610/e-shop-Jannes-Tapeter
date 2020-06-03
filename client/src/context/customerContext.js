import React from "react";

export const CustomerContext = React.createContext(null);

export default class CustomerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerEmail: "",
      emailExists: false,
      successfulRegister: false,
      successfulLogin: false,
      loggedInCustomer: "",
      loggedInCustomerId: "",
      customerRole: "",
      allCustomers: [],
    };
    this.registerCustomer = this.registerCustomer.bind(this);
    this.loginCustomer = this.loginCustomer.bind(this);
    this.logoutCustomer = this.logoutCustomer.bind(this);
    this.logoutCustomer = this.logoutCustomer.bind(this);
  }

  componentDidMount() {
    this.getLoggedInUser();
    this.getAllCustomers();
  }

  getLoggedInUser() {
    if (document.cookie) {
      let customer = JSON.parse(localStorage.getItem("customer"));
      let customerId = JSON.parse(localStorage.getItem("customerId"));
      let role = JSON.parse(localStorage.getItem("customerRole"));

      this.setState({
        loggedInCustomer: customer,
        loggedInCustomerId: customerId,
        customerRole: role,
      });
    } else {
      localStorage.clear();
    }
  }

  async registerCustomer(data) {
    try {
      const response = await fetch("http://localhost:5000/customer/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        this.setState({
          customerEmail: responseData.email,
          emailExists: false,
          successfulRegister: true,
        });
      }
      if (response.status === 403) {
        this.setState({ emailExists: true });
        this.setState({ successfulRegister: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loginCustomer(data) {
    try {
      const response = await fetch("http://localhost:5000/customer/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const responseData = await response.json();

        localStorage.setItem(
          "customer",
          JSON.stringify(responseData.firstName + " " + responseData.lastName)
        );
        localStorage.setItem("customerId", JSON.stringify(responseData._id));
        localStorage.setItem("customerRole", JSON.stringify(responseData.role));
        this.setState({
          loggedInCustomer:
            responseData.firstName + " " + responseData.lastName,
          loggedInCustomerId: responseData._id,
          successfulLogin: true,
          customerRole: responseData.role,
        });
      } else if (response.status === 401) {
        this.setState({ successfulLogin: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async logoutCustomer() {
    try {
      await fetch("http://localhost:5000/customer/logout", {
        method: "POST",
        credentials: "include",
      });
      this.setState({
        loggedInCustomer: "",
        loggedInCustomerId: "",
        customerRole: "",
      });
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCustomers() {
    try {
      const response = await fetch("http://localhost:5000/customer", {
        credentials: "include",
      });
      const responseData = await response.json();

      if (response.status === 200) {
        this.setState({
          allCustomers: responseData,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <CustomerContext.Provider
        value={{
          state: this.state,
          registerCustomer: this.registerCustomer,
          loginCustomer: this.loginCustomer,
          logoutCustomer: this.logoutCustomer,
        }}
      >
        {this.props.children}
      </CustomerContext.Provider>
    );
  }
}

export const CustomerConsumer = CustomerContext.Consumer;
