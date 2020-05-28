import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class AdminDashboard extends React.Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AdminDashboard;
