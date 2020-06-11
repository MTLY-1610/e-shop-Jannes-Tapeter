import React from "react";
import "./welcomeAdmin.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { flexbox } from "@material-ui/system";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import PlusOneIcon from "@material-ui/icons/PlusOne";

const WelcomeAdmin = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="a-content-container">
        <Sidebar />
        <div className="a-child-content-container">
          <h3>Välkommen Admin!</h3>
          <p id="a-welcome-text">
            Du som inloggad administratör har speciella rättigheter som en
            vanlig användare inte har. Du kan se i menyn till vänster vad du har
            möjlighet att göra.
          </p>
          <List className="a-list-welcome">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SendIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Du kan markera en order som skickad" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PlusOneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Ändra lagersaldot på en produkt" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MoveToInboxIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Flytta eller lägga till en produkt i en specifik kategori" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ShoppingCartIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Lägga till en produkt i shoppen eller ta bort en produkt" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonAddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Acceptera användare som ansöker om att bli administratörer" />
            </ListItem>
          </List>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WelcomeAdmin;
