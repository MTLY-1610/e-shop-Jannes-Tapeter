import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import Swish from "./swish.png";
import CreditCards from "./cc.png";
import DB from "./db.png";
import Klarna from "./klarna.png";
import Postnord from "./postnord.jpg";
import DHL from "./dhl.png";

class ShoppingCart extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          <h4>Din korg</h4>
          <div>
            <div>
              <p>IMG</p>
              <div>
                <p>Tapet titeln Hejsan</p>
                <p>250cm x 270cm</p>
                <span id="qty-span">QTY</span>
                <span id="qty-span">2</span>
              </div>
              <div>
                <p>X</p>
                <p>1609 kr</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h4>Leverans</h4>
            <div>
              <img src={Postnord} alt="swish"></img>
              <img src={DB} alt="swish"></img>
              <img src={DHL} alt="swish"></img>
            </div>
            <div>
              <RadioGroup>
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="1"
                />
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="2"
                />
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="3"
                />
              </RadioGroup>
            </div>
          </div>
          <div>
            <h4>Betalningsmetod</h4>
            <div>
              <img src={CreditCards} alt="swish"></img>
              <img src={Swish} alt="swish"></img>
              <img src={Klarna} alt="swish"></img>
            </div>
            <div>
              <RadioGroup>
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="1"
                />
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="2"
                />
                <FormControlLabel
                  control={<Radio color="default" size="small" />}
                  value="3"
                />
              </RadioGroup>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ShoppingCart;
