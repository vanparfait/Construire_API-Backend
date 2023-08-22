const express = require("express");
const { signup, login } = require("../controllers/user");
const router = express.Router();

//const userCtrl = require("../controllers/user");

router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
