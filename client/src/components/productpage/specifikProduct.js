import React from "react";
import "./productpage.css";
import Link from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import sample from "./sample-product.png";
import logo from "./brand-sample.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { OrderConsumer } from "../../context/orderContext";

class SpecifikProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: 1,
    };
  }

  componentDidMount() {
    this.getSpecificProduct();
  }

  async getSpecificProduct() {
    try {
      const response = await fetch(
        `http://localhost:5000/product/${this.props.productId}`
      );
      if (response.status === 200) {
        const responseData = await response.json();
        this.setState({
          product: responseData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  serverUrl = "http://localhost:5000/";

  render() {
    return (
      <React.Fragment>
        <div id="pp-container">
          <div id="img-container">
            <img
              className="sample"
              src={`${this.serverUrl}${this.state.product.url}`}
              alt="product"
            />
          </div>
          <div id="desc-container">
            <div id="brand-row">
              <div id="brand-container">
                <img className="logo" src={logo} alt="brand" />
              </div>
            </div>
            <div id="descr-row">
              <div id="specs-col1">
                <div id="model">{this.state.product.brand}</div>
                <div id="ref">{`ref:${this.state.product.ref}`}</div>
              </div>
              <div id="specs-col2">
                <div id="price">{`${this.state.product.price}kr`}</div>
              </div>
            </div>
            <div id="origin-row">
              <div id="origin-col1">
                <div id="dim">{this.state.product.dimensions}</div>
              </div>
              <div id="origin-col2">
                <div id="designer"> Designer:</div>
                <div id="designer-name"> {this.state.product.designer}</div>
              </div>
            </div>
            <div id="text-container">{this.state.product.description}</div>
            <div id="action-row">
              <div id="action-col1">
                <FormControl>
                  <Input
                    type="number"
                    value={this.state.quantity}
                    onChange={(event) =>
                      this.setState({ quantity: event.target.value })
                    }
                  />
                  <FormHelperText>Quantity</FormHelperText>
                </FormControl>
              </div>
              <div id="action-col2">
                <OrderConsumer>
                  {(order) => (
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      onClick={() =>
                        order.addToCart({
                          product: this.state.product,
                          quantity: parseInt(this.state.quantity),
                        })
                      }
                    >
                      add to cart
                    </Button>
                  )}
                </OrderConsumer>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SpecifikProduct;
