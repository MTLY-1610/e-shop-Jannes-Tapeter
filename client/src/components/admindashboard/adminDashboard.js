import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./adminDashboard.css";

//Get all costumers
//*Get a list of all orders
//Register a new product
//*Edit a product -update quantity of product in stock
//Delete a product
//Add ShippingMethod

class AdminDashboard extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Header />
                <Sidebar />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AdminDashboard;

