import React, { Children } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import RegisterLogin from "./components/registerlogin/registerLogin";
import RegularProducts from "./components/allproducts/allProducts";
import ShoppingCart from "./components/shoppingcart/shoppingCart";
import WelcomeAdmin from "./components/adminDashboard/welcomeAdmin/welcomeAdmin";
import ProductStockBalance from "./components/adminDashboard/productStockBalance/productStockBalance";
import ProductCategory from "./components/adminDashboard/productCategory/productCategory";
import ProductAddAndDelete from "./components/adminDashboard/productAddAndDelete/productAddAndDelete";
import OrderExport from "./components/adminDashboard/orderExport/orderExport";
import AdminRequest from "./components/adminDashboard/adminRequest/adminRequest";
import Test from "./components/test";
import PaymentInfo from "./components/paymentinfo/paymentInfo";
import CustomerProvider from "../src/context/customerContext";
import ProductProvider from "../src/context/productContext";
// import ChildrenProducts from "./components/productpage/regularProducts";

function App() {
  return (
    <CustomerProvider>
      <ProductProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component={RegisterLogin} />
            <Route path="/products" component={RegularProducts} />
            <Route path="/payment" component={PaymentInfo} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/admin/welcome" component={WelcomeAdmin} />
            <Route
              path="/admin/productStockbalance"
              component={ProductStockBalance}
            />
            <Route path="/admin/productCategory" component={ProductCategory} />
            <Route path="/admin/productEdit" component={ProductAddAndDelete} />
            <Route path="/admin/orderExport" component={OrderExport} />
            <Route exact path="admin/adminRequest" component={AdminRequest} />
            <Route path="/test" component={Test} />
            {/* <Route path="/forchildren" component={ChildrenProducts} /> */}
          </Switch>
        </Router>
      </ProductProvider>
    </CustomerProvider>
  );
}

export default App;
