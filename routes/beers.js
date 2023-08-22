const express = require("express");
const { createBeer } = require("../controllers/beer");
const router = express.Router();

router.post("/", createBeer);

module.exports = router;
