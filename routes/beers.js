const express = require("express");
const {
  createBeer,
  getAllBeers,
  getOneBeer,
  modifyBeer,
  deleteBeer,
} = require("../controllers/beer");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createBeer);
router.get("/", auth, getAllBeers);
router.get("/:id", auth, getOneBeer);
router.put("/:id", auth, modifyBeer);
router.delete("/:id", auth, deleteBeer);

module.exports = router;
