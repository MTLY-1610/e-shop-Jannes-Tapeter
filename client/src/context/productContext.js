import React from "react";

export const ProductContext = React.createContext(null);

export default class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      test: "test",
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  async getAllProducts() {
    try {
      const response = await fetch("http://localhost:5000/product");
      if (response.status === 200) {
        const responseData = await response.json();
        this.setState({ allProducts: responseData });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
