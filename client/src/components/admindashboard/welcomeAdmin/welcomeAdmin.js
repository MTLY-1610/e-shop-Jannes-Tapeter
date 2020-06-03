import React from "react";
import "./welcomeAdmin.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';

const WelcomeAdmin = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div style={{ width: '60%', border: '1px solid black' }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography variant="h3" component="h3" gutterBottom>
            Välkommen Admin!
          </Typography>
          <Typography component="div">
            <Box textAlign="center" m={1}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </Box>
          </Typography>
        </Box>
      </div>
      <Footer />
    </React.Fragment >
  );
};


export default WelcomeAdmin;
