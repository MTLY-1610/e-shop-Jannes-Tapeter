const express = require("express");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const app = express();

const customersRoute = require("./routes/customerRoute");
const productsRoute = require("./routes/productRoute");

//Cookie
app.use(
  cookieSession({
    secret: process.env.SECRET || "secretkey",
    maxAge: 1000 * 60 * 60,
    httpOnly: false,
  })
);

//CORS handling
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header({
    "Access-Control-Allow-Origin": req.headers.origin,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
  });
  next();
});

//Routes
app.use("/customer", customersRoute);
app.use("/product", productsRoute);

//Connecting to database
const options = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(
  "mongodb+srv://JanneKemi:12345@jannestapeter-8qfg8.mongodb.net/jannestapeter?retryWrites=true&w=majority",
  options,
  () => {
    console.log("Connected to database");
  }
);

app.listen(5000, () => console.log("Server is up and running om port 5000"));

module.exports = app;
