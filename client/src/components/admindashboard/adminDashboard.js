import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./adminDashboard.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "./sidebar/sidebar";
import ProductStockBalance from "./productStockBalance/productStockBalance";
import ProductCategory from "./productCategory/productCategory";
import ProductAddAndDelete from "./productAddAndDelete/productAddAndDelete";
import OrderExport from "./orderExport/orderExport";
import AdminRequest from "./adminRequest/adminRequest";


class AdminDashboard extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Header />
                <Sidebar />
                <Router>
                <Switch>
                    <Route path="/productStockBalance" component={ProductStockBalance} />
                    <Route path="/productCategory" component={ProductCategory} />
                    <Route path="/productAddAndDelete" component={ProductAddAndDelete} />
                    <Route path="/orderExport" component={OrderExport} />
                    <Route path="/adminRequest" component={AdminRequest} />
                </Switch>
                </Router>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AdminDashboard;
