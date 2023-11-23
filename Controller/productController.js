const productsService = require("../Service/productsService");
const { models } = require("../models");
const productValidation = require("../Controller/productValidation");
const products = require("../models/schemas/productsSchema");
const ProductData = require("../productdata.json");

module.exports = {
  getAllProducts: async (req, res) => {
    const products = await productsService.getAllProducts();
    res.send(products);
  },
  getProductById: async (req, res) => {
    const productdetail = await productsService.getProductById(req.params.id);
    res.send(productdetail);
  },
  createProduct: async (req, res) => {
    const product = req.body;
    const newProduct = await productsService.createProduct(product);
    res.send(newProduct);
  },
  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const productDetails = req.body;
      const { error, value } = productValidation.updateProduct.validate(
        { ...productDetails, id: productId },
        { abortEarly: false }
      );

      if (error) {
        return res.status(400).send(error.details[0].message); // 400 Bad Request
      }

      const updatedProductData = await productsService.updateProduct({
        ...value,
        productId,
      });
      console.log(updatedProductData);
      if (updatedProductData) {
        return res.send(updatedProductData);
      } else {
        return res.status(404).send("Product not found"); // 404 Not Found
      }
    } catch (err) {
      return res.status(500).send(err.message); // 500 Internal Server Error
    }
  },
  deleteProduct: async (req, res) => {
    const productId = req.params.id;

    const deleteResult = await productsService.deleteProduct(productId);
    console.log(deleteResult);

    if (deleteResult) {
      console.log("Deleted");
      return res.send("Product Deleted Successfully");
    } else {
      return res.status(404).send("Product not found");
    }
  },
  bulkProductData: async (req, res) => {
    const Products = await products.bulkCreate(ProductData);
    res.status(201).json({
      success: true,
      Products,
    });
  },
};
