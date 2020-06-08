import React from "react";

export const OrderContext = React.createContext(null);

export default class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("cart")) {
      this.setState({
        cart: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }

  cartTotalPrice() {
    let price = 0;
    for (const item of this.state.cart) {
      price = price + item.product.price * item.quantity;
    }
    return price;
  }

  clearCart() {
    this.setState({ cart: [] });
  }

  addToCart(product) {
    let productList = [];
    if (localStorage.getItem("cart")) {
      productList = JSON.parse(localStorage.getItem("cart"));
    }

    productList.push(product);

    localStorage.setItem("cart", JSON.stringify(productList));
    this.setState({ cart: productList });
  }

  render() {
    return (
      <OrderContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          cartTotalPrice: this.cartTotalPrice,
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export const OrderConsumer = OrderContext.Consumer;
