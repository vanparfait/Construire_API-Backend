const express = require("express");

const app = express();
const connectDB = require("./config/db");
//: Importation du routeur Beer
const beerRoutes = require("./routes/beers");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/beers", beerRoutes);

const User = require("./models/User");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//: Importation du routeur User
const userRoutes = require("./routes/user");

app.use("/api/auth", userRoutes);

module.exports = app;
