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
      updateQuantity: { success: false, id: "" },
      lowQuantityProducts: 0,
    };
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getQuantityUnder10() {
    let nr = 0;
    for (const product of this.state.allProducts) {
      if (product.quantity <= 10) {
        nr++;
      }
    }
    this.setState({ lowQuantityProducts: nr });
  }

  async getAllProducts() {
    try {
      const response = await fetch("http://localhost:5000/product");
      if (response.status === 200) {
        const responseData = await response.json();
        this.setState({ allProducts: responseData });
        this.getLatestProducts();
        this.getChildrenProducts();
        this.getQuantityUnder10();
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

  async editProduct(id, data) {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      this.getAllProducts();
      this.setState({
        updateQuantity: { success: true, id: responseData._id },
      });
    } catch (error) {
      console.log(error);
    }
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
          editProduct: this.editProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
