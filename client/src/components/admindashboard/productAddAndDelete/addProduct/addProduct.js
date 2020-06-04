import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./addProduct.css";


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

class AddProduct extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="add-product-container">
            <h2>Lägg till en ny produkt</h2>
            <div>
              <h4>Category</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Quantity</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Url</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Price</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Description</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Brand</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Designer</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Ref</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Dimensions</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <div>
              <h4>Date</h4>
              <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            margin="dense"
          />
          </div>
          <Button id="adminButton" size="small" variant="contained">
            Lägg till produkt
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProduct;
