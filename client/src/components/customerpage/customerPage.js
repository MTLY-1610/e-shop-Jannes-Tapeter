import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./customerPage.css";
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { CustomerConsumer } from "../../context/customerContext";
import { Redirect } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class CustomerPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {expanded: false}
    }
    
    handleChange =  panel => (event, expanded) =>{
    if(expanded) {
        this.setState({expanded: panel})
    } else {
        this.setState({expanded: false})
    }}

    render() {
        
    return (
      <React.Fragment>
        <Header />
              <div className="customerPage-main">
              <h3>Min orderhistorik</h3>
            <div>

  <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>

   <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
    <Typography> Datum </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <div className="ExpansionPanelDetails-wrapper ">
    <Typography> Produkt: </Typography>
    <Typography> Status: </Typography>
    <Typography> Order-nr: </Typography>
    <Typography> Betalsätt: </Typography>
    <Typography> Fraktsätt: </Typography>
    <Typography> Leveransadress: </Typography>
    </div>
    </ExpansionPanelDetails>
  </ExpansionPanel>
</div> 
                </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CustomerPage;
