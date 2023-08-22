const express = require("express");

const app = express();
const connectDB = require("./config/db");

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

const User = require("./models/User");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//: Importation du routeur User et Beer
const userRoutes = require("./routes/user");
const beerRoutes = require("./routes/beers");

app.use("/api/auth", userRoutes);
app.use("/api/beers", beerRoutes);

module.exports = app;
