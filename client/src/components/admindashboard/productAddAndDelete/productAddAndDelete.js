import React from "react";
import "./productAddAndDelete.css";
import { TextField, Button } from "@material-ui/core";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";

//Administratörer ska kunna lägga till och ta bort produkter (VG)
/* category: [String],
quantity: Number,
url: String,
price: Number,
description: String,
brand: String,
designer: String,
ref: String,
dimensions: String,
date: Number, */

class ProductAddAndDelete extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sidebar />
        <div id="content-container">
          <h3>Här ska man kunna lägga till och ta bort produkter</h3>
          <TextField
                size="small"
                id="outlined-basic"
                variant="outlined"
                margin="dense"
              />
              <Button
                        id="formularButton"
                        size="small"
                        variant="contained"
                      >
                        Lägg till produkt
                      </Button>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProductAddAndDelete;
