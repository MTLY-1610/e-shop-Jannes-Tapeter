import React from "react";
import "./productpage.css"
import Link from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import sample from "./sample-product.png";
import logo from "./brand-sample.png";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




class ProductPage extends React.Component {
  serverUrl = "http://localhost:5000/";
  

  

  render() {
    return (
      <React.Fragment> 
      <Header />
      <div id="pp-container">
          <div id="img-container">
            <img
                  className="sample"
                  src={sample}
                  alt="product"/>
            
          </div>
          <div id="desc-container">
            <div id="brand-row">
              <div id="brand-container">
                <img
                    className="logo"
                    src={logo}
                    alt="brand"
                  />
                </div>
            </div>
            <div id="descr-row">
              <div id="specs-col1">
                <div id="model">B. D. 7</div>
                <div id="ref">réf: 88666</div>
              </div>
              <div id="specs-col2">
                <div id="price"> 8000 kr</div>
              </div>
            </div>
            <div id="origin-row">
            <div id="origin-col1">
              <div id="dim">260 cm x 300cm</div>
              </div>
              <div id="origin-col2">
                <div id="designer"> Designer:</div>
                <div id="designer-name"> Bruno Defontaine</div>
              </div>
            </div>
            <div id="text-container">Labo Leonard,designers Nathalie Guillot and Bruno Defontaine volvo abba burzum saab kaleskaviar spendrups  volvo abba burzum saab kaleskaviar spendrups  volvo abba burzum saab kaleskaviar spendrups  volvo abba burzum saab kaleskaviar spendrups  </div>
            <div id="action-row">
              <div id="action-col1">
                <FormControl >
                  <Select
                    
                  >
                    <MenuItem value="quantity" disabled>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                  <FormHelperText>Quantity</FormHelperText>
                </FormControl>
              </div>
              <div id="action-col2">
                <Button variant="contained" size="small" color="#F5F5F5" >
                    add to cart
                </Button>
              </div>  
            </div>
          </div>
      </div>
     

      <Footer />
    </React.Fragment>
      );
  }
}

export default ProductPage;
