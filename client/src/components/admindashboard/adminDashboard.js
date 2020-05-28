import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./adminDashboard.css";

class AdminDashboard extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Header />
                <h2>Admin sida</h2>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AdminDashboard;
