import React from "react";
import _ from "lodash";

export const ProductContext = React.createContext(null);

export default class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      latestProducts: [],
      childrenProducts: [],
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
        this.getLatestProducts();
        this.getChildrenProducts();
      }
    } catch (error) {
      console.log(error);
    }
  }

  getLatestProducts() {
    let sortedProducts = _.orderBy(this.state.allProducts, ["date"], ["desc"]);
    sortedProducts.splice(8);
    this.setState({
      latestProducts: sortedProducts,
    });
  }

  getChildrenProducts() {
    let withChildrenCategory = [];
    for (let i = 0; i < this.state.allProducts.length; i++) {
      if (this.state.allProducts[i].category.includes("children")) {
        withChildrenCategory.push(this.state.allProducts[i]);
      }
    }
    let sortedProducts = _.orderBy(withChildrenCategory, ["date"], ["desc"]);
    sortedProducts.splice(4);
    this.setState({
      childrenProducts: sortedProducts,
    });
  }

  async deleteProduct(id) {
    try {
      await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.getAllProducts();
    } catch {
      console.log("Error");
    }
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          state: this.state,
          deleteProduct: this.deleteProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
