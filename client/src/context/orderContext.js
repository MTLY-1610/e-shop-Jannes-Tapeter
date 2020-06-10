import React from "react";

export const OrderContext = React.createContext(null);

export default class OrderProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      deliveryMethods: [],
      orderPlaced: false,
      orderNumber: 0,
      shippingCost: 0,
      allOrders: [],
      order: {
        shippingMethod: "",
        paymentMethod: "",
        products: [],
        customer: "",
        adress: "",
        totalPrice: 0,
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
    this.connectAdressToOrder = this.connectAdressToOrder.bind(this);
    this.cartTotalPrice = this.cartTotalPrice.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.setShippingCost = this.setShippingCost.bind(this);
  }

  componentDidMount() {
    this.getAllOrders();
    this.getCartItems();
    this.getDeliveryMethods();
    this.connectCartToOrder();
    setTimeout(() => {
      this.savePaymentMethod();
      this.saveShippingMethod();
    }, 1000);
  }

  setShippingCost(cost) {
    this.setState({ shippingCost: cost });
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
    localStorage.removeItem("cart");
    localStorage.removeItem("shippingMethod");
    localStorage.removeItem("paymentMethod");
    localStorage.removeItem("shippingAdress");
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
    localStorage.setItem("shippingMethod", JSON.stringify(orderData));
    this.saveShippingMethod();
  }
  addPaymentMethodToOrder(orderData) {
    localStorage.setItem("paymentMethod", JSON.stringify(orderData));
    this.savePaymentMethod();
  }

  saveShippingMethod() {
    const shippingMethod = JSON.parse(localStorage.getItem("shippingMethod"));
    this.setState({
      order: { ...this.state.order, shippingMethod: shippingMethod },
    });
  }

  savePaymentMethod() {
    const paymentMethod = JSON.parse(localStorage.getItem("paymentMethod"));
    this.setState({
      order: { ...this.state.order, paymentMethod: paymentMethod },
    });
  }

  connectAdressToOrder(adressId) {
    this.setState({
      order: { ...this.state.order, adress: adressId },
    });
  }

  async connectCartToOrder() {
    await this.getCartItems();
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

    this.setState({
      order: { ...this.state.order, totalPrice: this.cartTotalPrice() },
    });

    const customerId = JSON.parse(localStorage.getItem("customerId"));
    this.setState({
      order: {
        ...this.state.order,
        products: productList,
        customer: customerId,
      },
    });
  }

  async placeOrder() {
    try {
      const response = await fetch("http://localhost:5000/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.order),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        this.setState({
          orderPlaced: true,
          orderNumber: responseData.orderNumber,
        });
        this.getAllOrders();
      }
      if (response.status === 403) {
        this.setState({
          orderPlaced: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAllOrders() {
    try {
      const response = await fetch("http://localhost:5000/order", {
        credentials: "include",
      });
      const responseData = await response.json();

      if (response.status === 200) {
        this.setState({
          allOrders: responseData,
        });
      }
    } catch (error) {
      console.log(error);
    }
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
          connectAdressToOrder: this.connectAdressToOrder,
          placeOrder: this.placeOrder,
          setShippingCost: this.setShippingCost,
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export const OrderConsumer = OrderContext.Consumer;
