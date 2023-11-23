var express = require("express");
var router = express.Router();
const productController = require("../Controller/productController");

router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProduct/:id", productController.getProductById);
// getProductByCategorys
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct/:id", productController.deleteProduct);

module.exports = router;
