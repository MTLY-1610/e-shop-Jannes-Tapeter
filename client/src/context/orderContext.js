import React from "react";

export const OrderContext = React.createContext(null);

export default class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      deliveryMethods: [],
      order: {
        shippingMethod: "",
        paymentMethod: "",
        products: [],
      },
    };
    this.addToCart = this.addToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.increaseQuantityInCart = this.increaseQuantityInCart.bind(this);
    this.decreaseQuantityInCart = this.decreaseQuantityInCart.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
    this.addShippingMethodToOrder = this.addShippingMethodToOrder.bind(this);
    this.addPaymentMethodToOrder = this.addPaymentMethodToOrder.bind(this);
    this.connectCartToOrder = this.connectCartToOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
    this.getDeliveryMethods();
    this.connectCartToOrder();
  }

  getCartItems() {
    if (localStorage.getItem("cart")) {
      this.setState({
        cart: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }

  increaseQuantityInCart(id) {
    const product = this.state.cart.find((item) => item.product._id === id);
    product.quantity++;
    this.setState({ cart: [...this.state.cart] });
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  decreaseQuantityInCart(id) {
    const product = this.state.cart.find((item) => item.product._id === id);
    product.quantity--;
    this.setState({ cart: [...this.state.cart] });
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  removeProductFromCart(id) {
    const product = this.state.cart.find((item) => item.product._id === id);
    const index = this.state.cart.indexOf(product);

    const temp = this.state.cart;
    temp.splice(index, 1);

    this.setState({ cart: temp });
    localStorage.setItem("cart", JSON.stringify(temp));
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

  async getDeliveryMethods() {
    const response = await fetch("http://localhost:5000/shippingMethod");
    if (response.status === 200) {
      const responseData = await response.json();
      this.setState({ deliveryMethods: responseData });
    }
  }

  addShippingMethodToOrder(orderData) {
    this.setState({
      order: { ...this.state.order, shippingMethod: orderData },
    });
  }
  addPaymentMethodToOrder(orderData) {
    this.setState({ order: { ...this.state.order, paymentMethod: orderData } });
  }

  async connectCartToOrder() {
    let temp = [];
    let productList = [];

    for (let i = 0; i < this.state.cart.length; i++) {
      for (let j = 0; j < this.state.cart[i].quantity; j++) {
        temp.push(this.state.cart[i].product._id);
      }
    }
    for (const productId of temp) {
      try {
        const response = await fetch(
          `http://localhost:5000/product/${productId}`
        );
        const responseData = await response.json();
        if (response.status === 200) {
          productList.push(responseData);
        }
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({ order: { ...this.state.order, products: productList } });
  }

  render() {
    return (
      <OrderContext.Provider
        value={{
          state: this.state,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          cartTotalPrice: this.cartTotalPrice,
          increaseQuantityInCart: this.increaseQuantityInCart,
          decreaseQuantityInCart: this.decreaseQuantityInCart,
          removeProductFromCart: this.removeProductFromCart,
          addShippingMethodToOrder: this.addShippingMethodToOrder,
          addPaymentMethodToOrder: this.addPaymentMethodToOrder,
          connectCartToOrder: this.connectCartToOrder,
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export const OrderConsumer = OrderContext.Consumer;
