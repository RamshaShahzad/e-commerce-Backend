var express = require("express");
var router = express.Router();
const cartsController = require("../Controller/cartsController");

router.get("/getCart", cartsController.getCart);
router.post("/add/:id", cartsController.createCartById);
router.delete("/delete/:id", cartsController.deleteCart);

module.exports = router;
