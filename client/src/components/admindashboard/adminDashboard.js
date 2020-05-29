import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "./sidebar/sidebar"
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

/* 
<h2>Admin sida</h2>
<div>
    <div>
        <h2>Handle Users</h2>
        <p>Accept as admin user</p>
        <p>Denie admin access</p>              
    </div>
    <div>
        <h2>Handle Product quantity</h2>
        <p>update qunatity</p>
        <p>Delete product</p>
        <p>Add product</p>
        <p>Change category for product</p>
    </div>
    <div>
        <h2>All orders</h2>
        <p>mark order as sent</p>
        <p>All orders that have been made</p>
    </div>
</div> */
