import React from "react";

export const CustomerContext = React.createContext(null);

export default class CustomerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerEmail: "",
      emailExists: false,
    };
    this.registerCustomer = this.registerCustomer.bind(this);
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
      this.setState({ customerEmail: responseData.email });
      this.setState({ emailExists: false });
      if (response.status === 403) {
        this.setState({ emailExists: true });
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
        }}
      >
        {this.props.children}
      </CustomerContext.Provider>
    );
  }
}

export const CustomerConsumer = CustomerContext.Consumer;
