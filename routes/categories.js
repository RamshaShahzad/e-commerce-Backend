var express = require("express");
var router = express.Router();
const categoriesController = require("../Controller/categoriesControoller");

router.get("/getAllCategories", categoriesController.getAllCategories);
router.post("/createCategories", categoriesController.createCategory);

module.exports = router;
