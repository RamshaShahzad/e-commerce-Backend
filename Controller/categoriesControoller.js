const categoriesService = require("../Service/categoriesService");
const { models } = require("../models");

module.exports = {
  getAllCategories: async (req, res) => {
    const category = await categoriesService.getAllCategories();
    res.send(category);
  },
  createCategory: async (req, res) => {
    const category = req.body;
    const categoryData = await categoriesService.createCategory(category);
    res.send(categoryData);
  },
};
