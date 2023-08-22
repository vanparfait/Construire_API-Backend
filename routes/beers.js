const express = require("express");
const { createBeer } = require("../controllers/beer");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createBeer);

module.exports = router;
