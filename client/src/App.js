import React, { Children } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import RegisterLogin from "./components/registerlogin/registerLogin";
import Mönster from "./components/mönster/mönster";
import Foto from "./components/foto/foto";
import Barnrum from "./components/barnrum/barnrum";
import ProductPage from "./components/productpage/productpage";
import ConfirmOrder from "./components/confirmOrder/confirmOrder";
import ShoppingCart from "./components/shoppingcart/shoppingCart";
import Test from "./components/test";

import PaymentInfo from "./components/paymentinfo/paymentInfo";
import CustomerProvider from "../src/context/customerContext";
import OrderProvider from "../src/context/orderContext";
import ProductProvider from "../src/context/productContext";
import AdminRequest from "./components/admindashboard/adminRequest/adminRequest";
import OrderExport from "./components/admindashboard/orderExport/orderExport";
import ProductAddAndDelete from "./components/admindashboard/productAddAndDelete/productAddAndDelete";
import ProductCategory from "./components/admindashboard/productCategory/productCategory";
import ProductStockBalance from "./components/admindashboard/productStockBalance/productStockBalance";
import WelcomeAdmin from "./components/admindashboard/welcomeAdmin/welcomeAdmin";
import CustomerPage from "./components/customerpage/customerPage"

// import ChildrenProducts from "./components/productpage/regularProducts";
// import AdminRequest from './components/admindashboard/adminRequest/adminRequest'
// import OrderExport from './components/admindashboard/orderExport/orderExport'
// import ProductAddAndDelete from './components/admindashboard/productAddAndDelete/productAddAndDelete'
// import ProductCategory from './components/admindashboard/productCategory/productCategory'
// import ProductStockBalance from './components/admindashboard/productStockBalance/productStockBalance'
// import WelcomeAdmin from './components/admindashboard/welcomeAdmin/welcomeAdmin'

function App() {
  return (
    <OrderProvider>
      <CustomerProvider>
        <ProductProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/register" component={RegisterLogin} />
              <Route path="/myaccount" component={CustomerPage} />

              <Route path="/mönster" component={Mönster} />
              <Route path="/foto" component={Foto} />
              <Route path="/barnrum" component={Barnrum} />

              <Route path="/ref" component={ProductPage} />
              <Route path="/payment" component={PaymentInfo} />
              <Route path="/cart" component={ShoppingCart} />
              <Route path="/confirmOrder" component={ConfirmOrder} />
              <Route path="/admin/welcome" component={WelcomeAdmin} />
              <Route
                path="/admin/productStockbalance"
                component={ProductStockBalance}
              />
              <Route
                path="/admin/productCategory"
                component={ProductCategory}
              />
              <Route
                path="/admin/productEdit"
                component={ProductAddAndDelete}
              />
              <Route path="/admin/orderExport" component={OrderExport} />
              <Route path="/admin/adminRequest" component={AdminRequest} />
              <Route path="/test" component={Test} />
              <Route path="/:ref" component={ProductPage} />

              {/* <Route path="/forchildren"  component={ChildrenProducts} /> */}
            </Switch>
          </Router>
        </ProductProvider>
      </CustomerProvider>
    </OrderProvider>
  );
}

export default App;
