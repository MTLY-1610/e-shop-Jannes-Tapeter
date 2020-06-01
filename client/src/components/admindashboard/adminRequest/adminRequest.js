import React from "react";
import "./adminRequest.css" 

//En administratör behöver godkännas av en tidigare administratör innan man kan logga in fösta gången (VG)

class AdminRequest extends React.Component {
    render() {
      return (
        <div id="content-container">
            <h3>Här ska man kunna godkänna användare som har sänt in en förfrågan om att bli administratör</h3>
        </div>
      );
    }
}
  
export default AdminRequest;